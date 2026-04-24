import { Headphones } from "lucide-react";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-8 md:px-12 md:py-10 text-white flex flex-col md:flex-row items-center justify-between gap-6
bg-gradient-to-r from-blue-600 to-blue-500"
        >
          {/* BACKGROUND CIRCLES */}
          {/* ARC 1 */}
          <div className="absolute right-[-120px] bottom-[-120px] w-[420px] h-[420px] border-[40px] border-blue-400/30 rounded-full"></div>

          {/* ARC 2 */}
          <div className="absolute right-[-60px] bottom-[-60px] w-[320px] h-[320px] border-[30px] border-blue-300/30 rounded-full"></div>

          {/* ARC 3 */}
          <div className="absolute right-10 bottom-10 w-[220px] h-[220px] border-[20px] border-blue-200/30 rounded-full"></div>

          {/* LEFT */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left relative z-10">
            {/* ICON BOX */}
            <div className="bg-white/20 backdrop-blur rounded-xl p-3">
              <Headphones className="text-white w-6 h-6 md:w-8 md:h-8" />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-lg md:text-2xl font-semibold">
                Want to Learn More About Our Training Solutions?
              </h3>

              <p className="text-sm md:text-base opacity-90 mt-1">
                Get Expert Guidance for Your Team’s Success!
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button onClick={() => window.dispatchEvent(new Event("open-enquire"))} className="relative z-10 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
}
