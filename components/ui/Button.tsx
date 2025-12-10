"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  as?: "button" | "a";
  href?: string;
};

const variants = {
  primary: "bg-[#1b1b1b] text-[#e8e8e3] hover:-translate-y-0.5",
  ghost: "border border-border text-[#1b1b1b] hover:-translate-y-0.5"
};

const Button = ({ className, variant = "primary", as = "button", href, ...props }: ButtonProps) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition",
    variants[variant],
    className
  );

  if (as === "a") {
    return (
      <a className={baseClasses} href={href} {...(props as any)}>
        {props.children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

