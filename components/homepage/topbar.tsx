"use client";

import { Truck, CreditCard, MessageCircle, Phone } from "lucide-react";

export function Topbar() {
  return (
    <div className="bg-foreground text-background py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5" />
              Envios a todo Colombia
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="h-3.5 w-3.5" />
              Pago contraentrega
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="h-3.5 w-3.5" />
              Atencion por WhatsApp
            </span>
          </div>
          <a
            href="tel:3046808472"
            className="flex items-center gap-1.5 font-semibold hover:text-primary transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            304 680 8472
          </a>
        </div>
      </div>
    </div>
  );
}
