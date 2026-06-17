import { motion } from 'framer-motion'

const steps = [
  { title: 'Discovery', description: 'Understand goals and requirements.' },
  { title: 'Strategy', description: 'Create roadmap and solution architecture.' },
  { title: 'Design', description: 'Craft user-focused experiences.' },
  { title: 'Development', description: 'Build and test the solution.' },
  { title: 'Launch', description: 'Deploy and optimize.' },
  { title: 'Support', description: 'Continuous improvement.' },
]

export function ProcessSection() {
  return (
    <section id="process" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-violet-300/80">Our process</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">A refined timeline from concept to launch.</h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 text-sm font-semibold">
              {index + 1}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
