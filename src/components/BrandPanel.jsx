import React from 'react';

export default function BrandPanel() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-[#18181B] border-r border-[#27272A] flex-col justify-between p-12 select-none">
      {/* Top Section: Minimalist Logo/Identifier */}
      <div className="flex items-center space-x-3">
        <div className="w-4 h-4 bg-[#F4F4F5] border border-[#71717A]" aria-hidden="true"></div>
        <span className="text-sm font-semibold tracking-wider text-[#F4F4F5] uppercase">
          BR-01 // SYSTEM
        </span>
      </div>

      {/* Middle Section: Brutalist Core Statement */}
      <div className="max-w-md">
        <h1 className="text-4xl font-semibold tracking-tight text-[#F4F4F5] leading-none mb-4">
          ENGINEERED CALM.
        </h1>
        <p className="text-sm text-[#A1A1AA] leading-relaxed">
          A high-performance interface designed for structural discipline, zero-radius geometry, and absolute operational clarity.
        </p>
      </div>

      {/* Bottom Section: Technical Metadata */}
      <div className="flex justify-between items-end text-[10px] font-mono text-[#A1A1AA]">
        <div>
          <p>LATENCY: 0.04ms</p>
          <p>SECURE CHANNEL // AES-256</p>
        </div>
        <div>
          <p>VER: 2026.10.07</p>
        </div>
      </div>
    </div>
  );
}
