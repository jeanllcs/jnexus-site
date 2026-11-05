import type React from "react";

export interface SurfaceCardProps {
  readonly children: React.ReactNode;
  readonly variant?: "light" | "obsidian" | "subtle";
  readonly isInteractive?: boolean;
  readonly className?: string;
  readonly as?: "div" | "article" | "section";
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  readonly role?: string;
  readonly tabIndex?: number;
}

export function SurfaceCard({
  children,
  variant = "light",
  isInteractive = false,
  className = "",
  as: Component = "div",
  onClick,
  role,
  tabIndex,
}: SurfaceCardProps): React.JSX.Element {
  const baseClass =
    variant === "obsidian"
      ? "bento-obsidian"
      : variant === "subtle"
      ? "rounded-bento bg-apple-subtle border border-apple-border"
      : "bento-surface";

  const interactiveClass = isInteractive ? "bento-surface-interactive" : "";

  return (
    <Component
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      className={`${baseClass} ${interactiveClass} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
