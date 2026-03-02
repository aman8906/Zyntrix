import React from "react";
import { motion } from "framer-motion";
import {
  FaHeadset,
  FaEnvelope,
  FaPhoneAlt,
  FaComments,
  FaQuestionCircle,
  FaLifeRing,
} from "react-icons/fa";

const Support = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-28 text-white text-center overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
          alt="Customer Support"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Support Center
          </motion.h1>

          <p className="text-gray-200">
            We're here to help you 24/7. Get assistance from our expert team.
          </p>
        </div>
      </section>

      {/* ================= SUPPORT OPTIONS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

        <motion.div
          whileHover={{ y: -10 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
        >
          <FaHeadset className="text-4xl text-blue-600 mx-auto mb-6" />
          <h3 className="text-xl font-bold mb-4">Live Chat</h3>
          <p className="text-gray-600">
            Chat with our support team in real-time for instant help.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
        >
          <FaEnvelope className="text-4xl text-indigo-600 mx-auto mb-6" />
          <h3 className="text-xl font-bold mb-4">Email Support</h3>
          <p className="text-gray-600">
            Send us your queries and we will respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
        >
          <FaPhoneAlt className="text-4xl text-green-600 mx-auto mb-6" />
          <h3 className="text-xl font-bold mb-4">Call Us</h3>
          <p className="text-gray-600">
            Speak directly with our support specialists.
          </p>
        </motion.div>

      </section>

      {/* ================= HELP IMAGE SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
          alt="Support Team"
          className="rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105"
        />

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Dedicated Technical Assistance
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our professional IT experts are ready to assist you with
            deployment, troubleshooting, cloud management, and more.
            We ensure fast response times and reliable solutions.
          </p>
        </div>

      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Quick answers to common support questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 space-y-8">

          <div className="flex items-start gap-4">
            <FaQuestionCircle className="text-blue-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">
                What are your support hours?
              </h4>
              <p className="text-gray-600">
                We offer 24/7 technical support for all active clients.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaLifeRing className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">
                How quickly do you respond?
              </h4>
              <p className="text-gray-600">
                Email responses are provided within 24 hours.
                Live chat is instant during business hours.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Still Need Help?
        </h2>
        <p className="mb-6 text-blue-100">
          Contact our support team anytime.
        </p>
        <p>Email: support@zyntrix.com</p>
        <p>Phone: +91 8273194768</p>
      </section>

     

    </div>
  );
};

export default Support;