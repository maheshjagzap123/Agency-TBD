import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, GraduationCap, Sparkles } from 'lucide-react'
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/90 backdrop-blur-xl">
      <div className="section-container flex items-center justify-between gap-4 py-3">
        <a href="/" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-sky-400 text-white shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>{agencyName}</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 xl:flex">
          <a
            href="/student"
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
              location.pathname === '/student'
                ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/15'
                : 'border-white/10 bg-white/5 text-white hover:border-cyan-400/40 hover:bg-white/10'
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            I'm a Student
          </a>
          <a
            href="/business"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition shadow-lg ${
              location.pathname === '/business'
                ? 'bg-violet-500 text-white shadow-violet-500/20 hover:bg-violet-400'
                : 'border border-white/10 bg-white/5 text-slate-100 hover:border-violet-400/40 hover:bg-white/10'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            For Business
          </a>
        </div>

        <div className="block lg:hidden">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10">
            <Briefcase className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
