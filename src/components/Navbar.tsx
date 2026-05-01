import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Our Team', path: '/doctors' },
  { name: 'Patient Journey', path: '/patient-journey' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav h-12 flex items-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg tracking-tight">Elite Dental</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[12px] font-medium tracking-wide text-brand-primary/80 transition-opacity hover:opacity-100',
                location.pathname === link.path ? 'opacity-100' : 'opacity-60'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" className="bg-brand-primary text-white text-[11px] h-7 px-3 rounded-full hover:bg-zinc-800">
            Book
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-primary h-8 w-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 top-12 bg-white z-40 px-8 py-10 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold tracking-tight text-brand-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
