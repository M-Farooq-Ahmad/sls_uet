import farooq from "../assets/farooq.jpg";
import hazrat from "../assets/hazrat.jpg";
import shahzad from "../assets/shahzad.jpg";

const team = [
  {
    role: "Chairman",
    name: "Farooq Baloch",
    program: "Automotive Engineer 22 UET Lahore",
    desc: "I’m honored to introduce the Serve and Lead Society, an initiative I proudly founded with the vision of empowering UET Lahore students through growth, opportunity, and service. Our mission is to help students unlock their potential, shape their careers, and make a meaningful impact through internships, welfare initiatives, and educational opportunities. I warmly invite all new students to join us — to serve with purpose, lead with passion, and grow together toward success and excellence.",
    img: farooq,
    align: "left",
  },
  {
    role: "President",
    name: "Ali Hassan (2025-26)",
    program: "Mechanical Engineer 22 UET Lahore",
    desc: "I’m honored to introduce the Serve and Lead Society, a vision dedicated to empowering UET Lahore students through growth, opportunity, and service. Our mission is to help students discover their potential, build careers, and create real impact through internships, welfare support, and educational experiences. I invite all new students to join us, serve with purpose, lead with passion, and move together toward success.",
    img: hazrat,
    align: "right",
  },
  {
    role: "Vice President",
    name: "Ali Shehzad (2025-26)",
    program: "Automotive Engineer 22 UET Lahore",
    desc: "I’m honored to serve as the Vice President of the Serve and Lead Society, a platform dedicated to empowering UET Lahore students through learning, leadership, and service. Our mission is to guide students in exploring their potential, building their professional paths, and contributing meaningfully to society through internships, welfare initiatives, and educational opportunities. I encourage all students to join us — to learn with purpose, lead with confidence, and work together toward growth and excellence.",
    img: shahzad,
    align: "left",
  },
];

export default function TeamSection({ memberData = "none", hide = false }) {
  // Determine what to render
  let displayTeam = [];

  if (memberData === "none" || !memberData) {
    // Show full team if 'none' or undefined
    displayTeam = team;
  } else if (typeof memberData === "object") {
    // Show only the passed member object
    displayTeam = [memberData];
  }

  return (
    <section id="team" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {!hide && (
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-cyan-600">About</span>{" "}
            <span className="text-gray-800">Team Members</span>
          </h2>
        )}

        {displayTeam.length === 0 ? (
          <p className="text-gray-600 italic">No team data available.</p>
        ) : (
          <div className="flex flex-col space-y-16">
            {displayTeam.map((member, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  member.align === "right"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center bg-white rounded-xl shadow-md p-8 transition-transform duration-300 hover:scale-[1.01]`}
              >
                {/* Image */}
                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-52 h-60 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Text */}
                <div className="md:w-2/3 text-center">
                  <h3 className="text-3xl font-bold text-cyan-600 mb-1">
                    {member.role}
                  </h3>
                  <p className="font-semibold text-gray-800">{member.name}</p>
                  <p className="text-gray-600 italic mb-4">{member.program}</p>
                  <p className="text-gray-700 leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
