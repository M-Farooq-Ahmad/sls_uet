import { useState } from "react";

export default function CertificatesSection() {
  const [form, setForm] = useState({
    certificate: "",
    phone: "",
    memberId: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    alert("Certificate download simulation — connect backend later!");
  };

  return (
    <section id="certifications" className="bg-gray-50 py-16">
      <div className="max-w-md mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8">
          Our <span className="text-cyan-500">Certificates</span>
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleDownload();
          }}
          className="space-y-4"
        >
          <select
            name="certificate"
            value={form.certificate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-cyan-500"
            required
          >
            <option value="">Name Of Certificate</option>
            <option value="participation">Participation Certificate</option>
            <option value="volunteer">Volunteer Certificate</option>
            <option value="achievement">Achievement Certificate</option>
          </select>

          <input
            type="text"
            name="phone"
            placeholder="03xxxxxxxxx"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-cyan-500"
            required
          />

          <input
            type="text"
            name="memberId"
            placeholder="20XX-SLS.UET-XXXX"
            value={form.memberId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-cyan-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Download
          </button>
        </form>
      </div>
    </section>
  );
}
