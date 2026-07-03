import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import useInView from '@/hooks/useInView';

const CONTACT_INFO = [
  { icon: MapPin, label: 'Address', value: 'Kamaladi Marg, Kathmandu 44600, Nepal' },
  { icon: Phone, label: 'Phone', value: '+977 980-8414973', href: 'tel:+9779808414973' },
  { icon: Mail, label: 'Email', value: 'info@muskaninterior.com', href: 'mailto:info@muskaninterior.com' },
  { icon: Clock, label: 'Hours', value: 'Open Daily · Closes at 6:00 PM' },
];

const PROJECT_TYPES = ['Residential', 'Commercial', 'Office', 'Kitchen', 'Renovation', 'Other'];

export default function ContactSection() {
  const [ref, isInView] = useInView();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-obsidian" ref={ref}>
      <div className="px-6 md:px-[8vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Info */}
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-[12px] tracking-[0.3em] uppercase text-clay font-body font-medium">
              Get In Touch
            </span>
            <h2 className="mt-6 font-heading text-alabaster text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight">
              Let's Create Something{' '}
              <em className="text-clay">Extraordinary</em>
            </h2>
            <p className="mt-6 text-alabaster/40 text-[1.05rem] leading-[1.7] font-light max-w-md">
              Ready to transform your space? Our design consultants are here to bring your vision to life with a complimentary consultation.
            </p>

            <div className="mt-12 space-y-6">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-alabaster/10">
                      <Icon size={16} className="text-clay" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[11px] tracking-[0.2em] uppercase text-alabaster/30">
                        {item.label}
                      </span>
                      <p className="mt-0.5 text-alabaster/70 text-sm">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block hover:opacity-80 transition-opacity">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-10 flex gap-3">
              <a
                href="tel:+9779808414973"
                className="px-6 py-3 border border-alabaster/20 text-alabaster text-[12px] tracking-[0.2em] uppercase hover:bg-alabaster hover:text-obsidian transition-all duration-500"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/9779808414973"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-alabaster/20 text-alabaster text-[12px] tracking-[0.2em] uppercase hover:bg-alabaster hover:text-obsidian transition-all duration-500"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-16 h-16 border border-clay/40 flex items-center justify-center mb-6">
                  <Send size={24} className="text-clay" strokeWidth={1.2} />
                </div>
                <h3 className="font-heading text-alabaster text-2xl">Thank You</h3>
                <p className="mt-3 text-alabaster/40 text-sm max-w-xs">
                  We've received your inquiry and our design team will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                {step === 0 && (
                  <div className="space-y-6">
                    <p className="text-alabaster/30 text-[11px] tracking-[0.2em] uppercase mb-8">
                      Step 1 of 2 — Tell us about you
                    </p>
                    <InputField label="Full Name" value={form.name} onChange={(v) => update('name', v)} required />
                    <InputField label="Email Address" type="email" value={form.email} onChange={(v) => update('email', v)} required />
                    <InputField label="Phone Number" type="tel" value={form.phone} onChange={(v) => update('phone', v)} />
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      disabled={!form.name || !form.email}
                      className="w-full mt-4 py-4 bg-clay text-alabaster text-[12px] tracking-[0.2em] uppercase font-medium disabled:opacity-30 hover:bg-clay/80 transition-colors duration-500"
                    >
                      Continue
                    </button>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-6">
                    <p className="text-alabaster/30 text-[11px] tracking-[0.2em] uppercase mb-8">
                      Step 2 of 2 — Tell us your vision
                    </p>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-alabaster/40 mb-3">
                        Project Type
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {PROJECT_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => update('type', type)}
                            className={`py-3 text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
                              form.type === type
                                ? 'bg-clay text-alabaster'
                                : 'border border-alabaster/10 text-alabaster/40 hover:border-alabaster/30'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-alabaster/40 mb-3">
                        Your Vision
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        rows={4}
                        placeholder="Describe your dream space..."
                        className="w-full bg-transparent border-b border-alabaster/10 text-alabaster/80 text-sm py-3 placeholder:text-alabaster/20 focus:border-clay focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(0)}
                        className="px-6 py-4 border border-alabaster/10 text-alabaster/40 text-[12px] tracking-[0.2em] uppercase hover:text-alabaster transition-colors duration-500"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-4 bg-clay text-alabaster text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-clay/80 transition-colors duration-500"
                      >
                        Send Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.2em] uppercase text-alabaster/40 mb-3">
        {label} {required && <span className="text-clay">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b border-alabaster/10 text-alabaster/80 text-sm py-3 placeholder:text-alabaster/20 focus:border-clay focus:outline-none transition-colors"
      />
    </div>
  );
}