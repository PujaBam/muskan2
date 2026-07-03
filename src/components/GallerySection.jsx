const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import useInView from '@/hooks/useInView';

const GALLERY_IMAGES = [
  { url: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/2f635fa05_generated_fad5642d.png', label: 'Living Room · Kathmandu', span: 'md:col-span-2 md:row-span-2' },
  { url: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/62abefbe8_generated_e8fe5402.png', label: 'Kitchen · Lalitpur', span: '' },
  { url: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/7daddab9a_generated_5c995a1f.png', label: 'Material Study', span: '' },
  { url: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/af4fc6181_generated_image.png', label: 'Dining Room · Lalitpur', span: 'md:col-span-2' },
  { url: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/9e05dd8cc_generated_image.png', label: 'Master Suite · Kathmandu', span: '' },
  { url: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/3fd2050f6_generated_image.png', label: 'Wardrobe · Patan', span: '' },
  { url: 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/5ee3e9487_generated_ad4a4942.png', label: 'Hotel Lobby · Pokhara', span: 'md:col-span-2' },
];

export default function GallerySection() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 md:py-40 px-6 md:px-[8vw]" ref={ref}>
      <div
        className={`text-center max-w-2xl mx-auto transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="text-[12px] tracking-[0.3em] uppercase text-clay font-body font-medium">
          Visual Archive
        </span>
        <h2 className="mt-6 font-heading text-obsidian text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight">
          A Glimpse Inside
        </h2>
        <p className="mt-4 text-obsidian/50 text-[1.05rem] leading-[1.7] font-light">
          Moments captured from our completed projects — textures, light, and the quiet poetry of well-designed spaces.