import * as React from "react";

export function Footer() {
  return (
    <footer className="bg-surface-container-low text-on-surface-variant font-code-block text-code-block w-full py-6 md:py-8 border-t border-outline-variant mt-20 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-4 md:gap-0">
        <div className="font-label-md text-label-md text-secondary mx-auto">
          © 2026 sys.admin // built_with_precision
        </div>
      </div>
    </footer>
  );
}
