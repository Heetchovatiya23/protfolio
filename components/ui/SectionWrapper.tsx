"use client";

import { ReactNode } from "react";
import { useSectionReveal } from "../animations/useSectionReveal";
import SectionTitle from "./SectionTitle";

type SectionWrapperProps = {
  id: string;
  kicker?: string;
  title: string;
  children: ReactNode;
};

const SectionWrapper = ({ id, kicker, title, children }: SectionWrapperProps) => {
  const ref = useSectionReveal();

  return (
    <section ref={ref} id={id} className="space-y-12">
      <SectionTitle kicker={kicker} title={title} />
      <div data-reveal="content">{children}</div>
    </section>
  );
};

export default SectionWrapper;

