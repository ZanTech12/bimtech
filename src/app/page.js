// src/app/page.js
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Home", // Renders as "Home | BimTech SOLUTIONS"
  description: "Welcome to BimTech SOLUTIONS. Nigeria's leading integrated education technology provider offering online grading, CBT practice, IoT bells, and biometrics.",
  alternates: {
    canonical: "https://bimtechsolutions.com.ng",
  },
};

export default function Page() {
  return <HomeClient />;
}