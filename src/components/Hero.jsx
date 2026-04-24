import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="bg-[#eaf1fb] rounded-2xl p-6 sm:p-8 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.18),0_0_20px_rgba(0,0,0,0.12)] flex flex-col lg:flex-row items-center gap-10">
          {/* RIGHT IMAGE (TOP on mobile) */}
          <div className="flex-1 flex justify-center order-1 lg:order-2">
            <div className="w-full max-w-sm sm:max-w-md">
              <Image
                src="/hero.png"
                alt="Hero"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 400px"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Next-Gen <span className="text-blue-600">Expertise</span> <br />
              For Your <span className="text-blue-600">Enterprise</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base font-bold md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* FEATURES */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-700">
              {[
                "Tailored Solutions",
                "Industry Insights",
                "Expert Guidance",
                "Measurable Impact",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 font-bold ${
                    index === 3 ? "lg:hidden" : ""
                  }`}
                >
                  <span className="text-green-500">✔</span>
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button onClick={openModal} className="mt-8 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:opacity-90 transition">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
