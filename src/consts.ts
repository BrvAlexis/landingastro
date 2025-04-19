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
    adresse: "151 Route de Toulouse, 31270 Cugnaux",
    telephone: "05 62 87 25 55",
    email: "sep@avocats-diane.fr",
    horaires: "Lundi au Vendredi: 8h00-18h00"
};

// Données structurées pour le SEO (Schema.org)
export const SCHEMA_ORG = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "SCP Crouzatier Yves / Pobéda-Thomas Florence",
    "description": SITE_DESCRIPTION,
    "url": "https://www.avocats-diane.fr",
    "logo": "https://www.avocats-diane.fr/logo.png",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "151 Route de Toulouse",
        "addressLocality": "Cugnaux",
        "postalCode": "31270",
        "addressCountry": "FR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.5581832",
        "longitude": "1.3627580"
    },
    "telephone": "0562872555",
    "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
    "priceRange": "€€",
    "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "43.5581832",
            "longitude": "1.3627580"
        },
        "geoRadius": "30000"
    }
};

// Données des avocats pour les pages de profil et le SEO
export const AVOCATS = [
    {
        nom: "Maître Yves Crouzatier",
        specialites: ["Droit fiscal", "Droit des affaires", "Droit commercial", "Droit des sociétés"],
        description: "Spécialiste en droit fiscal, son approche est globale et tournée vers le monde de l'entreprise, de la création à la liquidation, incluant la rédaction d'actes et le contentieux commercial.",
        photo: "/yves&florence.webp",
        schema: {
            "@type": "Attorney",
            "name": "Maître Yves Crouzatier",
            "jobTitle": "Avocat spécialiste en droit fiscal",
            "description": "Spécialiste en droit fiscal avec une approche globale tournée vers le monde de l'entreprise",
            "image": "https://www.avocats-diane.fr/yves&florence.webp"
        }
    },
    {
        nom: "Maître Florence Pobéda-Thomas",
        specialites: ["Droit de la famille", "Droit du travail", "Droit commercial", "Droit des contrats"],
        description: "Forte de plus de 30 ans d'expérience et titulaire d'un DJCE, ses activités dominantes sont le droit du travail et le droit de la famille, assurant conseil, rédaction d'actes et défense en justice.",
        photo: "/yves&florence.webp",
        schema: {
            "@type": "Attorney",
            "name": "Maître Florence Pobéda-Thomas",
            "jobTitle": "Avocat spécialiste en droit de la famille et droit du travail",
            "description": "Spécialiste en droit de la famille et droit du travail avec plus de 30 ans d'expérience",
            "image": "https://www.avocats-diane.fr/yves&florence.webp"
        }
    }
];

// Configuration des réseaux sociaux pour le SEO et le partage
export const SOCIAL_MEDIA = {
    facebook: "https://www.facebook.com/SCP.Crouzatier.Pobeda",
    linkedin: "https://www.linkedin.com/company/scp-crouzatier-pobeda-thomas",
    twitter: "https://twitter.com/avocats_diane",
    instagram: "https://www.instagram.com/avocats_diane"
};

// Configuration pour le sitemap.xml
export const SITEMAP_CONFIG = {
    baseUrl: "https://www.avocats-diane.fr",
    pages: [
        { url: "/", changefreq: "monthly", priority: 1.0 },
        { url: "/services", changefreq: "monthly", priority: 0.8 },
        { url: "/expertise", changefreq: "monthly", priority: 0.8 },
        { url: "/equipe", changefreq: "monthly", priority: 0.7 },
        { url: "/contact", changefreq: "monthly", priority: 0.7 },
        { url: "/blog", changefreq: "weekly", priority: 0.6 }
    ]
};
