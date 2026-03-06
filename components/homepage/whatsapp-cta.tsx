"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Headphones, Clock } from "lucide-react";

export function WhatsappCta() {
  const whatsappNumber = "573046808472";
  const whatsappMessage = encodeURIComponent(
    "Hola, necesito asesoria para elegir el equipo ideal para mi trabajo."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="currentColor" className="text-background" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Headphones className="h-10 w-10 text-primary-foreground" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Necesitas asesoria inmediata?
          </h2>

          <p className="text-primary-foreground/80 text-lg lg:text-xl mb-8 max-w-xl mx-auto">
            Te ayudamos a elegir el equipo ideal para tu trabajo. Nuestro equipo de expertos esta listo para atenderte.
          </p>

          {/* Response time indicator */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/70 mb-8">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Tiempo de respuesta promedio: 5 minutos</span>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold text-lg px-10 py-7 gap-3 shadow-xl hover:shadow-2xl transition-all"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6" />
              Hablar por WhatsApp
            </a>
          </Button>

          <p className="mt-6 text-primary-foreground/60 text-sm">
            Tambien puedes llamarnos al <a href="tel:3046808472" className="font-semibold underline">304 680 8472</a>
          </p>
        </div>
      </div>
    </section>
  );
}
