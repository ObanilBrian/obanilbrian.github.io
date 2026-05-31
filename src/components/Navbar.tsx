"use client";

import * as React from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export function Navbar() {
  const [isDark, setIsDark] = React.useState<boolean>(false);

  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isThemeDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    if (isThemeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    const timer = setTimeout(() => {
      setIsDark(isThemeDark);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    document.documentElement.style.setProperty("--click-x", `${x}px`);
    document.documentElement.style.setProperty("--click-y", `${y}px`);

    const toggleTheme = () => {
      const nextDark = !document.documentElement.classList.contains("dark");
      if (nextDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      setIsDark(nextDark);
    };

    if (document.startViewTransition) {
      document.startViewTransition(toggleTheme);
    } else {
      toggleTheme();
    }
  };

  return (
    <nav className="bg-surface/80 backdrop-blur-md text-primary font-body-md text-body-md fixed top-0 w-full z-50 border-b border-outline-variant">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16">
        <a
          className="font-headline-lg text-headline-md text-primary hover:text-primary-container transition-all duration-200 opacity-80 scale-95"
          href="#"
        >
          dev.init(&quot;Brian&quot;)
        </a>
        <div className="hidden md:flex space-x-lg md:space-x-8">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#root"
          >
            root
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#about"
          >
            about
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#skills"
          >
            skills
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#experience"
          >
            experience
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#projects"
          >
            projects
          </a>
        </div>
        <button
          id="theme-toggle"
          aria-label="Toggle theme"
          onClick={handleToggle}
          className="hover:text-primary transition-all duration-200 opacity-80 scale-95 cursor-pointer"
        >
          {isDark ? (
            <LuSun size={20} className="select-none" />
          ) : (
            <LuMoon size={20} className="select-none" />
          )}
        </button>
      </div>
    </nav>
  );
}
