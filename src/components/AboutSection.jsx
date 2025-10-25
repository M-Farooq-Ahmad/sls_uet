import uet from "../assets/uet.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${uet})`,
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-cyan-600 mb-2">About Us</h2>
        <p className="italic font-semibold text-gray-800">
          “Building UET Lahore Leaders Through Service and Growth.”
        </p>

        <h3 className="text-3xl font-bold mt-8 mb-4 text-cyan-600">
          Advantages
        </h3>

        <p className="text-gray-800 leading-relaxed">
          Our vision is to empower students by creating a dynamic platform where
          potential meets opportunity. We are dedicated to providing meaningful
          internships, job placements, and career counseling sessions that guide
          students toward success and self-discovery. Beyond professional
          growth, we are equally committed to student welfare — supporting
          deserving individuals by helping with university fees, ensuring that
          no financial challenge hinders their educational journey.
        </p>

        <p className="text-gray-800 leading-relaxed mt-6">
          In addition, we aim to organize industrial tours and educational trips
          that bridge the gap between academic learning and practical
          experience, inspiring students to explore, learn, and grow beyond the
          classroom. Through these collective efforts, we aspire to cultivate a
          generation of capable, confident, and compassionate students who not
          only achieve personal success but also contribute positively to the
          community around them.
        </p>
      </div>
    </section>
  );
}
