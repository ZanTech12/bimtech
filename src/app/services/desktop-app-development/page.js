import { services } from "@/lib/services";
import { ServiceHero } from "@/components/ServiceHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
// Import the image directly at the top of the file
import desktopImage from "/public/desktop.jpg";

const service = services.find((s) => s.id === "desktop-app-development");

export default function DesktopAppDevelopmentPage() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="Desktop App Development Features" />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              {/* Use the imported variable here */}
              <img src={desktopImage.src} alt="Desktop App Development" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">
                High-performance desktop software
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                We develop secure, offline-capable desktop applications for Windows and macOS. 
                Whether you need hardware integration, complex data processing, or enterprise-grade 
                reliability, we handle everything from architecture to Microsoft Store and Mac App 
                Store deployment.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { label: "Platforms", value: "Windows & Mac" },
                  { label: "Apps Deployed", value: "80+" },
                  { label: "Reliability", value: "99.9%" },
                  { label: "Offline Capability", value: "100%" },
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