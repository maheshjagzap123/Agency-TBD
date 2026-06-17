import { motion } from 'framer-motion'
import { ClipboardList, Feather, FileText, LifeBuoy, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Project Mentorship',
    points: ['Project Planning', 'Architecture Guidance', 'Development Assistance', 'Feature Enhancement'],
    icon: Sparkles,
  },
  {
    title: 'Documentation Support',
    points: ['Synopsis', 'SRS', 'UML Diagrams', 'Flow Charts', 'Project Reports', 'Presentations'],
    icon: FileText,
  },
  {
    title: 'Technical Guidance',
    points: ['Code Walkthrough Sessions', 'Implementation Guidance', 'Deployment Support', 'Viva Preparation'],
    icon: ClipboardList,
  },
  {
    title: 'Research Support',
    points: ['Research Structure Guidance', 'Technical Content Support', 'Publication Preparation Assistance'],
    icon: Feather,
  },
  {
    title: 'Career Readiness',
    points: ['Resume Building', 'GitHub Portfolio Setup', 'LinkedIn Optimization', 'Mock Interviews'],
    icon: LifeBuoy,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-violet-300/80">Student Services</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Premium implementation and career readiness support.</h2>
      </div>

      <div className="mt-12 grid gap-6 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <div className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                {service.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
