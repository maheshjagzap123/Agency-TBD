import { motion } from 'framer-motion'
import { BookOpen, Code2, Cpu, MonitorSmartphone, ShieldCheck, Zap } from 'lucide-react'

const projects = [
  { title: 'AI & Machine Learning', label: '20+ Projects', icon: Cpu },
  { title: 'Full Stack Java', label: '50+ Projects', icon: Code2 },
  { title: 'Full Stack .NET', label: '50+ Projects', icon: ShieldCheck },
  { title: 'Full Stack React', label: '20+ Projects', icon: Code2 },
  { title: 'Full Stack Angular', label: '20+ Projects', icon: Code2 },
  { title: 'Full Stack Python', label: '20+ Projects', icon: Code2 },
  { title: 'Data Science', label: '20+ Projects', icon: Cpu },
  { title: 'Data Analytics', label: '20+ Projects', icon: BookOpen },
  { title: 'Software Testing', label: '20+ Projects', icon: ShieldCheck },
  { title: 'Cloud & DevOps', label: 'Projects Available', icon: Zap },
  { title: 'Mobile App Development', label: 'Projects Available', icon: MonitorSmartphone },
  { title: 'IoT Projects', label: 'Projects Available', icon: Cpu },
  { title: 'Cyber Security Projects', label: 'Projects Available', icon: ShieldCheck },
]

export function StudentInnovationSection() {
  return (
    <section id="innovation" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Student Innovation Hub</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Build Industry-Ready Projects & Practical Skills</h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Helping students transform concepts into real-world applications through mentoring, implementation guidance, documentation assistance, and practical learning experiences.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="glass-panel group rounded-[32px] border border-white/10 p-6 shadow-glow transition hover:-translate-y-1"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500/15">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.label}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
