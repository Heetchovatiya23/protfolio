"use client";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/heet-chovatiya-63610b343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { label: "GitHub", href: "https://github.com/Heetchovatiya23" }
];

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-4 text-sm ${className}`}>
    {socials.map((social) => (
      <a key={social.label} href={social.href} className="text-muted transition hover:text-accent" target="_blank" rel="noreferrer">
        {social.label}
      </a>
    ))}
  </div>
);

export default SocialLinks;

