import React from "react";
import {
  Users,
  Target,
  Award,
  Heart,
  Code,
  Search,
  Megaphone,
  Monitor,
  Zap,
  Cloud,
  Shield,
  PenTool,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import  { useEffect, useRef, useState } from "react";
const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
const [activeSocial, setActiveSocial] = useState(null);
const [activeService, setActiveService] = useState(null);
const navigate = useNavigate();
  /* ================= VALUES ================= */
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Our Mission",
      description:
        "Our mission is to help businesses leverage technology as a strategic advantage. We focus on building scalable, secure, and high-performance digital solutions that solve real business challenges. By combining clean architecture, thoughtful design, and reliable engineering, we aim to deliver systems that improve efficiency, enhance user experience, and support long-term growth rather than short-term fixes.",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Our Vision",
      description:
        "Our vision is to become a trusted digital partner for businesses worldwide. We strive to be recognized for technical excellence, transparency, and consistency. By continuously evolving with modern technologies and best practices, we aim to set high standards in quality, performance, and reliability while helping businesses confidently navigate digital transformation.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Our Team",
      description:
        "We are a collaborative team of developers, designers, and strategists who believe in ownership and accountability. Each member brings specialized expertise while working toward a shared goal—delivering digital solutions that are clean, scalable, and impactful. Continuous learning and improvement are core to how we operate.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Our Values",
      description:
        "Integrity, craftsmanship, and accountability guide everything we do. We believe in honest communication, realistic commitments, and delivering work we stand behind. Our values ensure that every solution we build is designed for long-term success and meaningful business outcomes.",
    },
  ];

  const services = [
  {
    icon: Code,
    slug: "web-application-development",
    title: "Web Application Development",
    description:
      "We build scalable, secure web applications tailored to business needs. Our solutions focus on performance, clean architecture, and seamless user experience to support growth and long-term digital success."
  },
  {
    icon: Search,
    slug: "search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    description:
      "We improve search rankings and increase organic traffic through technical optimization, content strategy, and performance analysis to help your brand reach the right audience consistently."
  },
  {
    icon: Megaphone,
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "We create data-driven marketing campaigns that boost visibility, generate leads, and improve conversions across digital platforms using analytics and targeted audience strategies."
  },
  {
    icon: Monitor,
    slug: "website-design-development",
    title: "Website Design & Development",
    description:
      "We design responsive, modern websites focused on usability, speed, and brand identity to deliver engaging user experiences and measurable business impact."
  },
  {
    icon: Zap,
    slug: "performance-optimization",
    title: "Performance & Speed Optimization",
    description:
      "We optimize websites and applications for faster loading, better responsiveness, and improved performance to enhance user satisfaction and search engine rankings."
  },
  {
    icon: Cloud,
    slug: "cloud-hosting-solutions",
    title: "Cloud & Hosting Solutions",
    description:
      "We provide scalable cloud and hosting solutions ensuring security, reliability, and high availability for growing businesses and enterprise operations."
  },
  {
    icon: Shield,
    slug: "cyber-security-services",
    title: "Cyber Security Services",
    description:
      "We protect digital systems with proactive security measures, monitoring, and risk management to safeguard sensitive data and maintain operational trust."
  },
  {
    icon: PenTool,
    slug: "branding-content-marketing",
    title: "Branding & Content Marketing",
    description:
      "We build strong brand identity through strategic storytelling, design, and content marketing to increase engagement and long-term digital presence."
  }
];
  /* ================= TIMELINE ================= */
  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description:
        "The company was founded with a clear focus on quality over quantity. We started by delivering high-quality websites and web applications for startups and growing businesses, emphasizing clean code, performance, and maintainability from the very beginning.",
    },
    {
      year: "2023",
      title: "Expansion",
      description:
        "As client needs evolved, we expanded our services into cloud infrastructure, SEO, digital marketing, and performance optimization. This allowed us to support businesses beyond development and offer more comprehensive digital solutions.",
    },
    {
      year: "2024",
      title: "Product Excellence",
      description:
        "We began delivering complete end-to-end digital products with strong UI/UX, optimized performance, and scalable system architecture. Our solutions were built to grow alongside business demands.",
    },
    {
      year: "2025",
      title: "Trusted Partner",
      description:
        "Through consistent delivery and transparent collaboration, we established long-term partnerships and became a trusted technology partner for businesses focused on sustainable digital growth.",
    },
  ];
