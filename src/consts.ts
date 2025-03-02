// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Cabinet d'avocats à Cugnaux | Conseil juridique & Défense";
export const SITE_DESCRIPTION = "Cabinet d'avocats à Cugnaux spécialisé en droit de la famille, droit pénal et droit des affaires. Consultation, conseil juridique et représentation devant les tribunaux.";

// Mots-clés SEO pour améliorer le référencement
export const SEO_KEYWORDS = [
    "avocat Cugnaux",
    "cabinet juridique Toulouse",
    "conseil juridique Cugnaux",
    "avocat droit de la famille",
    "avocat droit pénal",
    "avocat droit des affaires",
    "consultation juridique Cugnaux"
];

// Informations de contact pour le SEO local
export const CONTACT_INFO = {
    adresse: "123 Avenue de Toulouse, 31270 Cugnaux",
    telephone: "05.XX.XX.XX.XX",
    email: "contact@avocats-cugnaux.fr",
    horaires: "Lundi au Vendredi: 9h-18h"
};

// Données structurées pour le SEO (Schema.org)
export const SCHEMA_ORG = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Cabinet d'avocats Cugnaux",
    "description": SITE_DESCRIPTION,
    "url": "https://www.avocats-cugnaux.fr",
    "logo": "https://www.avocats-cugnaux.fr/logo.png",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Avenue de Toulouse",
        "addressLocality": "Cugnaux",
        "postalCode": "31270",
        "addressCountry": "FR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.536",
        "longitude": "1.348"
    },
    "telephone": "05XXXXXXXX",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
    "priceRange": "€€",
    "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "43.536",
            "longitude": "1.348"
        },
        "geoRadius": "30000"
    }
};

// Données des avocats pour les pages de profil et le SEO
export const AVOCATS = [
    {
        nom: "Maître Dupont",
        specialites: ["Droit de la famille", "Droit des successions"],
        description: "Spécialiste en droit de la famille avec plus de 15 ans d'expérience dans les divorces et successions.",
        photo: "/images/avocat-dupont.jpg",
        schema: {
            "@type": "Attorney",
            "name": "Maître Dupont",
            "jobTitle": "Avocat spécialiste en droit de la famille",
            "description": "Spécialiste en droit de la famille avec plus de 15 ans d'expérience",
            "image": "https://www.avocats-cugnaux.fr/images/avocat-dupont.jpg"
        }
    },
    {
        nom: "Maître Martin",
        specialites: ["Droit pénal", "Droit des affaires"],
        description: "Expert en droit pénal et droit des affaires, défendant aussi bien les particuliers que les entreprises.",
        photo: "/images/avocat-martin.jpg",
        schema: {
            "@type": "Attorney",
            "name": "Maître Martin",
            "jobTitle": "Avocat spécialiste en droit pénal et droit des affaires",
            "description": "Expert en droit pénal et droit des affaires",
            "image": "https://www.avocats-cugnaux.fr/images/avocat-martin.jpg"
        }
    }
];

// Configuration des réseaux sociaux pour le SEO et le partage
export const SOCIAL_MEDIA = {
    facebook: "https://www.facebook.com/avocatscugnaux",
    twitter: "https://twitter.com/avocatscugnaux",
    linkedin: "https://www.linkedin.com/company/cabinet-avocats-cugnaux",
    instagram: "https://www.instagram.com/avocatscugnaux"
};

// Configuration pour le sitemap.xml
export const SITEMAP_CONFIG = {
    baseUrl: "https://www.avocats-cugnaux.fr",
    pages: [
        { url: "/", changefreq: "monthly", priority: 1.0 },
        { url: "/services", changefreq: "monthly", priority: 0.8 },
        { url: "/expertise", changefreq: "monthly", priority: 0.8 },
        { url: "/equipe", changefreq: "monthly", priority: 0.7 },
        { url: "/contact", changefreq: "monthly", priority: 0.7 },
        { url: "/blog", changefreq: "weekly", priority: 0.6 }
    ]
};
