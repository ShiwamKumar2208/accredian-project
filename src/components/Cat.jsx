import Image from "next/image";

export default function Cat() {
  return (
    <section id="cat" className="section bg-[#f1f5f9]">
      <div className="container text-center">

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-bold">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>

        <p className="mt-3 text-gray-500">
          Our Proven Approach to{" "}
          <span className="text-blue-600">Learning Excellence</span>
        </p>

        {/* SVG */}
        <div className="mt-12">
          <Image
            src="/catV2.svg"
            alt="CAT Framework"
            width={1200}
            height={400}
            className="w-full max-w-[900px] mx-auto h-auto"
            unoptimized
            priority
          />
        </div>

      </div>
    </section>
  );
}