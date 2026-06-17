import { motion } from 'framer-motion'

const services = [
  'Project Guidance',
  'Documentation Assistance',
  'Code Walkthrough Sessions',
  'Implementation Support',
  'Deployment Guidance',
  'Presentation Preparation',
  'Viva Preparation',
  'Career Guidance',
  'GitHub Portfolio Setup',
  'Resume Building',
  'Interview Preparation',
]

export function ServicesSection() {
  return (
    <section id="services" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-violet-300/80">What Students Receive</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Build Better Projects. Get Support That Matters.</h2>
        <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          From idea validation to final presentation, we help students move from confusion to confidence with practical support at every stage.
        </p>
      </div>

      <div className="mt-12 rounded-[36px] border border-white/10 bg-slate-950/35 p-6 shadow-glow">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm font-semibold text-white">{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
