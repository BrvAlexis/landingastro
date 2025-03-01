import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FooterAccordionWrapper() {
  return (
    <Accordion type="multiple" className="w-full space-y-4 md:hidden">
      {/* Informations légales */}
      <AccordionItem value="legal-info">
        <AccordionTrigger className="text-lg font-semibold text-white">
          Informations Légales
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            <li>Cabinet Fiscal Expert SARL</li>
            <li>SIREN : 123 456 789</li>
            <li>RCS Paris B 123 456 789</li>
            <li>Capital social : 50 000€</li>
            <li>N° TVA : FR 12 345 678 901</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Mentions légales */}
      <AccordionItem value="legal-mentions">
        <AccordionTrigger className="text-lg font-semibold text-white">
          Mentions Légales
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            <li>
              <a
                href="/mentions-legales"
                className="hover:text-white transition-colors"
              >
                Mentions légales
              </a>
            </li>
            <li>
              <a href="/cgv" className="hover:text-white transition-colors">
                CGV
              </a>
            </li>
            <li>
              <a
                href="/politique-confidentialite"
                className="hover:text-white transition-colors"
              >
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:text-white transition-colors">
                Gestion des cookies
              </a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Réglementations */}
      <AccordionItem value="regulations">
        <AccordionTrigger className="text-lg font-semibold text-white">
          Réglementations
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            <li>Membre de l'Ordre des Experts-Comptables</li>
            <li>
              Inscrit au Tableau de l'Ordre de la région Paris Île-de-France
            </li>
            <li>Assurance RCP : AXA France n°123456789</li>
            <li>Agrément AMF n°GP123456</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* Contact */}
      <AccordionItem value="contact">
        <AccordionTrigger className="text-lg font-semibold text-white">
          Contact
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            <li>123 Avenue des Experts</li>
            <li>75008 Paris</li>
            <li>Tél : +33 (0)1 23 45 67 89</li>
            <li>Email : contact@cabinet-fiscal.fr</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
