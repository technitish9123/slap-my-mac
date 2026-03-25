import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MoodGrid from "@/components/MoodGrid";
import Sliders from "@/components/Sliders";
import Roadmap from "@/components/Roadmap";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <MoodGrid />
      <Sliders />
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
