import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import useInView from '@/hooks/useInView';

const TESTIMONIALS = [
  {
    quote: 'Best Interior designing service in Nepal. The team understood our vision perfectly and delivered a stunning result that exceeded all our expectations.',
    name: 'Rajesh Shrestha',
    role: 'Homeowner, Kathmandu',
    project: 'Residential Villa',
  },
  {
    quote: 'Thank you Muskan Interior for High Quality Service. Our office transformation was completed on time and the attention to detail was extraordinary.',
    name: 'Priya Maharjan',
    role: 'Business Owner, Lalitpur',
    project: 'Corporate Office',
  },
  {
    quote: 'From the initial consultation to the final handover, the entire experience was seamless. Our home looks absolutely magnificent.',
    name: 'Sanjay Acharya',
    role: 'Residential Client, Bhaktapur',
    project: 'Family Residence',
  },
  {
    quote: 'They transformed our restaurant into an elegant dining destination. Customer footfall has increased significantly since the renovation.',
    name: 'Anita Tamang',
    role: 'Restaurant Owner, Thamel',
    project: 'Restaurant Renovation',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [ref, isInView] = useInView();

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1)), 7000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="py-24 md:py-40 px-6 md:px-[8vw] bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[12px] tracking-[0.3em] uppercase text-clay font-body font-medium">
            Client Stories
          </span>
          <h2 className="mt-6 font-heading text-obsidian text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight">
            Voices of <em className="text-clay">Satisfaction</em>
          </h2>
        </div>

        {/* Main card */}
        <div
          className={`mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Left — Quote panel */}
          <div className="lg:col-span-8 bg-obsidian p-10 md:p-16 lg:p-20 relative overflow-hidden">
            <Quote
              size={120}
              className="absolute -top-4 -left-4 text-alabaster/5"
              strokeWidth={1}
            />
            <div className="relative">
              <div className="flex items-center gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < 4 ? 'fill-clay text-clay' : 'fill-clay/30 text-clay/30'}
                  />
                ))}
              </div>

              <p className="font-heading text-alabaster text-[clamp(1.15rem,2vw,1.6rem)] leading-[1.5] italic min-h-[120px]">
                "{t.quote}"
              </p>

              <div className="mt-10 flex items-center justify-between flex-wrap gap-6">
                <div>
                  <p className="text-alabaster font-medium text-sm tracking-wide">{t.name}</p>
                  <p className="text-alabaster/40 text-[11px] tracking-[0.15em] uppercase mt-1">{t.role}</p>
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-clay/60 border border-clay/30 px-4 py-2">
                  {t.project}
                </span>
              </div>
            </div>
          </div>

          {/* Right — Navigation panel */}
          <div className="lg:col-span-4 bg-clay p-10 md:p-12 flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-[11px] tracking-[0.2em] uppercase text-alabaster/60 font-body">
                Testimonial
              </span>
              <p className="font-heading text-alabaster text-5xl mt-2">
                {String(active + 1).padStart(2, '0')}
                <span className="text-alabaster/40 text-2xl"> / {String(TESTIMONIALS.length).padStart(2, '0')}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center border border-alabaster/30 text-alabaster hover:bg-alabaster hover:text-clay transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 flex items-center justify-center border border-alabaster/30 text-alabaster hover:bg-alabaster hover:text-clay transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-[2px] flex-1 transition-all duration-300 ${
                    i === active ? 'bg-alabaster' : 'bg-alabaster/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Google rating badge */}
        <div
          className={`mt-10 flex items-center justify-center gap-3 transition-all duration-700 delay-400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < 4 ? 'fill-clay text-clay' : 'fill-clay/40 text-clay/40'}
              />
            ))}
          </div>
          <span className="text-sm text-obsidian/50 font-body">4.2 / 5 · 18 Google Reviews</span>
        </div>
      </div>
    </section>
  );
}