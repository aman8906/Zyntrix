import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-20">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 grid gap-12
        sm:grid-cols-2 lg:grid-cols-4">

        {/* BRANDING */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-3">
            YourCompany
          </h3>
          <p className="text-sm mb-4">
            We build high-performance digital products that help businesses
            grow, scale, and convert.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="flex gap-4 text-xl mt-4">
            <a href="#" className="hover:text-cyan-400 transition">🌐</a>
            <a href="#" className="hover:text-cyan-400 transition">🐦</a>
            <a href="#" className="hover:text-cyan-400 transition">💼</a>
            <a href="#" className="hover:text-cyan-400 transition">📸</a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>📍 Mumbai, India</li>
            <li>📧 hello@yourcompany.com</li>
            <li>📞 +91 90000 00000</li>
          </ul>
        </div>

        {/* CTA / NEWSLETTER */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Stay Updated
          </h4>
          <p className="text-sm mb-4">
            Get insights, updates, and tips straight to your inbox.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-gray-900 border border-gray-700
              rounded-lg px-3 py-2 text-sm focus:outline-none
              focus:border-cyan-500"
            />
            <button
              type="submit"
              className="bg-cyan-500 text-black px-4 py-2
              rounded-lg text-sm font-semibold hover:bg-cyan-600 transition"
            >
              Join
            </button>
          </form>

          {/* TRUST SIGNALS */}
          <div className="flex gap-3 mt-6 text-sm">
            <span className="bg-gray-900 px-3 py-1 rounded-lg border border-gray-800">
              🔒 SSL Secured
            </span>
            <span className="bg-gray-900 px-3 py-1 rounded-lg border border-gray-800">
              ✅ Verified
            </span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-16 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row
          items-center justify-between gap-4 text-sm">

          {/* LEGAL */}
          <p>
            © 2026 YourCompany. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Use</a>
          </div>

          {/* BACK TO TOP */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            ↑ Back to top
          </button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;