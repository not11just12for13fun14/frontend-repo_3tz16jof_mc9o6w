import { Code2, Rocket, Palette, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Application Development',
    desc: 'Modern SPAs and PWAs using React, Next.js and robust APIs with FastAPI and Node.'
  },
  {
    icon: Rocket,
    title: 'MVPs & Prototyping',
    desc: 'Validate ideas rapidly with production-quality prototypes and iterative releases.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design Systems',
    desc: 'Design libraries, accessibility-first components, and pixel-perfect interfaces.'
  },
  {
    icon: ShieldCheck,
    title: 'Cloud & DevOps',
    desc: 'Secure deployments, CI/CD pipelines, and scalable architectures on the cloud.'
  }
]

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
          <p className="mt-3 text-blue-100/80 max-w-2xl mx-auto">Solutions engineered for performance, crafted for humans.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-slate-800/40 border border-white/10 rounded-2xl p-6 hover:bg-slate-800/60 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white grid place-items-center shadow-md shadow-cyan-500/20">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
