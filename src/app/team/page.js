// src/app/team/page.js
import TeamClient from "./TeamClient";

export const metadata = {
  title: "Our Team",
  description: "Meet the brilliant engineers, developers, and innovators behind BimTech SOLUTIONS. We are building the future of African EdTech.",
  alternates: {
    canonical: "https://bimtechsolutions.com.ng/team",
  },
};

export default function Page() {
  return <TeamClient />;
}