const team = [
  {
    name: "Aman Verma",
    role: "CEO & Founder",
    desc: "Visionary leader driving enterprise innovation and scalable cloud solutions.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Neha Sharma",
    role: "CTO",
    desc: "Architect of secure, high-performance SaaS and AI platforms.",
    image:  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Rahul Mehta",
    role: "Head of Engineering",
    desc: "Expert in DevOps automation and distributed system architecture.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Priya Singh",
    role: "Product Strategist",
    desc: "Aligning technology solutions with measurable business growth.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  }
];
  return (
    <div className="pt-16 overflow-hidden">
      {/* ================= HERO ================= */}
      {/* Merged Hero Section */}
<section className="relative py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
  
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1920&q=80"
      alt="About"
      className="w-full h-full object-cover opacity-20"
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold mb-6"
      >
        About <span className="text-blue-300">Zyntrix</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed"
      >
        Zyntrix is a technology-driven company dedicated to designing,
        building, and scaling reliable digital solutions for modern businesses.
        We combine clean architecture, thoughtful design, and performance
        optimization to ensure every product delivers real value.
      </motion.p>

      {/* Counters */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-wrap justify-center gap-10 mt-14"
      >
        {[
          { n: "2+", label: "Years Experience" },
          { n: "25+", label: "Projects Delivered" },
          { n: "15+", label: "Happy Clients" },
          { n: "100%", label: "Client Satisfaction" },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-white">
              {item.n}
            </div>
            <div className="text-sm text-blue-200 mt-1">
              {item.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  </div>
</section>
      {/* ================= STORY ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div>
           <div className="text-center mb-12">
  <h2 className="relative inline-block text-3xl md:text-4xl font-bold group">
    Our Story
    <span className="absolute left-0 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
  </h2>
</div>

            <p className="text-gray-700 leading-relaxed mb-5">
              Our journey began with a simple belief: technology should empower
              businesses, not slow them down. We observed that many organizations
              struggled with fragmented systems, poor performance, and complex
              digital tools that failed to deliver measurable results. This gap
              inspired us to focus on building solutions that are not only modern
              but also practical, scalable, and reliable.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              In our early days, we worked closely with startups and growing
              businesses, prioritizing craftsmanship over volume. Every project
              was approached as a partnership, where understanding business
              goals was just as important as writing clean code. This mindset
              allowed us to create systems designed for long-term value.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              As our experience grew, we expanded into cloud infrastructure,
              performance optimization, SEO, cybersecurity, and digital
              marketing. This evolution enabled us to deliver end-to-end digital
              solutions that support businesses throughout their growth journey.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              What truly differentiates us is our approach. We do not believe in
              one-size-fits-all solutions. Our process begins with deep analysis,
              thoughtful planning, and transparent communication. From system
              architecture to deployment and optimization, we build solutions
              that evolve with business needs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              Over the years, we have helped clients improve application
              performance, strengthen security, enhance brand visibility, and
              achieve measurable growth. Each solution is designed to deliver
              tangible business impact rather than short-term results.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Today, we are proud to be a trusted digital partner for businesses
              that value quality, transparency, and long-term success. Our
              commitment remains the same—to build reliable digital experiences
              that empower businesses to grow with confidence and control.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Story"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
<section className="relative py-24 overflow-hidden  bg-gray-50">

  {/* Background */}
 {} <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>

  {/* Glow Effects */}
  <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-4xl mx-auto px-6">

    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white relative inline-block group">
        Our Journey
        <span className="absolute left-0 -bottom-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
      </h2>
      <p className="text-slate-400 mt-4">
        From a small startup to a trusted IT solutions partner delivering scalable digital transformation worldwide.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative border-l border-white/10">

      {milestones.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="mb-12 ml-6 group"
        >

          {/* Circle */}
          <span className="absolute -left-4 flex items-center justify-center w-8 h-8 
            bg-gradient-to-r from-blue-600 to-indigo-600 
            rounded-full ring-4 ring-slate-900 
            group-hover:scale-110 transition">
          </span>

          {/* Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-2xl p-6 shadow-xl 
            hover:border-blue-500/40 transition duration-300">

            <h3 className="text-xl font-semibold text-white mb-1">
              {m.year} – {m.title}
            </h3>

            <p className="text-slate-400">
              {m.description}
            </p>

          </div>
        </motion.div>
      ))}

    </div>

  </div>
</section>
    {/* ================= VALUES ================= */}
<section className="relative py-24 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>

  {/* Glow Effects */}
  <div className="absolute top-[-120px] right-[-120px] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-[-120px] left-[-120px] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="relative inline-block text-4xl font-bold text-white group">
        Our Core Values
        <span className="absolute left-0 -bottom-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
      </h2>
      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
        The foundation of our innovation, integrity, and long-term partnerships.
      </p>
    </div>

    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((value, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="group relative bg-white/5 backdrop-blur-xl 
          border border-white/10 rounded-2xl p-8 
          hover:border-blue-500/40 transition duration-300 
          hover:-translate-y-2 shadow-xl"
        >

          {/* Icon */}
          <div className="mb-6 inline-flex p-4 rounded-xl 
          bg-gradient-to-r from-blue-600/20 to-purple-600/20
          group-hover:from-blue-600 group-hover:to-indigo-600
          transition duration-300">

            <div className="text-blue-400 group-hover:text-white transition duration-300">
              {value.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3">
            {value.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed text-sm">
            {value.description}
          </p>

          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 to-purple-600/0 
          group-hover:from-blue-600/10 group-hover:to-purple-600/10 
          transition duration-500 pointer-events-none"></div>

        </motion.div>
      ))}
    </div>
  </div>
</section>

     {/* ================= TEAM ================= */}
<section className="relative py-24 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
  <div className="absolute top-[-120px] right-[-120px] w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-[-120px] left-[-120px] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="relative inline-block text-4xl font-bold text-white group">
        Our Leadership Team
        <span className="absolute left-0 -bottom-2 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500 group-hover:w-full"></span>
      </h2>
      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
        A team of innovators, engineers, and strategists driving digital transformation worldwide.
      </p>
    </div>

    {/* Team Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {team.map((member, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
          onClick={() => setActiveIndex(i)}
          className={`relative cursor-pointer backdrop-blur-xl
          bg-white/5 border border-white/10
          rounded-3xl overflow-hidden transition-all duration-500
          ${activeIndex === i
              ? "scale-105 border-cyan-400 shadow-2xl"
              : "hover:-translate-y-2 hover:border-cyan-400/40"
            }`}
        >

          {/* Top Gradient Shape */}
          <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-bl-full opacity-70"></div>

          {/* Profile Image */}
          <div className="relative pt-12 pb-6 flex justify-center">
            <div className={`rounded-full border-4 overflow-hidden w-28 h-28 transition-all duration-500
              ${activeIndex === i ? "border-cyan-400 scale-110" : "border-white/20"}`}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Info */}
          <div className="pb-6 px-6 text-center">
            <h3 className="text-lg font-semibold text-white">
              {member.name}
            </h3>
            <p className="text-cyan-400 text-sm mt-1">
              {member.role}
            </p>
            <p className="text-slate-400 text-sm mt-3">
              {member.desc}
            </p>
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
                      : "bg-white/10 text-slate-400 hover:bg-cyan-500 hover:text-white"
                    }`}
                >
                  <Icon size={18} />
                </button>
              );
            })}
          </div>

        </motion.div>
      ))}

    </div>
  </div>
</section>
     {/* ================= SERVICES ================= */}
<section className=" relative py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 text-center mb-16">
    <div className="text-center mb-12">
      <h2 className="relative inline-block text-3xl md:text-4xl font-bold group">
        Our Services
        <span className="absolute left-0 -bottom-2 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
      </h2>
    </div>

    <p className="text-gray-600 max-w-3xl mx-auto">
      We offer scalable, secure, and high-performance digital solutions tailored for modern enterprises.
    </p>
  </div>

  <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {services.map((s, i) => (
    <div
      key={i}
      onClick={() => setActiveService(i)}
      className={`group relative cursor-pointer rounded-3xl p-10 transition-all duration-500 shadow-md overflow-hidden
      ${
        activeService === i
          ? "bg-gradient-to-br from-teal-300 via-cyan-300 to-purple-300 text-gray-900 shadow-xl scale-105"
          : "bg-gray-100 hover:bg-gradient-to-br hover:from-teal-300 hover:via-cyan-300 hover:to-purple-300 hover:text-gray-900 hover:shadow-xl hover:-translate-y-2"
      }`}
    >

      {/* Icon */}
      <div
        className={`mb-6 w-16 h-16 flex items-center justify-center rounded-xl transition-all duration-500
        ${
          activeService === i
            ? "bg-white text-teal-600 shadow-md"
            : "bg-white/70 text-teal-600 group-hover:bg-white group-hover:shadow-md"
        }`}
      >
        <s.icon className="h-8 w-8 transition-all duration-500" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-3">
        {s.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-6 transition-all duration-500
        ${
          activeService === i
            ? "text-gray-800"
            : "text-gray-600 group-hover:text-gray-800"
        }`}
      >
        {s.description}
      </p>

      {/* Learn More Button */}
      <button
  onClick={(e) => {
    e.stopPropagation();
    navigate(`/services/${s.slug}`);
  }}
  className="mt-4 inline-flex items-center gap-2 font-medium text-sm transition group-hover:translate-x-1"
>
  Read More →
</button>
    </div>
  ))}
</div>
</section>
      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Something Great?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100">
          Let’s discuss your idea and turn it into a scalable, secure, and
          high-performance digital product designed for long-term success.
        </p>
        <Link to="/contact">
  <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-blue-100 transition">
    Get in Touch
  </button>
</Link>
      </section>
    </div>
  );
};

export default About;