import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-sky-700 mb-4">
            Who’s Behind <span className="text-sky-500">Plnitude</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Plnitude was founded by a passionate team of outreach and growth
            specialists dedicated to helping brands build real connections
            through data-driven campaigns. With a focus on strategy,
            creativity, and transparency, we work closely with clients to design
            outreach systems that drive measurable results and lasting growth.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Led by <span className="font-semibold text-sky-700">[Your Name]</span>, 
            a results-oriented digital strategist with a background in lead
            generation and automation. Plnitude combines human insight with
            smart technology to scale meaningful conversations — not just
            numbers.
          </p>

          {/* Social Links (optional) */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              target="_blank"
              className="px-5 py-2 bg-sky-600 text-white rounded-full font-medium shadow hover:bg-sky-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl">
            {/* Replace with your image */}
            <img
              src="/images/founder-placeholder.jpg"
              alt="Founder of Plnitude"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
