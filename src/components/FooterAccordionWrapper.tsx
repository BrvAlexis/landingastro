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
        {/* Informations légales */}
        <AccordionItem value="legal-info" className="border-gray-800">
          <AccordionTrigger className="text-lg font-semibold text-white py-3 px-2">
            <span className="whitespace-nowrap">Informations Légales</span>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ul className="space-y-2">
              <li className="text-sm">Cabinet Fiscal Expert SARL</li>
              <li className="text-sm">SIREN : 123 456 789</li>
              <li className="text-sm">RCS Paris B 123 456 789</li>
              <li className="text-sm">Capital social : 50 000€</li>
              <li className="text-sm">N° TVA : FR 12 345 678 901</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Mentions légales */}
        <AccordionItem value="legal-mentions" className="border-gray-800">
          <AccordionTrigger className="text-lg font-semibold text-white py-3 px-2">
            <span className="whitespace-nowrap">Mentions Légales</span>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ul className="space-y-2">
              <li>
                <a
                  href="/mentions-legales"
                  className="hover:text-white transition-colors text-sm flex items-center"
                >
                  <span className="text-indigo-400 mr-1 flex-shrink-0">›</span>
                  <span className="break-words">Mentions légales</span>
                </a>
              </li>
              <li>
                <a
                  href="/cgv"
                  className="hover:text-white transition-colors text-sm flex items-center"
                >
                  <span className="text-indigo-400 mr-1 flex-shrink-0">›</span>
                  <span className="break-words">CGV</span>
                </a>
              </li>
              <li>
                <a
                  href="/politique-confidentialite"
                  className="hover:text-white transition-colors text-sm flex items-center"
                >
                  <span className="text-indigo-400 mr-1 flex-shrink-0">›</span>
                  <span className="break-words">
                    Politique de confidentialité
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="hover:text-white transition-colors text-sm flex items-center"
                >
                  <span className="text-indigo-400 mr-1 flex-shrink-0">›</span>
                  <span className="break-words">Gestion des cookies</span>
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Réglementations */}
        <AccordionItem value="regulations" className="border-gray-800">
          <AccordionTrigger className="text-lg font-semibold text-white py-3 px-2">
            <span className="whitespace-nowrap">Réglementations</span>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ul className="space-y-2">
              <li className="text-sm">
                Membre de l'Ordre des Experts-Comptables
              </li>
              <li className="text-sm break-words">
                Inscrit au Tableau de l'Ordre de la région Paris Île-de-France
              </li>
              <li className="text-sm">
                Assurance RCP : AXA France n°123456789
              </li>
              <li className="text-sm">Agrément AMF n°GP123456</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Contact */}
        <AccordionItem value="contact" className="border-gray-800">
          <AccordionTrigger className="text-lg font-semibold text-white py-3 px-2">
            <span className="whitespace-nowrap">Contact</span>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <ul className="space-y-2">
              <li className="text-sm flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-indigo-400 mr-2 mt-0.5 flex-shrink-0"
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
                  123 Avenue des Experts
                  <br />
                  75008 Paris
                </span>
              </li>
              <li className="text-sm flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-indigo-400 mr-2 mt-0.5 flex-shrink-0"
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
                  href="tel:+33123456789"
                  className="transition-colors duration-200 hover:text-white break-words"
                >
                  +33 (0)1 23 45 67 89
                </a>
              </li>
              <li className="text-sm flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-indigo-400 mr-2 mt-0.5 flex-shrink-0"
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
                  href="mailto:contact@cabinet-fiscal.fr"
                  className="transition-colors duration-200 hover:text-white break-all"
                >
                  contact@cabinet-fiscal.fr
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
