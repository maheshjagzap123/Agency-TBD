import { motion } from 'framer-motion'

const portfolioGroups = [
  {
    title: 'Business Projects',
    items: ['Restaurant Management', 'Hospital Management', 'Inventory Systems', 'CRM Platforms', 'ERP Solutions', 'E-Commerce Platforms', 'Booking Systems', 'Analytics Dashboards'],
  },
  {
    title: 'Student Innovation Projects',
    items: ['AI Projects', 'Data Science Projects', 'Full Stack Applications', 'Mobile Apps', 'Testing Projects'],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Portfolio showcase</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Premium digital and innovation projects.</h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          A curated set of business systems and student innovation experiences that demonstrate scale, polish, and real-world impact.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {portfolioGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
          >
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-6 grid gap-3">
              {group.items.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/40 px-5 py-4 text-sm text-slate-300 transition hover:-translate-x-1 hover:border-cyan-400/30">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
