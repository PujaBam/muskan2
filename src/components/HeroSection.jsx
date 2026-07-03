const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HERO_POSTER = 'https://media.db.com/images/public/6a4770e4f21195e60e418f74/3cbad1c05_generated_31b6ef72.png';
const HERO_VIDEO = 'https://assets.mixkit.co/videos/4029/4029-720.mp4';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER}
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/40 to-obsidian/20" />
      </div>

      <div className="relative h-full flex flex-col justify-end px-6 md:px-[8vw] pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >