import type { ReactNode } from "react";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="section-label mb-4">
      <span className="relative ml-2 flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-primary" />
      </span>
      {children}
    </span>
  );
}

export default SectionLabel;
