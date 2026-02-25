export default function Services() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-24 bg-[#f5f7fb] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Digital Services That Drive Growth
          </h1>

          <p className="text-gray-600">
            We help businesses launch, scale, and optimize digital products
            through modern development, marketing, and performance solutions.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-slate-900 text-white rounded">
              Request a Quote
            </button>
            <button className="px-6 py-3 border rounded">
              Book a Call
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-gray-600">
              Many businesses struggle with slow websites, poor visibility,
              outdated technology, and digital products that don’t convert.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-600">
              We deliver scalable technology, optimized performance, and
              data-driven strategies that turn your digital presence into a
              growth engine.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES CARDS */}
      <section className="py-20 bg-[#f5f7fb]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white border rounded-xl hover:shadow transition">
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{s.desc}</p>

                <button className="text-sm font-medium underline">
                  Learn More →
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BENEFITS (VALUE FOCUS) */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            What You Get
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 border rounded-xl">
                <h4 className="font-semibold mb-2">{b}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TRUST / PROOF */}
      <section className="py-20 bg-[#f5f7fb]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10">
            Trusted by Growing Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-white border rounded-xl">
                <p className="text-gray-600 text-sm mb-4">“{t.text}”</p>
                <div className="font-semibold text-sm">{t.name}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ (CONVERSION BOOST) */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Services FAQ
          </h2>

          <div className="space-y-4">
            {faq.map((f, i) => (
              <div key={i} className="p-5 border rounded-xl">
                <p className="font-medium">{f.q}</p>
                <p className="text-gray-600 text-sm mt-1">{f.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>

        <p className="text-white/80 mb-8">
          Let’s build a digital product that drives results.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black rounded">
            Start Your Project
          </button>
          <button className="px-6 py-3 border border-white rounded">
            Contact Us
          </button>
        </div>
      </section>

    </main>
  );
}

const services = [
  { title: "Web Development", desc: "Scalable web apps built for growth." },
  { title: "SEO", desc: "Rank higher and drive organic traffic." },
  { title: "Digital Marketing", desc: "Data-driven growth strategies." },
  { title: "UI/UX Design", desc: "Modern, conversion-focused design." },
  { title: "Performance Optimization", desc: "Speed and Core Web Vitals improvement." },
  { title: "Cloud Solutions", desc: "Secure and scalable infrastructure." }
];

const benefits = [
  "Faster product launch",
  "Higher conversions",
  "Better performance",
  "Scalable architecture",
  "Improved SEO visibility",
  "Long-term growth strategy"
];

const testimonials = [
  { text: "They transformed our product completely.", name: "Startup Founder" },
  { text: "Huge performance improvement.", name: "Ecommerce Brand" },
  { text: "Professional and fast delivery.", name: "SaaS Company" }
];

const faq = [
  { q: "How long does a project take?", a: "Depends on scope, usually 2–8 weeks." },
  { q: "Do you offer ongoing support?", a: "Yes, we provide maintenance and growth." },
  { q: "Can you redesign existing products?", a: "Yes, redesign and optimization available." }
];