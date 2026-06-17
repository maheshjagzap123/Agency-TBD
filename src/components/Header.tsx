import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap, Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { agencyName } from '../config'

const navItems = [
  { label: 'For Business', href: '/business' },
  { label: 'For Students', href: '/student' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-surface/90 backdrop-blur-xl"
    >
      <div className="section-container flex items-center justify-between gap-4 py-1.5">
        <a href="/" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white">
          <motion.span
            animate={{ boxShadow: ['0 0 8px #7c3aed88', '0 0 18px #38bdf888', '0 0 8px #7c3aed88'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-sky-400 text-white"
          >
            <Sparkles className="h-3.5 w-3.5" />
          </motion.span>
          <span>{agencyName}</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ y: -1 }}
              className="relative text-sm text-slate-300 transition hover:text-white group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-sky-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href="/student"
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition ${
              location.pathname === '/student'
                ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/15'
                : 'border-white/10 bg-white/5 text-white hover:border-cyan-400/40 hover:bg-white/10'
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            I'm a Student
          </a>
          <a
            href="/business"
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition shadow-lg ${
              location.pathname === '/business'
                ? 'bg-violet-500 text-white shadow-violet-500/20 hover:bg-violet-400'
                : 'border border-white/10 bg-white/5 text-slate-100 hover:border-violet-400/40 hover:bg-white/10'
            }`}
          >
            <Briefcase className="h-3.5 w-3.5" />
            For Business
          </a>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-surface/95 lg:hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-4">
              <a
                href="/student"
                onClick={() => setMenuOpen(false)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                  location.pathname === '/student'
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300'
                    : 'border-white/10 bg-white/5 text-white hover:border-cyan-400/40 hover:bg-white/10'
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                I'm a Student
              </a>
              <a
                href="/business"
                onClick={() => setMenuOpen(false)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  location.pathname === '/business'
                    ? 'border-violet-500 bg-violet-500/20 text-violet-300'
                    : 'border-white/10 bg-white/5 text-white hover:border-violet-400/40 hover:bg-white/10'
                }`}
              >
                <Briefcase className="h-4 w-4" />
                For Business
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
