export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <main className="relative z-10 px-6 pt-32 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center md:mb-16">
            <h1 className="mb-4 text-4xl font-black md:text-5xl lg:text-6xl md:mb-6">
              About Us
            </h1>
            <p className="max-w-2xl mx-auto text-base text-gray-600 md:text-xl">
              We are a creative web design agency passionate about building
              exceptional digital experiences. Our team combines strategy,
              design, and technology to help brands grow and succeed online.
            </p>
          </div>
          <div className="space-y-8 text-lg text-gray-700">
            <p>
              Since our founding, we have partnered with businesses of all sizes
              to deliver award-winning websites and digital solutions. Our
              approach is collaborative, transparent, and focused on results.
            </p>
            <p>
              From strategy and branding to web development and ongoing support,
              we are committed to helping our clients achieve their goals and
              stand out in the digital landscape.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
