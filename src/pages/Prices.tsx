import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const priceCategories = [
  {
    title: 'Herren – Haarschnitte & Bartpflege',
    items: [
      {
        name: 'Waschen & Schneiden (20 Min.)',
        price: '18,00 €',
        description: 'Gründliches Waschen und präziser Schnitt für einen gepflegten Look.',
      },
      {
        name: 'Bart rasieren (15 Min.)',
        price: '10,00 €',
        description: 'Saubere Rasur für einen gepflegten, maskulinen Bart.',
      },
      {
        name: 'Kopf rasieren (20 Min.)',
        price: '15,00 €',
        description: 'Professionelle Kopfrasur für glatte und gepflegte Ergebnisse.',
      },
      {
        name: 'Komplett Service (40 Min.)',
        price: '35,00 €',
        description: 'Rundum-Pflege: Waschen, Schneiden und Stylen für perfekten Look.',
      },
      {
        name: 'VIP Service (1 Std.)',
        price: '45,00 €',
        description: 'Exklusive Pflege inklusive Schnitt, Styling und Bartpflege.',
      },
    ],
  },
  {
    title: 'Farbe, Waxing & Gesicht',
    items: [
      {
        name: 'Bart färben (20 Min.)',
        price: '10,00 €',
        description: 'Farbauffrischung für einen gleichmäßigen und gepflegten Bart.',
      },
      {
        name: 'Haare färben (50 Min.)',
        price: '20,00 €',
        description: 'Professionelle Farbauffrischung für einen natürlichen Look.',
      },
      {
        name: 'Gesicht Behandlung (30 Min.)',
        price: '25,00 €',
        description: 'Pflegende Behandlung für gesunde, strahlende Haut.',
      },
      {
        name: 'Waxing - Gesicht (10 Min.)',
        price: '10,00 €',
        description: 'Sanfte Haarentfernung für ein glattes und gepflegtes Gesicht.',
      },
      {
        name: 'Augenbrauen zupfen (5 Min.)',
        price: '5,00 €',
        description: 'Präzises Zupfen für klare Konturen und gepflegtes Erscheinungsbild.',
      },
    ],
  },
  {
    title: 'Kinder – Haarschnitte & Stylings',
    items: [
      {
        name: 'Kinder - Haarschnitt (20 Min.)',
        price: '10,00 €',
        description: 'Sanfter Schnitt für Kinder, bequem und professionell ausgeführt.',
      },
    ],
  },
];


const Prices = () => {
  return (
    <>
      <Helmet>
        <title>Preise | Ameri Stars Barbershop Wien</title>
        <meta
          name="description"
          content="Transparente Preise für alle Services: Haarschnitte ab €35, Bartpflege ab €15. Entdecken Sie unsere Pakete im The Gentleman's Cut Berlin."
        />
        <link rel="canonical" href="https://gentlemanscut.de/preise" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "@id": "https://example-barbershop.at/#barbershop",
            name: "Beispiel Barbershop Wien",
            url: "https://example-barbershop.at",
            logo: "https://example-barbershop.at/images/logo.png",
            image: "https://example-barbershop.at/images/shop.jpg",
            telephone: "+43 1 2345678",
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Musterstraße 12",
              addressLocality: "Wien",
              postalCode: "1020",
              addressCountry: "AT",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "48.2167",
              longitude: "16.3958",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Wien",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "17:00",
              },
            ],
            sameAs: [
              "https://www.google.com/maps?cid=1234567890",
              "https://www.instagram.com/beispielbarbershop",
              "https://www.facebook.com/beispielbarbershop",
            ],
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Preise</span>
            </nav>

            <AnimateOnScroll animation="fade-up">
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Transparent & Fair</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Unsere Preise
              </h1>
              <div className="section-divider mb-6" style={{ marginLeft: 0 }} />
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                Qualität hat ihren Wert. Hier finden Sie eine Übersicht unserer Services und Preise.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Price List */}
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {priceCategories.map((category, categoryIndex) => (
                <AnimateOnScroll key={category.title} animation="fade-up" delay={categoryIndex * 100}>
                  <div className="bg-card border border-border rounded-sm p-8">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                      {category.title}
                    </h2>
                    <ul className="space-y-4">
                      {category.items.map((item) => (
                        <li key={item.name} className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-foreground font-medium">{item.name}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                          <span className="text-primary font-semibold whitespace-nowrap">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Prices;

