import { motion } from 'framer-motion'
import { BookOpen, Code2, Cpu, LifeBuoy, Sparkles } from 'lucide-react'
import { StudentInnovationSection } from '../components/StudentInnovationSection'
import { ServicesSection } from '../components/ServicesSection'
import { PricingSection } from '../components/PricingSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { ContactSection } from '../components/ContactSection'

function StudentPage() {
  return (
    <div className="space-y-28 pt-8 lg:pt-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial opacity-70" />
        <div className="section-container relative">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-4xl space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-glow">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Professional mentorship & innovation programs for ambitious learners.
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl xl:text-6xl">
                  Build Industry-Ready Projects & Launch Your Tech Career
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Get expert mentorship, implementation guidance, documentation support, deployment assistance, and career-ready preparation. Transform your ideas into real-world applications with hands-on support from industry professionals.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore Student Services
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/40 hover:bg-white/10"
                >
                  Schedule Mentoring Session
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="glass-panel rounded-[32px] p-6 shadow-glow">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Student Focus</p>
                  <h2 className="mt-4 text-xl font-semibold text-white">End-to-end project support</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">From concept to deployment—mentoring, documentation, testing, and career prep all in one.</p>
                </div>
                <div className="glass-panel rounded-[32px] p-6 shadow-glow">
                  <p className="text-xs uppercase tracking-[0.24em] text-violet-300/80">Career Ready</p>
                  <h2 className="mt-4 text-xl font-semibold text-white">Build your portfolio</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Industry-grade projects, GitHub setup, resume building, and mock interviews.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-container">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { value: '50+', label: 'Project Domains' },
            { value: '200+', label: 'Completed Projects' },
            { value: '95%', label: 'Student Success Rate' },
            { value: '24/7', label: 'Mentorship Support' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-[28px] border border-white/10 p-6 text-center shadow-glow"
            >
              <p className="text-3xl font-semibold text-cyan-300">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <StudentInnovationSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}

export default StudentPage
