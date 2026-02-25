export default function About() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-24 bg-[#f5f7fb]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Innovation Meets Excellence
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We help businesses grow faster with modern digital solutions.
            From strategy to development, we create digital experiences
            that drive measurable results and long-term growth.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-6 py-3 bg-slate-900 text-white rounded">
              Get Started
            </button>
            <button className="px-6 py-3 border rounded">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>

          <p className="text-gray-600 mb-4">
            Zyntrix was created to solve a simple problem — technology is often
            complex, slow, and disconnected from real business needs. We started
            with a mission to simplify digital transformation for companies of
            all sizes.
          </p>

          <p className="text-gray-600">
            Today, we partner with startups and enterprises worldwide to design,
            build, and scale digital products that create impact, improve
            efficiency, and accelerate growth.
          </p>
        </div>
      </section>

      {/* MISSION + VALUES */}
      <section className="py-20 bg-[#f5f7fb]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to bridge the gap between complex technology and
              real business growth by delivering accessible, scalable, and
              performance-focused digital solutions.
            </p>

            <button className="mt-6 px-5 py-2 bg-slate-900 text-white rounded">
              Our Process
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Customer first mindset</li>
              <li>• Innovation & continuous learning</li>
              <li>• Transparency & long-term partnerships</li>
              <li>• Performance & measurable results</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE (CARDS) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Zyntrix
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <div key={i} className="p-6 border rounded-xl hover:shadow transition">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-slate-900 text-white rounded">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* HUMAN CONNECTION (TEAM) */}
      <section className="py-20 bg-[#f5f7fb]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Meet The Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((t, i) => (
              <div key={i} className="p-6 border rounded-xl">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Impact</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat n="120+" t="Projects" />
            <Stat n="60+" t="Clients" />
            <Stat n="5+" t="Years Experience" />
            <Stat n="98%" t="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Great Together
        </h2>

        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Whether you need a website, web app, or full digital transformation —
          we help turn ideas into powerful products.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black rounded">
            Get Started Today
          </button>
          <button className="px-6 py-3 border border-white rounded">
            Contact Us
          </button>
        </div>
      </section>

    </main>
  );
}

function Stat({ n, t }) {
  return (
    <div className="p-6 border rounded-xl">
      <div className="text-2xl font-bold">{n}</div>
      <div className="text-sm text-gray-500">{t}</div>
    </div>
  );
}

const cards = [
  { title: "Customer-Centric", text: "Your goals drive everything we build." },
  { title: "Tech-Forward", text: "Modern frameworks and scalable architecture." },
  { title: "Result-Driven", text: "We focus on ROI and measurable growth." },
  { title: "Security Focused", text: "Security is built into every product." },
  { title: "Performance First", text: "Fast, scalable, reliable systems." },
  { title: "Long-Term Partnership", text: "We grow with our clients." }
];

const team = [
  { name: "Alex Carter", role: "Founder" },
  { name: "Maya Singh", role: "Product Designer" },
  { name: "Daniel Kim", role: "Lead Developer" }
];