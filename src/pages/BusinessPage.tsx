import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Cpu, Smartphone, Zap } from 'lucide-react'
import { BusinessSolutions } from '../components/BusinessSolutions'
import { IndustriesSection } from '../components/IndustriesSection'
import { PortfolioSection } from '../components/PortfolioSection'
import { PricingSection } from '../components/PricingSection'
import { ProcessSection } from '../components/ProcessSection'
import { StatsSection } from '../components/StatsSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { ContactSection } from '../components/ContactSection'

function BusinessPage() {
  return (
    <div className="space-y-28 pt-8 lg:pt-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-70" />
        <div className="section-container relative">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-violet-400/15 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-glow">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                Enterprise-grade digital transformation services.
              </div>

              <div className="max-w-3xl space-y-6">
                <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl xl:text-6xl">
                  Grow Your Business Digitally
                </h1>
                <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Custom websites, mobile apps, business automation, CRM platforms, ERP solutions, AI-powered tools, and complete digital transformation services designed to scale your operations and revenue.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-400"
                >
                  Book Free Consultation
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-violet-400/40 hover:bg-white/10"
                >
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="glass-panel rounded-[32px] p-6 shadow-glow">
                  <p className="text-xs uppercase tracking-[0.24em] text-violet-300/80">Enterprise</p>
                  <h2 className="mt-4 text-xl font-semibold text-white">Scalable Systems</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">CRM, ERP, dashboards, and automation built to grow with your business.</p>
                </div>
                <div className="glass-panel rounded-[32px] p-6 shadow-glow">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">ROI Focused</p>
                  <h2 className="mt-4 text-xl font-semibold text-white">Fast delivery</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Results-driven approach with measurable impact on revenue and efficiency.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative mx-auto max-w-[560px]"
            >
              <div className="glass-panel relative overflow-hidden rounded-[38px] border border-white/10 p-6 shadow-glow">
                <div className="absolute -left-16 top-8 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.28em] text-slate-400">What We Deliver</span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-violet-300">Enterprise</span>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-surface/80 p-5 shadow-inner">
                    <div className="space-y-4">
                      {[
                        { icon: Smartphone, label: 'Websites & Apps' },
                        { icon: Zap, label: 'Automation & AI' },
                        { icon: Cpu, label: 'Business Systems' },
                        { icon: BarChart3, label: 'Analytics & Insights' },
                      ].map((item, index) => {
                        const Icon = item.icon
                        return (
                          <div key={item.label} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/40 px-4 py-3">
                            <Icon className="h-5 w-5 text-violet-300" />
                            <span className="text-sm text-slate-300">{item.label}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <IndustriesSection />
      <BusinessSolutions />
      <StatsSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

export default BusinessPage
