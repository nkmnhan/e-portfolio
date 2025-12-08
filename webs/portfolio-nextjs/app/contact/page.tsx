import { FaUser, FaEnvelope, FaPhone, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";
import { textPrimary, textBody, textWhite } from "@/app/components/themes/default-text";

const inputWrapper = "flex items-center border-b border-gray-300 dark:border-gray-700 py-2";
const bluePrimary = "text-blue-500";
const blueBg = "bg-blue-600 hover:bg-blue-700";

export default function Contact() {
  return (
    <div
      className={clsxMerge(
        "fixed inset-0 flex items-center justify-center",
        bgPrimary
      )}
    >
      <Image
        src="/contact/bg.jpg"
        alt="cover"
        fill
        className={clsxMerge("absolute inset-0 object-cover -z-10")}
        priority
      />
      <main className={clsxMerge(
        "w-full max-w-lg rounded-xl shadow-xl p-8 flex flex-col items-center",
        "bg-white dark:bg-gray-900"
      )}>
        <h1 className={clsxMerge(
          "text-3xl font-bold mb-8 text-center",
          textPrimary
        )}>
          Drop Me a Line
        </h1>
        <form className={clsxMerge("w-full flex flex-col gap-8")}>
          {/* Name */}
          <div className={clsxMerge(
            inputWrapper
          )}>
            <FaUser className={clsxMerge(bluePrimary, "mr-4 text-xl")} />
            <input
              type="text"
              placeholder="Name"
              className={clsxMerge("w-full bg-transparent outline-none", textBody)}
              required
            />
          </div>
          {/* Email */}
          <div className={clsxMerge(
            inputWrapper
          )}>
            <FaEnvelope className={clsxMerge(bluePrimary, "mr-4 text-xl")} />
            <input
              type="email"
              placeholder="Email"
              className={clsxMerge("w-full bg-transparent outline-none", textBody)}
              required
            />
          </div>
          {/* Phone (optional) */}
          <div className={clsxMerge(
            inputWrapper
          )}>
            <FaPhone className={clsxMerge(bluePrimary, "mr-4 text-xl")} />
            <input
              type="tel"
              placeholder="Phone (optional)"
              className={clsxMerge("w-full bg-transparent outline-none", textBody)}
            />
          </div>
          {/* Title */}
          <div className={clsxMerge(
            inputWrapper
          )}>
            <FaTag className={clsxMerge(bluePrimary, "mr-4 text-xl")} />
            <input
              type="text"
              placeholder="Title"
              className={clsxMerge("w-full bg-transparent outline-none", textBody)}
              required
            />
          </div>
          {/* How can I help */}
          <div className={clsxMerge(
            "flex items-start border-b border-gray-300 dark:border-gray-700 py-2"
          )}>
            <FaCommentDots className={clsxMerge(bluePrimary, "mr-4 text-xl mt-2")} />
            <textarea
              placeholder="How can I help?"
              className={clsxMerge("w-full bg-transparent outline-none resize-none h-20", textBody)}
              required
            />
          </div>
          {/* Send Button */}
          <button
            type="submit"
            className={clsxMerge(
              "mt-8 flex items-center justify-center gap-4",
              blueBg,
              "text-white font-semibold py-4 rounded-lg transition",
              textWhite
            )}
          >
            <FaPaperPlane className="text-lg"/>
            Send
          </button>
        </form>
      </main>
    </div>
  );
}