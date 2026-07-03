import React from 'react';
import useInView from '@/hooks/useInView';

const STEPS = [
  { num: '01', title: 'Consultation', desc: 'An in-depth discovery session to understand your vision, needs, and aspirations for the space.' },
  { num: '02', title: 'Design Planning', desc: 'Detailed space planning and layout development setting the strategic foundation for your project.' },
  { num: '03', title: 'Concept Development', desc: 'Immersive mood boards and 3D visualizations bringing your design concept to vivid, tangible life.' },
  { num: '04', title: 'Material Selection', desc: 'Curated selection of premium finishes, fabrics, and fixtures tailored to your aesthetic and budget.' },
  { num: '05', title: 'Project Execution', desc: 'Expert artisans execute the design with precision, under our rigorous quality oversight.' },
  { num: '06', title: 'Final Delivery', desc: 'A meticulous reveal and walkthrough of your transformed space — delivered to perfection.' },
];

export default function ProcessSection() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 md:py-40 bg-obsidian/[0.03]" ref={ref}>
      <div className="px-6 md:px-[8vw]">
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[12px] tracking-[0.3em] uppercase text-clay font-body font-medium">
            Our Approach
          </span>
          <h2 className="mt-6 font-heading text-obsidian text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight">
            How We Work
          </h2>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-obsidian/10">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`bg-alabaster p-8 md:p-12 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isInView ? `${200 + i * 80}ms` : '0ms' }}
            >
              <span className="font-heading text-5xl text-obsidian/[0.06]">{step.num}</span>
              <h3 className="mt-4 font-heading text-obsidian text-xl">{step.title}</h3>
              <p className="mt-3 text-obsidian/50 text-sm leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}