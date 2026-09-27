/**
 * Applies the service_pricing schema and seeds the published starting rates.
 *
 * `pnpm payload migrate` cannot run in this environment (getPayload never
 * settles under the `payload run`/CLI bootstrap), so this applies the exact DDL
 * from src/migrations/20260927_160821_add_service_pricing.ts and records the
 * migration in payload_migrations so deploys do not attempt to re-apply it.
 *
 * Idempotent: safe to run more than once. Pass --seed-only to skip the DDL.
 */
const { Client } = require("../node_modules/.pnpm/pg@8.20.0/node_modules/pg");
const { readFileSync } = require("node:fs");
const path = require("node:path");

const MIGRATION_NAME = "20260927_160821_add_service_pricing";

const loadEnv = () => {
	const file = path.join(__dirname, "..", ".env.local");
	return Object.fromEntries(
		readFileSync(file, "utf8")
			.split("\n")
			.filter((l) => l.includes("="))
			.map((l) => {
				const i = l.indexOf("=");
				return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
			}),
	);
};

const SERVICE_SLUGS = [
	"residential-moving",
	"local-moving",
	"local-moving/apartment-movers",
	"local-moving/condo-movers",
	"local-moving/hoa-movers",
	"local-moving/household",
	"local-moving/pack-and-unpack",
	"local-moving/residential-movers",
	"commercial-moving",
	"commercial-moving/corporate-relocation",
	"commercial-moving/office-movers",
	"commercial-moving/retail-relocation",
	"commercial-moving/small-business-movers",
	"commercial-moving/warehouse-industrial",
	"corporate-moving",
	"long-distance-moving",
	"long-distance-moving/employee-relocation",
	"long-distance-moving/interstate-moving-specialists",
	"long-distance-moving/long-distance-commercial",
	"long-distance-moving/long-distance-residential",
	"specialty-moving",
	"specialty-moving/antique-furniture",
	"specialty-moving/furniture-moving",
	"specialty-moving/gun-and-safe-moving",
	"specialty-moving/labor-only",
	"specialty-moving/load-and-unloading",
	"specialty-moving/senior-relocation",
	"international-moving",
	"junk-removal",
	"logistics-services",
	"packing-supplies",
	"piano-moving",
	"storage-services",
];

const ROWS = [
	{
		category: "residential",
		service: "local-moving/residential-movers",
		label: "Studio or 1-Bedroom Apartment",
		minPrice: 400,
		maxPrice: 800,
		sortOrder: 1,
		includes: ["2 movers", "2-3 hours", "Stairs billed separately"],
	},
	{
		category: "residential",
		service: "local-moving/residential-movers",
		label: "2-3 Bedroom Apartment",
		minPrice: 800,
		maxPrice: 1800,
		sortOrder: 2,
		includes: ["2-3 movers", "3-4 hours", "Packing available"],
	},
	{
		category: "residential",
		service: "local-moving/residential-movers",
		label: "4+ Bedrooms",
		minPrice: 2000,
		maxPrice: null,
		sortOrder: 3,
		includes: ["Full crew", "Over 2,000 sq ft", "Custom crating available"],
	},
	{
		category: "residential",
		service: "long-distance-moving/interstate-moving-specialists",
		label: "Interstate Move",
		minPrice: 3000,
		maxPrice: 9000,
		sortOrder: 4,
		includes: ["Licensed and insured", "Inventory tracking"],
	},
	{
		category: "commercial",
		service: "commercial-moving/office-movers",
		label: "Independent Office",
		minPrice: 2000,
		maxPrice: 10000,
		sortOrder: 1,
		includes: ["After-hours crews", "Dock scheduling"],
	},
	{
		category: "commercial",
		service: "commercial-moving/office-movers",
		label: "Mid-Size Office",
		minPrice: 10000,
		maxPrice: 50000,
		sortOrder: 2,
		includes: [
			"Department-by-department moves",
			"Furniture inventory",
		],
	},
	{
		category: "specialty",
		service: "piano-moving",
		label: "Piano Moving",
		minPrice: 350,
		maxPrice: 900,
		unit: "per-item",
		sortOrder: 1,
		includes: ["Climate-controlled transport"],
	},
	{
		category: "specialty",
		service: "specialty-moving/gun-and-safe-moving",
		label: "Gun & Safe",
		minPrice: 250,
		maxPrice: 800,
		unit: "per-item",
		sortOrder: 2,
		includes: ["Bolted to the truck"],
	},
	{
		category: "specialty",
		service: "specialty-moving/antique-furniture",
		label: "Antique & Fragile",
		minPrice: null,
		unit: "per-item",
		sortOrder: 3,
		includes: ["White-glove handling"],
	},
	{
		category: "specialty",
		service: "storage-services",
		label: "Storage",
		minPrice: 150,
		maxPrice: null,
		unit: "per-month",
		sortOrder: 4,
		includes: ["Secure storage", "Short and long term"],
	},
];

