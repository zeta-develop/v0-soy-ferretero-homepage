"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Soldador MIG 200A Inverter",
    image: "/images/product-soldador-mig.jpg",
    price: 1890000,
    oldPrice: 2350000,
    discount: 20,
    tag: "Mas vendido",
  },
  {
    id: 2,
    name: "Taladro Percutor 20V + 2 Baterias",
    image: "/images/product-taladro.jpg",
    price: 459000,
    oldPrice: 580000,
    discount: 21,
    tag: "Nuevo",
  },
  {
    id: 3,
    name: 'Pulidora Angular 7" 2200W',
    image: "/images/product-pulidora.jpg",
    price: 385000,
    oldPrice: 450000,
    discount: 14,
    tag: null,
  },
  {
    id: 4,
    name: "Compresor de Aire 50L 2.5HP",
    image: "/images/product-compresor.jpg",
    price: 890000,
    oldPrice: 1050000,
    discount: 15,
    tag: "Promocion",
  },
  {
    id: 5,
    name: "Clavadora Neumatica Cal. 18",
    image: "/images/product-clavadora.jpg",
    price: 295000,
    oldPrice: 380000,
    discount: 22,
    tag: null,
  },
  {
    id: 6,
    name: "Caladora 750W Velocidad Variable",
    image: "/images/product-caladora.jpg",
    price: 275000,
    oldPrice: 320000,
    discount: 14,
    tag: null,
  },
  {
    id: 7,
    name: 'Sierra Circular 7-1/4" 1800W',
    image: "/images/product-sierra.jpg",
    price: 425000,
    oldPrice: 510000,
    discount: 17,
    tag: "Popular",
  },
  {
    id: 8,
    name: "Rotomartillo SDS Plus 850W",
    image: "/images/product-rotomartillo.jpg",
    price: 565000,
    oldPrice: 680000,
    discount: 17,
    tag: null,
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Ofertas destacadas
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
              Productos en promocion
            </h2>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground sm:self-end">
            Ver todo el catalogo
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-bold">
                  -{product.discount}%
                </div>

                {/* Tag Badge */}
                {product.tag && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-semibold">
                    {product.tag}
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-1"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span className="hidden sm:inline">Agregar</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="px-3"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm lg:text-base line-clamp-2 min-h-[2.5rem] lg:min-h-[3rem] leading-tight">
                  {product.name}
                </h3>
                
                <div className="mt-3 flex flex-col">
                  <span className="text-muted-foreground text-xs line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                  <span className="text-primary font-bold text-lg lg:text-xl">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
