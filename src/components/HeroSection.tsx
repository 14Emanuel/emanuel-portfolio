"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Bot, Cpu, Sparkles, Terminal, Globe } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow orbs for light sunlit pond */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-teal-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-rose-200/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bold Narrative & Specialization */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Status Pill: Frog & Pond Motif */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200 text-emerald-800 text-xs font-mono shadow-sm backdrop-blur-md self-start font-medium">
              <span className="text-sm">🐸</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Specialization: Autonomous AI Agents & Agentic Architectures</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Engineering{" "}
                <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 bg-clip-text text-transparent">
                  Autonomous AI Agents
                </span>{" "}
                & Agentic Systems.
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
                Hi, I&apos;m <span className="text-slate-950 font-semibold">{PERSONAL_INFO.name}</span>. I design self-orchestrating multi-agent pipelines, cognitive loops, and tool-augmented agentic software — anchored by low-level algorithmic rigor and real-world African infrastructure.
              </p>
            </div>

            {/* Core Capability Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 font-medium">
                <Bot className="w-3.5 h-3.5 text-teal-600" />
                <span>Multi-Agent Swarms & DAGs</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium">
                <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                <span>Systems Engineering in Go</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>Offline USSD / Vision AI</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold text-sm hover:from-teal-500 hover:to-emerald-500 transition-all shadow-lg shadow-teal-700/20 flex items-center gap-2 group"
              >
                <span>Inspect Agent Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#simulator"
                className="px-5 py-3 rounded-full border border-teal-200 bg-white hover:bg-teal-50 hover:border-teal-400 text-teal-800 font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <Terminal className="w-4 h-4 text-teal-600" />
                <span>Test Agent Pond Loop</span>
              </a>

              <a
                href="#story"
                className="px-5 py-3 rounded-full border border-slate-200 bg-white hover:text-slate-900 text-slate-700 font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>Field Work & Hackathons</span>
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 text-slate-700">
              <div>
                <p className="text-2xl font-bold font-mono text-teal-700">6+</p>
                <p className="text-xs text-slate-600 font-medium">Agentic & AI Engines</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-emerald-700">Zone01</p>
                <p className="text-xs text-slate-600 font-medium">Systems Mastery (Go)</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-rose-600">USSD/SMS</p>
                <p className="text-xs text-slate-600 font-medium">Construction Tech</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photo & Sunlit Pond Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl p-3 bg-white/95 border border-teal-200 shadow-2xl shadow-teal-900/10 backdrop-blur-sm group">
              {/* Photo Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                <Image
                  src="/images/lake-victoria-emanuel.jpeg"
                  alt="Emanuel Okoth at Lake Victoria"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Floating Lily Pad Watermark */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-teal-200 text-[11px] font-mono text-teal-800 flex items-center gap-1.5 shadow-sm font-medium">
                  <span>🪷</span>
                  <span>Lake Victoria, Kisumu</span>
                </div>

                {/* Bottom Story Snippet */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 border border-teal-100 backdrop-blur-md shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono text-emerald-700 uppercase tracking-wider font-bold">
                      Architect Philosophy
                    </span>
                    <span className="text-xs">🐸</span>
                  </div>
                  <p className="text-xs text-slate-700 italic line-clamp-2">
                    &ldquo;Calm waters, rapid cognition. Designing agent swarms that navigate ambiguity with elegance.&rdquo;
                  </p>
                </div>
              </div>

              {/* Decorative floating lotus flower pill */}
              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl bg-white border border-rose-200 text-xs font-mono text-rose-700 shadow-xl flex items-center gap-2">
                <span className="text-base animate-bounce">🪷</span>
                <div>
                  <p className="text-[10px] text-rose-500 font-bold uppercase">Zone01 &middot; Africa&apos;s Talking</p>
                  <p className="text-[11px] text-slate-800 font-semibold">Full-Stack & Systems Alum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
