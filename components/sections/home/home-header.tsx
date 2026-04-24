import { Button } from "@/components/ui/button";
import { HomeContent } from "@/types/home";
import { ReactNode } from "react";

interface HomeHeaderProps {
  content: HomeContent;
  onCtaClick: () => void;
  children?: ReactNode;
}

export default function HomeHeader({
  content,
  onCtaClick,
  children,
}: HomeHeaderProps) {
  const backgroundImage =
    content.backgroundImageUrl || "/images/home-hero-bg.svg";

  return (
    <section className="text-white px-4 sm:px-6 md:px-20 py-8 sm:py-12 shadow-xl relative overflow-hidden min-h-[calc(100svh-74px)] md:h-full flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-[#244b4f]/52" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_45%)]" />
      <div className="absolute -bottom-16 -right-8 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex justify-center sm:justify-end">
        <Button
          onClick={onCtaClick}
          className="bg-white text-[#2f5d62] hover:bg-white/90 rounded-xl px-5 sm:px-6"
        >
          {content.ctaText}
        </Button>
      </div>

      <div className="relative z-10 mt-8 md:mt-14 max-w-4xl space-y-3 md:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          {content.heroTitle}{" "}
          <span className="text-amber-300">{content.heroHighlight}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl">
          {content.heroDescription}
        </p>
      </div>

      {children && (
        <div className="relative z-10 mt-auto pt-10">{children}</div>
      )}
    </section>
  );
}
