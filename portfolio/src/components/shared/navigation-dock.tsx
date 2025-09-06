"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { TooltipContent, Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  email: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const NAVIGATION_DATA = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/swayamg20",
      icon: Icons.github,
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/swayamgupta20",
      icon: Icons.linkedin,
    },
    {
      name: "X",
      url: "https://x.com/swayamg20",
      icon: Icons.x,
    },
    {
      name: "Email",
      url: "mailto:gupta.swayam123@gmail.com",
      icon: Icons.email,
    },
  ],
};

// Main Pages Navigation Dock (Center)
export function MainNavigationDock() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50">
      <TooltipProvider>
        <Dock direction="middle" className="px-4 py-3 gap-6">
          {NAVIGATION_DATA.pages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <DockIcon key={page.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={page.href}
                      aria-label={page.label}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "px-3 py-2 h-auto rounded-full text-sm font-medium transition-all duration-200",
                        isActive 
                          ? "bg-primary text-primary-foreground shadow-md scale-105" 
                          : "hover:bg-secondary/80"
                      )}
                    >
                      {page.label}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{page.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
        </Dock>
      </TooltipProvider>
    </div>
  );
}

// Social & Theme Navigation Dock (Right)
export function SocialNavigationDock() {
  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50">
      <TooltipProvider>
        <Dock direction="middle" className="flex-col py-4 px-3 gap-0">
          {/* Social Links */}
          {NAVIGATION_DATA.social.map((social) => (
            <DockIcon key={social.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-9 rounded-full hover:bg-secondary/80 transition-all duration-200",
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="horizontal" className="w-full my-2" />

          {/* Theme Toggler */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <AnimatedThemeToggler 
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-9 rounded-full hover:bg-secondary/80 transition-all duration-200",
                  )}
                />
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}

// Legacy export for backward compatibility (uses both docks)
export function NavigationDock() {
  return (
    <>
      <MainNavigationDock />
      <SocialNavigationDock />
    </>
  );
}
