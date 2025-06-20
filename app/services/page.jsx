export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <main className="relative z-10 px-6 pt-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <h1 className="mb-4 text-4xl font-black md:text-5xl lg:text-6xl md:mb-6">
              Our Services
            </h1>
            <p className="max-w-3xl mx-auto text-base text-gray-600 md:text-xl">
              We offer comprehensive digital solutions to help your business
              thrive in the digital landscape.
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
