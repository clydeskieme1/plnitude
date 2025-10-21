import React from "react";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Scaletopia-style base gradient: dark with teal/cyan radial accents */}
      <div className="absolute inset-0 bg-gradient-base animate-hue-shift opacity-100"></div>

      {/* Floating animated gradient blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
    </div>
  );
}
