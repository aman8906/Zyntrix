import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Users,
  ChevronDown,
} from "lucide-react";

const infoCards = [
  {
    icon: Phone,
    title: "Phone Numbers",
    desc: ["+91 8273194768", "+91 6395183380"],
  },
  {
    icon: Mail,
    title: "Email Address",
    desc: ["zyntrix.company@gmail.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    desc: ["Mon – Fri: 9:00 AM – 7:00 PM", "Sat: 10:00 AM – 4:00 PM"],
  },
  {
    icon: MapPin,
    title: "Service Areas",
    desc: ["India", "Remote Worldwide"],
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Delivery usually takes 7–30 days depending on project complexity.",
  },
  {
    q: "What is included in the ₹9,999 package?",
    a: "5-page website, responsive design, domain, hosting, SSL & basic SEO.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes, we offer flexible maintenance & support packages.",
  },
  {
    q: "Do you build mobile apps?",
    a: "Yes, we develop Android & iOS apps using modern frameworks.",
  },
  {
    q: "Can you integrate AI chatbots?",
    a: "Absolutely! We integrate AI chatbots & automation solutions.",
  },
   {
    q: "How Much Will It Cost?",
    a: "The overall cost depends on your project requirements, features, design complexity, and technology stack. After understanding your goals, timeline, and expected functionality, we provide a transparent and customized quotation. Our pricing ensures quality development, scalability, and long-term value without hidden charges."
  },
  {
    q: "How Long Does It Take To Design?",
    a: "Project timelines vary based on scope and complexity. A standard business website may take 2–4 weeks, while custom web applications or enterprise solutions require additional planning and development time. We follow a structured workflow with milestones to ensure timely delivery without compromising quality."
  },
  {
    q: "How Do I Associate With Your IT Company?",
    a: "Getting started is simple. You can contact us through our website or schedule a consultation call. We analyze your requirements, suggest the best technical approach, and provide a proposal outlining scope, cost, and timeline. Once approved, our team begins structured project execution."
  },
  {
    q: "Can You Improve My Existing Website?",
    a: "Yes, we specialize in redesigning and optimizing existing websites. Whether it’s performance issues, outdated design, SEO improvements, or security enhancements, we carefully audit your platform and implement strategic upgrades to improve user experience, speed, and overall effectiveness."
  },
  {
    q: "When Do I Need To Make Payment?",
    a: "We follow a milestone-based payment structure for transparency and trust. Typically, an initial deposit is required to begin the project, followed by payments at defined development stages. This ensures accountability, smooth progress, and clear communication throughout the project lifecycle."
  }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
 const [activeFAQ, setActiveFAQ] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative py-28 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
            alt="office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80" />
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative max-w-7xl mx-auto px-6 text-center"
        >
         <h1 className="relative inline-block text-5xl font-bold mb-6 group cursor-pointer">
  Get In <span className="text-blue-400">Touch</span>

  <span className="absolute left-0 -bottom-3 h-[4px] w-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-500 group-hover:w-full"></span>
</h1>

          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Ready to start your project? Let’s build something amazing together.
          </p>

          <div className="flex justify-center gap-6 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <MessageCircle size={16} /> Quick Response
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} /> Free Consultation
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} /> Expert Team
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* ===== PREMIUM FORM ===== */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                alt="form background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-black/80" />
            </div>

            <div className="relative z-10 p-10 text-white backdrop-blur-xl bg-white/10">
           <h2 className="relative inline-block text-3xl font-bold mb-2 group cursor-pointer">
  Send Us a Message
  <span className="absolute left-0 -bottom-2 h-[3px] w-14 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-500 group-hover:w-full"></span>
</h2>
              <p className="text-white/80 mb-8">
                We’ll contact you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-500/20 text-green-200 p-5 rounded-xl">
                  ✅ Thank you! We’ll contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {["Full Name", "Email Address", "Service Interested In"].map(
                    (label, i) => (
                      <input
                        key={i}
                        required
                        type={label.includes("Email") ? "email" : "text"}
                        placeholder={label}
                        className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/30
                        text-white placeholder-white/60 focus:outline-none focus:ring-2
                        focus:ring-blue-400/50"
                      />
                    )
                  )}

                  <textarea
                    required
                    rows="4"
                    placeholder="Project Details..."
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/30
                    text-white placeholder-white/60 focus:outline-none focus:ring-2
                    focus:ring-blue-400/50 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-semibold
                    bg-gradient-to-r from-blue-500 to-indigo-600
                    hover:scale-[1.03] transition"
                  >
                    Send Message 🚀
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* ===== INFO ===== */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {infoCards.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow flex gap-4"
              >
                <item.icon className="text-blue-600" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  {item.desc.map((d, idx) => (
                    <p key={idx} className="text-gray-600">
                      {d}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-lg mb-2">
                🚀 Quick Response Guarantee
              </h4>
              <p className="text-sm opacity-90">
                All queries answered within 24 business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ + MAP ================= */}
<section className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

    {/* LEFT SIDE - FAQ */}
    <div>
    <h2 className="relative inline-block text-3xl font-bold mb-10 group cursor-pointer">
  Frequently Asked Questions
  <span className="absolute left-0 -bottom-2 h-[3px] w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
</h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isActive = activeFAQ === i;

          return (
            <div key={i} className="shadow-md rounded overflow-hidden">

              {/* Question Bar */}
              <button
                onClick={() =>
                  setActiveFAQ(isActive ? null : i)
                }
                className={`w-full flex justify-between items-center px-6 py-4 text-left font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "bg-cyan-400 text-white hover:bg-cyan-500"
                }`}
              >
                <span>{faq.q}</span>

                <span className="text-xl font-bold">
                  {isActive ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-500 overflow-hidden bg-white
                ${isActive ? "max-h-96 p-6" : "max-h-0 px-6"}
                `}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>

    {/* RIGHT SIDE - MAP */}
    <div>
      <h2 className="relative inline-block text-3xl font-bold mb-10 group cursor-pointer">
  Our Location
  <span className="absolute left-0 -bottom-2 h-[3px] w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
</h2>
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-indigo-900/10 pointer-events-none" />

        <iframe
          title="Company Location"
          src="https://www.google.com/maps?q=Mumbai&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[500px] border-0"
        />
      </div>
    </div>

  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r p-12 text-center text-white ">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="opacity-90 mb-8 max-w-2xl mx-auto">
             Join our satisfied clients and let us help you achieve your digital goals. Contact us today for a free consultation and detailed project proposal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:zyntrix.company@gmail.com"
                className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:scale-105 transition"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/918273194768"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-white rounded-xl font-semibold hover:bg-white/10 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}