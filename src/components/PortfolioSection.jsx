const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useInView from '@/hooks/useInView';

const PROJECTS = [
  {
    id: 1,
    title: 'Contemporary Living Suite',
    category: 'Living Room',
    location: 'Kathmandu',
    type: 'Residential',
    image: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/2f635fa05_generated_fad5642d.png',
  },
  {
    id: 2,
    title: 'Minimalist Kitchen Design',
    category: 'Kitchen',
    location: 'Lalitpur',
    type: 'Residential',
    image: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/62abefbe8_generated_e8fe5402.png',
  },
  {
    id: 3,
    title: 'Corporate Executive Hub',
    category: 'Office',
    location: 'Kathmandu',
    type: 'Commercial',
    image: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/22a846a0d_generated_a9fc2b88.png',
  },
  {
    id: 4,
    title: 'Boutique Hotel Lobby',
    category: 'Commercial',
    location: 'Pokhara',
    type: 'Hospitality',
    image: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/5ee3e9487_generated_ad4a4942.png',
  },
  {
    id: 5,
    title: 'Serene Spa Bathroom',
    category: 'Bathroom',
    location: 'Kathmandu',
    type: 'Residential',
    image: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/ee271336a_generated_639449ff.png',
  },
  {
    id: 6,
    title: 'Elegant Dining Room',
    category: 'Living Room',
    location: 'Lalitpur',
    type: 'Residential',
    image: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/af4fc6181_generated_image.png',
  },
  {
    id: 7,
    title: 'Luxury Master Suite',
    category: 'Bedroom',
    location: 'Kathmandu',
    type: 'Residential',
    image: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/9e05dd8cc_generated_image.png',
  },
  {
    id: 8,
    title: 'Boutique Wardrobe',
    category: 'Commercial',
    location: 'Patan',
    type: 'Residential',
    image: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/3fd2050f6_generated_image.png',
  },
];

const CATEGORIES = ['All', 'Living Room', 'Kitchen', 'Office', 'Commercial', 'Bathroom', 'Bedroom'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, isInView] = useInView();

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-40 px-6 md:px-[8vw]" ref={ref}>
      <div
        className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div>
          <span className="text-[12px] tracking-[0.3em] uppercase text-clay font-body font-medium">
            Our Work
          </span>
          <h2 className="mt-6 font-heading text-obsidian text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight">
            Portfolio of Excellence
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-obsidian text-alabaster'
                  : 'text-obsidian/40 hover:text-obsidian'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-[11px] tracking-[0.2em] uppercase text-clay font-mono">
          {project.type} · {project.location}
        </span>
        <h3 className="mt-2 font-heading text-alabaster text-xl md:text-2xl">
          {project.title}
        </h3>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="inline-block px-3 py-1.5 bg-alabaster/10 backdrop-blur-sm text-alabaster text-[10px] tracking-[0.2em] uppercase">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
}