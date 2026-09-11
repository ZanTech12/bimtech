"use client";

import { services } from "../lib/services";
import { ServiceHero } from "./ServiceHero";
import { FeatureGrid } from "./FeatureGrid";
import { CTASection } from "./CTASection";

const service = services.find((s) => s.id === "waec-cbt");

export default function WaecCbtContent() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="WAEC CBT Features" />
      <CTASection />
    </>
  );
}