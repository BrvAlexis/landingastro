import React, { useState } from "react";
import type { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { ContactSelect } from "./ContactSelect";

interface ContactFormProps {
  formOptions: Array<{ value: string; label: string }>;
}

export const ContactForm = ({ formOptions }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        form.reset();
      } else {
        throw new Error(`Erreur de soumission: ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur s'est produite lors de l'envoi de votre message."
      );
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        className="space-y-6"
        name="contact-cabinet-avocats"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        data-netlify-email="sep@avocats-diane.fr"
        onSubmit={handleSubmit}
      >
        {/* Champ caché pour le honeypot */}
        <p className="hidden">
          <label>
            Ne pas remplir si vous êtes humain: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact-cabinet-avocats" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              maxLength={100}
              pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+"
              title="Veuillez entrer un nom valide (lettres, espaces, tirets et apostrophes uniquement)"
              className="scale-hover"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Veuillez entrer une adresse email valide"
              className="scale-hover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              pattern="^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$"
              title="Veuillez entrer un numéro de téléphone français valide"
              className="scale-hover"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Sujet</Label>
            <ContactSelect
              name="subject"
              placeholder="Sélectionnez un sujet"
              options={formOptions}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            minLength={10}
            maxLength={1000}
            className="scale-hover"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
            J'accepte que mes données soient traitées conformément à la{" "}
            <a href="#" className="text-info hover:text-info/80">
              politique de confidentialité
            </a>
            .
          </label>
        </div>

        {/* reCAPTCHA */}
        <div data-netlify-recaptcha="true"></div>

        <Button
          type="submit"
          className="w-full scale-hover"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Envoi en cours...
            </>
          ) : (
            <>
              <span>Envoyer</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          )}
        </Button>
      </form>

      {/* Modal de succès */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Message envoyé !"
        type="success"
      >
        <p>
          Votre message a été envoyé avec succès. Nous vous répondrons dans les
          plus brefs délais.
        </p>
      </Modal>

      {/* Modal d'erreur */}
      <Modal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        title="Erreur"
        type="error"
      >
        <p>
          {errorMessage ||
            "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard."}
        </p>
      </Modal>
    </>
  );
};