const DDL = `
CREATE TYPE "public"."enum_service_pricing_category" AS ENUM('residential', 'commercial', 'specialty');
CREATE TYPE "public"."enum_service_pricing_service" AS ENUM(${SERVICE_SLUGS.map((s) => `'${s}'`).join(", ")});
CREATE TYPE "public"."enum_service_pricing_unit" AS ENUM('per-move', 'per-hour', 'per-month', 'per-item', 'per-pound');

CREATE TABLE "service_pricing" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"category" "enum_service_pricing_category" DEFAULT 'residential' NOT NULL,
	"service" "enum_service_pricing_service" DEFAULT 'local-moving/residential-movers' NOT NULL,
	"destination_id" integer NOT NULL,
	"label" varchar NOT NULL,
	"min_price" numeric DEFAULT 800 NOT NULL,
	"max_price" numeric DEFAULT 1800,
	"unit" "enum_service_pricing_unit" DEFAULT 'per-move' NOT NULL,
	"sort_order" numeric DEFAULT 0,
	"active" boolean DEFAULT true,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE "service_pricing_includes" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"text" varchar
);

ALTER TABLE "service_pricing_includes" ADD CONSTRAINT "service_pricing_includes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_pricing"("id") ON DELETE cascade ON UPDATE no action;
ALTER TABLE "service_pricing" ADD CONSTRAINT "service_pricing_destination_id_service_areas_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."service_areas"("id") ON DELETE set null ON UPDATE no action;

CREATE INDEX "service_pricing_service_idx" ON "service_pricing" USING btree ("service");
CREATE INDEX "service_pricing_destination_idx" ON "service_pricing" USING btree ("destination_id");
CREATE INDEX "service_pricing_updated_at_idx" ON "service_pricing" USING btree ("updated_at");
CREATE INDEX "service_pricing_created_at_idx" ON "service_pricing" USING btree ("created_at");
CREATE INDEX "service_pricing_includes_order_idx" ON "service_pricing_includes" USING btree ("_order");
CREATE INDEX "service_pricing_includes_parent_id_idx" ON "service_pricing_includes" USING btree ("_parent_id");

ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "service_pricing_id" integer;
ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_service_pricing_fk" FOREIGN KEY ("service_pricing_id") REFERENCES "public"."service_pricing"("id") ON DELETE cascade ON UPDATE no action;
CREATE INDEX "payload_locked_documents_rels_service_pricing_id_idx" ON "payload_locked_documents_rels" USING btree ("service_pricing_id");
`;

