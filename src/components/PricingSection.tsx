import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const businessPackages = [
  { title: 'Starter Digital Presence', description: 'Launch a premium digital identity with professional branding and website essentials.', features: ['Landing page design', 'Lead capture', 'Performance setup'] },
  { title: 'Business Growth Package', description: 'Expand your reach with automation, CRM workflows, and conversion-focused systems.', features: ['Automation workflows', 'CRM onboarding', 'SEO readiness'] },
  { title: 'Complete Digital Transformation Package', description: 'Transform operations with enterprise systems, analytics, and growth engines.', features: ['ERP/CRM systems', 'Analytics dashboards', 'Enterprise automation'] },
]

const studentPackages = [
  { title: 'Starter Mentorship', description: 'Guided project planning and hands-on development support for first-time innovators.', features: ['Concept clarity', 'Project structure', 'Review sessions'] },
  { title: 'Professional Mentorship', description: 'End-to-end implementation support with documentation and deployment assistance.', features: ['Mentored development', 'Documentation', 'Deployment help'] },
  { title: 'Premium Innovation Program', description: 'Dedicated career-ready innovation support, research guidance, and portfolio preparation.', features: ['Career prep', 'Research support', 'Industry-grade delivery'] },
]

function getWhatsAppLink(packageName: string) {
  const message = `Hi! I'm interested in the "${packageName}" package. Please share more details and pricing.`
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/917588174528?text=${encodedMessage}`
}

export function PricingSection() {
  return (
    <section id="pricing" className="section-container">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-violet-300/80">Packages</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">High-value packages for businesses and student innovators.</h2>
      </div>

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/50 p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Business Packages</p>
            <div className="mt-8 space-y-6">
              {businessPackages.map((pkg) => (
                <div key={pkg.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{pkg.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{pkg.description}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-2">
                    {pkg.features.map((feature) => (
                      <p key={feature} className="text-sm text-slate-300">• {feature}</p>
                    ))}
                  </div>
                  <a
                    href={getWhatsAppLink(pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-400 w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Get Quote on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-white/10 bg-slate-950/50 p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Student Packages</p>
            <div className="mt-8 space-y-6">
              {studentPackages.map((pkg) => (
                <div key={pkg.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{pkg.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{pkg.description}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-2">
                    {pkg.features.map((feature) => (
                      <p key={feature} className="text-sm text-slate-300">• {feature}</p>
                    ))}
                  </div>
                  <a
                    href={getWhatsAppLink(pkg.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-400 w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Get Started on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
