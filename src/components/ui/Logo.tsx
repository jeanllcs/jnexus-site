import type React from "react";

export interface LogoProps {
  readonly variant?: "full" | "icon";
  readonly height?: number;
  readonly className?: string;
  readonly priority?: boolean;
}

export function Logo({
  variant = "full",
  height = 34,
  className = "",
}: LogoProps): React.JSX.Element {
  // Proporções:
  // variant "full": 395 x 107 (aspect ratio ~3.69)
  // variant "icon": 132 x 107 (aspect ratio ~1.23)
  const isFull = variant === "full";
  const aspectRatio = isFull ? 395 / 107 : 132 / 107;
  const width = Math.round(height * aspectRatio);

  const lightSrc = isFull ? "/logo_light.png" : "/logo_icon_light.png";
  const darkSrc = isFull ? "/logo_dark.png" : "/logo_icon_dark.png";

  return (
    <div
      className={`relative inline-flex items-center shrink-0 ${className}`.trim()}
      style={{ height, width }}
    >
      {/* Imagem para Tema Claro (oculta quando html[data-theme='dark']) */}
      <img
        src={lightSrc}
        alt="JNexus"
        width={width}
        height={height}
        className="h-full w-auto object-contain block [html[data-theme='dark']_&]:hidden"
        loading="eager"
        decoding="async"
      />
      {/* Imagem para Tema Escuro (visível apenas quando html[data-theme='dark']) */}
      <img
        src={darkSrc}
        alt="JNexus"
        width={width}
        height={height}
        className="h-full w-auto object-contain hidden [html[data-theme='dark']_&]:block"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
