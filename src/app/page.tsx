import Hero from "@/components/hero";
import ProfileSection from "@/components/profile";
import ProgramsSection from "@/components/programs";
import NewsSection from "@/components/news";
import GallerySection from "@/components/gallery";
import MembersSection from "@/components/members";
import SocialSection from "@/components/social";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="space-y-10 md:space-y-16">
      <Hero />
      <ProfileSection />
      <ProgramsSection />
      <NewsSection />
      <GallerySection />
      <MembersSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
