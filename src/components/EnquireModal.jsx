"use client";

import Image from "next/image";

export default function EnquireModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* MODAL BOX */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] mt-10 md:mt-0">

        {/* LEFT IMAGE (hidden on mobile) */}
        <div className="hidden md:block w-1/2 relative min-h-[300px]">
          <Image
            src="/enquire.png"
            alt="enquire"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto max-h-[90vh]">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg md:text-xl font-semibold">
              Enquire Now
            </h2>

            <button
              onClick={onClose}
              className="text-xl hover:opacity-70"
            >
              ✕
            </button>
          </div>

          {/* FORM */}
          <div className="space-y-4">

            <input placeholder="Enter Name" className="w-full border-b p-2 outline-none" />
            <input placeholder="Enter Email" className="w-full border-b p-2 outline-none" />
            <input placeholder="+91" className="w-full border-b p-2 outline-none" />
            <input placeholder="Enter company name" className="w-full border-b p-2 outline-none" />
            <input placeholder="Select Domain" className="w-full border-b p-2 outline-none" />
            <input placeholder="Enter No. of candidates" className="w-full border-b p-2 outline-none" />
            <input placeholder="Select Mode of Delivery" className="w-full border-b p-2 outline-none" />
            <input placeholder="Eg: Gurgaon, Delhi, India" className="w-full border-b p-2 outline-none" />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 hover:opacity-90 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}