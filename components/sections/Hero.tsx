"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { useHeroAnimation } from "../animations/useHeroAnimation";
import { SITE } from "../utils/constants";

const introCopy =
  "Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.";

const Hero = () => {
  useHeroAnimation();

  return (
    <section className="relative min-h-screen overflow-hidden px-2 pb-12 pt-5 sm:px-3 lg:px-0">
      <div className="mt-5 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-left">
          <p className="hero-role text-xs tracking-[0.22em] text-neutral-600 sm:text-sm">{SITE.role}</p>
          <h1 className="hero-heading text-[clamp(2.6rem,9vw,7.8rem)] font-black uppercase leading-[0.92] tracking-tight text-neutral-900">
            {SITE.name.split(" ").map((word) => (
              <span key={word} className="word mr-3 inline-block overflow-hidden">
                <span>{word}</span>
              </span>
            ))}
          </h1>
        </div>
        <div className="hero-image hero-frame relative h-[260px] w-[220px] overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/10 transition-transform duration-500 hover:scale-[1.02] sm:h-[320px] sm:w-[280px] lg:h-[420px] lg:w-[340px]">
          <Image src="/images/heet.jpeg" alt="Workspace" fill className="object-cover" priority />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-4">
          <span className="inline-block rotate-45 border-l-2 border-b-2 border-neutral-700 p-2" aria-hidden />
        </div>
        <p className="hero-intro max-w-xl text-lg leading-relaxed text-neutral-800">{introCopy}</p>
        <div className="hero-cta">
          <Button as="a" href="#contact">
            CONTACT ↗
          </Button>
        </div>
      </div>

      <div className="hero-availability mt-8 flex flex-col items-center text-center text-neutral-800 sm:mt-6 lg:absolute lg:bottom-6 lg:right-3 lg:items-end lg:text-right">
        <p className="text-[10px] tracking-[0.25em] text-neutral-600 sm:text-[11px]">AVAILABLE FOR WORK</p>
        <p className="text-3xl font-semibold text-neutral-900 sm:text-4xl lg:text-5xl">JAN &#39;26</p>
      </div>
    </section>
  );
};

export default Hero;

