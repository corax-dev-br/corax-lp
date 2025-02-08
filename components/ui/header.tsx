"use client";

import Link from "next/link";
import Logo from "./logo";
import { BorderBeam } from "@/components/ui/border-beam";
import ShineBorder from "./shine-border";
import Button from "./contact-button";
export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5 fixed">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-opacity-50 bg-gradient-to-r from-[#28327C11] to-[#0FBAEF11] px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          <BorderBeam colorFrom="#28327C" colorTo="#0FBAEF" anchor={90}  />
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
            <Logo />
            <span className="text-white text-lg font-semibold ml-2">
              Corax
              </span>
            </Link>
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">


            <li>
              <Link
                href="/signup"
              >
                <Button size="small"> Entre em contato</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
