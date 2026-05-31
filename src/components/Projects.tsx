import * as React from "react";
import { LuShieldCheck, LuExternalLink, LuShield, LuCodeXml } from "react-icons/lu";

export function Projects() {
  return (
    <section className="space-y-6 md:space-y-8 text-left" id="projects">
      <div>
        <h2 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">projects</h2>
        <div className="h-px w-full bg-gradient-to-r from-outline-variant to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {/* Project 1 (PsychSpaces) */}
        {/* <article className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant group hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full">
          <div>
            <div className="h-44 bg-surface-container-high relative border-b border-outline-variant flex items-center justify-between px-6 overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTQwLCAxNDUsIDE1OCwgMC4xNSkiLz48L3N2Zz4=')] opacity-70"></div>

              <div
                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-lg bg-primary-container/20 border border-primary/20 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <LuShieldCheck size={24} />
              </div>

              <span className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-md font-label-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Completed / Live
              </span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-headline-md text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-200 leading-tight">
                  PsychSpaces: White-Labeled Practice Management SaaS
                </h3>
                <a
                  href="#"
                  className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded p-1 flex-shrink-0"
                  aria-label="Visit PsychSpaces Live Demo"
                >
                  <LuExternalLink size={20} />
                </a>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                A secure, white-labeled platform empowering clinical psychologists to independently manage their private
                teletherapy practices with complete brand autonomy. Engineered to bypass third-party marketplaces, the
                platform features a specialized tri-slot booking engine, manual payment verification, and secure patient
                workspaces for intake forms and homework. Architected with strict compliance to the Philippine Data Privacy
                Act (DPA), it utilizes row-level data isolation to guarantee patient confidentiality.
              </p>
            </div>
          </div>
          <div className="px-6 pb-6 pt-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-sm bg-surface-container-high text-on-surface border border-outline-variant font-label-md text-label-md">
                Next.js
              </span>
              <span className="px-2 py-1 rounded-sm bg-surface-container-high text-on-surface border border-outline-variant font-label-md text-label-md">
                React
              </span>
              <span className="px-2 py-1 rounded-sm bg-surface-container-high text-on-surface border border-outline-variant font-label-md text-label-md">
                Node.js
              </span>
              <span className="px-2 py-1 rounded-sm bg-primary-container/20 text-primary border border-primary/20 font-label-md text-label-md font-semibold flex items-center gap-1">
                <LuShield size={12} aria-hidden="true" />
                DPA Compliant
              </span>
            </div>
          </div>
        </article> */}

        {/* Project 2 (Placeholder WIP Card) */}
        <article className="bg-surface-container/20 border-2 border-dashed border-outline-variant hover:border-primary/40 rounded-xl overflow-hidden flex flex-col justify-between h-full group hover:-translate-y-1 transition-all duration-300">
          <div>
            {/* Card Header with custom dotted background and WIP badge */}
            <div className="h-44 bg-surface-container-high/40 relative border-b border-dashed border-outline-variant flex items-center justify-between px-6 overflow-hidden">
              {/* Gridlines or Blueprint structure */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(128,128,128,0.15)_1px,transparent_1px)] bg-[size:16px_16px] opacity-70"></div>

              {/* Placeholder Code2 Icon */}
              <div
                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-lg border border-dashed border-outline-variant/60 bg-surface-container-high/20 text-on-surface-variant/40 group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              >
                <LuCodeXml size={22} />
              </div>

              {/* Work In Progress (WIP) Pill */}
              <span className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-md font-label-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                Work in Progress (WIP)
              </span>
            </div>
            {/* Card Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-headline-md text-headline-sm text-on-surface-variant/80 group-hover:text-primary transition-colors duration-200 leading-tight">
                  Project: [TBD // Under Development]
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant/60 leading-relaxed italic">
                Currently architecting an upcoming platform. Tech stack decisions, feature specifications, and initial
                build releases will be updated here.
              </p>
            </div>
          </div>
          {/* Tech Stack Tags */}
          <div className="px-6 pb-6 pt-2">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-sm bg-surface-container/20 text-on-surface-variant/50 border border-dashed border-outline-variant font-label-md text-label-md">
                [Stack Pending]
              </span>
              <span className="px-2 py-1 rounded-sm bg-surface-container/20 text-on-surface-variant/50 border border-dashed border-outline-variant font-label-md text-label-md">
                [SaaS Core]
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
