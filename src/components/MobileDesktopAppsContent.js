"use client";

import { services } from "../lib/services";
import { ServiceHero } from "./ServiceHero";
import { FeatureGrid } from "./FeatureGrid";
import { CTASection } from "./CTASection";
import { Smartphone, Monitor, Code2, CheckCircle2 } from "lucide-react";

const service = services.find((s) => s.id === "mobile-desktop-apps");

export default function MobileDesktopAppsContent() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="App Development Features" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">Cross-Platform Excellence</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">Build once, deploy seamlessly across iOS, Android, Windows, and macOS.</p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Mobile Mockup */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-80 bg-brand-950 rounded-[2.5rem] p-3 shadow-2xl border-4 border-slate-800">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
                    <div className="h-6 bg-brand-950 flex justify-center items-center">
                      <div className="w-12 h-1 bg-slate-700 rounded-full" />
                    </div>
                    <div className="flex-1 p-3 space-y-2">
                      <div className="w-16 h-16 bg-accent-100 rounded-xl" />
                      <div className="w-20 h-2 bg-slate-200 rounded" />
                      <div className="w-16 h-2 bg-slate-200 rounded" />
                      <div className="w-full h-8 bg-brand-100 rounded-lg mt-4" />
                      <div className="w-full h-8 bg-slate-100 rounded-lg" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-brand-950 font-medium text-sm">
                  <Smartphone className="w-4 h-4" /> Mobile
                </div>
              </div>

              {/* Desktop Mockup */}
              <div className="flex flex-col items-center md:col-span-2">
                <div className="w-full max-w-md bg-slate-800 rounded-xl p-2 shadow-2xl border border-slate-700">
                  <div className="flex items-center gap-1.5 px-2 py-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <Code2 className="w-4 h-4 text-accent-500" />
                      <span className="text-xs font-medium text-slate-700">BimTech Desktop App</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-slate-100 rounded" />
                      <div className="h-12 bg-slate-100 rounded" />
                      <div className="h-12 bg-accent-50 rounded" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="w-3/4 h-2 bg-slate-200 rounded" />
                      <div className="w-1/2 h-2 bg-slate-200 rounded" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-brand-950 font-medium text-sm">
                  <Monitor className="w-4 h-4" /> Desktop & Web
                </div>
              </div>
            </div>

            {/* Build Status Footer */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                CI/CD Pipeline Passed
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-brand-950 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live on App Store, Play Store & Web
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}