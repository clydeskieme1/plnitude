import React from "react";

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950 via-cyan-900 to-teal-950 animate-hue-shift opacity-95"></div>

      {/* Floating animated gradient blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
    </div>
  );
}
