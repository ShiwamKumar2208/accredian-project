"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Stats", href: "#stats" },
    { name: "Clients", href: "#clients" },
    { name: "Accredian Edge", href: "#edge" },
    { name: "CAT", href: "#cat" },
    { name: "How It Works", href: "#how" },
    { name: "FAQs", href: "#faq" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  // 🔥 Smooth scroll handler
  const scrollToSection = (id) => {
    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id.replace("#", ""));
    if (!el) return;

    const yOffset = -80; // navbar height offset
    const y =
      el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // 🔥 Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";

      links.forEach((link) => {
        const id = link.href.replace("#", "");
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) current = link.name;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">

        {/* LOGO */}
        <Image
          src="/logo.png"
          alt="Accredian"
          width={120}
          height={30}
          className="h-8 w-auto"
        />

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`relative transition hover:text-blue-600 ${
                active === link.name
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
            >
              {link.name}

              {active === link.name && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded" />
              )}
            </button>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md">
          Enquire Now
        </button>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔥 MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setOpen(false)}
          />

          {/* FLOATING CARD */}
          <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-6 space-y-5">

            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.href);
                  setOpen(false);
                }}
                className={`block text-left text-base ${
                  active === link.name
                    ? "text-blue-600 font-semibold underline"
                    : "text-gray-800"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}