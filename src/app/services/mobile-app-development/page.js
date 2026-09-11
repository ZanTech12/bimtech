export const metadata = {
  title: "Mobile App Development",
  description: "Custom Android and iPhone (iOS) application development. Built to scale with your business, with full deployment to the Google Play Store and Apple App Store.",
  alternates: {
    canonical: "https://bimtechsolutions.com.ng/services/mobile-app-development",
  },
};

import { services } from "@/lib/services";
import { ServiceHero } from "@/components/ServiceHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";

const service = services.find((s) => s.id === "mobile-app-development");

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="Mobile App Development Features" />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <img src="/mobile.jpg" alt="Mobile App Development" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">
                Building powerful mobile experiences
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                From concept to deployment, we build robust Android and iPhone applications 
                that scale with your business. Our full-stack approach ensures seamless 
                backend integration, intuitive UI/UX, and successful launch on the Google Play 
                and Apple App Stores.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { label: "Platforms", value: "Android & iOS" },
                  { label: "Apps Deployed", value: "100+" },
                  { label: "Avg. User Rating", value: "4.8★" },
                  { label: "User Retention", value: "85%" },
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