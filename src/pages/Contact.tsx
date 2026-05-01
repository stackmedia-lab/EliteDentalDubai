import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/Button';

export const Contact = () => {
  return (
    <div className="pt-24 bg-white">
      <section className="py-32 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-brand-primary mb-8">
            Let’s start <br /> 
            <span className="text-brand-muted">the conversation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted font-medium">
            Our concierge team is available to assist you with appointments and travel arrangements in Dubai.
          </p>
        </div>
      </section>

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bento-card p-10 flex flex-col justify-between">
              <Phone className="text-brand-accent" size={24} />
              <div>
                <h4 className="text-lg font-bold mb-1">Direct Line</h4>
                <p className="text-brand-muted text-sm">+971 4 000 0000</p>
              </div>
            </div>
            <div className="bento-card p-10 flex flex-col justify-between bg-zinc-900 text-white">
              <Mail className="text-brand-accent" size={24} />
              <div>
                <h4 className="text-lg font-bold mb-1">Email Concierge</h4>
                <p className="text-zinc-400 text-sm">hello@elitedental.com</p>
              </div>
            </div>
            <div className="md:col-span-2 bento-card p-10 flex items-center gap-8">
               <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-accent" size={24} />
               </div>
               <div>
                  <h4 className="text-xl font-bold mb-1">Visit our Sanctuary</h4>
                  <p className="text-brand-muted">Jumeirah Beach Road, Villa 42, Dubai Health District, UAE</p>
               </div>
            </div>
            <div className="md:col-span-2 bento-card p-10 bg-zinc-50 border border-zinc-100">
               <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">Clinic Hours</h4>
               <div className="grid grid-cols-3 gap-8">
                  <div>
                    <span className="text-xs font-bold block mb-1">Mon - Fri</span>
                    <span className="text-lg font-bold">08 — 21</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold block mb-1">Saturday</span>
                    <span className="text-lg font-bold">09 — 18</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold block mb-1">Sunday</span>
                    <span className="text-lg font-bold opacity-30">Closed</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bento-card p-10 md:p-16 border border-zinc-100">
            <h3 className="text-3xl font-bold mb-10">Inquiry</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 border-b border-zinc-200 pb-2 focus-within:border-brand-accent transition-colors">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full bg-transparent focus:outline-none py-1 font-medium" placeholder="E.g. James Bond" />
                </div>
                <div className="space-y-2 border-b border-zinc-200 pb-2 focus-within:border-brand-accent transition-colors">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Mobile</label>
                  <input type="tel" className="w-full bg-transparent focus:outline-none py-1 font-medium" placeholder="+971 -- --- ----" />
                </div>
              </div>
              <div className="space-y-2 border-b border-zinc-200 pb-2 focus-within:border-brand-accent transition-colors">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Service</label>
                <select className="w-full bg-transparent focus:outline-none py-1 font-medium appearance-none">
                  <option>Cosmetic Transformation</option>
                  <option>Complex Surgery</option>
                  <option>Preventative Care</option>
                </select>
              </div>
              <div className="space-y-2 border-b border-zinc-200 pb-2 focus-within:border-brand-accent transition-colors">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Your Message</label>
                <textarea rows={3} className="w-full bg-transparent focus:outline-none py-1 font-medium resize-none text-sm" placeholder="Tell us about your needs..."></textarea>
              </div>
              <Button size="lg" className="w-full bg-brand-primary text-white py-5 rounded-full hover:bg-zinc-800 transition-all font-bold">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
