import welcome from '../assets/welcome.jpg'
import intenship from '../assets/intern.jpg'
import career from '../assets/couns.jpg'
import farewell from '../assets/internship.png'

const events = [
  {
    title: "Welcome",
    date: "14 November 2025",
    time: "08:00 PM",
    location: "Jamia Masjid Karwan e Madina, Opposite Side Gate No. 2 UET Lahore",
    img: welcome,
  },
  {
    title: "Career Counseling",
    date: "14 November 2025",
    time: "06:00 PM",
    location: "Jamia Masjid Karwan e Madina, Opposite Side Gate No. 2 UET Lahore",
    img: career,
  },
  {
    title: "Internship",
    date: "14 November 2025",
    time: "08:00 PM",
    location: "Jamia Masjid Karwan e Madina, Opposite Side Gate No. 2 UET Lahore",
    img: intenship,
  },
  {
    title: "Farewell",
    date: "14 November 2025",
    time: "08:00 PM",
    location: "Jamia Masjid Karwan e Madina, Opposite Side Gate No. 2 UET Lahore",
    img: farewell,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="bg-white py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-12">
          Our <span className="text-cyan-500">Events</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="bg-cyan-500 text-white py-4 px-3">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-sm mt-2">📅 Date: {event.date}</p>
                <p className="text-sm">⏰ Time: {event.time}</p>
                <p className="text-sm mt-2">📍 Location: {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
