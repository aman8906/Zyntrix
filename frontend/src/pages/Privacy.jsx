import React from "react";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaDatabase,
  FaLock,
  FaUserCheck,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative py-28 text-white text-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Data Security"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Privacy Policy
          </motion.h1>

          <p className="text-gray-200">
            Your data security and privacy are our highest priority.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 space-y-20">

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
            alt="Information Collection"
            className="rounded-3xl shadow-xl"
          />

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white p-10 rounded-3xl shadow-lg"
          >
            <FaDatabase className="text-4xl text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Information We Collect
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We collect essential personal details like name, email,
              phone number, and project information to deliver
              customized IT services.
            </p>
          </motion.div>

        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white p-10 rounded-3xl shadow-lg"
          >
            <FaUserShield className="text-4xl text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              How We Use Your Data
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your data helps improve performance, optimize
              communication, and enhance customer experience.
            </p>
          </motion.div>

          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Data Usage"
            className="rounded-3xl shadow-xl"
          />

        </div>

        {/* SECTION 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
            alt="Cyber Security"
            className="rounded-3xl shadow-xl"
          />

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white p-10 rounded-3xl shadow-lg"
          >
            <FaLock className="text-4xl text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Data Protection & Security
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We use enterprise-level encryption, secure hosting,
              firewall protection, and industry best practices.
            </p>
          </motion.div>

        </div>

        {/* RIGHTS SECTION */}
        <motion.div
          whileHover={{ y: -6 }}
          className="bg-white p-12 rounded-3xl shadow-xl text-center"
        >
          <FaUserCheck className="text-4xl text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">
            Your Rights
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You can request access, correction, or deletion of your data
            anytime by contacting our privacy support team.
          </p>
        </motion.div>

      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <FaEnvelopeOpenText className="text-4xl mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">
          Contact Our Privacy Team
        </h2>
        <p className="mb-6 text-indigo-100">
          Have questions about your data? Reach out anytime.
        </p>

        <p>Email: info@zyntrix.com</p>
        <p>Phone: +91 8273194768</p>
      </section>

      

    </div>
  );
};

export default PrivacyPolicy;