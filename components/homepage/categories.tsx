import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StorefrontCategory } from "@/lib/storefront-api";

const fallbackImages = [
  "/images/category-soldadores.jpg",
  "/images/category-pulidoras.jpg",
  "/images/category-clavadoras.jpg",
  "/images/category-accesorios.jpg",
];

type CategoriesProps = {
  categories: StorefrontCategory[];
};

export function Categories({ categories }: CategoriesProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestras categorias
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Explora por tipo de herramienta
          </h2>
        </div>

        {/* Categories Grid */}
        {categories.length === 0 ? (
          <div className="rounded-xl border border-border bg-card px-6 py-10 text-center text-muted-foreground">
            No hay categorias disponibles por ahora.
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/?categoria=${category.id}`}
                className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={fallbackImages[index % fallbackImages.length]}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <span className="text-primary-foreground/70 text-xs font-medium">
                    Categoria disponible
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary-foreground mt-1">
                    {category.name}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mt-1 hidden sm:block">
                    {category.parent_id ? "Subcategoria" : "Categoria principal"}
                  </p>
                  <div className="flex items-center gap-1 text-primary text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                    Ver todos
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
