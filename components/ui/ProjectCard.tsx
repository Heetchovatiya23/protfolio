"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

type ProjectCardProps = {
  project: {
    id: number | string;
    title: string;
    role: string;
    year: string;
    description: string;
    tags: string[];
    url?: string;
    image?: string;
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let hoverTween: gsap.core.Tween | null = null;

    const handleEnter = () => {
      hoverTween?.kill();
      hoverTween = gsap.to(card, { scale: 1.02, boxShadow: "0 20px 50px rgba(0,0,0,0.35)", duration: 0.4 });
    };

    const handleLeave = () => {
      hoverTween?.kill();
      hoverTween = gsap.to(card, { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.4 });
    };

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      hoverTween?.kill();
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <article ref={cardRef} className="flex flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-card p-6">
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-border">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
      )}
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
        <span>{project.role}</span>
        <span>{project.year}</span>
      </div>
      <div>
        <h3 className="text-2xl font-display">{project.title}</h3>
        <p className="mt-3 text-sm text-muted">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-foreground">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-3 py-1">{tag}</span>
        ))}
      </div>
      {project.url && (
        <a href={project.url} className="text-sm text-accent" target="_blank" rel="noreferrer">
          Visit project →
        </a>
      )}
    </article>
  );
};

export default ProjectCard;

