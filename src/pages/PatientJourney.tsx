import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Stethoscope, Sparkles, Coffee, Heart, CheckCircle } from 'lucide-react';
import { Button } from '@/components/Button';

const steps = [
  {
    title: 'Consultation & Discovery',
    description: 'A dedicated patient coordinator welcomes you into our sanctuary. We discuss your desires and health history over curated Arabica coffee.',
    icon: <Coffee />,
    substeps: ['Digital Health intake', 'Initial photographic assessment', 'Concierge tour of clinic']
  },
  {
    title: 'Precision Diagnostics',
    description: 'We utilize advanced 3D imaging and AI-assisted diagnostics to create a perfect map of your oral architecture.',
    icon: <Stethoscope />,
    substeps: ['3D CBCT Scan', 'Intra-oral 5K scanning', 'Computer-aided health audit']
  },
  {
    title: 'Bespoke Treatment Plan',
    description: 'Our specialists masterfully design a roadmap that balances medical health with high-end aesthetics.',
    icon: <Calendar />,
    substeps: ['Multi-specialist review', 'Personalized financial planning', 'Virtual results preview']
  },
  {
    title: 'Comfort-First Treatment',
    description: 'Experience your procedures in a state of complete serenity, utilizing painless anesthetic techniques.',
    icon: <Heart />,
    substeps: ['Localized pain management', 'Meditation acoustics', 'Microscopic execution']
  },
  {
     title: 'Sustained Wellness',
     description: 'We accompany you through the healing phase and beyond with personalized preventative protocols.',
     icon: <Sparkles />,
     substeps: ['Follow-up concierge call', 'Digital care package', 'Lifetime health monitoring']
  }
];

export const PatientJourney = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Page Header */}
      <section className="py-32 px-6 md:px-12 text-center bg-[#f5f5f7]">
         <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-brand-primary mb-8">
               A journey <br />
               <span className="text-brand-muted">curated for you.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-muted font-medium mb-12">
               Experience the standard of boutique care. Every detail is meticulously designed.
            </p>
         </div>
      </section>

      {/* Steps - Vertical Large Timeline */}
      <section className="py-40 px-6 md:px-12">
         <div className="max-w-7xl mx-auto space-y-40">
            {steps.map((step, idx) => (
               <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-12 lg:gap-24"
               >
                  <div className="lg:col-span-4 mb-4 lg:mb-0">
                     <span className="text-brand-accent font-bold text-4xl font-serif block mb-8">0{idx + 1}</span>
                     <h2 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight leading-tight">{step.title}</h2>
                  </div>
                  
                  <div className="lg:col-span-8">
                     <p className="text-xl md:text-2xl text-brand-muted leading-relaxed mb-12 font-medium">
                        {step.description}
                     </p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-100 pt-12">
                        {step.substeps.map(sub => (
                           <div key={sub} className="flex items-center gap-4 text-brand-primary font-bold group">
                              <div className="w-6 h-6 rounded-full border-2 border-brand-accent flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                                 <CheckCircle size={12} className="text-brand-accent group-hover:text-white" />
                              </div>
                              <span className="text-lg">{sub}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Luxury CTA */}
      <section className="py-20 px-6">
         <div className="max-w-5xl mx-auto bento-card p-20 md:p-32 bg-zinc-900 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Begin.</h2>
              <p className="text-zinc-400 text-xl mb-12 max-w-xl mx-auto font-medium">
                 Your sanctuary for clinical excellence is one consultation away.
              </p>
              <Button size="lg" className="bg-white text-black px-12 py-5 rounded-full text-lg">Schedule your visit</Button>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[4] pointer-events-none">
               <Coffee size={200} />
            </div>
         </div>
      </section>
    </div>
  );
};
