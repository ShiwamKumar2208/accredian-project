"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("course");
  const [openIndex, setOpenIndex] = useState(null);

  const data = {
    course: [
      {
        q: "What type of corporate training programs does Accredian offer?",
        a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs.",
      },
      {
        q: "What domain specializations are available?",
        a: "We offer expertise in Leadership, Tech & Data, Fintech, Digital Business, Product Innovation, and more.",
      },
    ],
    delivery: [
      {
        q: "Can the courses be customized?",
        a: "Absolutely! Programs are fully customizable based on your needs.",
      },
      {
        q: "Who are the instructors?",
        a: "Courses are delivered by industry leaders and domain experts.",
      },
      {
        q: "What formats are available?",
        a: "Online, offline, hybrid, and on-demand formats are available.",
      },
    ],
    misc: [
      {
        q: "Ideal team size?",
        a: "Programs can cater to teams of any size.",
      },
      {
        q: "How to start?",
        a: "Contact us or request a quote and we’ll guide you end-to-end.",
      },
    ],
  };

  const tabs = [
    { key: "course", label: "About the Course" },
    { key: "delivery", label: "About the Delivery" },
    { key: "misc", label: "Miscellaneous" },
  ];

  return (
    <section id="faq" className="section bg-white">
      <div className="container">

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-extrabold ">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-[250px_1fr] gap-10">

          {/* TABS */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
                {tabs.map((tab) => (
                    <button
                    key={tab.key}
                    onClick={() => {
                        setActiveTab(tab.key);
                        setOpenIndex(null);
                    }}
                    className={`px-5 py-3 rounded-xl transition whitespace-nowrap text-sm font-bold
                    ${
                        activeTab === tab.key
                        ? "bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] text-blue-600"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                    >
                    {tab.label}
                    </button>
                ))}
            </div>

          {/* QUESTIONS */}
          <div className="space-y-4">
            {data[activeTab].map((item, i) => {
                const isOpen = openIndex === i;

                return (
                <div key={i} className="bg-white rounded-lg p-4 shadow-sm">

                    <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`w-full flex justify-between items-center text-left font-bold transition
                    ${isOpen ? "text-blue-600" : "text-gray-800"}`}
                    >
                    {item.q}
                    <span className="text-lg">{isOpen ? "−" : "+"}</span>
                    </button>

                    {/* SMOOTH ANIMATION */}
                    <div
                    className={`overflow-hidden font-bold transition-all duration-300 ${
                        isOpen ? "max-h-40 mt-2" : "max-h-0"
                    }`}
                    >
                    <p className="text-sm text-gray-600">
                        {item.a}
                    </p>
                    </div>

                </div>
                );
            })}
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg">
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
}