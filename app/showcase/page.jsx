import { cn } from "@/lib/utils";
import { showcaseItems, portfolioItems } from "@/constants/projects";

export function Showcase() {
  return (
    <section className="relative min-h-screen px-6 mt-16 py-28 md:px-10 lg:px-28 ">
      <div className="mx-auto">
        <h1 className="mb-6 text-4xl font-semibold text-black md:text-5xl lg:text-5xl">
          Work We&apos;ve Done For Some Great Clients
        </h1>
        <p className="text-[16px] md:text-xl font-mundial-regular">
          Brand and Logo Design, Art Direction, UI/UX, Website Design, Front End
          Coding, eCommerce, Back End Development, Creative Development,
          Three.JS, Canvas, Content Management Systems, App Development, Digital
          Engagement, And Much More.
        </p>
      </div>
      <div className="mt-24 mb-8">
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
            <div className={cn("relative overflow-hidden rounded-3xl")}>
              <div className="aspect-[4/5] relative overflow-hidden flex items-center justify-center rounded-3xl bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <>
      <div className="px-6 mb-2 md:px-10 lg:px-28 ">
        <div className="inline-flex items-center gap-4 px-4 py-2 rounded-sm bg-emerald-50">
          <span className="text-[10px] md:text-xs font-dm-mono tracking-wider text-emerald-800 uppercase">
            FEATURED
          </span>
          <div className="w-6 h-px bg-black" />
        </div>
      </div>
      <section className="px-6 py-16 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function ShowcasePage() {
  return (
    <div>
      <Showcase />
      <Portfolio />
    </div>
  );
}

export default ShowcasePage;
