import { useState } from "react";

export default function VerificationSection() {
  const [memberId, setMemberId] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    if (memberId.trim() === "") {
      alert("Please enter your Membership ID.");
      return;
    }
    // Placeholder: Replace this with your backend call or validation logic
    alert(`Verifying Member ID: ${memberId}`);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-md mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-black">Members</span>{" "}
          <span className="text-cyan-500">Verifications</span>
        </h2>

        {/* Form */}
        <form
          onSubmit={handleVerify}
          className="flex flex-col items-center space-y-6"
        >
          <div className="w-full">
            <label
              htmlFor="memberId"
              className="block text-left text-gray-800 font-medium mb-2"
            >
              Membership ID
            </label>
            <input
              id="memberId"
              type="text"
              placeholder="20XX-SLS.UET-XXXX"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-8 py-2 rounded-md font-medium hover:bg-gray-800 transition"
          >
            Verify
          </button>
        </form>
      </div>
    </section>
  );
}
