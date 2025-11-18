import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((o) => !o)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-inner grid place-items-center">
              <span className="text-white font-black">IS</span>
            </div>
            <span className="text-white font-semibold tracking-tight">Innoventix Solutions</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-blue-100">
            <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">About</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
            <button onClick={() => scrollTo('contact')} className="ml-2 inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">Get in Touch</button>
          </nav>

          <button onClick={toggle} className="md:hidden text-white p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="px-4 py-3 space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left text-blue-100 hover:text-white py-2">
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="w-full mt-2 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
