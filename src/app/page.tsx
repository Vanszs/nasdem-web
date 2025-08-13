import Hero from "@/components/hero";
import VisionMission from "@/components/highlight";
import Programs from "@/components/programs";
import Gallery from "@/components/gallery";
import Members from "@/components/members";
import News from "@/components/news";
import Social from "@/components/social";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="space-y-0">
      <Hero />
      <Programs />
      <VisionMission />
      <Members />
      <Gallery />
      <News />
      <Social />
      <Footer />
    </main>
  );
}
