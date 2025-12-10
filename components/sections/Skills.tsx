import { skills } from "@/data/skills";
import SectionWrapper from "../ui/SectionWrapper";

const PillGroup = ({ label, items }: { label: string; items: string[] }) => (
  <div className="space-y-3">
    <p className="text-xs uppercase tracking-[0.3em] text-muted">{label}</p>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-border px-4 py-1 text-sm">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <SectionWrapper id="skills" kicker="Toolkit" title="Skills">
    <div className="grid gap-8 md:grid-cols-2">
      <PillGroup label="Languages & Tools" items={skills.languages} />
      <PillGroup label="Frameworks & Libraries" items={skills.frameworks} />
    </div>
  </SectionWrapper>
);

export default Skills;

