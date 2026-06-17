import { motion } from 'framer-motion'

const stats = [
  { value: '200+', label: 'Projects Portfolio' },
  { value: '100+', label: 'Satisfied Clients' },
  { value: '12+', label: 'Project Domains' },
  { value: '24/7', label: 'Support' },
]

const benefits = [
  'Business-Focused Solutions',
  'Customized Development',
  'Scalable Systems',
  'Professional Support',
  'Fast Delivery',
  'Innovation Driven',
]

export function StatsSection() {
  return (
    <section id="why" className="section-container">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Why choose us</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Trusted, data-driven agency systems with creative mentorship.</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            We combine enterprise-level digital transformation services with a dedicated student innovation arm, ensuring both clients and learners receive premium planning, delivery, and growth support.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
            >
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
