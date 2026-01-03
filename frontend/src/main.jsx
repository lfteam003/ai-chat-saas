import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-32">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            AI Chatbot Enterprise per E-commerce
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto opacity-90">
            Supporto clienti automatico intelligente 24/7. Riduci costi, aumenta conversioni con upsell personalizzati.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-12 py-5 rounded-xl text-xl font-semibold shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition">
            Richiedi Demo Gratuita
          </button>
        </div>
      </header>

      {/* Features */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Funzionalità Potenti</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-10 rounded-2xl hover:border-purple-500 transition">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Multi-lingua Avanzato</h3>
            <p>Gestione perfetta in oltre 50 lingue con contesto culturale.</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-10 rounded-2xl hover:border-purple-500 transition">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Analytics & Upsell AI</h3>
            <p>Raccomandazioni prodotti basate su comportamento reale + report dettagliati.</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-10 rounded-2xl hover:border-purple-500 transition">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Integrazioni Native</h3>
            <p>Shopify, WooCommerce, Amazon – setup in minuti con API sicure.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-900/80 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Prezzi Trasparenti</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-slate-800 border border-slate-700 p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">Starter</h3>
              <p className="text-5xl font-bold mb-8">
                €49<span className="text-xl">/mese</span>
              </p>
              <ul className="text-left mb-10 space-y-3">
                <li>• Fino a 5.000 conversazioni/mese</li>
                <li>• Integrazioni base</li>
                <li>• Supporto email</li>
              </ul>
              <button className="w-full bg-slate-700 py-4 rounded-xl hover:bg-slate-600 transition font-semibold">
                Inizia Ora
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-blue-900 border border-purple-500 p-12 rounded-2xl scale-105 shadow-2xl shadow-purple-500/30">
              <h3 className="text-3xl font-bold mb-6">Professional</h3>
              <p className="text-5xl font-bold mb-8">
                €149<span className="text-xl">/mese</span>
              </p>
              <ul className="text-left mb-10 space-y-3">
                <li>• Conversazioni illimitate</li>
                <li>• Upsell AI avanzati</li>
                <li>• Analytics dettagliati</li>
                <li>• Priorità support</li>
              </ul>
              <button className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
                Scegli Pro
              </button>
            </div>

            <div className="bg-slate-800 border border-slate-700 p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">Enterprise</h3>
              <p className="text-5xl font-bold mb-8">Custom</p>
              <ul className="text-left mb-10 space-y-3">
                <li>• Tutto Pro + AI training custom</li>
                <li>• SLA dedicato</li>
                <li>• White-label completo</li>
              </ul>
              <button className="w-full bg-slate-700 py-4 rounded-xl hover:bg-slate-600 transition font-semibold">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-12 border-t border-slate-800 text-slate-400">
        © 2026 AI Chatbot SaaS – Globale, Sicuro, Scalabile
      </footer>
    </div>
  </React.StrictMode>
)
