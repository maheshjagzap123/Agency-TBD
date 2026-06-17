import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import { agencyName } from '../config'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/95 text-slate-300">
      <div className="section-container grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-violet-300/80">{agencyName}</p>
          <h2 className="max-w-xl text-3xl font-semibold text-white sm:text-4xl">A modern digital transformation agency for businesses and future-ready student innovators.</h2>
          <p className="max-w-lg text-sm leading-7 text-slate-400">
            Professional digital solutions, innovation mentoring, and high-impact systems designed to scale companies and accelerate student success.
          </p>
        </div>

        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <div className="space-y-3">
            <p className="uppercase tracking-[0.22em] text-slate-400">Contact</p>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="h-4 w-4" />
              maheshjagzap003@gmail.com
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="h-4 w-4" />
              +91 7588174528
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="h-4 w-4" />
              Global presence, premium delivery
            </div>
          </div>

          <div className="space-y-3">
            <p className="uppercase tracking-[0.22em] text-slate-400">Quick Links</p>
            <div className="space-y-2 text-slate-300">
              <a href="#business" className="transition hover:text-white">Business Solutions</a>
              <a href="#innovation" className="transition hover:text-white">Student Innovation</a>
              <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
              <a href="#pricing" className="transition hover:text-white">Pricing</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.25em] text-slate-500">
        © 2026 {agencyName}. Crafted for modern digital transformation.
      </div>
    </footer>
  )
}

export default Footer
