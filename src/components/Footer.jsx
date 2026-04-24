import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block bg-white border-t">
        <div className="container py-10">
          {/* TOP */}
          <div className="flex justify-between items-start">
            {/* LEFT */}
            <div>
              <Image
                src="/logo.png"
                alt="logo"
                width={140}
                height={40}
                className="mb-4"
              />

              {/* SOCIALS */}
              <div className="flex gap-4 text-gray-600">
                <FaFacebookF size={16} />
                <FaLinkedinIn size={16} />
                <FaTwitter size={16} />
                <FaInstagram size={16} />
                <FaYoutube size={16} />
              </div>
            </div>

            {/* CTA */}
            <div className="text-right">
              <button onClick={openModal} className="bg-blue-600 text-white px-5 py-2 rounded-md">
                Enquire Now
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Speak with our Advisor
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-6 border-t" />

          {/* LINKS */}
          <div className="flex justify-between">
            {/* LEFT LINKS */}
            <div>
              <h4 className="font-semibold mb-3">Accredian</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>About</p>
                <p>Blog</p>
                <p>Why Accredian</p>
              </div>
            </div>

            {/* CONTACT */}
            <div className="max-w-md">
              <h4 className="font-semibold mb-3">Contact Us</h4>

              <p className="text-sm text-gray-600">
                Email us:{" "}
                <span className="text-blue-600">enterprise@accredian.com</span>
              </p>

              <p className="text-sm text-gray-600 mt-2">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-6 border-t" />

          {/* COPYRIGHT */}
          <p className="text-center text-sm text-gray-500">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden bg-[#0f172a] text-white">
        <div className="px-6 py-8">
          {/* LOGO */}
          <Image
            src="/logo.png"
            alt="logo"
            width={140}
            height={40}
            className="mb-4 h-8 w-auto brightness-0 invert"
          />

          {/* SOCIALS */}
          <div className="flex gap-4 text-white">
            <FaFacebookF size={16} />
            <FaLinkedinIn size={16} />
            <FaTwitter size={16} />
            <FaInstagram size={16} />
            <FaYoutube size={16} />
          </div>

          {/* CTA */}
          <button onClick={openModal} className="bg-blue-600 text-white px-5 py-2 mt-10 rounded-md mb-2">
            Enquire Now
          </button>
          <p className="text-sm text-gray-300 mb-6">Speak with our Advisor</p>

          {/* DIVIDER */}
          <div className="border-t border-gray-700 mb-6" />

          {/* LINKS */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Accredian</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>About</p>
              <p>Blog</p>
              <p>Why Accredian</p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Contact Us</h4>

            <p className="text-sm text-gray-300">
              Email us:{" "}
              <span className="text-blue-400">enterprise@accredian.com</span>
            </p>

            <p className="text-sm text-gray-300 mt-2">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-700 mb-4" />

          {/* COPYRIGHT */}
          <p className="text-center text-sm text-gray-400">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
