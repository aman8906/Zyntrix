"use client";

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";

export default function RequestService() {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  const decodedService = decodeURIComponent(serviceName);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    alert("Service request submitted successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-10"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Heading */}
        <div className="text-center mb-14">
          <div className="text-center mb-16 group">
            <h2 className="text-4xl md:text-5xl font-bold">
              Request Service
            </h2>
            <span className="block h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 
                 mx-auto mt-4 rounded-full
                 transition-all duration-500 group-hover:w-44"></span>

            <p className="mt-4 text-slate-400 text-lg">
              You're requesting:{" "}
              <span className="text-blue-500 font-semibold">
                {decodedService}
              </span>
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-2 text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block mb-2 text-slate-300">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your company name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-slate-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-slate-300">
                Project Details
              </label>
              <textarea
                name="message"
                rows="5"
                required
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition"
            >
              Submit Request <Send size={18} />
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}