"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Linkedin, Twitter } from "lucide-react";

// Modern easing curve for smooth, premium animations
const ease = [0.22, 1, 0.36, 1];

const teamMembers = [
  {
    id: 1,
    name: "Miss. Omiyale Abimbola Olayemi",
    role: "Chief Executive Officer (CEO)",
    image: "/team/omi.jpg", // Place image in public/team/ folder
    bio: "Leads BimTech with a strategic vision to bridge the gap between technology and education in Africa. She drives innovation, overseeing company growth and ensuring every solution delivers real-world impact.",
  },
  {
    id: 2,
    name: "Mr. Zannu Adedeji Sunday",
    role: "Full Stack IoT Engineer",
    image: "/team/zannu.jpg",
    bio: "Architects end-to-end Internet of Things solutions, seamlessly connecting intelligent hardware to the cloud. He ensures our automated systems, like the IoT bell, operate with maximum efficiency and reliability.",
  },
  {
    id: 3,
    name: "Miss. Badmus Kehinde Elizabeth",
    role: "Data Analyst & Software Engineer",
    image: "/team/kehinde.jpg",
    bio: "Transforms raw data into actionable insights while building robust software backends. She leverages data science to optimize BimTech platforms and drive data-informed decision-making.",
  },
  {
    id: 4,
    name: "Mr. Nonye Christopher",
    role: "Electrical & Embedded System Engineer",
    image: "/team/nonye.jpg",
    bio: "Designs and develops complex circuitry and embedded systems. He ensures our biometric and hardware devices are highly durable, secure, and perform flawlessly in real-world conditions.",
  },
  {
    id: 5,
    name: "Mr. Tobi Peter",
    role: "Full Stack Web Developer",
    image: "/team/tobi.jpg",
    bio: "Builds dynamic, responsive, and scalable web applications. He crafts intuitive user interfaces and robust server-side logic to ensure a seamless experience across all BimTech platforms.",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-50 text-accent-600 text-xs font-semibold rounded-full uppercase tracking-wider mb-6 border border-accent-100"
          >
            <Users className="w-3.5 h-3.5" />
            Our Team
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl md:text-6xl font-bold text-brand-950 tracking-tight leading-[1.1]"
          >
            The Minds Behind BimTech
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            We are a team of passionate engineers, developers, and innovators dedicated to building Africa's next generation of educational and enterprise technology.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand-950/5 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Picture Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Icons on Hover */}
                  <div className="absolute bottom-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a href="#" className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-950 hover:bg-accent-500 hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-950 hover:bg-accent-500 hover:text-white transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-brand-950 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-accent-600 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm text-slate-500 leading-relaxed flex-grow">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-950 tracking-tight">
            Want to build something great together?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Our team is ready to bring your next project to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-brand-950 text-white text-sm font-semibold rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-brand-950/20 hover:-translate-y-0.5"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}