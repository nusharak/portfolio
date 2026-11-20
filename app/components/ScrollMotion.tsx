"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ScrollMotion({ children, className }: { children: ReactNode; className: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = scope.current;
    if (!root || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("motion-visible", entry.isIntersecting);
      }
    }, { rootMargin: "0px 0px -36px 0px" });

    for (const target of root.querySelectorAll("[data-motion]")) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return <div className={className} ref={scope}>{children}</div>;
}