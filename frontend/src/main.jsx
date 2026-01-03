import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Attiveremo Tailwind qui

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          🚀 AI Chatbot per E-commerce
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
          Supporto clienti automatico 24/7. Riduci costi del 70% e aumenta vendite con upsell intelligenti.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
          Inizia Free Trial
        </button>
      </header>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Perché scegliere noi?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">🌍 Multi-lingua</h3>
            <p>Gestisce italiano, inglese, spagnolo e oltre automaticamente.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">📦 Ordini & Resi</h3>
            <p>Risponde in tempo reale su status spedizione e procedure resi.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">💰 Upsell Automatici</h3>
            <p>Raccomanda prodotti correlati e aumenta il carrello medio del 20%.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Piani Semplici</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-10 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">Basic</h3>
              <p className="text-5xl font-bold mb-6">€29<span className="text-xl">/mese</span></p>
              <ul className="text-left mb-8 space-y-3">
                <li>✅ Fino a 1.000 conversazioni</li>
                <li>✅ Integrazione base</li>
                <li>✅ Supporto email</li>
              </ul>
              <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full">Scegli</button>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-2xl scale-110">
              <h3 className="text-3xl font-bold mb-4">Pro ⭐</h3>
              <p className="text-5xl font-bold mb-6">€99<span className="text-xl">/mese</span></p>
              <ul className="text-left mb-8 space-y-3">
                <li>✅ Conversazioni illimitate</li>
                <li>✅ Analytics avanzati</li>
                <li>✅ Upsell personalizzati</li>
              </ul>
              <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full">Scegli</button>
            </div>
            <div className="bg-gray-800 p-10 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
              <p className="text-5xl font-bold mb-6">Custom</p>
              <ul className="text-left mb-8 space-y-3">
                <li>✅ Tutto Pro + training AI custom</li>
                <li>✅ Supporto dedicato</li>
                <li>✅ Integrazioni API</li>
              </ul>
              <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full">Contattaci</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-gray-600">
        © 2026 Il tuo AI Chat SaaS – Pronto a scalare globale
      </footer>
    </div>
  </React.StrictMode>
)
