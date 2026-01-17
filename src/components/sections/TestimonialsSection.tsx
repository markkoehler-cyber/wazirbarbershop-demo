import { useState, useEffect } from 'react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Christopher',
    role: 'Stammkunde seit 2024',
    content: 'Für mich persönlich einer der besten Frisör bei denen ich jemals war. Wenn nicht sogar der Beste. ',
    rating: 5,
  },
  {
    id: 2,
    name: 'Christoph Eisl',
    role: 'Stammkunde seit 2025',
    content: 'Heute war ich zum ersten Mal dort (ohne Termin und ganz spontan) und es hat mir gut gefallen. Sofort drangekommen. Haarschnitt sehr gut und der Bart wurde noch nie so perfekt getrimmt (vor allem die Kanten). ',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ryan Clumpner',
    role: 'Neuer Kunde',
    content: 'Sehr talentierte Friseure, die freundlich und kompetent sind.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Pouya Sepehr',
    role: 'Stammkunde seit 2024',
    content: 'Sicherlich einer der besten Barbershops in Wien! Bei Wazir wird man nicht nur hervorragend bedient, sondern genießt auch eine freundliche und einladende Atmosphäre.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="py-24 md:py-32 bg-gradient-dark relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 text-primary/5">
        <Quote className="w-40 h-40" />
      </div>
      <div className="absolute bottom-20 right-20 text-primary/5 rotate-180">
        <Quote className="w-32 h-32" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
            Kundenstimmen
          </p>
          <h2 
            id="testimonials-heading" 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Was unsere Kunden sagen
          </h2>
          <div className="section-divider" />
        </AnimateOnScroll>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all duration-300 z-10"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all duration-300 z-10"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Testimonial Card */}
            <div 
              className="bg-card border border-border rounded-sm p-8 md:p-12 text-center transition-all duration-500"
              key={currentTestimonial.id}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground text-lg">
                  {currentTestimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Zur Bewertung ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
