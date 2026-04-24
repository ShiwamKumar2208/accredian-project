import Image from "next/image";

export default function Clients() {
  const logos = [
    { src: "/logos/rel.png", name: "Reliance" },
    { src: "/logos/hcl.png", name: "HCL" },
    { src: "/logos/ibm.png", name: "IBM" },
    { src: "/logos/crif.png", name: "CRIF" },
    { src: "/logos/adp.svg", name: "ADP" },
    { src: "/logos/bayer.svg", name: "Bayer" },
  ];

  return (
    <section id="clients" className="section bg-white overflow-hidden">
      <div className="container text-center">
        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-bold">
          Our Proven <span className="text-blue-600">Partnerships</span>
        </h2>

        <p className="mt-3 text-gray-500">
          Successful Collaborations With the{" "}
          <span className="text-blue-600">Industry’s Best</span>
        </p>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center justify-center gap-24 mt-12">
          {logos.map((logo, i) => (
            <div key={i} className="w-[100px] flex justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={70}
                className="w-full h-auto object-contain transition hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* MOBILE MARQUEE */}
        <div className="md:hidden mt-10 overflow-hidden">
          <div className="flex">
            <div
              className="flex gap-12"
              style={{
                animation: "marquee-scroll 14s linear infinite",
                minWidth: "200%",
              }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={60}
                    className="h-[50px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
