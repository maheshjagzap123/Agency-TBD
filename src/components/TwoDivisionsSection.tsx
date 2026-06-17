import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, Layers } from 'lucide-react'

const sections = [
  {
    label: 'BUSINESS OWNERS',
    title: 'Want to Grow Your Business?',
    description:
      'Get a professional website, mobile app, booking system, customer portal, billing software, inventory management system, CRM, ERP, or custom digital solution designed specifically for your business.',
    cta: 'Explore Business Solutions',
    icon: Layers,
    href: '#business',
  },
  {
    label: 'STUDENTS',
    title: 'Working on Your Final Year Project?',
    description:
      'Get project mentoring, implementation guidance, documentation assistance, technical support, deployment help, code walkthrough sessions, and practical learning resources.',
    cta: 'Explore Student Innovation Hub',
    icon: GraduationCap,
    href: '#innovation',
  },
]

export function TwoDivisionsSection() {
  return (
    <section id="divisions" className="section-container">
      <div className="mt-0 grid gap-8 lg:grid-cols-2">
        {sections.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.a
              key={item.title}
              href={item.href}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 160, damping: 16 }}
              className="group glass-panel rounded-[36px] border border-white/10 p-10 shadow-glow transition hover:border-violet-400/40 hover:bg-white/5"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                <Icon className="h-7 w-7" />
              </div>
              <div className="mt-8 space-y-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="max-w-xl text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
              <div className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-cyan-300 transition group-hover:text-white">
                <span>{item.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
