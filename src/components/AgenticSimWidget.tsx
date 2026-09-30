"use client";

import React, { useState } from "react";
import { Play, RotateCcw, CheckCircle2, Terminal } from "lucide-react";

interface SimulationScenario {
  id: string;
  name: string;
  category: string;
  goal: string;
  steps: {
    lilyName: string;
    action: string;
    thought: string;
    toolUsed: string;
  }[];
}

const SCENARIOS: SimulationScenario[] = [
  {
    id: "yaya-ussd",
    name: "Dispatch Construction Crew (USSD)",
    category: "Yaya AI Agent",
    goal: "Parse SMS trade request: 'Need 4 certified masons for site in Kisumu tomorrow 7am', match vetted artisans, and send confirmation prompts.",
    steps: [
      {
        lilyName: "Goal & Intent Parsing",
        action: "Extract entities: Trade=Mason, Quantity=4, Location=Kisumu, Time=07:00.",
        thought: "Worker availability graph queried. Filter candidates with verified site badges.",
        toolUsed: "yaya_nlp_parser()",
      },
      {
        lilyName: "Constraint & Proximity Leap",
        action: "Rank top 12 active masons within 8km radius of site coordinates.",
        thought: "Optimizing for low transit friction and positive contractor feedback history.",
        toolUsed: "geo_radius_matcher()",
      },
      {
        lilyName: "USSD Telecom Broadcast",
        action: "Dispatch session invitations via Africa's Talking SMS/USSD gateway.",
        thought: "Waiting for bidirectional USSD handshake confirmation from worker SIMs.",
        toolUsed: "africas_talking_ussd.send()",
      },
      {
        lilyName: "State Settlement & Ledger",
        action: "4/4 masons accepted. Job confirmed and recorded on Kitabu Digital ledger.",
        thought: "Lock job state. Initialize meal credit allocations for day 1.",
        toolUsed: "kitabu_ledger.record()",
      },
    ],
  },
  {
    id: "lemin-routing",
    name: "Ant Swarm Disjoint Flow (lem-in)",
    category: "Systems & Go Algorithm",
    goal: "Simulate 150 ants navigating bottleneck maze with zero collision and minimum turn latency.",
    steps: [
      {
        lilyName: "Graph Adjacency Discovery",
        action: "Parse node coordinates and build residual capacity matrix in Go memory.",
        thought: "Verify single-source start room and sink room accessibility.",
        toolUsed: "parse_anthill_graph()",
      },
      {
        lilyName: "BFS Augmenting Paths",
        action: "Find all vertex-disjoint paths using BFS residual exploration.",
        thought: "Balancing path length vs ant volume distribution to minimize total turns.",
        toolUsed: "edmonds_karp_paths()",
      },
      {
        lilyName: "Turn Scheduler Allocation",
        action: "Assign ant queues across disjoint channels based on path length delta.",
        thought: "Avoid bottleneck collisions: strictly 1 ant per room per turn cycle.",
        toolUsed: "dispatch_turn_schedule()",
      },
      {
        lilyName: "Optimal Settlement",
        action: "150/150 ants safely evacuated in 22 turns (theoretical minimum: 22).",
        thought: "Zero allocations during hot loop. Execution completed in 1.4ms.",
        toolUsed: "verify_zero_collisions()",
      },
    ],
  },
  {
    id: "fabric-vision",
    name: "Fabric Match Drape & Opacity",
    category: "Computer Vision Agent",
    goal: "Evaluate user-submitted apparel image for fabric thickness, sheer risk, and drape contour.",
    steps: [
      {
        lilyName: "Luminance & Histogram Scan",
        action: "Extract regional pixel transparency across front and backlit perspectives.",
        thought: "Segment background light bleed to calculate true opacity coefficient.",
        toolUsed: "calc_opacity_vector()",
      },
      {
        lilyName: "Silhouette Geometry",
        action: "Map edge curvature and gravity drape tangents against reference mannequin mesh.",
        thought: "Determine if textile is rigid linen, lightweight viscose, or sheer chiffon.",
        toolUsed: "drape_curvature_heuristics()",
      },
      {
        lilyName: "Reasoning & Confidence Check",
        action: "Correlate opacity score with real-world sizing tolerance rules.",
        thought: "Guardrail check: flag image blurriness if lighting is ambiguous.",
        toolUsed: "llm_attribute_reasoner()",
      },
      {
        lilyName: "Fit Scorecard Generation",
        action: "Output structured report: Opacity 88% (Opaque), Drape: Moderate Flow, Fit Score 9.4/10.",
        thought: "Shopper receives honest, marketing-free fit clarity.",
        toolUsed: "render_fit_dossier()",
      },
    ],
  },
];

