// src/app/careers/page.js
import CareersClient from "./CareersClient";

export const metadata = {
  title: "Careers",
  description: "Build the future of African EdTech. Explore our areas of expertise and join the BimTech SOLUTIONS talent network. Send us your CV today.",
  alternates: {
    canonical: "https://bimtechsolutions.com.ng/careers",
  },
};

export default function Page() {
  return <CareersClient />;
}