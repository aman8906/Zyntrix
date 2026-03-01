import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Star } from "lucide-react";
import { projects } from "../data/ProjectData";

export default function CaseStudy() {
  const { projectSlug } = useParams();
  const navigate = useNavigate();

  const project = projects[projectSlug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Project Not Found
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900 min-h-screen">

      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-black"
        >
          <ArrowLeft size={18} /> Back
        </button>

        {/* Challenge */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Challenge</h2>
          <p className="text-slate-600">{project.challenge}</p>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Solution</h2>
          <p className="text-slate-600">{project.solution}</p>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-slate-100 p-5 rounded-xl"
              >
                <CheckCircle className="text-blue-600" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Gallery"
                className="rounded-xl shadow-md h-60 w-full object-cover hover:scale-105 transition"
              />
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-slate-100 p-10 rounded-2xl">
          <h2 className="text-3xl font-semibold mb-6">Client Testimonial</h2>
          <p className="italic text-slate-600 mb-4">
            "{project.testimonial.text}"
          </p>
          <div className="flex text-yellow-500 mb-2">
            <Star size={18} /><Star size={18} /><Star size={18} /><Star size={18} /><Star size={18} />
          </div>
          <p className="font-semibold">— {project.testimonial.author}</p>
        </section>

      </div>
    </div>
  );
}