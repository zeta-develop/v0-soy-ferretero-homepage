"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, Zap } from "lucide-react";

export function PromoBanner() {
  const whatsappNumber = "573046808472";
  const whatsappMessage = encodeURIComponent(
    "Hola, me interesa el Soldador MIG 200A Inverter en promocion."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 lg:py-24 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/images/promo-banner.jpg"
                alt="Soldador MIG en promocion"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-destructive text-destructive-foreground rounded-full w-20 h-20 lg:w-28 lg:h-28 flex flex-col items-center justify-center shadow-xl transform rotate-12">
              <span className="text-2xl lg:text-4xl font-black">20%</span>
              <span className="text-xs lg:text-sm font-bold">OFF</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="text-background">
            {/* Flash Sale Badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Zap className="h-4 w-4" />
              OFERTA ESPECIAL
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Soldador MIG 200A <span className="text-primary">Inverter Profesional</span>
            </h2>

            <p className="text-background/70 text-lg mb-6 leading-relaxed">
              El equipo ideal para soldadura MIG/MAG con tecnologia inverter. Incluye antorcha, regulador y cables. Perfecto para talleres y uso industrial.
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-8">
              {["Tecnologia inverter de alta eficiencia", "Ciclo de trabajo 60%", "Compatible con alambre 0.8 - 1.0mm", "Garantia de 1 ano"].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-background/80">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mb-8">
              <span className="text-background/50 text-xl line-through">$2.350.000</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-black text-primary">$1.890.000</span>
                <span className="text-background/70">COP</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Agregar al carrito
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-background text-background hover:bg-background hover:text-foreground font-bold text-lg px-8 py-6 gap-2"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Consultar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