const main = async () => {
	const seedOnly = process.argv.includes("--seed-only");
	const client = new Client({ connectionString: loadEnv().DATABASE_URI });
	await client.connect();

	if (!seedOnly) {
		const exists = await client.query(
			"select to_regclass('public.service_pricing') as t",
		);
		if (exists.rows[0].t) {
			console.log("DDL skipped: service_pricing already exists");
		} else {
			await client.query("BEGIN");
			try {
				await client.query(DDL);
				await client.query(
					"insert into payload_migrations (name, batch, updated_at, created_at) values ($1, (select coalesce(max(batch),0) + 1 from payload_migrations), now(), now())",
					[MIGRATION_NAME],
				);
				await client.query("COMMIT");
				console.log("DDL applied and migration recorded");
			} catch (e) {
				await client.query("ROLLBACK");
				throw e;
			}
		}
	}

	const areas = await client.query(
		"select id, title from service_areas order by title",
	);

	const priced = ROWS.filter(
		(row) => row.minPrice !== null && row.minPrice !== undefined,
	);
	const unpriced = ROWS.filter(
		(row) => row.minPrice === null || row.minPrice === undefined,
	).map((row) => row.label);

	const existing = await client.query(
		"select title, destination_id from service_pricing",
	);
	const seen = new Set(existing.rows.map((r) => `${r.title}::${r.destination_id}`));

	const pending = [];
	for (const area of areas.rows) {
		const city = area.title.trim();
		for (const row of priced) {
			const title = `${row.label} - ${city}`;
			const key = `${title}::${area.id}`;
			if (seen.has(key)) continue;
			seen.add(key);
			pending.push({ ...row, title, areaId: area.id });
		}
	}

	// Bulk insert in chunks to keep the round-trip count sane against a
	// remote Postgres, then bulk insert the nested "includes" rows.
	const CHUNK = 150;
	let inserted = 0;
	for (let i = 0; i < pending.length; i += CHUNK) {
		const chunk = pending.slice(i, i + CHUNK);
		const cols = 10;
		const tuples = chunk
			.map(
				(_, n) =>
					`(${Array.from({ length: cols }, (_, c) => `$${n * cols + c + 1}`).join(",")})`,
			)
			.join(",");
		const values = chunk.flatMap((r) => [
			r.title,
			r.category,
			r.service,
			r.areaId,
			r.label,
			r.minPrice,
			r.maxPrice ?? null,
			r.unit ?? "per-move",
			r.sortOrder,
			true,
		]);
		const res = await client.query(
			`insert into service_pricing
				(title, category, service, destination_id, label, min_price, max_price, unit, sort_order, active)
			 values ${tuples} returning id, label, destination_id`,
			values,
		);
		inserted += res.rowCount;

		const areaTitleById = new Map(areas.rows.map((a) => [a.id, a.title.trim()]));
		const includeRows = [];
		for (const created of res.rows) {
			const match = chunk.find(
				(r) => r.label === created.label && r.areaId === created.destination_id,
			);
			if (!match?.includes?.length) continue;
			match.includes.forEach((text, order) => {
				includeRows.push([order, created.id, `${created.id}-${order}`, text]);
			});
		}
		for (let j = 0; j < includeRows.length; j += CHUNK * 4) {
			const ic = includeRows.slice(j, j + CHUNK * 4);
			const it = ic
				.map(
					(_, n) =>
						`($${n * 4 + 1},$${n * 4 + 2},$${n * 4 + 3},$${n * 4 + 4})`,
				)
				.join(",");
			await client.query(
				`insert into service_pricing_includes (_order, _parent_id, id, text) values ${it}`,
				ic.flat(),
			);
		}
		void areaTitleById;
	}

	const total = await client.query("select count(*)::int as n from service_pricing");
	console.log(
		`SEED areas=${areas.rowCount} inserted=${inserted} alreadyPresent=${existing.rowCount} total=${total.rows[0].n}`,
	);
	if (unpriced.length) {
		console.log(`UNPRICED (not seeded, add in admin): ${unpriced.join(", ")}`);
	}
	await client.end();
};

main().catch((e) => {
	console.log("ERROR=" + e.message);
	process.exit(1);
});
