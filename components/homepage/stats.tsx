"use client";

import { Users, ThumbsUp, Truck, MessageCircle } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Clientes atendidos",
    description: "Ferreterias y profesionales",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Alta satisfaccion",
    description: "Clientes que vuelven a comprar",
  },
  {
    icon: Truck,
    value: "10,000+",
    label: "Envios exitosos",
    description: "A todo Colombia",
  },
  {
    icon: MessageCircle,
    value: "24/7",
    label: "Atencion directa",
    description: "Respuesta por WhatsApp",
  },
];

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-xs hidden sm:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
