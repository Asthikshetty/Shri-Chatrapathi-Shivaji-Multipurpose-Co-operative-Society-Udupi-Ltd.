import React from 'react';

export const NewsTicker: React.FC = () => {
  const newsItems = [
    "📢 Gold Loan Available @ 0.91% P.M.",
    "📢 Vehicle Loan Available @ 1.08% P.M.",
    "🏆 Society Achievement Award 2025",
    "📢 RTGS / NEFT Services Available",
    "📢 New Membership Applications Open",
    "📢 Daily Deposit (Pigmy) Facility Available",
    "📢 FD Schemes Available upto 9.5%"
  ];

  // Duplicate items to ensure smooth infinite wrap
  const displayItems = [...newsItems, ...newsItems, ...newsItems];

  return (
    <div className="bg-[#FFF4E6] border-y border-[#D4AF37]/20 py-2.5 overflow-hidden w-full relative z-20">
      <div className="ticker-wrap flex items-center max-w-7xl mx-auto px-4">
        {/* News Flash Badge */}
        <div className="bg-[#FF9900] text-white text-xs font-bold px-3 py-1 rounded shadow-sm mr-4 z-10 select-none shrink-0 border border-[#D4AF37]/30">
          LATEST NEWS
        </div>
        
        {/* Infinite Scrolling Ticker */}
        <div className="ticker-content flex gap-16 items-center">
          {displayItems.map((item, index) => (
            <span 
              key={index} 
              className="text-[#5B4636] text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 hover:text-[#FF9900] transition-colors cursor-pointer select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
