import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { LanguageSwitcherWrapper } from '../components/LanguageSwitcherWrapper';



// Local Asset Imports
import img1 from '../assets/shivajisociety/images/gallery1.png';
import img2 from '../assets/shivajisociety/images/gallary2.png';
import img3 from '../assets/shivajisociety/images/scholarship.png';
import img4 from '../assets/shivajisociety/images/award.png';
import img5 from '../assets/shivajisociety/images/social-recognization.png';
import img6 from '../assets/shivajisociety/images/scholarship2.png';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  color: string;
}

export const Gallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const photos: GalleryItem[] = [
    { id: 1, title: "10th Annual General Body Meeting", category: "Annual General Meetings", date: "August 2025", image: img1, color: "from-[#FF9900] to-amber-600" },
    { id: 2, title: "Farmers Micro-Credit Assistance Drive", category: "Community Welfare Activities", date: "October 2025", image: img2, color: "from-green-600 to-[#FF9900]" },
    { id: 3, title: "Gold Loan Security Locker Cabinets", category: "Society Events", date: "March 2024", image:img3, color: "from-[#FF9900] to-[#D4AF37]" },
    { id: 4, title: "State Union Audit Excellence Recognition", category: "Certificates and Awards", date: "July 2025", image: img4, color: "from-purple-600 to-[#FF9900]" },
    { id: 5, title: "Doorstep Pigmy Ledger Collector Setup", category: "Year-wise Achievements", date: "January 2024", image: img5, color: "from-[#5B4636] to-[#FF9900]" },
    { id: 6, title: "Local Micro-Traders Loan Distribution", category: "Loan Distribution Programs", date: "November 2025", image: img6, color: "from-[#D4AF37] to-amber-700" }
  ];

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((activePhotoIndex + 1) % photos.length);
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((activePhotoIndex - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, photos.length]);

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % photos.length);
    }
  };

  return (
    <>
      <SEO 
        title="Society Gallery & Photos" 
        description="Browse photos of our annual general body meetings, loan distributions, and community welfare initiatives at Shri Chathrapathi Shivaji Co-operative Society Ltd. Udupi."
        path="/gallery"
      />

      {/* GALLERY HERO */}
      <section className="bg-[#FFFDF8] border-b border-[#D4AF37]/15 py-12 md:py-16 text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Visuals</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#5B4636] mt-2 m-0">
            Society Gallery
          </h1>
          <p className="mt-3 text-base text-[#5B4636]/70 max-w-2xl mx-auto font-medium">
            Browse real photographs capturing our general assemblies, loan disbursement events, and public welfare campaigns.
          </p>
        </div>
      </section>

      <LanguageSwitcherWrapper backgroundColor="#FFFFFF" />

      {/* MASONRY IMAGE GALLERY SECTION (No Filters) */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((item, index) => (
              <div 
                key={item.id} 
                onClick={() => setActivePhotoIndex(index)}
                className="bg-white border border-[#D4AF37]/20 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 cursor-pointer group hover:border-[#FF9900]"
              >
                {/* Image Block */}
                <div className="h-48 relative overflow-hidden border-b border-[#D4AF37]/15">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Text overlay with dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-5 flex flex-col justify-between text-white text-left z-10">
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] font-bold w-fit uppercase tracking-wider border border-white/20">
                      {item.category}
                    </span>
                    
                    <div>
                      <h3 className="font-serif font-bold text-sm sm:text-base leading-tight text-shadow-subtle m-0">{item.title}</h3>
                      <span className="text-[10px] opacity-80 flex items-center gap-1 mt-1.5 font-bold">
                        <Calendar className="w-3.5 h-3.5" /> {item.date}
                      </span>
                    </div>
                  </div>
                  
                  {/* Zoom Icon overlay */}
                  <div className="absolute inset-0 bg-[#5B4636]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Description info */}
                <div className="p-5 text-left flex items-center justify-between border-t border-gray-50 select-none">
                  <span className="text-xs text-[#5B4636]/70 font-semibold">Udupi Co-operative Records</span>
                  <span className="text-xs font-bold text-[#FF9900] group-hover:text-[#D4AF37] transition-colors flex items-center gap-0.5">
                    View Photo &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX POPUP MODAL */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIndex(null)}
              className="fixed inset-0 z-50 bg-[#5B4636]/90 backdrop-blur-md"
              aria-hidden="true"
            />
            {/* Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
              onClick={() => setActivePhotoIndex(null)}
            >
              <div 
                className="relative w-full max-w-4xl bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl flex flex-col justify-between p-4 sm:p-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Lightbox Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#D4AF37]/15">
                  <span className="px-2.5 py-0.5 bg-[#FFF4E6] text-[#FF9900] text-[10px] font-bold rounded uppercase">
                    {photos[activePhotoIndex].category}
                  </span>
                  <button 
                    onClick={() => setActivePhotoIndex(null)}
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 border border-gray-200 min-h-[40px] min-w-[40px] flex items-center justify-center"
                    aria-label="Close photo"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Lightbox Image Graphic Block */}
                <div className="flex-grow flex items-center justify-center py-8 relative min-h-[300px]">
                  {/* Left navigation arrow */}
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-2 p-2 bg-white hover:bg-[#FFF4E6] text-[#5B4636] border border-[#D4AF37]/30 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-md z-10"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Centered Graphic Card representing the photo */}
                  <div className="w-full max-w-xl aspect-[4/3] bg-black/90 rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl flex flex-col items-center justify-center select-none relative">
                    <img 
                      src={photos[activePhotoIndex].image} 
                      alt={photos[activePhotoIndex].title} 
                      className="w-full h-full object-contain" 
                    />
                  </div>

                  {/* Right navigation arrow */}
                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-2 p-2 bg-white hover:bg-[#FFF4E6] text-[#5B4636] border border-[#D4AF37]/30 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-md z-10"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Lightbox Footer Info */}
                <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs font-semibold text-[#5B4636]/80 select-none">
                  <span>{photos[activePhotoIndex].title}</span>
                  <span className="text-[#FF9900]">{activePhotoIndex + 1} of {photos.length}</span>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
