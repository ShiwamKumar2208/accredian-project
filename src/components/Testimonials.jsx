"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      logo: "/logos/adp.svg",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      logo: "/logos/bayer.svg",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
    {
      logo: "/logos/rel.png",
      text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section bg-[#f8fafc]">
      <div className="container text-center relative">

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-bold">
          Testimonials from <span className="text-blue-600">Our Partners</span>
        </h2>

        <p className="mt-3 text-gray-500">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>

        {/* NAV BUTTONS */}
        <button
          onClick={prev}
          className="flex absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 
          bg-white border border-gray-300 rounded-full w-8 h-8 md:w-10 md:h-10 
          items-center justify-center shadow hover:bg-gray-100 hover:scale-105 transition"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="flex absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 
          bg-white border border-gray-300 rounded-full w-8 h-8 md:w-10 md:h-10 
          items-center justify-center shadow hover:bg-gray-100 hover:scale-105 transition"
        >
          ›
        </button>

        {/* CARDS */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-stretch">

          {[0, 1].map((offset) => {
            const item =
              testimonials[(index + offset) % testimonials.length];

            return (
              <div
                key={offset}
                className={`w-full max-w-[520px] bg-white border border-gray-300 rounded-xl p-6 text-left shadow-sm flex flex-col ${
                  offset === 1 ? "hidden md:flex opacity-80" : ""
                }`}
              >
                {/* LOGO FIX */}
                <div className="h-10 flex items-center mb-4">
                  <Image
                    src={item.logo}
                    alt="logo"
                    width={80}
                    height={40}
                    className="h-8 w-auto object-contain"
                    unoptimized
                  />
                </div>

                {/* TEXT */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}