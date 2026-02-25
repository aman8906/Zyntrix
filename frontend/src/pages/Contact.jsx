import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [reach, setReach] = useState("phone");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#f5f6f8]">

      {/* HERO / CTA */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-3">Let’s Start Your Project</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question or project in mind? Fill the form below and our team
          will respond within 24 hours.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* LEFT FORM */}
          <div className="bg-white p-8 rounded-xl border shadow-sm">

            <h2 className="text-2xl font-semibold mb-6">
              Get Your Free Consultation
            </h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-2">✅ Thank you!</h3>
                <p className="text-green-700">
                  Your request has been submitted. We usually reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-blue-600 underline"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="text-sm">Your Name *</label>
                  <input required className="w-full p-3 border rounded mt-1" />
                </div>

                <div>
                  <label className="text-sm">Email *</label>
                  <input required type="email" className="w-full p-3 border rounded mt-1" />
                </div>

                <div>
                  <label className="text-sm">Message *</label>
                  <textarea rows="4" required className="w-full p-3 border rounded mt-1" />
                </div>

                {/* REACH METHOD */}
                <div>
                  <label className="text-sm block mb-2">
                    Preferred Contact Method
                  </label>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setReach("phone")}
                      className={`flex-1 border p-3 rounded ${
                        reach === "phone" ? "border-blue-600 bg-blue-50" : ""
                      }`}
                    >
                      Phone
                    </button>

                    <button
                      type="button"
                      onClick={() => setReach("email")}
                      className={`flex-1 border p-3 rounded ${
                        reach === "email" ? "border-blue-600 bg-blue-50" : ""
                      }`}
                    >
                      Email
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-[#324f7c] text-white py-3 rounded font-medium hover:opacity-90 transition">
                  Send Message
                </button>

                {/* RESPONSE TIME */}
                <p className="text-xs text-gray-500 text-center">
                  We typically respond within 24 hours.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT INFO + SOCIAL + FAQ */}
          <div className="space-y-6">

            {/* CONTACT INFO */}
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-3">Contact Information</h3>

              <p className="text-gray-600 text-sm">📍 Mumbai, India</p>
              <p className="text-gray-600 text-sm">📧 hello@zyntrix.com</p>
              <p className="text-gray-600 text-sm">📞 +91 98765 43210</p>
            </div>

            {/* SOCIAL */}
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-3">Connect With Us</h3>

              <div className="flex gap-4 text-sm">
                <button className="underline">LinkedIn</button>
                <button className="underline">Twitter</button>
                <button className="underline">Instagram</button>
              </div>
            </div>

            {/* TRUST / TRANSPARENCY */}
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold mb-2">What Happens Next?</h3>
              <p className="text-gray-600 text-sm">
                After you submit the form, we review your request, contact you,
                and schedule a call to discuss your goals and next steps.
              </p>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border">
                  <p className="font-medium">{item.q}</p>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

const faq = [
  { q: "How fast do you reply?", a: "Usually within 24 hours." },
  { q: "Is the consultation free?", a: "Yes, completely free." },
  { q: "Do you work internationally?", a: "Yes, we work globally." }
];