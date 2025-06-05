import GridBackground from "@/components/grid-background";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <GridBackground />

      <main className="relative z-10 px-10 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black mb-6">Our Showcase</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of award-winning web design projects that
              have helped brands elevate their digital presence and drive
              meaningful results.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-gray-200 aspect-[4/3] rounded-lg mb-4 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=400&text=Project ${item}`}
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                <p className="text-gray-600">Web Design & Development</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
