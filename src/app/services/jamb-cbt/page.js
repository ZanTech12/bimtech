import { services } from "@/lib/services";
import { ServiceHero } from "@/components/ServiceHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";

const service = services.find((s) => s.id === "jamb-cbt");

export default function JambCBTPage() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="JAMB CBT Features" />

      {/* CBT Demo Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">
              Real JAMB Exam Experience
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Our CBT interface mirrors the exact JAMB UTME environment — same layout, 
              timer, navigation, and keyboard shortcuts.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-sm font-medium text-brand-950">JAMB CBT Practice</div>
              <div className="px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded">
                01:59:42
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-slate-500">Question 15 of 60 — Use of English</p>
              <p className="text-base font-medium text-brand-950">
                Choose the option that best completes the sentence: &ldquo;The manager, ________ was very impressed with the presentation, decided to promote the team leader.&rdquo;
              </p>
              <div className="grid gap-3">
                {["A. who", "B. whom", "C. which", "D. that"].map((opt) => (
                  <button key={opt} className="text-left p-4 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50 transition-all text-sm text-slate-700">
                    {opt}
                  </button>
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