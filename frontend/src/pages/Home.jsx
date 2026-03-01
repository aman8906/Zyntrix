"use client";



import {
  Cloud,
  Code2,
  Shield,
  Users,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Globe,
  Search,
  Megaphone,
  Layout,
  Gauge,
  PenTool,
  Icon,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Briefcase, Award, Clock3, Smile } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, duration = 2000 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true

  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
    </span>
  );
}
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const services = [
  {
    title: "Web Application Development",
    icon: Globe,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    desc: "We build scalable and secure web applications tailored to your business goals.",
    features: ["Custom Web Applications", "SaaS Platforms", "API Development", "Enterprise Architecture", "Modern Tech Stack"],
  },
  {
    title: "Search Engine Optimization (SEO)",
    icon: Search,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    desc: "Improve visibility, traffic and conversions with data-driven SEO strategies.",
    features: ["Technical SEO", "On-Page SEO", "Keyword Research", "Content Optimization", "Ranking Growth"],
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
    desc: "Performance marketing strategies that generate leads and grow revenue.",
    features: ["Paid Advertising", "Funnels", "Social Media Marketing", "Conversion Optimization", "Analytics"],
  },
  {
    title: "Website Design & Development",
    icon: Layout,
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",
    desc: "Modern, conversion-focused websites with premium UI/UX design.",
    features: ["UI/UX Design", "Responsive Websites", "CMS Development", "Landing Pages", "Ecommerce"],
  },
  {
    title: "Performance & Speed Optimization",
    icon: Gauge,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    desc: "Lightning fast websites that improve SEO and user experience.",
    features: ["Core Web Vitals", "Code Optimization", "Caching", "Lazy Loading", "Speed Audits"],
  },
  {
    title: "Cloud & Hosting Solutions",
    icon: Cloud,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    desc: "Secure cloud infrastructure and reliable hosting solutions.",
    features: ["AWS / GCP", "DevOps", "CI/CD", "Server Management", "Scalable Infrastructure"],
  },
  {
    title: "Cyber Security Services",
    icon: Shield,
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    desc: "Protect your business with enterprise-grade security solutions.",
    features: ["Security Audits", "Pen Testing", "Monitoring", "Threat Protection", "Hardening"],
  },
  {
    title: "Branding & Content Marketing",
    icon: PenTool,
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
    desc: "Build a strong brand and authority with powerful content strategies.",
    features: ["Brand Strategy", "Content Writing", "Social Content", "Design Systems", "Storytelling"],
  },
];
const team = [
  {
    name: "Ragni Mehta",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Simran Kaur",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Rohan Sharma",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  }
];
export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSocial, setActiveSocial] = useState(null);
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const current = services[active];
  const SectionTitle = ({ children, center = false, light = false }) => {
    return (
      <div className={`relative inline-block group ${center ? "mx-auto text-center" : ""}`}>
        <h2
          className={`text-3xl md:text-4xl font-bold relative z-10 ${light ? "text-white" : "text-slate-900"
            }`}
        >
          {children}
        </h2>

        {/* Animated Underline */}
        <span
          className="absolute left-1/2 -bottom-3 h-[3px] w-16 
        bg-gradient-to-r from-blue-600 to-indigo-600 
        transform -translate-x-1/2 transition-all duration-500 
        group-hover:w-full"
        />
      </div>
    );
  };
  return (
    <div className="bg-slate-950 text-white overflow-hidden">

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600)",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Delivering Secure, Scalable & Future-Ready IT Solutions
          </h1>

          <p className="mt-6 text-slate-300 text-lg md:text-xl leading-relaxed">
            We partner with forward-thinking organizations to design,
            develop, and deploy enterprise-grade technology solutions
            that transform challenges into competitive advantages.
          </p>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 bg-blue-600 rounded-xl font-semibold hover:bg-blue-500 transition flex items-center gap-2 shadow-lg hover:shadow-blue-500/50"
            >
              Get Started <ArrowRight size={18} />
            </button>

            <button
              onClick={() => navigate("/services")}
              className="px-8 py-3 border border-slate-600 rounded-xl hover:border-blue-500 hover:text-blue-400 transition"
            >
              Our Services
            </button>
          </div>
        </motion.div>
      </section>
      {/* ABOUT - IMAGE + CONTENT VERSION */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"
              alt="IT Company Team Collaboration"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left">

            {/* Section Title */}
            <div className="relative inline-block mb-8">
              <SectionTitle>About Us</SectionTitle>


            </div>

            {/* Main Heading */}
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-black leading-snug">
              We Craft Digital Experiences That Elevate Your Brand
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At <span className="font-semibold text-blue-900">YourCompany</span>,
              we blend creativity, strategy, and technology to build powerful digital
              solutions that leave a lasting impact.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From innovative design to scalable development, our team works passionately
              to transform your ideas into meaningful experiences that drive growth and
              strengthen your brand presence.
            </p>
            {/* Button */}
            <button onClick={() => navigate("/about")} className="px-8 py-3 rounded-full border-2 border-blue-900 text-blue-900 font-semibold shadow-md hover:bg-blue-900 hover:text-white transition duration-300">
              Read More
            </button>

          </div>
        </div>
      </section>
      {/* COMPANY ACHIEVEMENTS */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600')] bg-cover bg-center" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-6"
        >
          <div className="text-center mb-16">
            <SectionTitle center light>
              Our Performance In Numbers
            </SectionTitle>
            <p className="text-slate-400 mt-3">
              Real metrics that define our growth & commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Clock3, number: 18000, label: "Working Hours" },
              { icon: Briefcase, number: 950, label: "Projects Delivered" },
              { icon: Smile, number: 600, label: "Satisfied Clients" },
              { icon: Award, number: 40, label: "Global Awards" },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="bg-slate-900/70 backdrop-blur-lg border border-slate-800 p-8 rounded-2xl hover:border-blue-500 transition"
                >
                  <Icon className="mx-auto text-blue-500 mb-4" size={36} />

                  <h3 className="text-3xl font-bold">
                    <AnimatedCounter value={item.number} />+
                  </h3>

                  <p className="text-slate-400 mt-2">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <SectionTitle center light>
            Our Services
          </SectionTitle>
        </div>
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT LIST */}
          <div className="space-y-3">
            {services.map((s, i) => {
              const I = s.icon;
              const isActive = i === active;

              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-5 rounded-2xl border flex items-center gap-4 transition-all duration-300
            ${isActive
                      ? "border-blue-500 bg-blue-500/10 scale-[1.02]"
                      : "border-slate-800 hover:border-slate-600"
                    }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${isActive ? "bg-blue-600" : "bg-slate-800"
                      }`}
                  >
                    <I size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-slate-400">Click to view details</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT DETAILS */}
          <div className="rounded-2xl border border-slate-800 overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img
                src={current.img}
                alt={current.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  {React.createElement(current.icon, { size: 22 })}
                </div>

                <h2 className="text-2xl font-bold">{current.title}</h2>
              </div>

              <p className="text-slate-300">{current.desc}</p>

              <ul className="grid sm:grid-cols-2 gap-3 mt-5">
                {current.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-300">
                    <Check size={18} className="text-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to={`/request/${encodeURIComponent(current.title)}`}>
                <button className="mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold flex items-center gap-2">
                  Request  This Service
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">

        {/* Background Image */}
        <div className="absolute inset-0 ">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Business Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something Amazing Together
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            We are ready to help you grow your business with powerful,
            modern, and scalable digital solutions.
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
              Contact Now
            </button></Link>
        </div>

      </section>
      {/* PROJECTS */}
      <section className="relative py-24 overflow-hidden">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>

        {/* Glow Effects */}
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <SectionTitle center light>
              Our Projects
            </SectionTitle>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              We deliver scalable digital solutions that empower businesses,
              enhance user experiences, and drive measurable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise SaaS Platform",
                slug: "enterprise-saas-platform",
                img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "E-Commerce Web Solution",
                slug: "ecommerce-web-solution",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Cloud Infrastructure System",
                slug: "cloud-infrastructure-system",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden 
          border border-white/10 
          bg-white/5 backdrop-blur-xl
          group shadow-2xl"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
            opacity-0 group-hover:opacity-100 transition duration-500 
            flex flex-col items-center justify-center text-center px-6">

                  <h3 className="text-white text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <button
                    onClick={() => navigate(`/case-study/${project.slug}`)}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-sm font-semibold transition"
                  >
                    View Case Study
                  </button>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      {/* TEAM */}


      <section className="max-w-7xl mx-auto px-6 pb-24 text-center ">
        <div className="mb-16 ">
          <SectionTitle center light>
            Our Team
          </SectionTitle>
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative cursor-pointer bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 
        ${activeIndex === i ? "scale-105 shadow-2xl" : "hover:-translate-y-2"}`}
            >
              {/* Top Blue Shape */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500 rounded-bl-full"></div>

              {/* Bottom Grey Shape */}
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-gray-200 rounded-tr-full"></div>

              {/* Profile Image */}
              <div className="relative pt-12 pb-6 flex justify-center">
                <div
                  className={`rounded-full border-4 
            ${activeIndex === i ? "border-cyan-500" : "border-white"} 
            shadow-lg overflow-hidden w-28 h-28 transition-all duration-500`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition duration-500 
              ${activeIndex === i ? "scale-110" : "hover:scale-105"}`}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="pb-6 px-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-cyan-500 text-sm mt-1">{member.role}</p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 pb-6">
                {[
                  { icon: Linkedin, name: "linkedin" },
                  { icon: Twitter, name: "twitter" },
                  { icon: Facebook, name: "facebook" },
                  { icon: Instagram, name: "instagram" }
                ].map((social, idx) => {
                  const Icon = social.icon;

                  const isActive =
                    activeIndex === i && activeSocial === social.name;

                  return (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(i);
                        setActiveSocial(social.name);
                      }}
                      className={`p-2 rounded-full transition-all duration-300
                ${isActive
                          ? "bg-cyan-500 text-white scale-110 shadow-lg"
                          : "bg-gray-100 text-gray-500 hover:bg-cyan-500 hover:text-white"
                        }`}
                    >
                      <Icon size={18} />
                    </button>
                  );
                })}
              </div>

            </div>
          ))}
        </div>     {/* ✅ GRID CLOSED */}
      </section>


      {/* TESTIMONIALS */}
      <section className="relative py-24 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>

        {/* Glow Effects */}
        <div className="absolute top-[-120px] right-[-120px] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] left-[-120px] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">
              What Our Clients Say
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Trusted by enterprises and startups worldwide for delivering secure,
              scalable and performance-driven IT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                name: "Michael Roberts",
                role: "CTO, FinTech Corp",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                text: "The team delivered a highly scalable SaaS platform that transformed our operations. Security, performance, and UX were handled flawlessly."
              },
              {
                name: "Sarah Johnson",
                role: "CEO, RetailX",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                text: "Our e-commerce infrastructure is now faster and more reliable than ever. Their DevOps automation saved us months of deployment effort."
              },
              {
                name: "David Lee",
                role: "IT Director, CloudSys",
                image: "https://randomuser.me/api/portraits/men/52.jpg",
                text: "Exceptional cloud migration strategy with zero downtime. The professionalism and technical expertise were outstanding."
              }
            ].map((client, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 
          rounded-2xl p-8 text-center shadow-2xl 
          hover:border-blue-500/40 transition duration-500"
              >

                {/* Client Image */}
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-500"
                />

                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-slate-300 italic mb-6">
                  “{client.text}”
                </p>

                <h4 className="text-white font-semibold">
                  {client.name}
                </h4>
                <p className="text-slate-400 text-sm">
                  {client.role}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>
      {/* CONTACT - PREMIUM VERSION */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTitle center light>
              Let’s Start a Conversation
            </SectionTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-10 bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-xl">

            {/* Info Side */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-slate-400">
                Reach out to us for consultation, project inquiries or partnerships.
              </p>

              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />
                contact@yourcompany.com
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-500" />
                +91 9876543210
              </div>

              <button
                onClick={() => window.open("https://calendly.com/yourcompany/meeting", "_blank")}//Add my company link
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
  rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 
  transition duration-300 font-semibold"
              >
                Schedule Meeting
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Project Details"
                rows="4"
                required
                className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>

              {success && (
                <p className="text-green-400 text-center mt-3">
                  ✅ Inquiry submitted successfully!
                </p>
              )}

            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center px-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="max-w-4xl mx-auto "
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready To Start Your Project?
          </h2>
          <p className="mb-6 text-slate-100">
            Let’s build something amazing together.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-slate-200 transition"
          >
            Get Free Consultation
          </button>
        </motion.div>
      </section>

    </div>
  );
}