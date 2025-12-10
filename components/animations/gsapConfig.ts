"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EasePack } from "gsap/EasePack";

let registered = false;

export const ensureGsap = () => {
  if (registered) return gsap;
  gsap.registerPlugin(ScrollTrigger, EasePack);
  registered = true;
  return gsap;
};

