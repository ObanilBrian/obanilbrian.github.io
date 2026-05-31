import * as React from "react";
import Image from "next/image";
import { LuMail, LuLinkedin, LuGithub, LuArrowRight } from "react-icons/lu";

export function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center" id="about">
      <div className="md:col-span-5 relative">
        <div className="absolute inset-0 bg-primary-container/20 blur-3xl rounded-full"></div>
        <div className="relative bg-surface-container rounded-xl border border-outline-variant p-6 md:p-8 aspect-square flex flex-col items-center justify-center space-y-6 md:space-y-8">
          <Image src="/avatar.webp" alt="Brian A. Obanil Avatar" width={400} height={400} unoptimized className="object-cover border border-outline-variant" />
          <div className="flex space-x-4">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-8 h-8"
              href="mailto:obanil.brian@outlook.com"
              title="obanil.brian@outlook.com"
            >
              <LuMail size={24} className="select-none" />
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-8 h-8"
              href="https://www.linkedin.com/in/obanilbrian"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <LuLinkedin size={24} className="select-none" />
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-8 h-8"
              href="https://github.com/ObanilBrian"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <LuGithub size={24} className="select-none" />
            </a>
          </div>
        </div>
      </div>
      <div className="md:col-span-7 space-y-6 md:space-y-8 text-left">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">about_me</h2>
          <p className="font-code-block text-code-block text-tertiary">~/docs/obanilbrian_cv</p>
        </div>
        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 md:space-y-5">
          <p>
            I am a full stack developer with over 8+ years of experience dedicated
            to building robust and scalable digital experiences. My approach
            combines technical precision with thoughtful user interface design,
            ensuring that every project is not only functional but also visually
            compelling.
          </p>
          <p>
            With a background rooted in problem-solving and systemic thinking, I
            have extensive experience in the Finance, E-commerce, and iGaming
            sectors. I hold a Bachelor’s Degree in Information Technology and thrive
            in environments that require translating complex requirements into
            clean, maintainable code.
          </p>
        </div>
        <a
          className="inline-flex items-center space-x-2 bg-primary text-on-primary px-6 py-3 rounded hover:bg-primary-container transition-colors duration-200 font-code-block text-code-block"
          href="/obanilbrian_cv.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <span>view_full_resume</span>
          <LuArrowRight size={14} className="select-none" />
        </a>
      </div>
    </section>
  );
}
