import Hero from "@/components/hero";
import Highlight from "@/components/highlight";
import ModernMinimalist from "@/components/modern-minimalist";
import Metrics from "@/components/metrics";
import Collection from "@/components/collection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="space-y-10 md:space-y-16">
      <Hero />
      <ModernMinimalist />
      <Highlight />
      <Metrics />
      <Collection />
      <Footer />
    </main>
  );
}
