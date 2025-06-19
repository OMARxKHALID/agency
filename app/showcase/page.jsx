import GridBackground from "@/components/grid-background";

export default function ShowcasePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <GridBackground />

      <main className="relative z-10 px-10 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-6xl font-black">Our Showcase</h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Explore our portfolio of award-winning web design projects that
              have helped brands elevate their digital presence and drive
              meaningful results.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="cursor-pointer group">
                <div className="bg-gray-200 aspect-[4/3] rounded-lg mb-4 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=400&text=Project ${item}`}
                    alt={`Project ${item}`}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold">Project {item}</h3>
                <p className="text-gray-600">Web Design & Development</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
