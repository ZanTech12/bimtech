"use client";

import { services } from "../lib/services";
import { ServiceHero } from "./ServiceHero";
import { FeatureGrid } from "./FeatureGrid";
import { CTASection } from "./CTASection";

const service = services.find((s) => s.id === "online-grading");

export default function OnlineGradingContent() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="Grading System Features" />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-950 tracking-tight">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Upload Scores", desc: "Teachers enter or upload student scores via Excel/CSV." },
              { step: "2", title: "Auto-Compute", desc: "System calculates grades, GPA, class positions instantly." },
              { step: "3", title: "Review & Approve", desc: "Admin reviews results and approves for publication." },
              { step: "4", title: "Publish & Share", desc: "Results published to student/parent portals and PDF exports." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-accent-500 text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-brand-950">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}