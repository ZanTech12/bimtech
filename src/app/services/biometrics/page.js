import { services } from "@/lib/services";
import { ServiceHero } from "@/components/ServiceHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Fingerprint, ScanFace, Monitor, BellRing, FileText, ShieldCheck } from "lucide-react";

const service = services.find((s) => s.id === "biometrics");

export default function BiometricsPage() {
  const methods = [
    { icon: Fingerprint, title: "Fingerprint Scanner", desc: "High-accuracy capacitive fingerprint sensors with <0.01% error rate." },
    { icon: ScanFace, title: "Face Recognition", desc: "AI-powered facial recognition works even with masks and low light." },
    { icon: Monitor, title: "Real-Time Dashboard", desc: "Live attendance monitoring with instant alerts for absent students." },
    { icon: BellRing, title: "Parent Alerts", desc: "SMS & email notifications sent to parents when students are absent." },
    { icon: FileText, title: "Report Generation", desc: "Daily, weekly, monthly attendance reports with export options." },
    { icon: ShieldCheck, title: "Tamper-Proof", desc: "Anti-spoofing technology prevents fake fingerprint or photo attacks." },
  ];

  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="Biometrics Features" />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">
              Dual Recognition Technology
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Our system supports both fingerprint and facial recognition, giving you flexibility and redundancy.
            </p>
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