import { cn } from "@/lib/utils";

const showcaseItems = [
  {
    title: "Scotch Partners",
    subtitle: "",
    gradient: "from-blue-900 to-slate-800",
    overlays: [
      {
        className:
          "absolute w-16 h-16 border-2 border-orange-400 rounded-lg top-8 left-8 rotate-12",
      },
      {
        className:
          "absolute w-12 h-12 bg-pink-500 rounded-lg bottom-8 left-8 -rotate-12",
      },
      {
        className: "absolute w-8 h-8 bg-teal-400 rounded-lg bottom-16 left-20",
      },
    ],
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h3 className="mb-2 text-3xl font-light tracking-wider">Scotch</h3>
        <h3 className="text-3xl font-bold tracking-wider">Partners</h3>
      </div>
    ),
    wave: true,
  },
  {
    title: "SUZANNE NEVILLE",
    subtitle: "",
    gradient: "from-green-800 to-emerald-900",
    overlays: [],
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h3 className="text-2xl font-light tracking-[0.3em] mb-2">
          SUZANNE NEVILLE
        </h3>
      </div>
    ),
    wave: false,
  },
  {
    title: "The Diary",
    subtitle: "Phys",
    gradient: "from-gray-700 to-gray-900",
    overlays: [],
    content: (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-center">
          <p className="mb-2 text-sm font-light tracking-wider opacity-80">
            Phys
          </p>
          <h3 className="mb-2 text-4xl font-light tracking-wider">The Diary</h3>
          <p className="text-sm font-light tracking-wider opacity-80">
            BY STEVEN BARTLETT
          </p>
        </div>
      </div>
    ),
    wave: false,
  },
];

const ShowcasePage = () => {
  return (
    <section className="relative min-h-screen px-6 py-24 mt-16 md:px-10 lg:px-20 ">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl font-mundial-regular lg:text-5xl">
          Work We've Done For Some Great Clients
        </h1>
        <p className="max-w-3xl text-base text-gray-600 md:text-xl font-mundial-regular">
          Brand and Logo Design, Art Direction, UI/UX, Website Design, Front End
          Coding, eCommerce, Back End Development, Creative Development,
          Three.JS, Canvas, Content Management Systems, App Development, Digital
          Engagement, And Much More.
        </p>
      </div>
      <div className="mt-16 mb-8 ">
        <div className="inline-flex items-center gap-4 px-4 py-2 rounded-sm bg-emerald-50">
          <span className="text-[10px] md:text-xs font-dm-mono tracking-wider text-emerald-800 uppercase">
            FEATURED
          </span>
          <div className="w-6 h-px bg-black" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcaseItems.map((item, idx) => (
          <div key={idx} className="relative group">
            <div
              className={cn(
                "relative overflow-hidden transition-all duration-500 border shadow-2xl rounded-3xl bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-3xl hover:-translate-y-2",
                "hover:ring-2 hover:ring-blue-400"
              )}
            >
              <div
                className={cn(
                  "aspect-[4/5] relative overflow-hidden",
                  `bg-gradient-to-br ${item.gradient}`
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0",
                    `bg-gradient-to-br ${item.gradient}`
                  )}
                ></div>
                {item.overlays.map((o, i) => (
                  <div key={i} className={o.className}></div>
                ))}
                {item.wave && (
                  <div className="absolute bottom-20 left-8 right-8">
                    <svg
                      viewBox="0 0 200 40"
                      className="w-full h-8 text-white opacity-60"
                    >
                      <path
                        d="M0,20 Q50,0 100,20 T200,20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcasePage;
