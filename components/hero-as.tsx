import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Meteors from "./ui/meteors";
import GradualSpacing from "./ui/gradual-spacing";
import { AnimatedBeamMultipleOutputDemo } from "./techs-beam";
import ShineText from "./ui/shine-text";
import { HyperTextChange } from "./ui/changeTextHyper";
import ShimmerButton from "./ui/shimmer-button";
import BlurButton from "./ui/blur-button";
import { FlipVertical } from "lucide-react";
import SlightFlip from "./ui/flip-text";
import { MarqueeDemo } from "./ui/listTech";

export default function HeroHome() {
  const especialidades = ["Desenvolvimento", "software", "aplicativos", "integrações",];
  const interval = 3;

  return (
    <section className="py-10 w-100 h-full bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="">
          {/* Section header */}
          <div className="text-center md:pb-20">
            <section className="pt-20 h-svh pb-5">
              <h1
                className="font-nacelle text-4xl font-semibold md:text-5xl"
                data-aos="fade-up"
              >
                <div className="flex flex-col justify-center h-full">
                  <span className="fade-in-5 transform translate-y-0" data-aos="fade-up" data-aos-delay={600}>
                    ESPECIALISTAS EM
                  </span>
                  <div className="flex justify-center w-100">
                    <HyperTextChange texts={especialidades} interval={interval} />
                  </div>
                  <SlightFlip
                    className="pt-14 fade-in-5 transform translate-y-0 md:text-2xl text-xl text-wrap text-center bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-400/60"
                    word="
                "/>
                  <span className="pt-14 md:px-20 px-5 fade-up-5 transform translate-y-0 md:text-2xl text-lg text-wrap text-center bg-transparent bg-clip-text text-transparent bg-gradient-to-tl from-white to-gray-400/70 font-mono"
                    data-aos="fade-up" data-aos-delay={600}>
                    Desenvolvedores sob-demanda, softwares personalizados, aplicativos mobile, integrações de sistemas e muito mais.
                  </span>
                  {/* quero saber mais */}
                  <div className="z-10 flex min-h-64 items-center justify-center">
                    <BlurButton></BlurButton>
                  </div>
                </div>
              </h1>
            </section>

            <section className="md:py-20 h-svh flex flex-col justify-between ">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                <span className="inline-flex bg-gradient-to-r  from-[#7c8bff] to-indigo-200 bg-clip-text text-transparent text-xl">
                  Soluções Sob Medida
                </span>
              </div>
              <h1
                className="font-nacelle text-4xl font-semibold md:text-5xl"
                data-aos="fade-up"
              >
                
                <span className="fade-in-5 transform translate-y-0  md:text-4xl text-lg" data-aos="fade-up" data-aos-delay={400}>
                  Conectando você com <span className=" bg-gradient-to-r from-[#0FBAEF] to-[#7c8bff] bg-clip-text text-transparent">
                    as melhores tecnologias
                  </span>
                </span>
              </h1>

              <AnimatedBeamMultipleOutputDemo   />
              <MarqueeDemo />

              <div className="flex flex-col justify-start items-center">
                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                  <span className="inline-flex bg-gradient-to-r from-[#0FBAEF] to-[#7c8bff] bg-clip-text text-transparent">
                    com os melhores especialistas
                  </span>
                </div>
                <span className="fade-up-5 transform translate-y-0 md:text-2xl  text-wrap text-center bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-400/60">
                  Nossa equipe de desenvolvedores está preparada para oferecer a solução ideal para o seu negócio. Com conhecimento em diversas tecnologias, ajudamos você a desenvolver novas soluções e aprimorar sistemas existentes, garantindo inovação e eficiência para seu software
                </span>
              </div>
            </section>
          </div>
        </div>
      </div >
    </section >
  );
}
