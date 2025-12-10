"use client";

import { useEffect } from "react";
import { ensureGsap } from "./gsapConfig";

export const useHeroAnimation = () => {
  useEffect(() => {
    const gsap = ensureGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-role", { y: 12, opacity: 0, duration: 0.5 })
        .from(
          ".hero-heading .word",
          {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            stagger: 0.08
          },
          "-=0.1"
        )
        .from(".hero-image", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.2")
        .from(
          [".hero-intro", ".hero-cta"],
          { y: 18, opacity: 0, duration: 0.6, stagger: 0.15 },
          "-=0.3"
        )
        .from(".hero-availability", { y: 18, opacity: 0, duration: 0.6 }, "-=0.3");

      gsap.to(".hero-frame", {
        y: -8,
        rotate: -1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    return () => ctx.revert();
  }, []);
};

