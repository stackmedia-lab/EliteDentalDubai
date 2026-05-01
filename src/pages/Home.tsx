import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Clock, Users, Star, ArrowUpRight, Zap, Award } from 'lucide-react';
import { Button } from '@/components/Button';
import { ServiceCard } from '@/components/ServiceCard';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-white">
      {/* Dynamic Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-hero mb-8">
            Precision. <br />
            <span className="text-brand-muted">Artistry. Mastery.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted max-w-2xl mx-auto font-medium mb-12">
            The next generation of dental excellence has arrived in Dubai. Specialized in non-invasive restorative care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-brand-accent text-white px-8 py-4 text-lg">Book a Session</Button>
            <Link to="/services">
              <Button variant="outline" className="px-8 py-4 text-lg border-zinc-200">Learn more {'>'}</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Product-like Bento Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-2 bento-card aspect-[16/9] md:aspect-auto md:h-[600px] relative p-12 group">
            <div className="max-w-xs">
              <h3 className="text-3xl font-bold mb-4">Clinical Mastery</h3>
              <p className="text-brand-muted leading-relaxed">
                Every treatment is performed under high-power medical magnification to ensure microscopic precision.
              </p>
            </div>
            <div className="absolute inset-x-0 bottom-0 aspect-video flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
               <Zap size={200} />
            </div>
          </div>
          
          <div className="lg:col-span-2 bento-card h-[600px] relative p-12 bg-zinc-900 text-white overflow-hidden">
            <div className="max-w-xs relative z-10">
              <h3 className="text-3xl font-bold mb-4">Digital Smile Design</h3>
              <p className="text-zinc-400 leading-relaxed">
                Visualize your perfect smile before we even begin. AI-powered 3D diagnostics for predictive results.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-12 right-12 text-zinc-800">
               <Sparkles size={300} />
            </div>
          </div>

          <div className="md:col-span-1 bento-card aspect-square p-10 flex flex-col justify-between">
            <Users className="text-brand-accent" size={32} />
            <div>
              <h4 className="text-xl font-bold mb-2">Patient First</h4>
              <p className="text-sm text-brand-muted">Curated patient journey with concierge support.</p>
            </div>
          </div>

          <div className="md:col-span-1 bento-card aspect-square p-10 flex flex-col justify-between bg-zinc-100">
            <Shield className="text-emerald-600" size={32} />
            <div>
              <h4 className="text-xl font-bold mb-2">Safest Protocols</h4>
              <p className="text-sm text-brand-muted">Exceeding ISO clinical sterilization standards.</p>
            </div>
          </div>

          <div className="md:col-span-2 bento-card aspect-[16/9] md:aspect-auto p-12 flex items-center justify-between">
             <div className="max-w-sm">
                <h3 className="text-3xl font-bold mb-4">Swiss Quality</h3>
                <p className="text-brand-muted">Utilizing premium biological materials and Swiss-engineered implant technology for lifelong durability.</p>
             </div>
             <div className="hidden sm:block">
                <Award size={80} className="text-zinc-200" />
             </div>
          </div>
        </div>
      </section>

      {/* Apple-style Tech Showcase */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bento-card bg-zinc-900 text-white min-h-[600px] p-16 flex flex-col justify-between overflow-hidden relative">
              <div className="max-w-md relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Light. Water. Precision.</h3>
                <p className="text-zinc-400 text-xl leading-relaxed">
                  WaterLase iPlus technology allows us to perform procedures with pinpoint accuracy. Often without drills, and often without needles.
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 opacity-10">
                 <Zap size={400} strokeWidth={0.5} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="bento-card p-12 flex flex-col justify-between h-[284px]">
                <div>
                  <h4 className="text-2xl font-bold mb-2">20x Magnification</h4>
                  <p className="text-brand-muted">Detecting what the naked eye misses using Zeiss medical optics.</p>
                </div>
                <div className="flex items-center gap-2 text-brand-accent font-bold">
                   <span>See the difference</span> <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="bento-card p-12 flex flex-col justify-between h-[284px] bg-zinc-100">
                <div>
                  <h4 className="text-2xl font-bold mb-2">Biological Safety</h4>
                  <p className="text-brand-muted">Exclusively using Swiss-engineered, metal-free restorations.</p>
                </div>
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-zinc-100 shadow-sm" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness & Environment */}
      <section className="py-32 px-6 md:px-12 bg-[#f5f5f7]">
         <div className="max-w-5xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Designed for peace.</h2>
            <p className="text-xl md:text-2xl text-brand-muted font-medium">Healthcare shouldn't feel like a hospital. We've curated every scent, sound, and texture to ensure your visit is a moment of calm.</p>
         </div>
         
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bento-card aspect-square md:aspect-auto md:h-[500px] bg-white p-12 flex flex-col justify-end group">
               <div className="mb-auto">
                  <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-brand-accent mb-6">
                     <Clock size={24} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Slow Dentistry</h4>
                  <p className="text-brand-muted">We never double-book. Your appointment is 100% focused on you, with no rush and no waiting rooms.</p>
               </div>
            </div>
            <div className="bento-card aspect-square md:aspect-auto md:h-[500px] bg-white p-12 flex flex-col justify-end">
               <div className="mb-auto">
                  <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-brand-accent mb-6">
                     <Users size={24} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Concierge Care</h4>
                  <p className="text-brand-muted">From airport transfers to personalized wellness plans, our team handles every detail of your visit.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Feature Carousel-like section */}
      <section className="py-20 px-6 md:px-12 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Masterfully Crafted.</h2>
           <p className="text-xl text-brand-muted">Dental care as an experience of comfort, not a procedure of necessity.</p>
        </div>
        
        <div className="max-w-7xl mx-auto flex overflow-x-auto pb-12 gap-8 scrollbar-hide snap-x px-4">
           {[
             { t: 'Cosmetic Veneers', d: 'Ultra-thin porcelain artistry.', i: <Star size={40} className="text-brand-accent" /> },
             { t: 'Guided Implants', d: 'Computer-directed precision.', i: <Zap size={40} className="text-brand-accent" /> },
             { t: 'AirFlow Prophylaxis', d: 'The future of pain-free cleaning.', i: <Shield size={40} className="text-brand-accent" /> }
           ].map((item, i) => (
             <div key={i} className="min-w-[320px] md:min-w-[440px] aspect-[4/5] bg-white rounded-[40px] p-12 flex flex-col justify-between shadow-sm snap-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center">
                   {item.i}
                </div>
                <div>
                   <h3 className="text-2xl font-bold mb-2">{item.t}</h3>
                   <p className="text-brand-muted mb-8">{item.d}</p>
                   <Link to="/services" className="text-brand-accent font-bold text-sm tracking-tight hover:underline">Learn more {'>'}</Link>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};
