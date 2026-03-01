import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaSearch,
  FaBullhorn,
  FaPaintBrush,
  FaRocket,
  FaCheckCircle,
  FaCloud,
  FaPhoneAlt,
  FaEnvelope,
  FaShieldAlt,
  FaPenNib,
  FaComments,
  FaStar,
  FaPlus,
  FaMinus,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";
function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much do IT services cost?",
      answer:
        "Pricing depends on project scope, complexity, and timeline. We provide customized quotes after understanding your business requirements.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer long-term maintenance, monitoring, performance optimization, and dedicated technical support packages.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with startups, enterprises, eCommerce brands, healthcare, fintech, and corporate organizations globally.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Project timelines vary based on requirements, but most web and IT projects range between 4–12 weeks.",
    },
  ];

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() =>
                setActiveIndex(isOpen ? null : index)
              }
              className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-800 transition duration-300"
            >
              <span className="text-lg font-semibold text-white">
                {faq.question}
              </span>

              <span className="text-indigo-500">
                {isOpen ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-6 text-gray-400 text-sm leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}


const services = [
  {
    title: "Web Application Development",
    slug: "web-application-development",
    category: "Development",
    price: "From ₹25,000",
    icon: <FaCode />,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description:
      "Custom web applications built with scalable architecture, secure backend systems, and modern frameworks for enterprise-grade performance.",
    features: [
      "Custom dashboard systems",
      "API development & integration",
      "Secure authentication",
      "Scalable cloud architecture",
    ],
  },

  {
    title: "Search Engine Optimization (SEO)",
    slug: "search-engine-optimization",
    category: "Marketing",
    price: "From ₹12,000",
    icon: <FaSearch />,
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1",
    description:
      "Technical SEO, on-page optimization, keyword research, and strategic link-building to improve search rankings and organic traffic.",
    features: [
      "Technical SEO audit",
      "On-page optimization",
      "Keyword research",
      "Monthly performance reports",
    ],
  },

  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    category: "Marketing",
    price: "From ₹15,000",
    icon: <FaBullhorn />,
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
    description:
      "Data-driven marketing campaigns including PPC, social media, and email marketing to maximize ROI and brand visibility.",
    features: [
      "Social media ads",
      "Google PPC campaigns",
      "Email marketing",
      "Conversion tracking",
    ],
  },

  {
    title: "Website Design & Development",
    slug: "website-design-development",
    category: "Development",
    price: "From ₹18,000",
    icon: <FaPaintBrush />,
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    description:
      "Modern, responsive, and conversion-focused websites designed with premium UI/UX standards and performance optimization.",
    features: [
      "Responsive UI/UX design",
      "CMS integration",
      "E-commerce support",
      "SEO-friendly structure",
    ],
  },

  {
    title: "Performance & Speed Optimization",
    slug: "performance-optimization",
    category: "Optimization",
    price: "From ₹10,000",
    icon: <FaRocket />,
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    description:
      "Improve Core Web Vitals, server response times, caching systems, and front-end performance for maximum speed.",
    features: [
      "Core Web Vitals improvement",
      "Image optimization",
      "Server tuning",
      "Caching implementation",
    ],
  },

  {
    title: "Cloud & Hosting Solutions",
    slug: "cloud-hosting-solutions",
    category: "Cloud",
    price: "From ₹20,000",
    icon: <FaCloud />,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description:
      "Secure cloud deployment, DevOps pipelines, and scalable hosting solutions on AWS, Azure, and modern cloud platforms.",
    features: [
      "AWS / Azure setup",
      "CI/CD integration",
      "Server monitoring",
      "Backup & disaster recovery",
    ],
  },

  {
    title: "Cyber Security Services",
    slug: "cyber-security-services",
    category: "Security",
    price: "From ₹30,000",
    icon: <FaShieldAlt />,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    description:
      "Enterprise-level security solutions including penetration testing, firewall setup, vulnerability assessments, and data protection.",
    features: [
      "Penetration testing",
      "Firewall configuration",
      "Vulnerability scanning",
      "Data encryption solutions",
    ],
  },

  {
    title: "Branding & Content Marketing",
    slug: "branding-content-marketing",
    category: "Marketing",
    price: "From ₹14,000",
    icon: <FaPenNib />,
    image:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721",
    description:
      "Build a powerful brand identity with strategic content creation, storytelling, and conversion-focused messaging.",
    features: [
      "Brand identity design",
      "Content strategy",
      "Blog writing",
      "Storytelling campaigns",
    ],
  },
];
const ServicesPage = () => {
  return (
    <div className="bg-gray-950 text-white">

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="IT Solutions Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
        </div>

        {/* Floating Animated Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-20 left-10 text-indigo-400 text-6xl opacity-30"
        >
          <FaCode />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute bottom-20 right-10 text-pink-400 text-6xl opacity-30"
        >
          <FaCloud />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Transforming Businesses with
            <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
              {" "}Advanced IT Solutions
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Web Development, SEO, Cyber Security, Cloud Hosting & Digital Marketing
            — Everything you need to scale your business digitally.
          </p>
          <div className="flex flex-wrap justify-center gap-6">

            {/* View Services Button */}
            <NavLink to="/services">
              {({ isActive }) => (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg
        ${isActive
                      ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-indigo-500/50"
                    }`}
                >
                  View Services
                </motion.button>
              )}
            </NavLink>

            {/* Request Quote Button */}
            <NavLink to="/contact">
              {({ isActive }) => (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-semibold transition duration-300 border
        ${isActive
                      ? "bg-white text-black"
                      : "border-white text-white hover:bg-white hover:text-black"
                    }`}
                >
                  Request a Quote
                </motion.button>
              )}
            </NavLink>

          </div>
        </motion.div>
      </section>
      {/* SERVICES SECTION - PROFESSIONAL VERSION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16 group">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 inline-block">
              Our Core Services
            </h2>
            <span className="block h-1 w-20 bg-indigo-600 mx-auto mt-4 transition-all duration-500 group-hover:w-40"></span>
          </div>

          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            We provide high-quality digital solutions designed to help your
            business scale, innovate, and dominate the market.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-200 transition duration-300 group"
              >

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Price Badge */}
                  {service.price && (
                    <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="text-3xl text-indigo-600 mb-4">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6">
                    {service.description}
                  </p>

                  {/* Short Features */}
                  {service.features && (
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <span className="text-green-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Button */}
                  <NavLink to={`/services/${service.slug}`}>
                    <button className="w-full py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-300">
                      View Details
                    </button>
                  </NavLink>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* PROCESS OVERVIEW - LIGHT PROFESSIONAL VERSION */}
      <section className="relative bg-white py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <div className="text-center mb-16 group">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 inline-block">
              Our Working Process
            </h2>
            <span className="block h-1 w-20 bg-pink-500 mx-auto mt-4 transition-all duration-500 group-hover:w-40"></span>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            We follow a strategic IT workflow to deliver scalable, secure,
            and performance-driven digital solutions for modern businesses.
          </p>

          <div className="grid md:grid-cols-4 gap-10">

            {[
              {
                title: "Consultation",
                icon: <FaComments />,
                image:
                  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                desc: "We understand your goals and define a clear technical roadmap.",
              },
              {
                title: "Assessment",
                icon: <FaSearch />,
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                desc: "We analyze systems, identify gaps, and plan optimized solutions.",
              },
              {
                title: "Implementation",
                icon: <FaCogs />,
                image:
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
                desc: "We build and deploy scalable IT solutions with best practices.",
              },
              {
                title: "Support",
                icon: <FaHeadset />,
                image:
                  "https://images.unsplash.com/photo-1531482615713-2afd69097998",
                desc: "Ongoing monitoring, maintenance, and technical support.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 border border-gray-100"
              >

                {/* Gradient Top Border */}
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-pink-500"></div>

                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-left">

                  {/* Step Number */}
                  <div className="mb-3 text-sm font-semibold text-indigo-600">
                    Step 0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="text-3xl text-indigo-600 mb-4 group-hover:text-pink-500 transition duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {step.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* OUR PACKAGES SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <div className="text-center mb-16 group">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 inline-block">
              Our IT Service Packages
            </h2>
            <span className="block h-1 w-20 bg-indigo-600 mx-auto mt-4 transition-all duration-500 group-hover:w-40"></span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Flexible and scalable pricing plans designed to meet the needs of
            startups, growing businesses, and enterprise-level organizations.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Starter Plan",
                price: "$499",
                features: [
                  "Basic Website Development",
                  "On-Page SEO Optimization",
                  "Performance Optimization",
                  "Basic Security Setup",
                  "1 Month Support",
                ],
                popular: false,
              },
              {
                title: "Professional Plan",
                price: "$999",
                features: [
                  "Custom Web Application",
                  "Advanced SEO Strategy",
                  "Digital Marketing Setup",
                  "Cloud Deployment",
                  "Cyber Security Audit",
                  "3 Months Support",
                ],
                popular: true,
              },
              {
                title: "Enterprise Plan",
                price: "Custom",
                features: [
                  "Full-Scale IT Infrastructure",
                  "Advanced Cyber Security",
                  "Cloud & DevOps Solutions",
                  "Branding & Content Marketing",
                  "Performance Monitoring",
                  "Dedicated Support Team",
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className={`relative rounded-2xl p-10 text-left transition duration-500 border
          ${pkg.popular
                    ? "bg-gradient-to-b from-indigo-600 to-purple-600 text-white shadow-2xl scale-105"
                    : "bg-gray-50 text-gray-900 shadow-md hover:shadow-2xl border-gray-200"
                  }`}
              >

                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 text-sm rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4">
                  {pkg.title}
                </h3>

                <p className="text-4xl font-extrabold mb-6">
                  {pkg.price}
                  {pkg.price !== "Custom" && (
                    <span className="text-lg font-medium"> /project</span>
                  )}
                </p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <FaCheckCircle
                        className={`${pkg.popular ? "text-white" : "text-indigo-600"
                          }`}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <NavLink to="/contact">
                  <button
                    className={`w-full py-3 rounded-full font-semibold transition duration-300
              ${pkg.popular
                        ? "bg-white text-indigo-600 hover:bg-gray-100"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                  >
                    Get Started
                  </button>
                </NavLink>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS - PROFESSIONAL VERSION */}
      <section className="bg-gray-50 py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-16 group">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 inline-block">
              What Our Clients Say
            </h2>
            <span className="block h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 
                 mx-auto mt-4 rounded-full
                 transition-all duration-500 group-hover:w-44"></span>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Trusted by startups, enterprises, and growing businesses worldwide.
            Here’s what our clients say about our IT expertise.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                name: "Michael Johnson",
                role: "CEO",
                company: "TechNova Solutions",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                review:
                  "Their web development and cloud solutions completely transformed our digital infrastructure. Performance improved by 70% within months.",
              },
              {
                name: "Sophia Williams",
                role: "Marketing Director",
                company: "BrightEdge Media",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                review:
                  "The SEO and digital marketing strategy delivered outstanding ROI. Our organic traffic doubled in just 3 months.",
              },
              {
                name: "Daniel Smith",
                role: "CTO",
                company: "SecureNet Corp",
                image: "https://randomuser.me/api/portraits/men/65.jpg",
                review:
                  "Their cybersecurity expertise ensured our systems remain protected. Professional, responsive, and highly skilled team.",
              },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 border border-gray-100 text-left"
              >

                {/* Stars */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  “{client.review}”
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">

                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {client.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {client.role}, {client.company}
                    </p>
                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* FAQ + CTA + CONTACT COMBINED SECTION */}
      <section className="bg-gray-950 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - FAQ */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-400 mb-12 max-w-lg">
              Get quick answers to common questions about our IT services,
              pricing models, support structure, and project delivery process.
            </p>

            <FAQAccordion />
          </div>

          {/* RIGHT SIDE - CTA + CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 shadow-2xl"
          >

            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h3>

            <p className="text-indigo-100 mb-8">
              Let’s discuss your project requirements and create a powerful IT
              solution tailored to your business goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">

              <NavLink to="/contact">
                <button className="w-full sm:w-auto px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-100 transition duration-300">
                  Book a Consultation
                </button>
              </NavLink>

              <NavLink to="/contact">
                <button className="w-full sm:w-auto px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-indigo-700 transition duration-300">
                  Request a Quote
                </button>
              </NavLink>

            </div>

            {/* Contact Info */}
            <div className="border-t border-indigo-400 pt-6 space-y-4 text-indigo-100">

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>info@yourcompany.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+123-456-7890</span>
              </div>

            </div>

          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default ServicesPage;