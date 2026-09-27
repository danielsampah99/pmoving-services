import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
	await db.execute(sql`
   CREATE TYPE "public"."enum_service_pricing_category" AS ENUM('residential', 'commercial', 'specialty');
  CREATE TYPE "public"."enum_service_pricing_service" AS ENUM('residential-moving', 'local-moving', 'local-moving/apartment-movers', 'local-moving/condo-movers', 'local-moving/hoa-movers', 'local-moving/household', 'local-moving/pack-and-unpack', 'local-moving/residential-movers', 'commercial-moving', 'commercial-moving/corporate-relocation', 'commercial-moving/office-movers', 'commercial-moving/retail-relocation', 'commercial-moving/small-business-movers', 'commercial-moving/warehouse-industrial', 'corporate-moving', 'long-distance-moving', 'long-distance-moving/employee-relocation', 'long-distance-moving/interstate-moving-specialists', 'long-distance-moving/long-distance-commercial', 'long-distance-moving/long-distance-residential', 'specialty-moving', 'specialty-moving/antique-furniture', 'specialty-moving/furniture-moving', 'specialty-moving/gun-and-safe-moving', 'specialty-moving/labor-only', 'specialty-moving/load-and-unloading', 'specialty-moving/senior-relocation', 'international-moving', 'junk-removal', 'logistics-services', 'packing-supplies', 'piano-moving', 'storage-services');
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
  CREATE INDEX "payload_locked_documents_rels_service_pricing_id_idx" ON "payload_locked_documents_rels" USING btree ("service_pricing_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
	await db.execute(sql`
   ALTER TABLE "service_pricing_includes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "service_pricing" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "service_pricing_includes" CASCADE;
  DROP TABLE "service_pricing" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_service_pricing_fk";
  DROP INDEX "payload_locked_documents_rels_service_pricing_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "service_pricing_id";
  DROP TYPE "public"."enum_service_pricing_category";
  DROP TYPE "public"."enum_service_pricing_service";
  DROP TYPE "public"."enum_service_pricing_unit";`)
}
