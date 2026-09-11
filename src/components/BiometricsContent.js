"use client";

import { services } from "../lib/services";
import { ServiceHero } from "./ServiceHero";
import { FeatureGrid } from "./FeatureGrid";
import { CTASection } from "./CTASection";
import { Fingerprint, ScanFace, Monitor, BellRing, FileText, ShieldCheck } from "lucide-react";

const service = services.find((s) => s.id === "biometrics");

export default function BiometricsContent() {
  const methods = [
    { icon: Fingerprint, title: "Fingerprint Scanner", desc: "High-accuracy capacitive sensors with <0.01% error rate." },
    { icon: ScanFace, title: "Face Recognition", desc: "AI-powered facial recognition works even with masks." },
    { icon: Monitor, title: "Real-Time Dashboard", desc: "Live attendance monitoring with instant alerts." },
    { icon: BellRing, title: "Parent Alerts", desc: "SMS & email notifications when students are absent." },
    { icon: FileText, title: "Report Generation", desc: "Daily, weekly, monthly attendance reports with exports." },
    { icon: ShieldCheck, title: "Tamper-Proof", desc: "Anti-spoofing technology prevents fake attacks." },
  ];

  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="Biometrics Features" />
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">Dual Recognition Technology</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-brand-950">{m.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}