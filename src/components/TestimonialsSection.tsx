import { motion } from 'framer-motion'

const testimonials = [
  {
    category: 'Business Clients',
    review: 'The transformation delivered by TBD Agency elevated our customer acquisition and internal workflows. The product quality and support felt truly enterprise grade.',
    author: 'Neha Sharma, COO',
  },
  {
    category: 'Student Success Stories',
    review: 'Mentorship and deployment guidance helped me build a portfolio-grade project and gain confidence in interviews. The experience was professional, not just academic.',
    author: 'Aarav Patel, Final Year Student',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Testimonials</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">What businesses and students say.</h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.author}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="glass-panel rounded-[32px] border border-white/10 p-10 shadow-glow"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-violet-300/80">{item.category}</p>
            <p className="mt-6 text-lg leading-8 text-slate-200">“{item.review}”</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{item.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
