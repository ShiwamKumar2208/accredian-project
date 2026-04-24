import Image from "next/image";
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";

export default function WhyJoin() {
  const points = [
    {
      icon: MonitorCheck,
      title: "Tech Professionals",
      desc: "Enhance expertise, embrace tech, drive innovation.",
    },
    {
      icon: MonitorX,
      title: "Non-Tech Professionals",
      desc: "Adapt digitally, collaborate in tech environments.",
    },
    {
      icon: GraduationCap,
      title: "Emerging Professionals",
      desc: "Develop powerful skills for rapid career growth.",
    },
    {
      icon: Briefcase,
      title: "Senior Professionals",
      desc: "Strengthen leadership, enhance strategic decisions.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="bg-blue-600 rounded-2xl font-bold px-6 py-10 md:px-12 md:py-12 text-white relative overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT TEXT + IMAGE */}
            <div>
              <p className="text-sm opacity-80 text-white">Who Should Join?</p>

              <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight text-white">
                Strategic Skill Enhancement
              </h2>

              {/* IMAGE */}
              <div className="mt-8">
                <Image
                  src="/imagehuman.png"
                  alt="people"
                  width={300}
                  height={300}
                  className="hidden md:block w-[220px] md:w-[260px] h-auto"
                />
              </div>
            </div>

            {/* RIGHT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {points.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div key={i} className="flex flex-col gap-2">
                    <Icon className="w-8 h-8 text-white mb-1" />

                    <h3 className="font-semibold text-lg text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/80">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
