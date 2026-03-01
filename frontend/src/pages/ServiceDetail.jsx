import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import {
  CheckCircle,
  ShieldCheck,
  Zap,
  TrendingUp,
  Server,
  Rocket,
  Lock,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.slug === slug);
const techIcons = {
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  Node: <FaNodeJs />,
  "Node.js": <FaNodeJs />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Tailwind: <SiTailwindcss />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  Firebase: <SiFirebase />,
  AWS: <FaAws />,
  Docker: <FaDocker />,
  Python: <FaPython />,
};
  if (!service) {
    return <div className="p-20 text-center">Service Not Found</div>;
  }

  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${service.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            {service.title}
          </h1>

          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            {service.overview}
          </p>
        </motion.div>
      </section>

      {/* ================= KEY FEATURES ================= */}
<section className="py-28 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    
        <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-center mb-20"
    >
      Powerful Features Built for Performance
    </motion.h2>
    
      
    <div className="grid md:grid-cols-2 gap-10">
      {service.features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -10 }}
          className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600"
        >
          <div className="bg-white p-8 rounded-2xl h-full transition-all duration-500 group-hover:shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition">
                <CheckCircle className="text-blue-600 group-hover:text-white transition" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                {feature}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
     {/* ================= BENEFITS ================= */}
<section className="py-28 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
     <div className="text-center mb-16 group">
    
  <h2 className="text-4xl md:text-5xl font-bold md-20">
   Business Impact & Benefits
  </h2>
  <span className="block h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 
                 mx-auto mt-4 rounded-full
                 transition-all duration-500 group-hover:w-44"></span>
</div>
    
    <div className="grid md:grid-cols-4 gap-10">

      {service.benefits.map((benefit, i) => {
        const icons = [TrendingUp, ShieldCheck, Zap, Rocket];
        const Icon = icons[i % icons.length];

        return (
          <motion.div
            key={i}
            whileHover={{ y: -12 }}
            className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border"
          >
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-blue-100 rounded-2xl group-hover:bg-blue-600 transition">
                <Icon className="text-blue-600 group-hover:text-white transition" />
              </div>
            </div>

            <h4 className="font-semibold text-lg mb-3">
              {benefit}
            </h4>

            <p className="text-sm text-gray-600">
              Drive measurable growth, efficiency, and competitive advantage.
            </p>
          </motion.div>
        );
      })}

    </div>
  </div>
</section>
    {/* ================= TECHNOLOGY STACK ================= */}
<section className="py-28 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Heading */}
    <div className="mb-16 group">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-gray-900 inline-block"
      >
        Our Technology Stack
      </motion.h2>

      {/* Animated Underline */}
      <span className="block h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 
                       mx-auto mt-4 rounded-full
                       transition-all duration-500 
                       group-hover:w-40">
      </span>

      <p className="text-gray-600 max-w-2xl mx-auto mt-6">
        We use modern, scalable, and secure technologies
        to build high-performance digital solutions.
      </p>

    </div>

    {/* Technology Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

      {service.technologies.map((tech, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -10 }}
          viewport={{ once: true }}
          className="group bg-white p-8 rounded-2xl shadow-md 
                     hover:shadow-2xl border border-gray-100 
                     transition-all duration-500 
                     flex flex-col items-center"
        >
          <div className="text-4xl text-blue-600 mb-4 
                          group-hover:scale-125 
                          transition duration-300">
            {techIcons[tech] || "⚙️"}
          </div>

          <h4 className="font-semibold text-gray-800 text-sm">
            {tech}
          </h4>

        </motion.div>
      ))}

    </div>

  </div>
</section>

      {/* ================= PROCESS ================= */}
<section className="py-28 bg-gradient-to-r bg-gray-950 text-white text-center">
  <div className="max-w-6xl mx-auto px-6 text-center">

   <div className="text-center mb-16 group">
    
  <h2 className="text-4xl md:text-5xl font-bold md-20">
    Our Strategic Delivery Process
  </h2>
  <span className="block h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 
                 mx-auto mt-4 rounded-full
                 transition-all duration-500 group-hover:w-44"></span>
</div>
   

    <div className="grid md:grid-cols-4 gap-8">

      {[
        "Consultation & Requirement Analysis",
        "Strategic Planning & Architecture",
        "Agile Development & Execution",
        "Ongoing Support & Optimization",
      ].map((step, i) => (

        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20"
        >
          <div className="text-4xl font-bold mb-4 opacity-50">
            0{i + 1}
          </div>

          <Server className="mx-auto mb-4" />

          <h4 className="font-semibold text-lg">
            {step}
          </h4>

        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* ================= CTA ================= */}
<section className="py-32 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
  <div className="max-w-4xl mx-auto px-6">

    <h2 className="text-5xl font-bold mb-6">
      Let’s Build Something Extraordinary
    </h2>

    <p className="text-gray-400 mb-10">
      Partner with our expert team to design secure, scalable,
      and future-ready digital solutions.
    </p>

    <div className="flex justify-center gap-6 flex-wrap">

      <button
        onClick={() => navigate("/contact")}
        className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition"
      >
        Request Free Consultation
      </button>

      <button
        onClick={() => navigate("/contact")}
        className="px-10 py-4 border border-white rounded-full hover:bg-white hover:text-black transition"
      >
        Get Custom Quote
      </button>

    </div>

  </div>
</section>

    </div>
  );
}