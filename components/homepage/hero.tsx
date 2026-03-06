"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export function Hero() {
  const whatsappNumber = "573046808472";
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero informacion sobre sus productos de ferreteria."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-tools.jpg"
          alt="Herramientas profesionales"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Importadores y Mayoristas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
            <span className="text-primary">Herramientas</span> y equipos para trabajo profesional
          </h1>

          <p className="text-lg sm:text-xl text-background/80 mb-8 leading-relaxed max-w-xl">
            Calidad, respaldo y precios mayoristas para ferreterias, talleres y construccion en toda Colombia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 gap-2"
            >
              Ver productos
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-background text-background hover:bg-background hover:text-foreground font-bold text-lg px-8 py-6 gap-2"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Escribir por WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-6 text-background/70 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              +5,000 clientes satisfechos
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Envio a todo el pais
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Garantia en productos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
