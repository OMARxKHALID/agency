export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <main className="relative z-10 px-10 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-6xl font-black">Our Services</h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              From web design and development to branding and strategy, we offer
              a full suite of digital services to help your business succeed.
            </p>
          </div>

          {/* Services Grid Placeholder */}
          <div className="grid gap-6 mb-20 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {/* Add your services here */}
          </div>
        </div>
      </main>
    </div>
  );
}
