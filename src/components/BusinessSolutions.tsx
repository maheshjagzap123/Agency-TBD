import { motion } from 'framer-motion'
import { CheckCircle2, MonitorSmartphone, ServerCog, ShieldCheck, ShoppingCart, Zap } from 'lucide-react'

const categories = [
  {
    title: 'Professional Business Websites',
    features: ['Modern Business Website', 'Lead Generation', 'Service Showcase', 'Contact Management', 'SEO Ready'],
    icon: MonitorSmartphone,
  },
  {
    title: 'Business Management Systems',
    features: ['Customer Management', 'Billing Systems', 'Inventory Tracking', 'Staff Management', 'Reporting Dashboards'],
    icon: ServerCog,
  },
  {
    title: 'Mobile Applications',
    features: ['Customer Apps', 'Employee Apps', 'Delivery Apps', 'Booking Systems'],
    icon: MonitorSmartphone,
  },
  {
    title: 'AI & Automation',
    features: ['AI Chatbots', 'WhatsApp Automation', 'Lead Capture Systems', 'Business Insights', 'Workflow Automation'],
    icon: Zap,
  },
  {
    title: 'Enterprise Solutions',
    features: ['CRM Platforms', 'ERP Systems', 'HR Management', 'Customer Portals', 'Internal Dashboards'],
    icon: ShieldCheck,
  },
]

export function BusinessSolutions() {
  return (
    <section id="business" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-violet-300/80">Business Solutions</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Grow Your Business Digitally</h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Enterprise-grade digital products, automation platforms, and growth systems designed to modernize your business operations and customer experience.
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
