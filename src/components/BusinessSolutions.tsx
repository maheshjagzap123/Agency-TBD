import { motion } from 'framer-motion'
import { CheckCircle2, MonitorSmartphone, ServerCog, ShieldCheck, Zap } from 'lucide-react'

const categories = [
  {
    title: 'Professional Websites That Convert',
    features: ['Modern business website', 'Lead generation flow', 'Service showcase', 'Contact and inquiry system', 'SEO-ready structure'],
    icon: MonitorSmartphone,
  },
  {
    title: 'Systems That Reduce Manual Work',
    features: ['Customer management', 'Billing and invoicing', 'Inventory tracking', 'Staff coordination', 'Reporting dashboards'],
    icon: ServerCog,
  },
  {
    title: 'Mobile Solutions for Daily Operations',
    features: ['Customer apps', 'Booking and scheduling', 'Delivery tracking', 'Employee workflow tools', 'Better customer retention'],
    icon: MonitorSmartphone,
  },
  {
    title: 'Automation for Faster Growth',
    features: ['AI chatbots', 'WhatsApp automation', 'Lead capture', 'Business insights', 'Workflow optimization'],
    icon: Zap,
  },
  {
    title: 'Scalable Platforms for Future Growth',
    features: ['CRM platforms', 'ERP systems', 'Customer portals', 'Internal dashboards', 'Long-term support'],
    icon: ShieldCheck,
  },
]

export function BusinessSolutions() {
  return (
    <section id="business" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-violet-300/80">Business Solutions</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">What We Build for Business Owners</h2>
        <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          We help businesses attract more customers, automate daily operations, and create digital systems that support growth without adding complexity.
        </p>
      </div>

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {category.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-300" />
                    <span>{feature}</span>
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
