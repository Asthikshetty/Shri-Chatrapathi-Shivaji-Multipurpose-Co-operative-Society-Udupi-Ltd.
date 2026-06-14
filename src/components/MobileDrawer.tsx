import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Schemes', path: '/#schemes', isHash: true },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    onClose();
    if (item.isHash) {
      const id = item.path.substring(2);
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Slide-in Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#FFFDF8] shadow-2xl flex flex-col p-6 border-l border-[#D4AF37]/25"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/15">
              <div className="flex items-center gap-2">
                <img 
                  src={logoImg} 
                  alt="Logo" 
                  className="h-10 w-10 object-contain rounded-full border border-[#D4AF37]/30"
                />
                <span className="text-sm font-serif font-bold text-[#5B4636]">Navigation Menu</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-[#5B4636] hover:text-[#FF9900] transition-colors rounded-full hover:bg-[#FFF4E6] min-h-[44px] min-w-[44px] flex items-center justify-center border border-[#D4AF37]/15"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-grow py-8 flex flex-col gap-4 overflow-y-auto">
              {navItems.map((item) => (
                item.isHash ? (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleLinkClick(e, item)}
                    className="text-base font-semibold py-2 px-3 rounded-lg transition-all duration-200 min-h-[44px] flex items-center text-[#5B4636] hover:bg-[#FFF4E6] hover:text-[#FF9900]"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleLinkClick(e, item)}
                    className={({ isActive }) =>
                      `text-base font-semibold py-2 px-3 rounded-lg transition-all duration-200 min-h-[44px] flex items-center ${
                        isActive
                          ? 'bg-[#FFF4E6] text-[#FF9900] font-bold border-l-4 border-[#D4AF37]'
                          : 'text-[#5B4636] hover:bg-[#FFF4E6] hover:text-[#FF9900]'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              ))}
            </nav>

            {/* Footer / CTA inside Drawer */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
