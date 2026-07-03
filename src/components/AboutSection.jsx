const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import useInView from '@/hooks/useInView';

const ABOUT_IMAGE = 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/6e09a600e_generated_8fcceeff.png';
const TEXTURE_IMAGE = 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/7daddab9a_generated_5c995a1f.png';

const STATS = [
  { number: '100+', label: 'Projects Completed' },
  { number: '4.2', label: 'Star Rating' },
  { number: '18+', label: 'Google Reviews' },
];

export default function AboutSection() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-[8vw]" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left — Image Stack */}
        <div className="lg:col-span-6 relative">
          <div
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src={ABOUT_IMAGE}
              alt="Elegant interior bedroom design"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div
            className={`hidden md:block absolute -bottom-8 -right-8 w-48 h-32 transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src={TEXTURE_IMAGE}
              alt="Interior material textures - silk, marble, and oak"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right — Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-[12px] tracking-[0.3em] uppercase text-clay font-body font-medium">
              Our Story
            </span>
          </div>

          <h2
            className={`mt-8 font-heading text-obsidian text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight transition-all duration-700 delay-150 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Crafting Spaces That{' '}
            <em className="text-clay">Inspire & Endure</em>
          </h2>

          <p
            className={`mt-8 text-obsidian/60 text-[1.05rem] leading-[1.7] font-light max-w-xl transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Muskan Interior Pvt. Ltd. is a premier interior design firm based in Kamaladi Marg, Kathmandu — dedicated to transforming spaces into extraordinary environments that reflect your unique vision and lifestyle.
          </p>

          <p
            className={`mt-4 text-obsidian/60 text-[1.05rem] leading-[1.7] font-light max-w-xl transition-all duration-700 delay-400 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            From intimate residences to expansive commercial spaces, our team of seasoned designers brings together creativity, technical mastery, and an unwavering commitment to quality craftsmanship.
          </p>

          {/* Stats */}
          <div
            className={`mt-14 grid grid-cols-3 gap-4 transition-all duration-700 delay-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="border border-obsidian/10 p-5 text-center hover:border-clay/40 transition-colors duration-500">
                <span className="font-heading text-3xl md:text-4xl text-obsidian">{stat.number}</span>
                <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-obsidian/40 font-body">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 flex gap-4 transition-all duration-700 delay-600 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#services"
              className="px-8 py-3.5 bg-obsidian text-alabaster text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-clay transition-colors duration-500"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-obsidian/20 text-obsidian text-[12px] tracking-[0.2em] uppercase font-medium hover:border-clay hover:text-clay transition-colors duration-500"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}