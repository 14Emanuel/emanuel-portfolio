"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bot, Sparkles, Terminal, Compass, Layers, Mail, Github } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-teal-100 shadow-md shadow-teal-900/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center overflow-hidden group-hover:border-teal-400 transition-colors shadow-sm">
            <span className="text-base select-none group-hover:scale-110 transition-transform">🪷</span>
            <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 font-mono hidden sm:inline-block font-medium">
                AI & Agents
              </span>
            </div>
            <p className="text-[11px] text-teal-700 font-mono tracking-wider flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Agentic Systems Architect
            </p>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-teal-100 px-3 py-1.5 rounded-full backdrop-blur-sm text-xs font-semibold text-slate-600 shadow-sm">
          <a
            href="#specialization"
            className="px-3 py-1.5 rounded-full hover:text-teal-800 hover:bg-teal-50 transition-all flex items-center gap-1.5"
          >
            <Bot className="w-3.5 h-3.5 text-teal-600" />
            Specialization
          </a>
          <a
            href="#simulator"
            className="px-3 py-1.5 rounded-full hover:text-teal-800 hover:bg-teal-50 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            Agent Pond
          </a>
          <a
            href="#projects"
            className="px-3 py-1.5 rounded-full hover:text-teal-800 hover:bg-teal-50 transition-all flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            Projects
          </a>
          <a
            href="#story"
            className="px-3 py-1.5 rounded-full hover:text-teal-800 hover:bg-teal-50 transition-all flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            In The Field
          </a>
          <a
            href="#skills"
            className="px-3 py-1.5 rounded-full hover:text-teal-800 hover:bg-teal-50 transition-all flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-teal-600" />
            Stack
          </a>
        </nav>

        {/* Action button & Status */}
        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-950 hover:border-teal-400 hover:bg-teal-50 transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-500 hover:to-emerald-500 transition-all shadow-md shadow-teal-700/20 flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-600 bg-white"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-white border border-teal-100 shadow-xl flex flex-col gap-3 text-sm font-medium">
          <a
            href="#specialization"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-teal-700 py-1"
          >
            Specialization
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-teal-700 py-1"
          >
            Agent Pond Simulator
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-teal-700 py-1"
          >
            Featured Projects
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-teal-700 py-1"
          >
            In The Field & Photos
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-teal-700 py-1"
          >
            Engineering Stack
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 hover:text-teal-700 py-1"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
