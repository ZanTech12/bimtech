// REMOVE this import line entirely:
// import { GraduationCap, Globe, Monitor, BookOpen, Brain, Bell, Fingerprint } from "lucide-react";

export const services = [
  {
    id: "online-grading",
    title: "Online Grading System",
    shortTitle: "Grading",
    description:
      "Automate student result computation with our intelligent grading engine. Supports custom grading scales, multi-subject processing, and instant report card generation.",
    icon: "GraduationCap",
    color: "sky",
    href: "/services/online-grading",
    features: [
      "Custom grading scales (A-F, GPA 4.0/5.0, percentage)",
      "Batch result processing for entire classes",
      "Automated CGPA/GPA calculations",
      "PDF & Excel report card export",
      "Subject-wise performance analytics",
      "Parent portal integration",
    ],
    stats: { schools: "500+", results: "2M+", accuracy: "99.9%" },
  },
  {
    id: "school-website",
    title: "School Website Development",
    shortTitle: "School Site",
    description:
      "Professional, mobile-responsive school websites with portals for students, parents, and staff. Integrated LMS, fee payment, and communication tools.",
    icon: "Globe",
    color: "blue",
    href: "/services/school-website",
    features: [
      "Custom responsive design per school brand",
      "Student/Parent/Staff portals",
      "Online fee payment integration",
      "Event calendar & news management",
      "E-Learning / LMS integration",
      "SEO & performance optimization",
    ],
    stats: { websites: "300+", visitors: "5M+", uptime: "99.99%" },
  },
  {
    id: "jamb-cbt",
    title: "JAMB CBT Practice",
    shortTitle: "JAMB",
    description:
      "Computer-Based Test practice platform mirroring the real JAMB UTME environment. Timed exams, subject combinations, and detailed performance analytics.",
    icon: "Monitor",
    color: "orange",
    href: "/services/jamb-cbt",
    features: [
      "Real JAMB exam interface simulation",
      "All JAMB subjects & question banks",
      "Timed practice with auto-submit",
      "Performance analytics & ranking",
      "Offline mode capability",
      "Subject combination flexibility",
    ],
    stats: { questions: "50K+", students: "100K+", subjects: "25+" },
  },
  {
    id: "waec-cbt",
    title: "WAEC CBT Practice",
    shortTitle: "WAEC",
    description:
      "Prepare for WAEC with thousands of past questions in CBT format. Covers WASSCE, BECE, and private candidate exams with authentic question styles.",
    icon: "BookOpen",
    color: "emerald",
    href: "/services/waec-cbt",
    features: [
      "WAEC past questions (10+ years)",
      "WASSCE / BECE / Private exams",
      "Theory & objective question support",
      "Essay grading rubrics",
      "Subject-specific study mode",
      "Certificate exam simulation",
    ],
    stats: { questions: "40K+", years: "10+", passRate: "85%" },
  },
  {
    id: "neco-cbt",
    title: "NECO CBT Practice",
    shortTitle: "NECO",
    description:
      "NECO exam practice platform with SSCE, BECE, and Common Entrance past questions. Experience the real exam format with detailed explanations.",
    icon: "Brain",
    color: "violet",
    href: "/services/neco-cbt",
    features: [
      "NECO SSCE & BECE past questions",
      "Common Entrance preparation",
      "Objective & essay formats",
      "Instant scoring & feedback",
      "Detailed solution explanations",
      "Progress tracking dashboard",
    ],
    stats: { questions: "35K+", exams: "3", students: "60K+" },
  },
  {
    id: "iot-bell",
    title: "IoT Automation Bell",
    shortTitle: "IoT Bell",
    description:
      "Smart school bell system powered by IoT. Schedules ring automatically, supports multiple zones, emergency alerts, and remote management via web/dashboard.",
    icon: "Bell",
    color: "amber",
    href: "/services/iot-bell",
    features: [
      "Automatic schedule-based ringing",
      "Multi-zone / multi-building support",
      "Emergency broadcast alerts",
      "Web & mobile remote management",
      "Custom tones & volume control",
      "Power backup & offline mode",
    ],
    stats: { installations: "200+", zones: "50+", uptime: "99.99%" },
  },
  {
    id: "biometrics",
    title: "Biometrics Attendance",
    shortTitle: "Biometrics",
    description:
      "Fingerprint & face-recognition attendance system for students and staff. Real-time dashboards, late-comer tracking, and seamless payroll integration.",
    icon: "Fingerprint",
    color: "rose",
    href: "/services/biometrics",
    features: [
      "Fingerprint & face recognition",
      "Real-time attendance dashboard",
      "Late-comer detection & alerts",
      "Staff payroll integration",
      "Parent notification on absence",
      "Reports & analytics export",
    ],
    stats: { users: "150K+", devices: "800+", schools: "400+" },
  },
  {
    id: "mobile-app-development",
    title: "Full Stack Mobile App Development",
    shortTitle: "Mobile Apps",
    description:
      "Custom Android and iPhone (iOS) application development. Built to scale with your business, with full deployment to the Google Play Store and Apple App Store.",
    icon: "Smartphone",
    color: "cyan",
    href: "/services/mobile-app-development",
    features: [
      "Native & cross-platform (Android & iOS) development",
      "Google Play Store & Apple App Store deployment",
      "Secure API & backend integration",
      "Push notifications & real-time updates",
      "Offline data synchronization",
      "App store optimization (ASO)",
    ],
    stats: { apps: "100+", platforms: "2", rating: "4.8★" },
  },
  {
    id: "desktop-app-development",
    title: "Full Stack Desktop App Development",
    shortTitle: "Desktop Apps",
    description:
      "Robust Windows and MacBook application development. Built for performance and reliability, with seamless deployment to the Microsoft Store and Mac App Store.",
    icon: "Laptop",
    color: "indigo",
    href: "/services/desktop-app-development",
    features: [
      "Windows & macOS native/cross-platform apps",
      "Microsoft Store & Mac App Store deployment",
      "Secure local database management",
      "Hardware integration (printers, scanners, biometrics)",
      "Offline-first architecture",
      "Automated background updates",
    ],
    stats: { apps: "80+", platforms: "2", reliability: "99.9%" },
  },
];

export const companyHistory = {
  founded: 2015,
  founder: "Miss. Abimbola Olayemi Omiyale",
  ownerImage: "/owner.jpg",
  story: `BimTech SOLUTIONS was founded in 2015 by Miss. Abimbola Olayemi Omiyale, a visionary software engineer and education technology advocate. Starting from a small office in Lagos with just 3 developers, the company set out on a mission to bridge the gap between technology and education in Nigeria.

What began as a simple CBT practice tool for JAMB candidates has grown into a comprehensive education technology suite serving over 500 schools and 300,000 students across Nigeria. The breakthrough came in 2017 when BimTech launched its IoT Automation Bell — the first of its kind in West Africa — which earned the company the ModTech Innovation Award.

By 2019, BimTech expanded into biometrics with its fingerprint attendance system, eliminating manual attendance fraud in schools. The COVID-19 pandemic of 2020 accelerated adoption of BimTech's online grading and school website platforms, as schools urgently needed digital infrastructure.

Today, BimTech SOLUTIONS is Nigeria's leading integrated education technology provider, with offices in Lagos, Abuja, and Port Harcourt, and a team of 65+ engineers, designers, and education consultants. The company remains committed to its founding vision: making world-class education technology accessible to every African school.`,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];