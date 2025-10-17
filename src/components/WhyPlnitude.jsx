export default function WhyPlnitude() {
  return (
    <section id="why-plnitude" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-sky-600 mb-6">Why PLNITUDE</h2>
      <p className="text-lg text-gray-700 mb-12">
        We combine revenue engineering, operations excellence, and modern GTM to drive predictable growth.
      </p>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div className="bg-sky-50 rounded-2xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
          <h3 className="text-2xl font-semibold text-sky-700 mb-3">Outcome-Focused</h3>
          <p className="text-gray-700">We prioritize measurable results over vanity metrics, aligning your GTM with revenue outcomes.</p>
        </div>

        <div className="bg-sky-50 rounded-2xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
          <h3 className="text-2xl font-semibold text-sky-700 mb-3">Systems-Driven</h3>
          <p className="text-gray-700">We build scalable, repeatable workflows using proven playbooks and structured processes.</p>
        </div>

        <div className="bg-sky-50 rounded-2xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
          <h3 className="text-2xl font-semibold text-sky-700 mb-3">Partner Mentality</h3>
          <p className="text-gray-700">We act as an extension of your team—no fluff, just consistent execution and insights.</p>
        </div>
      </div>
    </section>
  );
}
