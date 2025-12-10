import { services } from "@/data/services";
import SectionWrapper from "../ui/SectionWrapper";

const Services = () => (
  <SectionWrapper id="services" kicker="Capabilities" title="Services">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <article key={service.title} className="rounded-3xl border border-border bg-card p-6 transition hover:border-accent">
          <h3 className="text-xl font-display">{service.title}</h3>
          <p className="mt-3 text-sm text-muted">{service.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {bullet}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </SectionWrapper>
);

export default Services;

