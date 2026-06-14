import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.jpg';

interface RouteTransitionProps {
  children: React.ReactNode;
}

export const RouteTransition: React.FC<RouteTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [displayChildren, setDisplayChildren] = useState<React.ReactNode>(children);
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
      // Wait for transition to complete before revealing the new page
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Keep displayChildren updated in sync with changes
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setDisplayChildren(children);
      }, 300); // Small offset so page changes in the dark/behind the screen
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [children, isVisible]);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Route content */}
      <div 
        className={`w-full flex-grow flex flex-col ${
          isVisible ? 'invisible h-0 overflow-hidden absolute' : 'visible'
        }`}
      >
        {displayChildren}
      </div>

      {/* Transition Overlay */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFDF8]"
          >
            <div className="relative flex flex-col items-center px-4">
              {/* Logo wrapper */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0.9 }}
                animate={{ 
                  scale: [0.95, 1.03, 0.95],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#D4AF37]/50 flex items-center justify-center p-2 bg-white shadow-xl"
              >
                <img 
                  src={logoImg} 
                  alt="Shri Chathrapathi Shivaji Co-operative Society Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
                
                {/* Shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12"
                  initial={{ left: '-150%' }}
                  animate={{ left: '150%' }}
                  transition={{ 
                    duration: 1.4, 
                    repeat: Infinity, 
                    repeatDelay: 0.6,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              <h2 className="mt-6 text-xl md:text-2xl font-serif font-bold text-[#5B4636] text-center max-w-md">
                Shri Chathrapathi Shivaji Co-operative Society Ltd.
              </h2>
              <p className="mt-1 text-xs text-[#FF9900] font-sans font-extrabold uppercase tracking-wider">
                Serving Members with Trust Since 2013
              </p>
              
              <div className="mt-5 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900] animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900] animate-bounce"></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
