import { Mail, MapPin, Phone, Send } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="section-container">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Contact</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Talk to our digital transformation experts.</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Ready for a premium solution for your business or student innovation goal? Share your vision and we’ll deliver a strategic plan with professional execution.
          </p>
          <div className="space-y-4 rounded-[32px] border border-white/10 bg-slate-950/50 p-8 shadow-glow">
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="h-5 w-5 text-cyan-300" />
              <span>maheshjagzap003@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="h-5 w-5 text-violet-300" />
              <span>+91 7588174528</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="h-5 w-5 text-white" />
              <span>Schedule a consultation or connect via WhatsApp</span>
            </div>
          </div>
        </div>

        <form className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Name</span>
              <input className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50" placeholder="Your name" />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Email</span>
              <input className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50" placeholder="Your email" />
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate-300">
            <span>Message</span>
            <textarea rows={5} className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition focus:border-cyan-300/50" placeholder="Tell us about your project." />
          </label>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            <Send className="h-4 w-4" />
            Schedule Consultation
          </button>
        </form>
      </div>
      <div className="mt-10 rounded-[32px] border border-white/10 bg-slate-950/50 p-8 text-slate-300 shadow-glow">
        <h3 className="text-lg font-semibold text-white">Google Maps Integration</h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">Placeholder for global office locations and region-specific contact details. Ideal for showcasing hub locations and enterprise-ready collaboration zones.</p>
      </div>
    </section>
  )
}
