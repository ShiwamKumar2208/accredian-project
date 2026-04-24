import Image from "next/image";
import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  Wallet,
} from "lucide-react";

export default function Features() {
  const domains = [
    { icon: Lightbulb, title: "Product & Innovation Hub" },
    { icon: Brain, title: "Gen-AI Mastery" },
    { icon: Users, title: "Leadership Elevation" },
    { icon: BarChart3, title: "Tech & Data Insights" },
    { icon: Settings, title: "Operations Excellence" },
    { icon: Globe, title: "Digital Enterprise" },
    { icon: Wallet, title: "Fintech Innovation Lab" },
  ];

  const segments = [
    {
      img: "/segments/program.png",
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
    },
    {
      img: "/segments/industry.png",
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    },
    {
      img: "/segments/topic.png",
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    },
    {
      img: "/segments/level.png",
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
    },
  ];

  return (
    <section id="edge" className="section bg-[#f8fafc]">
      <div className="container">
        {/* ================= EDGE TIMELINE ================= */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>

          <p className="mt-3 text-gray-500">
            Key Aspects of{" "}
            <span className="text-blue-600">Our Strategic Training</span>
          </p>
        </div>

        {/* IMAGE (desktop + mobile swap) */}
        <div className="mt-12">
          <div className="hidden md:block">
            <Image
              src="/edge/timeline-desktop.svg"
              alt="timeline"
              width={1200}
              height={400}
              className="w-full h-auto"
              unoptimized
            />
          </div>

          <div className="md:hidden">
            <Image
              src="/edge/timeline-mobile.svg"
              alt="timeline"
              width={400}
              height={600}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>

        {/* ================= DOMAIN EXPERTISE ================= */}
        <div className="text-center mt-20">
          <h2 className="text-2xl md:text-4xl font-bold">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>

          <p className="mt-3 text-gray-500">
            Specialized Programs Designed to{" "}
            <span className="text-blue-600">Fuel Innovation</span>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
          {domains.map((item, i) => {
            const Icon = item.icon;
            const isLast = i === domains.length - 1;

            return (
              <div
                key={i}
                className={`w-full max-w-[260px] bg-white rounded-xl py-6 px-4 flex flex-col items-center 
        shadow-[0_10px_25px_rgba(0,0,0,0.06)] 
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] transition
        ${isLast ? "col-span-2 md:col-span-3" : ""}`}
              >
                <Icon className="text-blue-600 w-8 h-8 md:w-12 md:h-12 mb-3" />
                <p className="font-semibold text-sm md:text-base text-gray-800 text-center">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= COURSE SEGMENTATION ================= */}
        <div className="text-center mt-20">
          <h2 className="text-2xl md:text-4xl font-bold">
            Tailored <span className="text-blue-600">Course Segmentation</span>
          </h2>

          <p className="mt-3 text-gray-500">
            Explore <span className="text-blue-600">Custom-fit Courses</span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {segments.map((item, i) => (
            <div
              key={i}
              className="w-full max-w-[320px] bg-white rounded-xl overflow-hidden 
  shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:shadow-lg transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-[140px] object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="text-blue-600 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
