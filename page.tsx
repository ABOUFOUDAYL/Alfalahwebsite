
import { ShoppingCart, Building2, Globe2, MonitorSmartphone, GraduationCap } from "lucide-react";

export default function AlFalahWebsite() {
  return (
    <div className="font-sans text-gray-800 antialiased scroll-smooth">
      {/* Header & Hero */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold tracking-wide">AL‑FALAH MULTI SERVICE</h1>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#about" className="hover:underline">À propos</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#training" className="hover:underline">Formations</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
        <div className="container mx-auto text-center py-20 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto">
            Votre partenaire pour le commerce, l'immobilier et les services numériques
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
            Nous connectons les marchés, boostons votre présence en ligne et développons vos compétences grâce à des formations de qualité.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-2xl shadow-lg transition"
          >
            Nous contacter
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-6">
        <h3 className="text-3xl font-semibold mb-4">Qui sommes‑nous ?</h3>
        <p className="max-w-3xl leading-relaxed">
          AL‑FALAH MULTI SERVICE est une entreprise basée à Parakou (Titirou) spécialisée dans l’achat / vente de produits tropicaux,
          l’immobilier, le commerce international et les services numériques (développement web, e‑commerce, marketing digital, réseaux
          sociaux, création de contenu). Nous proposons également des formations en ligne et en présentiel afin de renforcer les compétences de nos clients et partenaires.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-10">Nos Services</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard icon={<ShoppingCart className="w-10 h-10" />} title="Produits tropicaux" description="Achat et vente de produits agricoles sélectionnés de haute qualité." />
            <ServiceCard icon={<Building2 className="w-10 h-10" />} title="Immobilier" description="Solutions immobilières complètes : vente, location et gestion de biens." />
            <ServiceCard icon={<Globe2 className="w-10 h-10" />} title="Commerce international" description="Mise en relation avec les marchés mondiaux et facilitation des échanges." />
            <ServiceCard icon={<MonitorSmartphone className="w-10 h-10" />} title="Services numériques" description="Développement web, e‑commerce, marketing digital, réseaux sociaux, création de contenu." />
            <ServiceCard icon={<GraduationCap className="w-10 h-10" />} title="Formations" description="Sessions en ligne et en présentiel pour renforcer vos compétences professionnelles." />
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="container mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4">Formations professionnelles</h3>
            <p className="mb-4 text-lg font-medium">Session d’Août : Maîtrise des outils informatiques</p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
              <li>4 semaines — 3 séances / semaine</li>
              <li>Word, Excel, PowerPoint, Internet, Canva, Google Docs</li>
              <li>À partir de 15 000 FCFA</li>
            </ul>
            <p className="mb-6">Rejoignez‑nous pour développer vos compétences et obtenir une attestation reconnue.</p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl shadow transition"
            >
              S’inscrire maintenant
            </a>
          </div>
          <img
            src="https://source.unsplash.com/featured/?laptop,africa"
            alt="Formation"
            className="md:w-1/2 mt-10 md:mt-0 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-10">Contactez‑nous</h3>
          <div className="max-w-xl mx-auto space-y-4 text-center text-gray-700">
            <p>
              <strong>WhatsApp :</strong>{" "}
              <a href="https://wa.me/2290167224100" className="text-blue-600 hover:underline">
                +229 01 67 22 41 00
              </a>
            </p>
            <p>
              <strong>Appels :</strong>{" "}
              <a href="tel:+2290144030109" className="text-blue-600 hover:underline">
                +229 01 44 03 01 09
              </a>
            </p>
            <p>
              <strong>Email :</strong>{" "}
              <span className="text-blue-600">sabirousayo@gmail.com</span>
            </p>
            <p>
              <strong>Facebook :</strong>{" "}
              <a href="https://www.fb.com/l/6lp1kJRRR" className="text-blue-600 hover:underline">
                AL‑FALAH MS
              </a>
            </p>
            <p>
              <strong>Adresse :</strong> Parakou, Quartier Titirou, Bénin
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        © {new Date().getFullYear()} AL‑FALAH MULTI SERVICE — Tous droits réservés.
      </footer>
    </div>
  );
}

/** Service Card Component */
function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition group">
      <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}
