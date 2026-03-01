import React from "react";
import { motion } from "framer-motion";
import {
  FaFileContract,
  FaShieldAlt,
  FaMoneyBillWave,
  FaBalanceScale,
  FaUserCheck,
  FaGavel,
} from "react-icons/fa";

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative py-28 text-white text-center overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
          alt="Legal Agreement Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Terms & Conditions
          </motion.h1>

          <p className="text-gray-200">
            Please review our legal terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10">

        {/* Card 1 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <FaUserCheck className="text-4xl text-blue-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">Acceptance of Terms</h3>
          <p className="text-gray-600">
            By accessing our services, you agree to comply with and be bound
            by these Terms & Conditions.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <FaFileContract className="text-4xl text-indigo-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">Services Agreement</h3>
          <p className="text-gray-600">
            All services provided are subject to written agreements, project
            scope, and defined deliverables.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <FaShieldAlt className="text-4xl text-purple-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">Intellectual Property</h3>
          <p className="text-gray-600">
            All content, designs, and code remain the property of the company
            unless otherwise stated.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <FaMoneyBillWave className="text-4xl text-green-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">Payment Terms</h3>
          <p className="text-gray-600">
            Payments must follow the agreed schedule. Delays may result in
            service suspension.
          </p>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <FaBalanceScale className="text-4xl text-yellow-500 mb-6" />
          <h3 className="text-xl font-bold mb-4">Limitation of Liability</h3>
          <p className="text-gray-600">
            We are not liable for indirect or incidental damages arising from
            service usage.
          </p>
        </motion.div>

        {/* Card 6 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <FaGavel className="text-4xl text-red-500 mb-6" />
          <h3 className="text-xl font-bold mb-4">Governing Law</h3>
          <p className="text-gray-600">
            These terms are governed by the laws applicable in the company’s
            operating jurisdiction.
          </p>
        </motion.div>

      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Clarification?
        </h2>
        <p className="mb-6 text-blue-100">
          Contact our legal support team for any questions.
        </p>
        <p>Email: info@yourcompany.com</p>
        <p>Phone: +91 8273194768</p>
      </section>

     
    </div>
  );
};

export default TermsConditions;