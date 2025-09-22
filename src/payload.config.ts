// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import {
	FixedToolbarFeature,
	lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer"
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import nodemailer from 'nodemailer'

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { ServiceArea } from "./collections/ServiceAreas";
import { Blogs } from "./collections/Blogs";
import { Gallery } from "./collections/Gallery";
import { Referrals } from "./collections/Referrals";
import { MailingList } from "./collections/MailingList";
import { migrations } from "./migrations"

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		avatar: "gravatar",
		importMap: {
			baseDir: path.resolve(dirname),
		},

	},
	collections: [Users, Media, ServiceArea, Blogs, Gallery, Referrals, MailingList],
	editor: lexicalEditor({
		features: ({ defaultFeatures }) => [
			...defaultFeatures,
			FixedToolbarFeature(),
		],
	}),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI || "",
			connectionTimeoutMillis: 60_000, // TODO: Remove this in prod
			idleTimeoutMillis: 10 // TODO: Remove this in prod
		},
		prodMigrations: migrations,
	}),
	email: nodemailerAdapter({
		defaultFromAddress: process.env.SMTP_USER ?? 'g1sackie@icloud.com',
		defaultFromName: "Website: Premium Moving Services",
		transport: nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: 587,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS
			}
		})
	}),
	sharp,
	plugins: [
		payloadCloudPlugin(),
		// storage-adapter-placeholder
		vercelBlobStorage({
			enabled: true,
			collections: { media: true },
			token: process.env.BLOB_READ_WRITE_TOKEN || "",
		}),
	],
});
