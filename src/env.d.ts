/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_SITE_URL: string;
    readonly PUBLIC_SITE_TITLE: string;
    readonly PUBLIC_SITE_DESCRIPTION: string;
    readonly PUBLIC_CONTACT_EMAIL: string;
    readonly PUBLIC_CONTACT_PHONE: string;
    readonly PUBLIC_CONTACT_ADDRESS: string;
    readonly PUBLIC_GA_ID: string;
    readonly API_SECRET_KEY: string;
    readonly DATABASE_URL: string;
    readonly PUBLIC_SENTRY_DSN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
} 