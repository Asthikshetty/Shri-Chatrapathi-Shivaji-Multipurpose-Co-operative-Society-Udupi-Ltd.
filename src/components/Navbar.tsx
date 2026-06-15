import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, MapPin, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/logo.jpg';
import { MobileDrawer } from './MobileDrawer';

export const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* SECTION 1: TOP BAR (Height: 40px, Orange Background) */}
      <div className="bg-[#FF9900] text-white text-xs font-medium h-10 hidden sm:flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30 select-none">
        {/* Left: Location */}
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#F6E7B0]" />
          <span>Karthik Towers, Near District Court, Udupi - 576101</span>
        </div>
        {/* Right: Phone & Email */}
        <div className="flex items-center gap-6">
          <a href="tel:08204295090" className="flex items-center gap-1.5 hover:text-[#F6E7B0] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#F6E7B0]" />
            <span>0820-4295090</span>
          </a>
          <a href="mailto:chathrapathishivaji@yahoo.in" className="flex items-center gap-1.5 hover:text-[#F6E7B0] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#F6E7B0]" />
            <span>chathrapathishivaji@yahoo.in</span>
          </a>
        </div>
      </div>

      {/* SECTION 2: MAIN HEADER (Sticky Navigation) */}
      <header className="sticky top-0 z-30 w-full bg-[#FFFDF8] border-b border-[#D4AF37]/15 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Home page">
            <img 
              src={logoImg} 
              alt="Shri Chathrapathi Shivaji Co-operative Society Logo" 
              className="h-14 w-14 object-contain rounded-full border border-[#D4AF37]/30 bg-white p-0.5 shadow-sm"
              loading="eager"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-serif font-bold text-[#5B4636] leading-tight group-hover:text-[#FF9900] transition-colors">
                Chathrapathi Shivaji
              </span>
              <span className="text-[10px] sm:text-xs text-[#D4AF37] font-sans font-bold tracking-wider uppercase">
               Multipurpose Co-operative Society Ltd Udupi.
              </span>
            </div>
          </Link>

          {/* Center: Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              item.isHash ? (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleHashLinkClick(e, item.path)}
                  className="text-sm font-sans font-semibold text-[#5B4636] hover:text-[#FF9900] transition-colors py-2"
                >
                  {item.name}
                </Link>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-sans font-semibold transition-colors duration-200 py-2 ${
                      isActive
                        ? 'text-[#FF9900] border-b-2 border-[#D4AF37]'
                        : 'text-[#5B4636] hover:text-[#FF9900]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden p-2 text-[#5B4636] hover:text-[#FF9900] transition-colors rounded-lg hover:bg-[#FFF4E6] min-h-[44px] min-w-[44px] flex items-center justify-center border border-[#D4AF37]/25"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};
