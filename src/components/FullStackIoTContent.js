"use client";

import { services } from "../lib/services";
import { ServiceHero } from "./ServiceHero";
import { FeatureGrid } from "./FeatureGrid";
import { CTASection } from "./CTASection";
import { Router, Wifi, Server, CheckCircle2 } from "lucide-react";

const service = services.find((s) => s.id === "full-stack-iot");

export default function FullStackIoTContent() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="IoT Engineering Features" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">Device Mesh Management</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">Control and monitor your entire IoT infrastructure from a single pane of glass.</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-950 rounded-lg flex items-center justify-center">
                  <Server className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-medium text-brand-950">IoT Network Hub</div>
              </div>
              <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded">All Systems Operational</div>
            </div>

            <div className="space-y-4">
              {/* IoT Device 1 */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between hover:border-brand-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                    <Router className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-950">Smart Bell Terminal A</h4>
                    <p className="text-xs text-slate-500">Location: Block A · Uptime: 45d 3h</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-3">
                  <span className="text-xs text-slate-500 hidden sm:block">32ms</span>
                  <div className="flex items-center gap-1.5 text-emerald-500 font-medium text-xs">
                    <Wifi className="w-4 h-4" /> Connected
                  </div>
                </div>
              </div>

              {/* IoT Device 2 */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between hover:border-brand-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                    <Router className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-950">Biometric Attendance Scanner</h4>
                    <p className="text-xs text-slate-500">Location: Main Gate · Uptime: 12d 8h</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-3">
                  <span className="text-xs text-slate-500 hidden sm:block">45ms</span>
                  <div className="flex items-center gap-1.5 text-emerald-500 font-medium text-xs">
                    <Wifi className="w-4 h-4" /> Connected
                  </div>
                </div>
              </div>

              {/* IoT Device 3 - Updating */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between hover:border-brand-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                    <Router className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-950">Environment Sensor (Temp/Humidity)</h4>
                    <p className="text-xs text-slate-500">Location: Lab 1 · Uptime: 3d 2h</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-3">
                  <span className="text-xs text-slate-500 hidden sm:block">18ms</span>
                  <div className="flex items-center gap-1.5 text-indigo-500 font-medium text-xs">
                    <CheckCircle2 className="w-4 h-4 animate-pulse" /> Syncing
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Stats */}
            <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-semibold text-brand-950">24</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Nodes Online</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-brand-950">99.9%</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Mesh Uptime</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-brand-950">1.2GB</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Data Synced Today</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}