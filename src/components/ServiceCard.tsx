import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group cursor-pointer"
    >
      <div className="w-16 h-16 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mb-6 transition-colors group-hover:bg-brand-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold text-brand-primary mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex items-center text-brand-accent font-semibold group-hover:gap-2 transition-all">
        <span>Learn More</span>
        <ArrowRight size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-2 transition-all" />
      </div>
    </motion.div>
  );
};
