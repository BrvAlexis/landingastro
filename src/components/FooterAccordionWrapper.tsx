import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FooterAccordionWrapper() {
  return (
    <div className="w-full space-y-4">
      <Accordion type="multiple" className="w-full">
        {/* Le Cabinet */}
        <AccordionItem value="cabinet-info" className="border-platinum-300">
          <AccordionTrigger className="text-lg font-semibold text-jet-500 py-3 px-2 text-left">
            <span className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-caribbean-500 rounded-full mr-2"></span>
              Le Cabinet
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ul className="space-y-2 text-jet-400">
              <li className="text-sm">SCP Crouzatier / Pobéda-Thomas</li>
              <li className="text-sm">Cabinet d'avocats</li>
              <li className="text-sm">Structure de proximité</li>
              <li className="text-sm">Relation directe avec ses clients</li>
              <li className="text-sm">
                Clientèle variée: entreprises, particuliers, associations
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Domaines d'expertise */}
        <AccordionItem
          value="expertise-domaines"
          className="border-platinum-300"
        >
          <AccordionTrigger className="text-lg font-semibold text-jet-500 py-3 px-2 text-left">
            <span className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-caribbean-500 rounded-full mr-2"></span>
              Domaines d'expertise
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ul className="space-y-2">
              <li>
                <a
                  href="#expertise"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Droit fiscal
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Droit des affaires
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Droit social
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Droit de la famille
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Propriété Intellectuelle
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Contentieux Divers
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Rédactions d'Actes
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Droit Immobilier
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Droit des Contrats
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Nos Avocats */}
        <AccordionItem value="avocats" className="border-platinum-300">
          <AccordionTrigger className="text-lg font-semibold text-jet-500 py-3 px-2 text-left">
            <span className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-caribbean-500 rounded-full mr-2"></span>
              Nos Avocats
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ul className="space-y-2 text-jet-400">
              <li>
                <a
                  href="#equipe"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Me Yves Crouzatier
                </a>
              </li>
              <li className="text-sm pl-5">Spécialiste en droit fiscal</li>
              <li className="mt-1">
                <a
                  href="#equipe"
                  className="hover:text-caribbean-500 transition-colors text-sm flex items-center"
                >
                  <span className="text-caribbean-500 mr-1 flex-shrink-0">
                    ›
                  </span>{" "}
                  Me Florence Pobéda-Thomas
                </a>
              </li>
              <li className="text-sm pl-5">
                Spécialiste en droit de la famille et droit du travail
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Contact */}
        <AccordionItem value="contact" className="border-platinum-300">
          <AccordionTrigger className="text-lg font-semibold text-jet-500 py-3 px-2 text-left">
            <span className="flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-caribbean-500 rounded-full mr-2"></span>
              Contact
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ul className="space-y-3 text-jet-400">
              <li className="text-sm flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-caribbean-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span className="break-words">
                  151 Route de Toulouse
                  <br />
                  31270 Cugnaux
                </span>
              </li>
              <li className="text-sm flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-caribbean-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a
                  href="tel:0562872555"
                  className="transition-colors duration-200 hover:text-caribbean-500 break-words"
                >
                  05 62 87 25 55
                </a>
              </li>
              <li className="text-sm flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-caribbean-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:sep@avocats-diane.fr"
                  className="transition-colors duration-200 hover:text-caribbean-500 break-all"
                >
                  sep@avocats-diane.fr
                </a>
              </li>
              <li className="text-sm flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-caribbean-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>
                  Du Lundi au Vendredi
                  <br />
                  8h00 - 18h00
                </span>
              </li>
            </ul>
            {/* Réseaux sociaux */}
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-caribbean-500 hover:text-caribbean-500/80 transition-colors duration-200"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-caribbean-500 hover:text-caribbean-500/80 transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
