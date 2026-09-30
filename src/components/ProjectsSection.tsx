"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { Github, Cpu, Bot, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI & Agents", "Systems & Go", "Full-Stack & Impact"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-medium">
              <span>🪷</span>
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Systems & <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-800 bg-clip-text text-transparent">Agentic Projects</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Production-grade code bridging LLM reasoning engines with low-level systems execution, offline telecom infrastructure, and discrete graph algorithms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold shadow-md shadow-teal-700/20"
                    : "bg-white text-slate-700 hover:text-slate-950 border border-slate-200 shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isAIAgent = project.category === "AI & Agents";
            const isSystems = project.category === "Systems & Go";

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl p-7 bg-white border border-teal-100 hover:border-teal-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-teal-900/5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category badge & links */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border flex items-center gap-1.5 font-medium ${
                        isAIAgent
                          ? "bg-rose-50 border-rose-200 text-rose-800"
                          : isSystems
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                          : "bg-teal-50 border-teal-200 text-teal-800"
                      }`}
                    >
                      {isAIAgent ? (
                        <Bot className="w-3 h-3 text-rose-600" />
                      ) : isSystems ? (
                        <Cpu className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Sparkles className="w-3 h-3 text-teal-600" />
                      )}
                      <span>{project.category}</span>
                    </span>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-950 hover:border-teal-400 transition-colors shadow-sm"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5 group-hover:text-teal-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-teal-700 mb-3 font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="space-y-2 mb-6 p-3.5 rounded-2xl bg-teal-50/40 border border-teal-100">
                    <p className="text-[11px] font-mono text-teal-900 uppercase tracking-wider font-bold">
                      Architectural Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {project.architectureHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-600 font-bold mt-0.5">&bull;</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom tags & metrics */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-medium">Impact Metric:</span>
                    <span className="text-emerald-700 font-bold">{project.metrics}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
