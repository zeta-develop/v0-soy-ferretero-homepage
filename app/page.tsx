import { Topbar } from "@/components/homepage/topbar";
import { Header } from "@/components/homepage/header";
import { Hero } from "@/components/homepage/hero";
import { Categories } from "@/components/homepage/categories";
import { FeaturedProducts } from "@/components/homepage/featured-products";
import { TrustBadges } from "@/components/homepage/trust-badges";
import { PromoBanner } from "@/components/homepage/promo-banner";
import { Stats } from "@/components/homepage/stats";
import { WhatsappCta } from "@/components/homepage/whatsapp-cta";
import { Newsletter } from "@/components/homepage/newsletter";
import { Footer } from "@/components/homepage/footer";
import { WhatsappFloat } from "@/components/homepage/whatsapp-float";
import { fetchStorefrontCategories, fetchStorefrontProducts } from "@/lib/storefront-api";

export default async function HomePage() {
  const [categories, products] = await Promise.all([
    fetchStorefrontCategories(8).catch(() => []),
    fetchStorefrontProducts(8).catch(() => []),
  ]);

  return (
    <main className="min-h-screen">
      {/* Header Area */}
      <Topbar />
      <Header />

      {/* Hero Banner */}
      <Hero />

      {/* Featured Categories */}
      <Categories categories={categories} />

      {/* Featured Products */}
      <FeaturedProducts products={products} />

      {/* Trust Badges - Why Choose Us */}
      <TrustBadges />

      {/* Promotional Banner */}
      <PromoBanner />

      {/* Social Proof Stats */}
      <Stats />

      {/* WhatsApp CTA Section */}
      <WhatsappCta />

      {/* Newsletter Signup */}
      <Newsletter />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsappFloat />
    </main>
  );
}
