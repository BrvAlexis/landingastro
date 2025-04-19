import type { APIRoute } from "astro";
import { AVOCATS, CONTACT_INFO, SCHEMA_ORG } from "../consts";

export const GET: APIRoute = async () => {
    try {
        // Générer le contenu
        let llmsContent = '';

        // Ajouter les informations du cabinet d'avocats
        llmsContent += `# SCP Crouzatier Yves / Pobéda-Thomas Florence\n\n`;
        llmsContent += `Cabinet d'avocats à Cugnaux\n\n`;

        // Ajouter les informations de contact
        llmsContent += `## Coordonnées\n\n`;
        llmsContent += `Adresse: ${CONTACT_INFO.adresse}\n`;
        llmsContent += `Téléphone: ${CONTACT_INFO.telephone}\n`;
        llmsContent += `Email: ${CONTACT_INFO.email}\n`;
        llmsContent += `Horaires: ${CONTACT_INFO.horaires}\n\n`;

        // Ajouter les informations des avocats
        llmsContent += `## Nos Avocats\n\n`;
        for (const avocat of AVOCATS) {
            llmsContent += `### ${avocat.nom}\n\n`;
            llmsContent += `Spécialités: ${avocat.specialites.join(', ')}\n\n`;
            llmsContent += `${avocat.description}\n\n`;
        }

        // Ajouter des informations sur les domaines de droit
        llmsContent += `## Domaines d'expertise\n\n`;
        const domaines = [
            "Droit fiscal",
            "Droit des affaires",
            "Droit social",
            "Droit de la famille",
            "Propriété Intellectuelle",
            "Contentieux Divers",
            "Rédaction d'Actes",
            "Droit Immobilier",
            "Droit des Contrats"
        ];

        domaines.forEach(domaine => {
            llmsContent += `- ${domaine}\n`;
        });

        llmsContent += `\n\n## Présentation du Cabinet\n\n`;
        llmsContent += `La SCP Crouzatier / Pobéda-Thomas est un cabinet d'avocats de proximité situé à Cugnaux, offrant une relation directe avec ses clients. Le cabinet défend les intérêts d'une clientèle variée comprenant des entreprises, des particuliers et des associations.\n\n`;

        // Ajouter des informations géographiques
        llmsContent += `## Zone d'activité\n\n`;
        llmsContent += `Le cabinet intervient principalement dans la région de Toulouse et ses environs, notamment à Cugnaux (31270) et dans toute la Haute-Garonne (31).\n\n`;

        // Renvoyer la réponse en texte brut
        return new Response(llmsContent, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Cache-Control": "max-age=3600" // Mise en cache d'une heure
            },
        });
    } catch (error) {
        console.error('Erreur lors de la génération du fichier llms.txt:', error);
        return new Response('Erreur lors de la génération du fichier llms.txt', { status: 500 });
    }
}; 