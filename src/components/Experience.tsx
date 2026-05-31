import * as React from "react";

export function Experience() {
  return (
    <section className="space-y-6 md:space-y-8 text-left" id="experience">
      <div>
        <h2 className="font-headline-md text-headline-md text-primary mb-3 md:mb-4">
          work_experience
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-outline-variant to-transparent"></div>
      </div>
      <div>
        <h4 className="font-headline-md text-headline-xs text-primary mb-3 md:mb-4">
          <span className="text-tertiary">brian@portfolio</span>
          <span className="text-on-surface">:</span>
          <span className="text-primary-container">~$</span> git log --all
        </h4>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 md:p-8 font-code-block text-code-block break-words space-y-8 md:space-y-10">
        {/* Arch Global Services */}
        <div className="space-y-2">
          <div className="git-commit">commit 8f3a1c9</div>
          <div className="text-on-surface text-left">
            Company: <span className="git-author">Arch Global Services</span>&nbsp;&lt;Senior Software Engineer&gt;
          </div>
          <div className="text-on-surface text-left">
            Date: <span className="git-date">Feb 2025 - Present</span>
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed text-left">
            feat(arch-global): implement internal automation and MongoDB data quality tools
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed space-y-1.5 text-left">
            <p>* Developed internal automation tools that reduced manual tasks by 30%, improving team efficiency and productivity.</p>
            <p>* Implemented data quality monitoring solutions for MongoDB databases, enhancing data integrity and reducing errors by 25%.</p>
          </div>
        </div>

        {/* CoreX Studio */}
        <div className="space-y-2">
          <div className="git-commit">commit d4e2b7a</div>
          <div className="text-on-surface text-left">
            Company: <span className="git-author">CoreX Studio</span>&nbsp;&lt;Senior Software Developer&gt;
          </div>
          <div className="text-on-surface text-left">
            Date: <span className="git-date">July 2022 - Feb 2025</span>
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed text-left">
            perf(corex-studio): optimize React/Next.js architecture for 10k+ concurrent users
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed space-y-1.5 text-left">
            <p>* Led a critical initiative to enhance platform scalability for 10,000+ concurrent users, boosting site performance by 20%.</p>
            <p>* Optimized React and Next.js architecture, cutting page load times by 15% and reducing server load by 25%.</p>
            <p>* Delivered a faster, more robust, and highly available user experience for a high-traffic online casino platform.</p>
          </div>
        </div>

        {/* BrightStores */}
        <div className="space-y-2">
          <div className="git-commit">commit 1a9c5f3</div>
          <div className="text-on-surface text-left">
            Company: <span className="git-author">BrightStores, Inc.</span>&nbsp;&lt;Front-end Developer&gt;
          </div>
          <div className="text-on-surface text-left">
            Date: <span className="git-date">Oct 2020 - July 2022</span>
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed text-left">
            feat(brightstores): develop flagship e-commerce theme and migrate to Next.js
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed space-y-1.5 text-left">
            <p>* Developed a flagship e-commerce theme that cut new project development time by 30% and was adopted across 50+ client stores.</p>
            <p>* Drove higher client retention by delivering high-quality custom solutions and maintaining 99.9% system uptime.</p>
            <p>* Spearheaded the migration of company websites to Next.js, significantly improving SEO performance and core web vitals.</p>
          </div>
        </div>

        {/* SM Retail */}
        <div className="space-y-2">
          <div className="git-commit">commit e7b2d41</div>
          <div className="text-on-surface text-left">
            Company: <span className="git-author">SM Retail, Inc.</span>&nbsp;&lt;IT Associate&gt;
          </div>
          <div className="text-on-surface text-left">
            Date: <span className="git-date">Oct 2019 - Sept 2020</span>
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed text-left">
            feat(sm-retail): ship full-stack enterprise applications and AWS serverless solutions
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed space-y-1.5 text-left">
            <p>* Developed and maintained full-stack enterprise applications using Node.js and React, improving internal workflows and reducing manual processes by 25%.</p>
            <p>* Implemented AWS serverless solutions that enhanced system scalability and reduced infrastructure costs by 20%.</p>
            <p>* Collaborated with cross-functional teams to deliver high-impact projects that supported the company’s digital transformation initiatives.</p>
          </div>
        </div>

        {/* Metrobank */}
        <div className="space-y-2">
          <div className="git-commit">commit 5c8f0e2</div>
          <div className="text-on-surface text-left">
            Company: <span className="git-author">Metrobank</span>&nbsp;&lt;Programmer Analyst&gt;
          </div>
          <div className="text-on-surface text-left">
            Date: <span className="git-date">Dec 2018 - Sept 2019</span>
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed text-left">
            feat(metrobank): build secure wealth management app and microservices architecture
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed space-y-1.5 text-left">
            <p>* Developed and maintained internal banking applications, improving transaction processing efficiency by 15%.</p>
            <p>* Collaborated with cross-functional teams to implement new features and resolve critical bugs, enhancing overall system reliability.</p>
            <p>* Participated in the migration of legacy systems to modern technologies, contributing to a smoother transition and improved performance.</p>
          </div>
        </div>

        {/* Medilink */}
        <div className="space-y-2">
          <div className="git-commit">commit 3b6a9d4</div>
          <div className="text-on-surface text-left">
            Company: <span className="git-author">Medilink Network, Inc.</span>&nbsp;&lt;Software Engineer&gt;
          </div>
          <div className="text-on-surface text-left">
            Date: <span className="git-date">June 2017 - Sept 2018</span>
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed text-left">
            feat(medilink): engineer 30+ REST APIs and mentor junior developers
          </div>
          <div className="pl-8 pt-2 text-on-surface-variant leading-relaxed space-y-1.5 text-left">
            <p>* Engineered and maintained 30+ REST APIs using Node.js and Express, supporting critical healthcare applications and improving data accessibility for medical professionals.</p>
            <p>* Mentored junior developers, fostering a collaborative team environment and contributing to the professional growth of the engineering team.</p>
            <p>* Collaborated with cross-functional teams to deliver high-quality software solutions that met the needs of healthcare providers and patients.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
