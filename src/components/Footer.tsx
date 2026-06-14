import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import logoImg from '../assets/logo.jpg';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F6F2] text-[#5B4636] border-t-2 border-[#D4AF37]/30 select-none">
      {/* Top Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & About Info */}
          <div className="flex flex-col gap-5 text-left">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="Shri Chathrapathi Shivaji Co-operative Society Logo" 
                className="h-14 w-14 object-contain rounded-full border border-[#D4AF37]/30 bg-white p-0.5 shadow-sm"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-base font-serif font-bold text-[#5B4636] leading-tight">
                  Shri Chathrapathi Shivaji
                </span>
                <span className="text-xs text-[#D4AF37] font-bold">
                  Multipurpose Co-operative Society Ltd.
                </span>
              </div>
            </div>
            
            <p className="text-sm text-[#5B4636]/80 leading-relaxed font-medium">
              "Empowering Members Through Trust, Growth & Financial Security"
            </p>
            
            <div className="flex items-center gap-2 text-xs text-[#FF9900] font-bold uppercase mt-1">
              <Shield className="w-4.5 h-4.5 text-[#D4AF37] shrink-0" />
              <span>Reg No. 46294/14-15</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-sm font-sans font-bold text-[#5B4636] uppercase tracking-wider border-b border-[#D4AF37]/20 pb-2">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/" className="hover:text-[#FF9900] transition-colors py-1 block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF9900] transition-colors py-1 block">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FF9900] transition-colors py-1 block">Services</Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-[#FF9900] transition-colors py-1 block">Downloads</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#FF9900] transition-colors py-1 block">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF9900] transition-colors py-1 block">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Services Summary */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-sm font-sans font-bold text-[#5B4636] uppercase tracking-wider border-b border-[#D4AF37]/20 pb-2">Our Offerings</h3>
            <ul className="space-y-2.5 text-sm text-[#5B4636]/80 font-semibold">
              <li>Gold Loan Schemes (0.91% p.m.)</li>
              <li>Swabhiman Fixed Deposits (FD)</li>
              <li>Recurring Deposits (RD) & Pigmy</li>
              <li>NEFT, RTGS & E-Stamping</li>
            </ul>
          </div>

          {/* Contact Details & Socials */}
          <div className="flex flex-col gap-4 text-left">
            <h3 className="text-sm font-sans font-bold text-[#5B4636] uppercase tracking-wider border-b border-[#D4AF37]/20 pb-2">Branch Office</h3>
            <ul className="space-y-3.5 text-sm font-semibold">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#FF9900] shrink-0 mt-0.5" />
                <span className="text-[#5B4636]/80 leading-relaxed">
                  1st Floor, Karthik Towers, Near District Court, Udupi - 576101
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#FF9900] shrink-0" />
                <a href="tel:08204295090" className="text-[#5B4636]/80 hover:text-[#FF9900] transition-colors">
                  0820-4295090
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#FF9900] shrink-0" />
                <a href="mailto:chathrapathishivaji@yahoo.in" className="text-[#5B4636]/80 hover:text-[#FF9900] transition-colors break-all">
                  chathrapathishivaji@yahoo.in
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.facebook.com/chatrapathi.shivaji.10?rdid=XWxtZzzBKjvlp4vS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1G4hyNRjwz%2F#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-[#FFF4E6] text-[#5B4636] hover:text-[#FF9900] transition-colors border border-[#D4AF37]/25 shadow-sm" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/chatrapathi.shivaji.10?rdid=XWxtZzzBKjvlp4vS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1G4hyNRjwz%2F#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-[#FFF4E6] text-[#5B4636] hover:text-[#FF9900] transition-colors border border-[#D4AF37]/25 shadow-sm" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/chatrapathi.shivaji.10?rdid=XWxtZzzBKjvlp4vS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1G4hyNRjwz%2F#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-[#FFF4E6] text-[#5B4636] hover:text-[#FF9900] transition-colors border border-[#D4AF37]/25 shadow-sm" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 12: COPYRIGHT BAR (Orange Copyright Bar) */}
      <div className="bg-[#FF9900] py-5 text-center text-xs text-white border-t border-[#D4AF37]/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-semibold tracking-wide">
          <p>
            © {currentYear} Shri Chathrapathi Shivaji Multipurpose Co-operative Society Ltd. All rights reserved.
          </p>
<p className="text-orange-50 font-medium">
  Developed by{" "}
  <a
    href="https://www.aexontech.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-orange-50 hover:text-white underline transition-colors"
  >
    Aexon Techs
  </a>
</p>
        </div>
      </div>
    </footer>
  );
};
