"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PHOTO_STORIES, PhotoStory } from "@/data/portfolioData";
import { MapPin, Maximize2, X } from "lucide-react";

export default function StoryAndPhotos() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoStory | null>(null);

  return (
    <section id="story" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-medium">
            <span>🪷</span>
            <span>In The Field</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Building in the Trenches: <span className="bg-gradient-to-r from-teal-700 via-rose-600 to-emerald-700 bg-clip-text text-transparent">From Hackathons to Lake Victoria</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Software isn&apos;t just code in isolation. It&apos;s pitched to skeptical judges, tested on real telecom infrastructure, stress-tested in peer crucible sprints, and inspired by the natural serenity of our waters.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHOTO_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedPhoto(story)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-teal-100 hover:border-teal-300 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-xl hover:shadow-teal-900/10 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={story.src}
                  alt={story.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

                {/* Tag Pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-teal-200 text-[11px] font-mono text-teal-800 flex items-center gap-1.5 shadow-sm font-semibold">
                  <span className="text-xs">🪷</span>
                  <span>{story.tag}</span>
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {story.caption}
                  </p>
                </div>

                {story.location && (
                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                    <MapPin className="w-3 h-3" />
                    <span>{story.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-white border border-teal-200 shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:text-slate-950 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[55vh] min-h-[300px] bg-slate-950">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-white border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-teal-800 font-semibold">
                  <span>🪷</span>
                  <span className="uppercase">{selectedPhoto.tag}</span>
                  {selectedPhoto.location && (
                    <>
                      <span>&middot;</span>
                      <span className="text-emerald-700">{selectedPhoto.location}</span>
                    </>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{selectedPhoto.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
