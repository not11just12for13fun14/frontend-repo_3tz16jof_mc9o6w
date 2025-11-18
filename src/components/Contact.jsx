import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setStatus('Sending...')

    // Simulate submission
    setTimeout(() => {
      setStatus(`Thanks ${payload.name}, we\'ll be in touch at ${payload.email}!`)
      e.currentTarget.reset()
    }, 700)
  }

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-800/40 border border-white/10 rounded-2xl p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
            <p className="mt-3 text-blue-100/80">Have a project in mind? Let\'s talk.</p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Name</label>
                <input name="name" required className="w-full rounded-md bg-slate-900/60 border border-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-md bg-slate-900/60 border border-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Message</label>
                <textarea name="message" rows="4" required className="w-full rounded-md bg-slate-900/60 border border-white/10 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold px-5 py-3 shadow-lg shadow-cyan-500/20">
                Send Message
              </button>
            </form>

            {status && (
              <p className="mt-4 text-cyan-300">{status}</p>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-800/30 p-8">
            <h3 className="text-xl font-semibold text-white">Contact Details</h3>
            <ul className="mt-4 space-y-2 text-blue-100/80">
              <li><span className="text-white/90 font-medium">Email:</span> hello@innoventix.dev</li>
              <li><span className="text-white/90 font-medium">Phone:</span> +1 (555) 010-2025</li>
              <li><span className="text-white/90 font-medium">Address:</span> 123 Innovation Drive, Tech City</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
