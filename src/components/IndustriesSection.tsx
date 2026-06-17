import { motion } from 'framer-motion'
import { Activity, Building2, Car, Cpu, HeartPulse, Layers, ShoppingBag, Sparkles, Truck, UserCheck, Users } from 'lucide-react'

const industries = [
  { title: 'Restaurants', icon: Activity },
  { title: 'Hospitals', icon: HeartPulse },
  { title: 'Clinics', icon: Building2 },
  { title: 'Retail Stores', icon: ShoppingBag },
  { title: 'Educational Institutes', icon: Users },
  { title: 'Hotels', icon: Layers },
  { title: 'Travel Agencies', icon: Truck },
  { title: 'Real Estate', icon: Building2 },
  { title: 'Startups', icon: Sparkles },
  { title: 'Manufacturing', icon: Cpu },
  { title: 'Logistics', icon: Car },
  { title: 'Professional Services', icon: UserCheck },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Who we help</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Industries that trust our digital expertise.</h2>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, index) => {
          const Icon = industry.icon
          return (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel rounded-[28px] border border-white/10 p-6 shadow-glow"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{industry.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Strategic systems and digital workflows tailored to {industry.title.toLowerCase()} teams.</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
