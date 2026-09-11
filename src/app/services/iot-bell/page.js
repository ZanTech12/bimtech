import { services } from "@/lib/services";
import { ServiceHero } from "@/components/ServiceHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Bell, Wifi, Clock, Volume2, Shield, Smartphone } from "lucide-react";

const service = services.find((s) => s.id === "iot-bell");

export default function IoTBellPage() {
  const techFeatures = [
    { icon: Wifi, title: "Wi-Fi Connected", desc: "Connects to your school network for remote management and scheduling." },
    { icon: Clock, title: "Precision Timing", desc: "Atomic clock sync ensures bells ring at exactly the right moment." },
    { icon: Volume2, title: "Custom Tones", desc: "Upload custom bell tones or choose from our library of sounds." },
    { icon: Shield, title: "Power Backup", desc: "Built-in battery keeps the bell running during power outages." },
    { icon: Smartphone, title: "Mobile Control", desc: "Manage schedules, trigger bells, and monitor status from your phone." },
    { icon: Bell, title: "Multi-Zone", desc: "Different bell schedules for different buildings or sections." },
  ];

  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="IoT Bell Features" />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">
              Technical Specifications
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <Icon className="w-8 h-8 text-accent-500 mb-4" />
                  <h3 className="font-semibold text-brand-950">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{f.desc}</p>
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