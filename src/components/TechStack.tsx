"use client";

import React from "react";
import { SKILL_GROUPS } from "@/data/portfolioData";
import { Terminal, Cpu, Server } from "lucide-react";

export default function TechStack() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-medium">
            <span>🪷</span>
            <span>Tooling & Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 bg-clip-text text-transparent">Stack & Primitives</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            The technologies and mathematical foundations I wield to build deterministic, resilient agentic software.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.group}
              className="rounded-3xl p-7 bg-white border border-teal-100 hover:border-teal-300 backdrop-blur-md shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    {idx === 0 ? (
                      <Terminal className="w-4 h-4 text-teal-600" />
                    ) : idx === 1 ? (
                      <Server className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Cpu className="w-4 h-4 text-rose-500" />
                    )}
                    <span>{group.group}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-700 hover:border-teal-300 hover:bg-teal-50 transition-all font-mono font-medium"
                    >
                      <span>{item}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 text-center font-medium">
                Production-Tested &middot; Zero Speculative Hype
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
