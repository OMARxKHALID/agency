import GridBackground from "@/components/grid-background";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <GridBackground />

      <main className="relative z-10 px-6 md:px-10 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
              Our Blog
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends in web design, development,
              and digital marketing.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article key={item} className="group cursor-pointer">
                <div className="bg-gray-200 aspect-[16/9] rounded-lg mb-4 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=200&width=350&text=Blog Post ${item}`}
                    alt={`Blog Post ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-sm text-blue-600 font-medium">
                    Web Design
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    The Future of Web Design: Trends to Watch in 2024
                  </h3>
                  <p className="text-gray-600 text-sm">
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
