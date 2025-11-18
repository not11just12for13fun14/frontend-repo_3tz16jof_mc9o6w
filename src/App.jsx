import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* gradient background */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(99,102,241,0.12),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-blue-200/70">
        © {new Date().getFullYear()} Innoventix Solutions. All rights reserved.
      </footer>
    </div>
  )
}

export default App
