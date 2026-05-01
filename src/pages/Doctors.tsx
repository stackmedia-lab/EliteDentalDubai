import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, GraduationCap } from 'lucide-react';
import { Button } from '@/components/Button';

const specialists = [
  {
    name: 'Dr. Sarah Al-Maktoum',
    specialty: 'Lead Cosmetic Architect',
    bio: 'Pioneer in Digital Smile Design with over 15 years of experience in restorative aesthetics across Europe and the Middle East.',
    education: 'DDS - Harvard School of Dental Medicine',
    awards: ['Dubai Health Excellence Award 2024', 'Best Cosmetic Dentist UAE']
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Spec. Oral Rehabilitation',
    bio: 'Specialist in complex implantology and full-mouth rehabilitation. Expert in robotic-guided dental surgery.',
    education: 'PhD - University of Zurich',
    awards: ['International Implantology Master', 'Top Medical Specialist 2023']
  },
  {
    name: 'Dr. Elena Rossi',
    specialty: 'General Dentistry & Prevention',
    bio: 'Dedicated to preserving natural oral health through advanced microscopic therapy and preventative protocols.',
    education: 'MSc - King’s College London',
    awards: ['Painless Dentistry Certification', 'Patient Care Excellence']
  }
];

export const Doctors = () => {
  return (
    <div className="pt-24 bg-white">
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto mb-32">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-brand-primary mb-8">
            The surgeons <br />
            <span className="text-brand-muted">behind the craft.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted max-w-2xl font-medium">
            A collective of world-class specialists dedicated to the intersection of medicine and artistry.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-40">
          {specialists.map((doc, idx) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-12 md:gap-24 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 aspect-[4/5] bento-card relative group shadow-none hover:shadow-none bg-zinc-50 border border-zinc-100 items-center justify-center flex overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 <span className="text-zinc-200 font-serif italic text-4xl">Portrait</span>
                 <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Linkedin className="text-brand-accent" size={24} />
                 </div>
              </div>
              
              <div className="flex-1 py-4 flex flex-col justify-center">
                <span className="text-brand-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">{doc.specialty}</span>
                <h3 className="text-4xl md:text-6xl font-bold text-brand-primary mb-8">{doc.name}</h3>
                <p className="text-xl text-brand-muted mb-12 leading-relaxed">
                  {doc.bio}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-zinc-100">
                   <div>
                      <h5 className="font-bold text-xs uppercase tracking-widest text-zinc-400 mb-4">Academic Background</h5>
                      <div className="flex items-start gap-3 text-brand-primary/80">
                        <GraduationCap size={20} className="text-brand-accent shrink-0" />
                        <span className="text-sm font-medium">{doc.education}</span>
                      </div>
                   </div>
                   <div>
                      <h5 className="font-bold text-xs uppercase tracking-widest text-zinc-400 mb-4">Clinical Honors</h5>
                      <div className="space-y-3">
                         {doc.awards.map(aw => (
                           <div key={aw} className="flex items-start gap-3 text-brand-primary/80">
                              <Award size={18} className="text-brand-accent shrink-0" />
                              <span className="text-sm font-medium">{aw}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                <Button variant="outline" className="mt-16 w-fit px-10 border-zinc-200">View Full Profile</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
