import { useState } from 'react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { X } from 'lucide-react';

import galleryHaircut1 from '@/assets/images/gallery-haircut-1.jpg';
import galleryBeard1 from '@/assets/images/gallery-beard-1.jpg';
import galleryDetail1 from '@/assets/images/gallery-detail-1.jpg';
import galleryHaircut2 from '@/assets/images/gallery-haircut-2.jpg';
import galleryAmbient1 from '@/assets/images/gallery-ambient-1.jpg';
import galleryTools1 from '@/assets/images/gallery-tools-1.jpg';

const galleryImages = [
  {
    id: 1,
    src: galleryHaircut1,
    alt: 'Professioneller Herrenhaarschnitt mit Schere und Kamm im Barbershop Wien',
    category: 'Haarschnitt',
  },
  {
    id: 2,
    src: galleryBeard1,
    alt: 'Traditionelle Nassrasur mit heißem Handtuch für gepflegten Bart',
    category: 'Bartpflege',
  },
  {
    id: 3,
    src: galleryDetail1,
    alt: 'Präzise Bartkontur und Detailarbeit vom erfahrenen Barber',
    category: 'Detail',
  },
  {
    id: 4,
    src: galleryHaircut2,
    alt: 'Klassischer Fade-Haarschnitt für Herren im modernen Stil',
    category: 'Haarschnitt',
  },
  {
    id: 5,
    src: galleryAmbient1,
    alt: 'Stilvolles Barbershop Interieur mit Vintage-Friseurstühlen',
    category: 'Ambiente',
  },
  {
    id: 6,
    src: galleryTools1,
    alt: 'Hochwertige Friseurwerkzeuge und Rasiermesser für perfekte Ergebnisse',
    category: 'Werkzeuge',
  },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section 
      id="gallery" 
      className="py-24 md:py-32 bg-charcoal"
      aria-labelledby="gallery-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Eindrücke
          </p>
          <h2 
            id="gallery-heading" 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Galerie
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Entdecken Sie unsere Arbeit und die einzigartige Atmosphäre 
            unseres Salons.
          </p>
        </AnimateOnScroll>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <AnimateOnScroll 
              key={image.id} 
              animation="fade-up" 
              delay={index * 100}
            >
              <button
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-[3/2] overflow-hidden rounded-sm bg-muted cursor-pointer w-full"
                aria-label={`Bild öffnen: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-foreground font-display text-lg border-b-2 border-primary pb-1">
                    {image.category}
                  </span>
                </div>
                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-300 rounded-sm" />
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal-dark/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Bild-Lightbox"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            aria-label="Lightbox schließen"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
