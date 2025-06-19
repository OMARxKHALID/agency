import GridBackground from "@/components/grid-background";

export default function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <GridBackground />

      <main className="relative z-10 px-6 pt-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <h1 className="mb-4 text-4xl font-black md:text-5xl lg:text-6xl md:mb-6">
              Our Blog
            </h1>
            <p className="max-w-3xl mx-auto text-base text-gray-600 md:text-xl">
              Stay updated with the latest trends in web design, development,
              and digital marketing.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-6 mb-20 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article key={item} className="cursor-pointer group">
                <div className="bg-gray-200 aspect-[16/9] rounded-lg mb-4 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=200&width=350&text=Blog Post ${item}`}
                    alt={`Blog Post ${item}`}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-blue-600">
                    Web Design
                  </span>
                  <h3 className="text-xl font-bold transition-colors group-hover:text-blue-600">
                    The Future of Web Design: Trends to Watch in 2024
                  </h3>
                  <p className="text-sm text-gray-600">
                    Discover the latest web design trends that are shaping the
                    digital landscape...
                  </p>
                  <div className="text-sm text-gray-500">March 15, 2024</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
