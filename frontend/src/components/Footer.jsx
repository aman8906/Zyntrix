import { Link, NavLink } from "react-router-dom";
import {
  Phone,
  MapPin,
  Code,
  Smartphone,
  Globe,
  Bot,
  Palette,
  Server,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";
//import logo from "../assets/zyntrix-logo.png";
const services = [
  { name: "Web Development", href: "/services/web-application-development", icon: Code },
  { name: "Mobile Apps", href: "/services/mobile-apps", icon: Smartphone },
  { name: "Hosting & Domain", href: "/services/cloud-solutions", icon: Globe },
  { name: "AI Integration", href: "/services/ai-integration", icon: Bot },
  { name: "Design Services", href: "/services/website-design", icon: Palette },
  { name: "Tech Integration", href: "/services/tech-integration", icon: Server },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ================= BRAND ================= */}
          <div className="text-center sm:text-left">
            <NavLink to="/" className="inline-flex justify-center sm:justify-start">
              <div className="
                text-3xl font-extrabold tracking-wide
                bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300
                bg-clip-text text-transparent
                drop-shadow-[0_4px_12px_rgba(0,255,255,0.4)]
                hover:scale-105 transition duration-300
              ">
                Zyntrix
              </div>
            </NavLink>

            <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-sm mx-auto sm:mx-0">
              Premium IT solutions for modern businesses. Secure software,
              scalable systems, and impactful digital experiences.
            </p>

            {/* Contact */}
            <div className="space-y-3 text-sm mt-6 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <span>+91 8273194768</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span>India • Serving Worldwide</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 pt-6">
              {[
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/",
                  hover: "hover:bg-[#0A66C2]",
                },
                {
                  icon: Twitter,
                  link: "https://twitter.com/",
                  hover: "hover:bg-[#1DA1F2]",
                },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/",
                  hover:
                    "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500",
                },
                {
                  icon: Github,
                  link: "https://github.com/",
                  hover: "hover:bg-[#171515]",
                },
              ].map(({ icon: Icon, link, hover }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white/5 text-gray-300 
                  transition-all duration-300 transform 
                  hover:scale-110 hover:text-white ${hover}
                  active:scale-95`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `transition block hover:text-blue-500 ${isActive
                        ? "text-blue-500 font-medium"
                        : "text-gray-400"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= OUR SERVICES ================= */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-5">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink
                  to="/services/web-application-development"
                  className="block hover:text-blue-500 transition"
                >
                  Web Application Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/website-design-development"
                  className="block hover:text-blue-500 transition"
                >
                  Website Design & Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/cloud-hosting-solutions"
                  className="block hover:text-blue-500 transition"
                >
                  Cloud & Hosting Solutions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/digital-marketing"
                  className="block hover:text-blue-500 transition"
                >
                  Digital Marketing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/cyber-security-services"
                  className="block hover:text-blue-500 transition"
                >
                  Cyber Security Services
                </NavLink>
              </li>
            </ul>
          </div>

          {/* ================= COMPANY STATS ================= */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-5">Company Stats</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-medium">Experience</p>
                <p className="text-gray-400">2+ Years</p>
              </div>
              <div>
                <p className="text-white font-medium">Projects Delivered</p>
                <p className="text-gray-400">25+</p>
              </div>
              <div>
                <p className="text-white font-medium">Client Satisfaction</p>
                <p className="text-gray-400">100%</p>
              </div>
              <div>
                <p className="text-white font-medium">Support</p>
                <p className="text-gray-400">24/7 Premium</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 text-center md:text-left">
          <p>
            © 2026 <span className="text-white font-medium">Zyntrix</span>. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <NavLink to="/privacy-policy" className="hover:text-blue-500">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-blue-500">
              Terms
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-500">
              Support
            </NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
}