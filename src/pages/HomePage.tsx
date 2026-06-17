import { motion } from 'framer-motion'
import { BusinessSolutions } from '../components/BusinessSolutions'
import { ContactSection } from '../components/ContactSection'
import { IndustriesSection } from '../components/IndustriesSection'
import { PortfolioSection } from '../components/PortfolioSection'
import { PricingSection } from '../components/PricingSection'
import { ProcessSection } from '../components/ProcessSection'
import { ServicesSection } from '../components/ServicesSection'
import { StatsSection } from '../components/StatsSection'
import { StudentInnovationSection } from '../components/StudentInnovationSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { TwoDivisionsSection } from '../components/TwoDivisionsSection'

function HomePage() {
  return (
    <div className="space-y-28 pt-8 lg:pt-10">
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-70" />
        <div className="section-container relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-violet-400/15 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-glow">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                Digital growth agency + innovation hub
              </div>

              <div className="max-w-3xl space-y-6">
                <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl xl:text-6xl">
                  Helping Businesses Grow Digitally & Helping Students Build Industry-Ready Projects
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Whether you are a business owner looking to increase customers and automate operations, or a student working on a final-year project, we provide the solutions, guidance, and support you need.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#business"
                  className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-400"
                >
                  I Own a Business
                </a>
                <a
                  href="#innovation"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-violet-400/40 hover:bg-white/10"
                >
                  I Am a Student
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="glass-panel rounded-[32px] p-6 shadow-glow">
                  <p className="text-xs uppercase tracking-[0.24em] text-violet-300/80">For Businesses</p>
                  <h2 className="mt-4 text-xl font-semibold text-white">More customers, smoother operations</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Websites, apps, bookings, CRM, ERP, inventory, and automation built for growth.</p>
                </div>
                <div className="glass-panel rounded-[32px] p-6 shadow-glow">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">For Students</p>
                  <h2 className="mt-4 text-xl font-semibold text-white">Projects that are practical and career-ready</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Mentorship, implementation support, documentation help, deployment guidance, and career prep.</p>
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
                <div className="absolute right-6 top-6 h-10 w-10 rounded-full bg-cyan-400/20 blur-2xl" />
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.28em] text-slate-400">What we deliver</span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">Results</span>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-surface/80 p-5 shadow-inner">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-3 rounded-[28px] bg-gradient-to-br from-violet-500/15 to-transparent p-4">
                        <p className="text-sm uppercase tracking-[0.25em] text-violet-200/70">Business Growth</p>
                        <span className="text-2xl font-semibold text-white">+40%</span>
                        <p className="text-sm text-slate-400">Potential customer reach</p>
                      </div>
                      <div className="space-y-3 rounded-[28px] bg-slate-950/40 p-4">
                        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/70">Student Success</p>
                        <span className="text-2xl font-semibold text-white">100%</span>
                        <p className="text-sm text-slate-400">Support from idea to delivery</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {['Strategy', 'Build', 'Scale'].map((label) => (
                      <div key={label} className="rounded-3xl bg-slate-950/40 px-4 py-5 text-center">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{label}</p>
                        <p className="mt-3 text-2xl font-semibold text-white">Ready</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-6 hidden h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl sm:block" />
              <div className="absolute -right-8 bottom-10 hidden h-24 w-24 rounded-full bg-violet-500/15 blur-3xl sm:block" />
            </motion.div>
          </div>
        </div>
      </section>

      <TwoDivisionsSection />
      <IndustriesSection />
      <BusinessSolutions />
      <StudentInnovationSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

export default HomePage
