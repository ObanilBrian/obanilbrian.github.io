import * as React from "react";
import { LuCode, LuServer, LuWrench } from "react-icons/lu";

export function Skills() {
  return (
    <section className="space-y-6 md:space-y-8 text-left" id="skills">
      <div>
        <h2 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">
          technical_skills
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-outline-variant to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend */}
        <div className="bg-surface-container border border-outline-variant rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors duration-200 group">
          <div className="flex items-center space-x-2 mb-4 md:mb-5">
            <LuCode className="text-tertiary select-none" size={20} />
            <h3 className="font-code-block text-code-block text-on-surface">frontend.tsx</h3>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            <span className="px-2 py-1 rounded-sm bg-primary-container text-on-primary-container border border-outline-variant font-label-md text-label-md">
              React
            </span>
            <span className="px-2 py-1 rounded-sm bg-primary-container text-on-primary-container border border-outline-variant font-label-md text-label-md">
              Next.js
            </span>
            <span className="px-2 py-1 rounded-sm bg-primary-container text-on-primary-container border border-outline-variant font-label-md text-label-md">
              HTML5
            </span>
            <span className="px-2 py-1 rounded-sm bg-primary-container text-on-primary-container border border-outline-variant font-label-md text-label-md">
              CSS3
            </span>
            <span className="px-2 py-1 rounded-sm bg-primary-container text-on-primary-container border border-outline-variant font-label-md text-label-md">
              JavaScript
            </span>
          </div>
        </div>
        {/* Backend */}
        <div className="bg-surface-container border border-outline-variant rounded-lg p-6 md:p-8 hover:border-tertiary/50 transition-colors duration-200 group">
          <div className="flex items-center space-x-2 mb-4 md:mb-5">
            <LuServer className="text-tertiary select-none" size={20} />
            <h3 className="font-code-block text-code-block text-on-surface">backend.ts</h3>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            <span className="px-2 py-1 rounded-sm bg-tertiary-container text-on-tertiary-container border border-outline-variant font-label-md text-label-md">
              Node.js
            </span>
            <span className="px-2 py-1 rounded-sm bg-tertiary-container text-on-tertiary-container border border-outline-variant font-label-md text-label-md">
              Express
            </span>
            <span className="px-2 py-1 rounded-sm bg-tertiary-container text-on-tertiary-container border border-outline-variant font-label-md text-label-md">
              REST API
            </span>
            <span className="px-2 py-1 rounded-sm bg-tertiary-container text-on-tertiary-container border border-outline-variant font-label-md text-label-md">
              Loopback.io
            </span>
            <span className="px-2 py-1 rounded-sm bg-tertiary-container text-on-tertiary-container border border-outline-variant font-label-md text-label-md">
              Apollo GraphQL
            </span>
          </div>
        </div>
        {/* Database & Tools */}
        <div className="bg-surface-container border border-outline-variant rounded-lg p-6 md:p-8 hover:border-secondary/50 transition-colors duration-200 group">
          <div className="flex items-center space-x-2 mb-4 md:mb-5">
            <LuWrench className="text-tertiary select-none" size={20} />
            <h3 className="font-code-block text-code-block text-on-surface">infrastructure.yml</h3>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            <span className="px-2 py-1 rounded-sm bg-secondary-container text-on-secondary-container border border-outline-variant font-label-md text-label-md">
              MongoDB
            </span>
            <span className="px-2 py-1 rounded-sm bg-secondary-container text-on-secondary-container border border-outline-variant font-label-md text-label-md">
              PostgreSQL
            </span>
            <span className="px-2 py-1 rounded-sm bg-secondary-container text-on-secondary-container border border-outline-variant font-label-md text-label-md">
              Git
            </span>
            <span className="px-2 py-1 rounded-sm bg-secondary-container text-on-secondary-container border border-outline-variant font-label-md text-label-md">
              AWS Lambda
            </span>
            <span className="px-2 py-1 rounded-sm bg-secondary-container text-on-secondary-container border border-outline-variant font-label-md text-label-md">
              CloudWatch
            </span>
            <span className="px-2 py-1 rounded-sm bg-secondary-container text-on-secondary-container border border-outline-variant font-label-md text-label-md">
              Agile
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
