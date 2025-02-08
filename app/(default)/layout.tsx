"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";
import Meteors from "@/components/ui/meteors";
import Particles from "@/components/ui/particles";
import PageIllustration from "@/components/page-illustration";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="relative flex grow flex-col">{children}
        <Meteors number={30} />

        <Particles
          className="absolute inset-0"
          quantity={500}
          ease={80}
          color={"#0FBAEF"}
          refresh
          vx={0.5}
          vy={0.5}
        />
        <Particles
          className="absolute inset-0"
          quantity={500}
          ease={80}
          color={"#7c8bff"}
          refresh
          vx={-0.5}
        />
        <PageIllustration />
        <Footer />

      </main>

    </>
  );
}
