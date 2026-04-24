export default function Stats() {
  const stats = [
    {
      number: "10K+",
      label: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: "200+",
      label: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: "5K+",
      label: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section id="stats" className="section bg-white">
      <div className="container text-center">
        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-bold">
          Our <span className="text-blue-600">Track Record</span>
        </h2>

        <p className="mt-3 text-gray-500">
          The Numbers Behind <span className="text-blue-600">Our Success</span>
        </p>

        {/* STATS */}
        <div
          className="mt-12 flex flex-col md:flex-row items-stretch justify-center 
                        divide-y md:divide-y-0 md:divide-x 
                        divide-gray-300"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-row md:flex-col items-center md:items-center md:text-center gap-4 px-4 py-6 md:px-12 md:py-0 max-w-full md:max-w-xs"
            >
              {/* NUMBER BADGE */}
              <div className="bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full text-sm md:text-lg whitespace-nowrap">
                {stat.number}
              </div>

              {/* LABEL */}
              <p className="text-left md:text-center font-bold text-gray-700 leading-relaxed">
                <span className="text-xs md:text-base">{stat.label}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
