import { BarChart3, Monitor, Video } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: BarChart3,
      title: "Skill Gap Analysis",
      desc: "Assess team skill gaps and developmental needs.",
    },
    {
      icon: Monitor,
      title: "Customized Training Plan",
      desc: "Create a tailored roadmap addressing organizational goals.",
    },
    {
      icon: Video,
      title: "Flexible Program Delivery",
      desc: "Deliver adaptable programs aligned with industry and organizational needs.",
    },
  ];

  return (
    <section id="how" className="section bg-[#f8fafc]">
      <div className="container text-center">

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-bold">
          How We <span className="text-blue-600">Deliver Results</span> That Matter?
        </h2>

        <p className="mt-3 text-gray-500">
          A Structured Three-Step Approach to{" "}
          <span className="text-blue-600">Skill Development</span>
        </p>

        {/* CARDS */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-stretch gap-6">
            {steps.map((step, i) => {
                const Icon = step.icon;

                return (
                <div key={i} className="flex justify-center w-full">

                    <div className="relative w-full max-w-[300px] md:max-w-[320px] 
min-h-[160px] md:min-h-[220px] 
bg-[#eaf1fb] rounded-xl 
p-4 md:p-6 
text-center shadow-sm hover:shadow-md transition 
flex flex-col justify-center md:justify-between">

                        {/* SIDE BARS (now attached to card) */}
                        <div className="absolute left-[-6px] top-10 w-1.5 h-16 bg-blue-600 rounded"></div>
                        <div className="absolute right-[-6px] top-10 w-1.5 h-16 bg-blue-600 rounded"></div>

                        {/* NUMBER */}
                        <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-white text-xs flex items-center justify-center font-semibold">
                        {i + 1}
                        </div>

                        {/* ICON */}
                        <div className="w-12 h-12 mx-auto flex items-center justify-center bg-blue-600 text-white rounded-full">
                        <Icon className="w-5 h-5" />
                        </div>

                        {/* TITLE */}
                        <h3 className="font-semibold text-lg mt-3">
                        {step.title}
                        </h3>

                        {/* DESC */}
                        <p className="text-sm text-gray-600 hidden md:block">
                        {step.desc}
                        </p>

                    </div>
                </div>
                );
            })}
        </div>

      </div>
    </section>
  );
}