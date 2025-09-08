"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface ScrollToTopProps {
  className?: string;
  showOffset?: number;
}

const ScrollToTop = ({ className, showOffset = 300 }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll events
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > showOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showOffset]);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "fixed bottom-8 right-4 z-50 size-12 rounded-full transition-all duration-300 ease-in-out",
        // Glass morphism styling to match the dock
        "backdrop-blur-md bg-background/80 border border-border shadow-xl",
        "hover:scale-110 hover:bg-background/90",
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none",
        className
      )}
      aria-label="Scroll to top"
    >
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export { ScrollToTop };
