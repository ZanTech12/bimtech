"use client";

import { services } from "../lib/services";
import { ServiceHero } from "./ServiceHero";
import { FeatureGrid } from "./FeatureGrid";
import { CTASection } from "./CTASection";
import { Cpu, Eye, Activity, Zap } from "lucide-react";

const service = services.find((s) => s.id === "robotics-ai");

export default function RoboticsAiContent() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="Robotics & AI Features" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">Real-Time Telemetry & Vision</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">Monitor embedded systems and AI models with precision.</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-950 rounded-lg flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-medium text-brand-950">RoboController V4.2</div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded">
                <Activity className="w-3 h-3" /> System Active
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {/* Telemetry Stats */}
              <div className="bg-white p-4 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">CPU Core</span>
                  <Zap className="w-4 h-4 text-accent-500" />
                </div>
                <div className="text-xl font-semibold text-brand-950">42°C</div>
                <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full">
                  <div className="h-1.5 w-[40%] bg-emerald-500 rounded-full" />
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Power Draw</span>
                  <Zap className="w-4 h-4 text-accent-500" />
                </div>
                <div className="text-xl font-semibold text-brand-950">12.4W</div>
                <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full">
                  <div className="h-1.5 w-[65%] bg-accent-500 rounded-full" />
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Servo Load</span>
                  <Activity className="w-4 h-4 text-accent-500" />
                </div>
                <div className="text-xl font-semibold text-brand-950">76%</div>
                <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full">
                  <div className="h-1.5 w-[76%] bg-indigo-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* AI Vision Feed Mockup */}
            <div className="relative aspect-video bg-brand-950 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              {/* Bounding Box 1 */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-emerald-400 rounded-lg flex items-start justify-start p-1">
                <span className="bg-emerald-400 text-brand-950 text-[10px] px-1.5 py-0.5 rounded-br-md font-bold">Person 99%</span>
              </div>

              {/* Bounding Box 2 */}
              <div className="absolute bottom-1/4 right-1/3 w-24 h-20 border-2 border-accent-500 rounded-lg flex items-start justify-start p-1">
                <span className="bg-accent-500 text-white text-[10px] px-1.5 py-0.5 rounded-br-md font-bold">Object 87%</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-between items-end">
                <div className="text-white text-xs font-mono">
                  <div className="flex items-center gap-1"><Eye className="w-3 h-3" /> AI Vision Active</div>
                  <div className="opacity-70">Model: bimtech-vision-v3</div>
                </div>
                <div className="text-white text-xs font-mono opacity-70">30 FPS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}