export default function ShowcasePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
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

          {/* Portfolio Grid Placeholder */}
          <div className="grid gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
            {/* Add your showcase items here */}
          </div>
        </div>
      </main>
    </div>
  );
}
