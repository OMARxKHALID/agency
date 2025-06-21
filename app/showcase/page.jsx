const ShowcasePage = () => {
  return (
    <div className="relative min-h-screen mt-16 overflow-hidden">
      <section className="relative z-10 flex flex-col items-center max-w-6xl px-6 py-20 mx-auto text-center">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50/60 to-pink-50/40 -z-10 rounded-b-3xl" />
        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl drop-shadow-sm">
          Our Work for Great Clients
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-gray-600 md:text-2xl">
          We help B2B brands shine through storytelling, branding, and
          development. Here’s a taste of what we’ve created for our partners.
        </p>
      </section>
    </div>
  );
};

export default ShowcasePage;
