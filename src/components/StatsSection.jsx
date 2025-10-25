const stats = [
  { icon: "👨‍🎓", title: "Success Internees", value: "50+" },
  { icon: "📋", title: "Executive Members", value: "3" },
  { icon: "💼", title: "Members", value: "200+" },
  { icon: "🎯", title: "Job Success", value: "10+" },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-lg shadow p-6 text-center hover:shadow-md transition"
          >
            <div className="text-5xl mb-3">{stat.icon}</div>
            <h4 className="font-bold text-gray-800">{stat.title}</h4>
            <p className="text-cyan-600 text-xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
