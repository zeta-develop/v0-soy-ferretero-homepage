"use client";

import { DollarSign, Truck, Headphones, ShieldCheck } from "lucide-react";

const badges = [
  {
    icon: DollarSign,
    title: "Precios mayoristas",
    description: "Los mejores precios del mercado para ferreterias y distribuidores",
  },
  {
    icon: Truck,
    title: "Envios nacionales",
    description: "Enviamos a todo Colombia con seguimiento en tiempo real",
  },
  {
    icon: Headphones,
    title: "Atencion personalizada",
    description: "Asesoria experta por WhatsApp para elegir tu equipo ideal",
  },
  {
    icon: ShieldCheck,
    title: "Productos confiables",
    description: "Garantia y respaldo en todas nuestras herramientas",
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Por que elegirnos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Tu ferreteria de confianza
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="group text-center p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <badge.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">
                {badge.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed hidden sm:block">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
