import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_20%_10%,rgba(99,102,241,0.25),transparent)]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-300/90 bg-cyan-400/10 ring-1 ring-cyan-400/20 rounded-full px-3 py-1">
              Innoventix Solutions
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              We build modern, scalable, and delightful digital products
            </h1>
            <p className="mt-4 text-base sm:text-lg text-blue-100/80 max-w-xl">
              A tech-first studio crafting web apps, mobile experiences, and cloud automations — with a focus on usability and performance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold px-5 py-3 shadow-lg shadow-cyan-500/20 hover:shadow-indigo-500/20 transition-shadow">
                Get in Touch
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white/90 hover:text-white px-5 py-3">
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[460px] lg:h-[520px] rounded-xl overflow-hidden ring-1 ring-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