export default function AgenticSimWidget() {
  const [selectedScenario, setSelectedScenario] = useState<SimulationScenario>(SCENARIOS[0]);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const startSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < selectedScenario.steps.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1400);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStep(-1);
  };

  return (
    <section id="simulator" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-medium">
            <span>🐸</span>
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Agentic Pond: <span className="bg-gradient-to-r from-teal-700 via-rose-600 to-emerald-700 bg-clip-text text-transparent">Cognitive Leap Loop</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Test how my autonomous systems solve real tasks. Watch the agent &ldquo;leap&rdquo; across verified stepping stones (lily pads) to plan, call tools, reflect, and settle.
          </p>
        </div>

        {/* Simulator Box */}
        <div className="rounded-3xl p-6 sm:p-8 bg-white border border-teal-100 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Top Controls: Scenario Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-500 mr-1 font-semibold">Select Pipeline:</span>
              {SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setSelectedScenario(sc);
                    resetSimulation();
                  }}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                    selectedScenario.id === sc.id
                      ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold shadow-md shadow-teal-700/20"
                      : "bg-slate-50 text-slate-700 hover:text-slate-950 border border-slate-200"
                  }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={startSimulation}
                disabled={isRunning}
                className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                  isRunning
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                    : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-700/20"
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isRunning ? "Hopping..." : "Trigger Cognitive Leap"}</span>
              </button>

              <button
                onClick={resetSimulation}
                className="p-2 rounded-full border border-slate-200 text-slate-500 hover:text-slate-950 hover:border-teal-400 transition-colors"
                title="Reset loop"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Scenario Goal Banner */}
          <div className="my-6 p-4 rounded-2xl bg-teal-50/60 border border-teal-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-teal-800 uppercase tracking-wider font-bold">
                Active Goal Directive
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium">{selectedScenario.goal}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-white border border-teal-200 text-teal-800 font-semibold shadow-sm">
                {selectedScenario.category}
              </span>
            </div>
          </div>

          {/* Stepping Stone Lily Pads Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            {selectedScenario.steps.map((st, i) => {
              const isActive = currentStep === i;
              const isCompleted = currentStep > i;

              return (
                <div
                  key={st.lilyName}
                  className={`relative rounded-2xl p-5 border transition-all duration-500 flex flex-col justify-between min-h-[170px] ${
                    isActive
                      ? "bg-gradient-to-b from-teal-50 to-white border-teal-500 shadow-xl shadow-teal-700/10 scale-[1.03]"
                      : isCompleted
                      ? "bg-emerald-50/70 border-emerald-300 text-slate-800"
                      : "bg-slate-50 border-slate-200 text-slate-500"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base select-none">
                        {isActive ? "🐸" : isCompleted ? "🪷" : "🌱"}
                      </span>
                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive
                            ? "text-teal-700"
                            : isCompleted
                            ? "text-emerald-700"
                            : "text-slate-400"
                        }`}
                      >
                        Step 0{i + 1}
                      </span>
                    </div>

                    {isCompleted && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 animate-in fade-in" />
                    )}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                    )}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h4
                      className={`text-sm font-bold ${
                        isActive ? "text-slate-900" : isCompleted ? "text-slate-800" : "text-slate-500"
                      }`}
                    >
                      {st.lilyName}
                    </h4>
                    <p className="text-xs leading-relaxed line-clamp-3 font-normal">
                      {st.action}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-600 truncate max-w-[140px] font-medium">{st.toolUsed}</span>
                    {isActive && <span className="text-teal-700 font-bold">ACTIVE</span>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Agent Terminal Log */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-200 shadow-md">
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-2 text-teal-300">
                <Terminal className="w-3.5 h-3.5" />
                <span>Agent Execution Stream</span>
              </span>
              <span className="text-[11px] text-slate-400">
                {currentStep === -1
                  ? "Status: Idle. Click 'Trigger Cognitive Leap' to execute."
                  : currentStep === selectedScenario.steps.length - 1 && !isRunning
                  ? "Status: Goal Settled & Verified."
                  : `Status: Executing Step ${currentStep + 1}/${selectedScenario.steps.length}`}
              </span>
            </div>

            <div className="pt-3 min-h-[60px] flex items-center">
              {currentStep === -1 ? (
                <p className="text-slate-400 italic">
                  &gt; Waiting for prompt trigger. The agent will execute step-by-step verification without hallucination.
                </p>
              ) : (
                <div className="space-y-1 w-full animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-teal-300">
                    <span className="text-emerald-400">&gt; Thought:</span>
                    <span>{selectedScenario.steps[currentStep].thought}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-rose-400">&gt; Invoking:</span>
                    <code className="text-pink-300 bg-pink-950/40 px-1.5 py-0.5 rounded">
                      {selectedScenario.steps[currentStep].toolUsed}
                    </code>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
