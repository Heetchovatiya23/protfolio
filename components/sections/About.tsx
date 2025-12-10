import SectionWrapper from "../ui/SectionWrapper";
import Image from "next/image";

const About = () => (
  <SectionWrapper id="about" kicker="Story" title="About Me">
    <div className="grid gap-8 md:grid-cols-[1.5fr,1fr]">
      <div className="space-y-6 text-base text-muted">
        <p>
          I collaborate with founders and art directors to craft high-impact product launches, immersive microsites, and
          living design systems. My process blends narrative thinking, fast iteration, and technical precision.
        </p>
        <p>
          From rapid prototypes to production builds, I focus on experiences that feel tactile, intentional, and performant
          across devices.
        </p>
      </div>
      <div className="relative h-64 overflow-hidden rounded-3xl border border-border">
        <Image src="/images/img-2.png" alt="Portrait placeholder" fill className="object-cover" priority />
      </div>
    </div>
  </SectionWrapper>
);

export default About;

