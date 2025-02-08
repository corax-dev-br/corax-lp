export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Work from "@/components/how-we-work";
import Particles from "@/components/ui/particles";
import Meteors from "@/components/ui/meteors";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import Button from "@/components/ui/contact-button";

export default function Home() {
  return (
    <>
    
      <Hero />
      <Workflows />
      <Work />
      
      {/* <Footer /> */}

      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <Cta /> */}
    </>
  );
}
