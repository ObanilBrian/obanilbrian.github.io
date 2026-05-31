import * as React from "react";

export function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[614px] w-full" id="root">
      <div className="w-full max-w-4xl mx-auto min-w-0 bg-surface-container-lowest rounded-lg border border-outline-variant shadow-lg overflow-hidden backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="bg-surface-container px-md py-sm flex items-center justify-between border-b border-outline-variant">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
            <div className="w-3 h-3 rounded-full bg-tertiary-container"></div>
          </div>
          <div className="font-code-block text-code-block text-on-surface-variant text-center flex-1 select-none">
            developer.js - ~/portfolio
          </div>
        </div>
        {/* Terminal Content */}
        <div className="p-lg font-code-block text-code-block overflow-x-auto">
          <pre className="m-0 leading-loose text-left">
            <span className="code-keyword">const</span>{" "}
            <span className="code-property">Developer</span>{" "}
            <span className="code-punctuation">{"= {"}</span>
            {"\n    "}
            <span className="code-property">name</span>
            <span className="code-punctuation">:</span>{" "}
            <span className="code-string">&quot;Brian A. Obanil&quot;</span>
            <span className="code-punctuation">,</span>
            {"\n    "}
            <span className="code-property">role</span>
            <span className="code-punctuation">:</span>{" "}
            <span className="code-string">&quot;Full Stack Developer&quot;</span>
            <span className="code-punctuation">,</span>
            {"\n    "}
            <span className="code-property">status</span>
            <span className="code-punctuation">:</span>{" "}
            <span className="code-string">&quot;Actively building solutions&quot;</span>
            <span className="code-punctuation">,</span>
            {"\n    "}
            <span className="code-property">links</span>
            <span className="code-punctuation">:</span> {"{"}
            {"\n        "}
            <span className="code-property">email</span>
            <span className="code-punctuation">:</span>{" "}
            <span className="code-string">
              &quot;
              <a href="mailto:obanil.brian@outlook.com" className="underline hover:text-primary-container transition-colors">
                obanil.brian@outlook.com
              </a>
              &quot;
            </span>
            <span className="code-punctuation">,</span>
            {"\n        "}
            <span className="code-property">github</span>
            <span className="code-punctuation">:</span>{" "}
            <span className="code-string">
              &quot;
              <a
                href="https://github.com/ObanilBrian"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary-container transition-colors"
              >
                https://github.com/ObanilBrian
              </a>
              &quot;
            </span>
            <span className="code-punctuation">,</span>
            {"\n        "}
            <span className="code-property">linkedin</span>
            <span className="code-punctuation">:</span>{" "}
            <span className="code-string">
              &quot;
              <a
                href="https://www.linkedin.com/in/obanilbrian"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-primary-container transition-colors"
              >
                https://www.linkedin.com/in/obanilbrian
              </a>
              &quot;
            </span>
            <span className="code-punctuation">,</span>
            {"\n    "}{"}"}
            {"\n    "}
            <span className="code-function">init</span>
            <span className="code-punctuation">:</span>{" "}
            <span className="code-keyword">function</span>
            <span className="code-punctuation">() {"{"}</span>
            {"\n        "}
            <span className="code-property">console</span>
            <span className="code-punctuation">.</span>
            <span className="code-function">log</span>
            <span className="code-punctuation">(</span>
            <span className="code-string">`Hello, World! I am ${"{"}</span>
            <span className="code-keyword">this</span>
            <span className="code-punctuation">.</span>
            <span className="code-property">name</span>
            <span className="code-string">{"}"}.`</span>
            <span className="code-punctuation">);</span>
            {"\n    "}
            <span className="code-punctuation">{"}"}</span>
            {"\n"}
            <span className="code-punctuation">{"};"}</span>
            {"\n\n"}
            <span className="code-property">Developer</span>
            <span className="code-punctuation">.</span>
            <span className="code-function">init</span>
            <span className="code-punctuation">();</span>{" "}
            <span className="code-punctuation">
              {"// Output: Hello, World! I am Brian A. Obanil."}
            </span>
            {"\n"}
            <span className="animate-pulse">_</span>
          </pre>
        </div>
      </div>
    </section>
  );
}
