import { HeroSection } from "@/components/home/HeroSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { FeaturedPosts } from "@/components/home/FeaturedCards";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedPosts />
        <NewsletterSection />
      </main>
    </>
  );
}