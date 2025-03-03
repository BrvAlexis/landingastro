// Variables publiques (client)
export {
    PUBLIC_SITE_URL,
    PUBLIC_SITE_TITLE,
    PUBLIC_SITE_DESCRIPTION,
    PUBLIC_CONTACT_EMAIL,
    PUBLIC_CONTACT_PHONE,
    PUBLIC_CONTACT_ADDRESS,
    PUBLIC_GA_ID,
    PUBLIC_SENTRY_DSN
} from 'astro:env/client';

// Variables serveur (secrètes)
export {
    API_SECRET_KEY,
    DATABASE_URL,
    getSecret
} from 'astro:env/server'; 