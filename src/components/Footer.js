import Link from "next/link";
import { Cpu, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

// WhatsApp SVG Icon (since lucide-react doesn't include brand icons)
const WhatsAppIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  // Array of company links to easily map over and ensure correct routing
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
  ];

  return (
    <>
      {/* Fixed WhatsApp Floating Button */}
      <a
        href="https://wa.me/2349015397860"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>

      <footer className="bg-brand-950 text-white">
        {/* CTA Band */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                Ready to transform your school?
              </h2>
              <p className="mt-3 text-slate-300 text-lg">
                Join 500+ schools already using BimTech solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-colors"
              >
                Request Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer - Upgraded to 12-col grid for perfect alignment */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand (Takes 4 columns) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-accent-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">BimTech</span>
            </Link>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
              Nigeria&apos;s leading integrated education technology provider.
              Bridging technology and education since 2015.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Abeokuta Express Way,  Lagos state.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+2349014009929</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 shrink-0" />
                <span>harbimbolaomiyale@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services (Takes 4 columns, split into 2 sub-columns for neatness) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-5">
              Services
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company (Takes 2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal (Takes 2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Data Protection",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-slate-400 hover:text-accent-400 transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              © {year} BimTech SOLUTIONS. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((s) => (
                <span
                  key={s}
                  className="text-xs text-slate-500 hover:text-accent-400 transition-colors duration-200 cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}