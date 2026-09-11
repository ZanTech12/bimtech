import { services } from "@/lib/services";
import { ServiceHero } from "@/components/ServiceHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";

const service = services.find((s) => s.id === "neco-cbt");

export default function NecoCBTPage() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="NECO CBT Features" />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <img src="https://picsum.photos/seed/neco-student/700/525.jpg" alt="NECO Practice" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">
                Master NECO with confidence
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Our NECO CBT platform provides comprehensive preparation across all subjects. 
                Practice with real past questions, track your progress, and identify areas 
                that need improvement before exam day.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { label: "Subjects", value: "20+" },
                  { label: "Years Covered", value: "10+" },
                  { label: "Questions", value: "35K+" },
                  { label: "Avg. Score Boost", value: "25%" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-semibold text-accent-500">{s.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}