"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ensureGsap } from "./gsapConfig";

export const useSectionReveal = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const gsap = ensureGsap();
    const scrollTriggerPlugin = ScrollTrigger;

    const ctx = gsap.context(() => {
      gsap.from(element.querySelectorAll("[data-reveal='title']"), {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          once: true
        },
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      });

      gsap.from(element.querySelectorAll("[data-reveal='content']"), {
        scrollTrigger: {
          trigger: element,
          start: "top 75%",
          once: true
        },
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12
      });
    }, element);

    return () => {
      ctx.revert();
      if (scrollTriggerPlugin) scrollTriggerPlugin.refresh();
    };
  }, []);

  return sectionRef;
};

