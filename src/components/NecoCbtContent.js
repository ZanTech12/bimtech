"use client";

import { services } from "../lib/services";
import { ServiceHero } from "./ServiceHero";
import { FeatureGrid } from "./FeatureGrid";
import { CTASection } from "./CTASection";

const service = services.find((s) => s.id === "neco-cbt");

export default function NecoCbtContent() {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureGrid features={service.features} title="NECO CBT Features" />
      <CTASection />
    </>
  );
}