import { projects } from "@/data/projects";
import SectionWrapper from "../ui/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => (
  <SectionWrapper id="projects" kicker="Selected Works" title="Projects">
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;

