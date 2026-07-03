import React from 'react';
import {
  Layers,
  Palette,
  Image,
  Monitor,
  Hammer,
  Briefcase,
  ChefHat,
  DoorOpen,
  ShirtIcon,
  RefreshCw,
} from 'lucide-react';
import useInView from '@/hooks/useInView';

const SERVICES = [
  { icon: Layers, title: 'Interior Architectural Design', desc: 'Comprehensive spatial planning transforming structural concepts into refined, livable masterpieces.' },
  { icon: Palette, title: 'Interior Decorating', desc: 'Expert curation of colors, textures, and furnishings to craft immersive atmospheres.' },
  { icon: Image, title: 'Custom Art Selection', desc: 'Thoughtful selection of original artworks and installations that become the soul of your space.' },
  { icon: Monitor, title: 'Appliance Selection', desc: 'Strategic sourcing of premium appliances that marry functionality with aesthetic harmony.' },
  { icon: Hammer, title: 'Millwork Design', desc: 'Bespoke joinery and built-in furniture crafted to exacting specifications.' },
  { icon: Briefcase, title: 'Office Space Design', desc: 'Innovative workspace environments engineered to enhance productivity and reflect your brand.' },
  { icon: ChefHat, title: 'Kitchen Design', desc: 'Sophisticated layouts where ergonomic efficiency meets culinary inspiration.' },
  { icon: DoorOpen, title: 'Cabinetry & Hardware', desc: 'Custom cabinetry with premium hardware delivering seamless storage and elegance.' },
  { icon: ShirtIcon, title: 'Wardrobe Design', desc: 'Meticulously designed systems that maximize space with boutique hotel sensibility.' },
  { icon: RefreshCw, title: 'Renovation', desc: 'Complete transformation breathing new life into every surface, structure, and system.' },
];

export default function ServicesSection() {
  const [ref, isInView] = useInView();

  return (
    <section id="services" className="py-24 md:py-40 bg-obsidian" ref={ref}>
      <div className="px-6 md:px-[8vw]">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[12px] tracking-[0.3em] uppercase text-clay font-body font-medium">
            What We Offer
          </span>
          <h2 className="mt-6 font-heading text-alabaster text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight">
            Our Design Services
          </h2>
          <p className="mt-6 text-alabaster/40 text-[1.05rem] leading-[1.7] font-light">
            Comprehensive interior design solutions tailored for every space — from intimate homes to expansive commercial environments.
          </p>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-alabaster/10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, isInView }) {
  const Icon = service.icon;
  return (
    <div
      className={`group bg-obsidian p-8 md:p-10 cursor-default transition-all duration-700 hover:bg-obsidian/80 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: isInView ? `${150 + index * 60}ms` : '0ms' }}
    >
      <Icon
        size={24}
        className="text-clay/70 group-hover:text-clay transition-colors duration-500"
        strokeWidth={1.2}
      />
      <h3 className="mt-6 font-heading text-alabaster text-lg leading-tight">
        {service.title}
      </h3>
      <p className="mt-3 text-alabaster/35 text-sm leading-relaxed font-light">
        {service.desc}
      </p>
    </div>
  );
}