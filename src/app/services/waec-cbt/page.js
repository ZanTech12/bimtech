import { services } from "@/lib/services";
import { ServiceHero } from "@/components/ServiceHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";

const service = services.find((s) => s.id === "waec-cbt");

export default function WaecCBTPage() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="WAEC CBT Features" />

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { exam: "WASSCE (May/June)", desc: "West African Senior School Certificate Examination for school candidates.", count: "15K+ questions" },
              { exam: "WASSCE (Nov/Dec)", desc: "Private candidate examination with full past question coverage.", count: "10K+ questions" },
              { exam: "BECE", desc: "Basic Education Certificate Examination for junior secondary students.", count: "8K+ questions" },
            ].map((item) => (
              <div key={item.exam} className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="text-xs text-accent-500 font-semibold uppercase tracking-wider mb-3">{item.count}</div>
                <h3 className="text-lg font-semibold text-brand-950">{item.exam}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}