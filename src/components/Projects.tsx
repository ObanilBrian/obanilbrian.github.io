import * as React from "react";
import { LuExternalLink, LuShield, LuListTodo } from "react-icons/lu";

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

        {/* Project 2 (ToDo Loo!) */}
        <article className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant group hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full">
          <div>
            <div className="h-44 bg-surface-container-high relative border-b border-outline-variant flex items-center justify-between px-6 overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTQwLCAxNDUsIDE1OCwgMC4xNSkiLz48L3N2Zz4=')] opacity-70"></div>

              <div
                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-lg bg-primary-container/20 border border-primary/20 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <LuListTodo size={24} />
              </div>

              <span className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-md font-label-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Completed / Live
              </span>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-headline-md text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-200 leading-tight">
                  ToDo Loo!
                </h3>
                <a
                  href="https://todo-loo-seven.vercel.app/"
                  className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded p-1 flex-shrink-0"
                  aria-label="Visit ToDo Loo! Live Demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuExternalLink size={20} />
                </a>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                A personal challenge to architect a Kanban-style task management application capable of handling large volumes of items while ensuring everything remains fast, interactive, and cost-effective. 
                Features intelligent fractional positioning for nested insertions without full column reordering, 
                and smart drag-and-drop with batched database updates to reduce API load by ~80%. 
                Built with a responsive UI, infinite scroll pagination, and secure JWT authentication.
              </p>
              <div className="mt-2 p-3 rounded-md bg-surface-container-highest border border-outline-variant/50 text-sm">
                <p className="font-medium text-on-surface">Demo Account:</p>
                <p className="text-on-surface-variant mt-1">Username: <span className="font-mono bg-surface-container px-1 py-0.5 rounded text-primary">averybusyperson</span></p>
                <p className="text-on-surface-variant mt-1">Password: <span className="font-mono bg-surface-container px-1 py-0.5 rounded text-primary">imbusy123</span></p>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6 pt-2 mt-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-sm bg-surface-container-high text-on-surface border border-outline-variant font-label-md text-label-md">
                Next.js
              </span>
              <span className="px-2 py-1 rounded-sm bg-surface-container-high text-on-surface border border-outline-variant font-label-md text-label-md">
                React
              </span>
              <span className="px-2 py-1 rounded-sm bg-surface-container-high text-on-surface border border-outline-variant font-label-md text-label-md">
                MongoDB
              </span>
              <span className="px-2 py-1 rounded-sm bg-primary-container/20 text-primary border border-primary/20 font-label-md text-label-md font-semibold flex items-center gap-1">
                <LuShield size={12} aria-hidden="true" />
                JWT Auth
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
