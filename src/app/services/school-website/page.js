import { services } from "@/lib/services";
import { ServiceHero } from "@/components/ServiceHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";

const service = services.find((s) => s.id === "school-website");

export default function SchoolWebsitePage() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="School Website Features" />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-brand-950 tracking-tight">
                Beautiful. Functional. Yours.
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Every school website we build is custom-designed to reflect your brand identity. 
                From color schemes to layout, we ensure your website stands out while 
                delivering all the functionality your school community needs.
              </p>
              <ul className="mt-6 space-y-3">
                {["Responsive on all devices", "SEO-optimized for visibility", "Integrated payment gateway", "Real-time notifications"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-5 h-5 bg-accent-50 rounded-full flex items-center justify-center">
                      <span className="w-2 h-2 bg-accent-500 rounded-full" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img src="https://picsum.photos/seed/school-website-demo/800/450.jpg" alt="School Website Demo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}