"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/soldadores", label: "Soldadores" },
  { href: "/pulidoras", label: "Pulidoras" },
  { href: "/clavadoras", label: "Clavadoras" },
  { href: "/accesorios", label: "Accesorios" },
];

const supportLinks = [
  { href: "/contacto", label: "Contacto" },
  { href: "/envios", label: "Informacion de envios" },
  { href: "/garantias", label: "Garantias" },
  { href: "/preguntas", label: "Preguntas frecuentes" },
  { href: "/terminos", label: "Terminos y condiciones" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  { href: "https://wa.me/573046808472", icon: MessageCircle, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="/images/logo-soyferretero.jpg"
              alt="Soy Ferretero"
              width={160}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Importadores y mayoristas de herramientas profesionales. Mas de 10 anos de experiencia equipando ferreterias, talleres y construccion en Colombia.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Soporte</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:3046808472" className="text-background hover:text-primary transition-colors font-semibold">
                    304 680 8472
                  </a>
                  <p className="text-background/60 text-xs mt-0.5">Linea de atencion</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:ventas@soyferretero.com" className="text-background hover:text-primary transition-colors text-sm">
                    ventas@soyferretero.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Colombia - Envios a todo el pais
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Lun - Sab: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>
              © {new Date().getFullYear()} Soy Ferretero. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacidad" className="hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-primary transition-colors">
                Terminos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
