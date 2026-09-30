"use client";

import React from "react";
import { Bot, Cpu, Sparkles, Workflow } from "lucide-react";
import { SPECIALIZATION_PILLARS } from "@/data/portfolioData";

export default function SpecializationGrid() {
  return (
    <section id="specialization" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-medium">
            <span>🪷</span>
            <span>Architectural Thesis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialization: <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 bg-clip-text text-transparent">Agentic AI Software Engineering</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            I don&apos;t just call LLM endpoints with static prompts. I build <strong className="text-slate-900 font-semibold">autonomous, goal-driven cognitive systems</strong> that reason, orchestrate tools, self-correct through recursive reflection, and execute across distributed environments.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIALIZATION_PILLARS.map((pillar, idx) => {
            const isLotus = pillar.accent === "lotus";
            const isMint = pillar.accent === "mint";

            return (
              <div
                key={pillar.title}
                className="group relative rounded-3xl p-7 bg-white border border-teal-100 hover:border-teal-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 flex flex-col justify-between"
              >
                <div>
                  {/* Card Icon & Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm ${
                        isLotus
                          ? "bg-rose-50 border-rose-200 text-rose-600"
                          : isMint
                          ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                          : "bg-teal-50 border-teal-200 text-teal-600"
                      }`}
                    >
                      {idx === 0 ? (
                        <Bot className="w-6 h-6" />
                      ) : idx === 1 ? (
                        <Cpu className="w-6 h-6" />
                      ) : (
                        <Sparkles className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-teal-700 transition-colors font-medium">
                      0{idx + 1} // PILLAR
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Keyword Pills */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2.5 font-semibold">
                    Core Primitives
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-mono"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Leap / Stepping Stone Metaphor Card */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-teal-50/80 via-emerald-50/60 to-teal-50/80 border border-teal-200 shadow-xl relative overflow-hidden backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-medium">
                <span>🐸</span>
                <span>The Cognitive Stepping-Stone Paradigm</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                How My Agentic Systems Operate: Leap, Verify, Settle.
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Like a frog gracefully navigating a pond of water lilies, an autonomous agent cannot afford blind leaps into uncertainty. Each step in my architecture is a verified transition across a directed graph: evaluating goal state, querying tool APIs, validating constraints, and settling onto the next stable observation.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5 bg-white border border-teal-200 p-4 rounded-2xl font-mono text-xs text-slate-700 shadow-sm">
              <div className="flex items-center justify-between text-teal-800 pb-2 border-b border-slate-100 font-bold">
                <span className="flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>Agent Loop Guards</span>
                </span>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  ONLINE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <span>Deterministic Fallbacks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Hallucination Verification Layer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Sub-Agent Swarm Delegation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
