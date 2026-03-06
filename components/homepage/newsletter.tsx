"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, Bell } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content Side */}
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <Mail className="h-5 w-5" />
                <span className="font-semibold text-sm uppercase tracking-wider">Newsletter</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Recibe ofertas y promociones
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Suscribete y recibe descuentos exclusivos, novedades y ofertas especiales directamente en tu correo.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-2 text-foreground">
                  <Gift className="h-4 w-4 text-primary" />
                  Ofertas exclusivas
                </span>
                <span className="flex items-center gap-2 text-foreground">
                  <Bell className="h-4 w-4 text-primary" />
                  Novedades primero
                </span>
              </div>
            </div>

            {/* Form Side */}
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Tu correo electronico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 px-4 bg-muted border-border"
                />
                <Button
                  type="submit"
                  className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                >
                  Suscribirse
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">
                Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
