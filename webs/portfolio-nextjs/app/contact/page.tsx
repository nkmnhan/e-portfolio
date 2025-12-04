import { FaUser, FaEnvelope, FaPhone, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        backgroundImage: "url('/contact/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f7f7f7",
      }}
    >
      <main className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">Drop Me a Line</h1>
        <form className="w-full flex flex-col gap-6">
          {/* Name */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaUser className="text-blue-500 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent outline-none text-gray-800"
              required
            />
          </div>
          {/* Email */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaEnvelope className="text-blue-500 mr-3 text-xl" />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none text-gray-800"
              required
            />
          </div>
          {/* Phone (optional) */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaPhone className="text-blue-500 mr-3 text-xl" />
            <input
              type="tel"
              placeholder="Phone (optional)"
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>
          {/* Title */}
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaTag className="text-blue-500 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Title"
              className="w-full bg-transparent outline-none text-gray-800"
              required
            />
          </div>
          {/* How can I help */}
          <div className="flex items-start border-b border-gray-300 py-2">
            <FaCommentDots className="text-blue-500 mr-3 text-xl mt-2" />
            <textarea
              placeholder="How can I help?"
              className="w-full bg-transparent outline-none text-gray-800 resize-none h-20"
              required
            />
          </div>
          {/* Send Button */}
          <button
            type="submit"
            className="mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            <FaPaperPlane className="text-lg" />
            Send
          </button>
        </form>
      </main>
    </div>
  );
}