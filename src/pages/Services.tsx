import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Heart, Zap, Infinity, Star, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/Button';

const serviceCategories = [
  {
    title: 'Cosmetic Artistry',
    description: 'Transforming smiles into masterpieces through digital precision and artistic vision.',
    services: [
      { name: 'Digital Smile Design', detail: '3D visualization of your future smile.' },
      { name: 'Porcelain Veneers', detail: 'Ultra-thin, handmade ceramic layers.' },
      { name: 'Laser Whitening', detail: 'Advanced light-activated shade lifting.' }
    ],
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    title: 'General & Preventative',
    description: 'Maintaining the foundation of health with microscopic precision and gentle care.',
    services: [
      { name: 'Micro-Endodontics', detail: 'Root treatments under 20x magnification.' },
      { name: 'Air-Flow Cleaning', detail: 'Painless, gentle stain removal.' },
      { name: 'Biocompatible Fillings', detail: 'Mercury-free, tooth-colored restorations.' }
    ],
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: 'Advanced Oral Rehab',
    description: 'Restoring function and confidence through state-of-the-art reconstructive surgery.',
    services: [
      { name: 'Computer-Guided Implants', detail: 'Robotic precision for dental placement.' },
      { name: 'Full Mouth Restoration', detail: 'Total functional rehabilitation.' },
      { name: 'Bone Grafting', detail: 'Natural regeneration for implant stability.' }
    ],
    icon: <Infinity className="w-8 h-8" />
  }
];

export const Services = () => {
  return (
    <div className="pt-24 bg-white selection:bg-brand-accent selection:text-white">
      {/* Intro Section */}
      <section className="py-32 px-6 md:px-12 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-brand-primary mb-8">
            Treatments <br /> 
            <span className="text-brand-muted">reimagined.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted leading-relaxed font-medium">
            Every clinical specialty, refined for ultimate comfort and aesthetic perfection.
          </p>
        </div>
      </section>

      {/* Detailed Service Grid */}
      <div className="space-y-6 px-6 md:px-12 pb-32">
        {serviceCategories.map((cat, idx) => (
          <section key={cat.title} className="max-w-7xl mx-auto bento-card min-h-[700px] flex flex-col justify-end p-12 md:p-20 relative overflow-hidden group">
            {/* Soft backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10 max-w-3xl">
              <span className="text-brand-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-6 block">Premium Standards</span>
              <h2 className="text-5xl md:text-8xl font-bold text-brand-primary mb-10 leading-[0.9]">{cat.title}<br /><span className="text-brand-muted">at its finest.</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-zinc-200 pt-12">
                <div>
                   <p className="text-xl text-brand-muted leading-relaxed mb-8">
                     {cat.description}
                   </p>
                   <Button variant="outline" className="rounded-full px-8 h-12">See the results</Button>
                </div>
                <div className="space-y-8">
                  {cat.services.map(s => (
                    <div key={s.name} className="group/item">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-brand-primary group-hover/item:text-brand-accent transition-colors">{s.name}</h4>
                        <ArrowUpRight size={16} className="text-zinc-300 group-hover/item:text-brand-accent group-hover/item:-translate-y-1 group-hover/item:translate-x-1 transition-all" />
                      </div>
                      <p className="text-brand-muted text-sm leading-relaxed">{s.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Architectural Iconography */}
            <div className="absolute top-12 right-12 text-zinc-50 group-hover:text-zinc-100 transition-colors pointer-events-none">
               <div className="scale-[12] origin-top-right opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
                  {cat.icon}
               </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-40 bg-zinc-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Ready for the <span className="text-zinc-400">future</span> of your smile?</h2>
            <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto">Experience the standard of care that has made us the leading destination for restorative dentistry in Dubai.</p>
            <Button className="bg-white text-black px-10 py-5 text-lg rounded-full hover:bg-zinc-200 transition-colors">Start Discovery Session</Button>
         </div>
      </section>
    </div>
  );
};
