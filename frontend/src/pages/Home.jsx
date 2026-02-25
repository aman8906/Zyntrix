import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforming Ideas into
            <span className="text-sky-500"> Powerful Digital Solutions</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            We help startups and enterprises build scalable websites, mobile
            applications, and cloud solutions that drive growth and innovation.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              to="/services"
              className="bg-sky-500 px-8 py-3 rounded-lg text-slate-900 font-semibold"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="border border-gray-500 px-8 py-3 rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Expert Team", "Highly skilled developers and designers"],
              ["Secure Systems", "Industry-standard security practices"],
              ["Fast Delivery", "On-time project execution"],
              ["24/7 Support", "Dedicated customer support"],
            ].map(([title, desc]) => (
              <div key={title} className="p-6 bg-gray-50 rounded-xl text-center">
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-500 text-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4">
            Let’s build something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-slate-900 text-white px-8 py-3 rounded-lg"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}