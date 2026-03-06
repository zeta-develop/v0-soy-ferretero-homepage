"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/soldadores", label: "Soldadores" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/promociones", label: "Promociones" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo-soyferretero.jpg"
              alt="Soy Ferretero"
              width={160}
              height={50}
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              className="p-2 text-foreground/70 hover:text-primary transition-colors"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="p-2 text-foreground/70 hover:text-primary transition-colors"
              aria-label="Mi cuenta"
            >
              <User className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="p-2 text-foreground/70 hover:text-primary transition-colors relative"
              aria-label="Carrito"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
              Comprar ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              className="p-2 text-foreground/70 hover:text-primary transition-colors relative"
              aria-label="Carrito"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary hover:bg-secondary px-4 py-3 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4 mt-4 px-4">
              <button
                type="button"
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="Buscar"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="p-2 text-foreground/70 hover:text-primary transition-colors"
                aria-label="Mi cuenta"
              >
                <User className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 px-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Comprar ahora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
