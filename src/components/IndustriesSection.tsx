import { motion } from 'framer-motion'

const industries = [
  {
    title: 'Hotels',
    question: 'Does Your Hotel Have an Online Presence?',
    problems: [
      'Customers cannot find you online',
      'Bookings happen manually',
      'No online inquiry system',
    ],
    solutions: ['Hotel Website', 'Online Booking System', 'Customer Portal', 'Mobile App', 'Admin Dashboard'],
  },
  {
    title: 'Restaurants',
    question: 'Are You Missing Online Orders?',
    problems: [
      'Customers cannot browse your menu online',
      'Orders are managed manually',
      'No digital presence',
    ],
    solutions: ['Restaurant Website', 'QR Menu', 'Online Ordering System', 'Customer Mobile App', 'Admin Dashboard'],
  },
  {
    title: 'Hospitals & Clinics',
    question: 'Are Appointments Still Managed Manually?',
    problems: [
      'Long waiting times',
      'Manual scheduling',
      'No patient portal',
    ],
    solutions: ['Appointment System', 'Doctor Profiles', 'Patient Management', 'Admin Dashboard'],
  },
  {
    title: 'Retail Shops',
    question: 'Still Managing Inventory Manually?',
    problems: [
      'Stock confusion',
      'Manual billing',
      'Difficult reporting',
    ],
    solutions: ['Inventory Management', 'Billing System', 'Sales Reports', 'Customer Database'],
  },
  {
    title: 'Coaching Classes & Colleges',
    question: 'Need Better Student Management?',
    problems: ['Manual attendance tracking', 'Delayed fee updates', 'Limited student visibility'],
    solutions: ['Attendance Systems', 'Student Portal', 'Fee Management', 'Learning Management Platform'],
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Business Owner Section</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Your Customers Are Online. Is Your Business?</h2>
        <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          Many businesses lose customers because they do not have a strong online presence or digital systems.
          We help businesses attract more customers, automate daily operations, and grow efficiently.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
          >
            <h3 className="text-2xl font-semibold text-white">{industry.title}</h3>
            <p className="mt-3 text-sm font-medium text-cyan-300">{industry.question}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Problems</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {industry.problems.map((problem) => (
                    <li key={problem}>• {problem}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">We Can Provide</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {industry.solutions.map((solution) => (
                    <li key={solution}>• {solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
