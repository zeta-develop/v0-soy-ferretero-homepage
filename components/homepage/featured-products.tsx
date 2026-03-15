import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { StorefrontProduct } from "@/lib/storefront-api";

const fallbackProductImage = "/images/product-soldador-mig.jpg";
const whatsappNumber = "573046808472";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

type FeaturedProductsProps = {
  products: StorefrontProduct[];
};

function getWhatsappUrl(product: StorefrontProduct): string {
  const normalizedPhone = whatsappNumber.replace(/\D/g, "");
  const category = product.categories?.name ?? "Sin categoria";
  const message = [
    "Hola, quiero mas informacion de este producto:",
    `ID: ${product.id}`,
    `Nombre: ${product.name}`,
    `Precio: ${formatPrice(product.price)}`,
    `Categoria: ${category}`,
  ].join("\n");

  return `https://api.whatsapp.com/send?phone=${normalizedPhone}&text=${encodeURIComponent(message)}`;
}

function getProductTag(product: StorefrontProduct): string | null {
  if (product.stock === 0) {
    return "Agotado";
  }

  if (product.stock > 0 && product.stock <= 5) {
    return "Ultimas unidades";
  }

  return null;
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
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
              Productos disponibles
            </h2>
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground sm:self-end">
            Ver todo el catalogo
          </Button>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="rounded-xl border border-border bg-card px-6 py-10 text-center text-muted-foreground">
            No hay productos para mostrar en este momento.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product) => {
              const tag = getProductTag(product);
              const whatsappUrl = getWhatsappUrl(product);

              return (
                <div
                  key={product.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={product.image_url || fallbackProductImage}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Stock Badge */}
                    <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-bold">
                      Stock: {product.stock}
                    </div>

                    {/* Tag Badge */}
                    {tag && (
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-semibold">
                        {tag}
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-1"
                      >
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          <span>Obtener mas informacion</span>
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm lg:text-base line-clamp-2 min-h-[2.5rem] lg:min-h-[3rem] leading-tight">
                      {product.name}
                    </h3>

                    <div className="mt-2 text-xs text-muted-foreground line-clamp-1">
                      {product.categories?.name ?? "Sin categoria"}
                    </div>

                    <div className="mt-3 flex flex-col">
                      <span className="text-primary font-bold text-lg lg:text-xl">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
