import uet from "../assets/uetbg.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${uet})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 leading-tight">
          Building leaders through service
        </h1>

        <p className="text-lg md:text-xl text-gray-800 mb-8">
          Society at UET Lahore
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition">
            Got Membership
          </button>
          <button className="border border-black text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-black hover:text-white transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
