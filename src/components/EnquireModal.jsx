"use client";

import Image from "next/image";

export default function EnquireModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-10 w-full md:w-[700px] bg-white ml-auto h-full flex">

        {/* LEFT IMAGE (hidden on mobile) */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src="/enquire.png" // your PNG
            alt="enquire"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Enquire Now</h2>
            <button onClick={onClose} className="text-xl">✕</button>
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

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}