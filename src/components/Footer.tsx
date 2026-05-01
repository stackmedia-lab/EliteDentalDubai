import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] py-24 px-6 md:px-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <h3 className="text-xl font-bold mb-6">Elite Dental</h3>
            <p className="text-sm text-brand-muted leading-relaxed max-w-xs">
              A healthcare sanctuary dedicated to the intersection of clinical precision and patient comfort. Dubai, UAE.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Services</h4>
            <div className="flex flex-col space-y-3">
              {['Veneers', 'Implants', 'Diagnostics', 'Preventative'].map(s => (
                <Link key={s} to="/services" className="text-sm text-brand-muted hover:text-brand-accent transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Clinic</h4>
            <div className="flex flex-col space-y-3">
              {['Our Team', 'Patient Journey', 'Contact'].map(s => (
                <Link key={s} to={s === 'Our Team' ? '/team' : '/patient-journey'} className="text-sm text-brand-muted hover:text-brand-accent transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Contact</h4>
            <div className="space-y-4">
               <p className="text-sm text-brand-muted">Jumeirah Beach Road, Villa 42, Dubai</p>
               <p className="text-sm font-bold text-brand-primary">+971 4 000 0000</p>
               <div className="flex gap-4 pt-2">
                  <div className="p-2 bg-white rounded-full text-brand-accent shadow-sm cursor-pointer hover:bg-brand-accent hover:text-white transition-all">
                     <Linkedin size={16} />
                  </div>
                  <div className="p-2 bg-white rounded-full text-brand-accent shadow-sm cursor-pointer hover:bg-brand-accent hover:text-white transition-all">
                     <Mail size={16} />
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-zinc-400">
            © {new Date().getFullYear()} Elite Dental • Center of Excellence. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[12px] text-zinc-400">
            <span className="hover:text-brand-primary cursor-pointer">Privacy Policy</span>
            <span className="hover:text-brand-primary cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
