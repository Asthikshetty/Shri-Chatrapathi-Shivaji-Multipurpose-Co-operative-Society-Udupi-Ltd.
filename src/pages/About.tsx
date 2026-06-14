import React, { useState } from 'react';
import { ShieldCheck, Award, Mail, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { LanguageSwitcherWrapper } from '../components/LanguageSwitcherWrapper';



// Local Asset Imports
import aboutBanner from '../assets/shivajisociety/images/vip7.png';
import presidentImg from '../assets/shivajisociety/images/vvip1.png';
import vicePresidentImg from '../assets/shivajisociety/images/vip1.png';
import ceoImg from '../assets/shivajisociety/images/CEO-prashanth.jpeg';

// Directors Images
import vip3 from '../assets/shivajisociety/images/vip3.png';
import vip4 from '../assets/shivajisociety/images/vip4.png';
import vip5 from '../assets/shivajisociety/images/vip5.png';
import vip6 from '../assets/shivajisociety/images/vip6.png';
import vip7 from '../assets/shivajisociety/images/vip7.png';

interface Director {
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  email?: string;
  phone?: string;
  image: string;
}

export const About: React.FC = () => {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);
  const executives = [
    {
      name: "Sri. DINESH C NAIK",
      role: "PRESIDENT",
      image: presidentImg,
      description: "Sri. Dinesh C Naik heads the society with extensive leadership experience in co-operative management. Under his stewardship, the society has prioritized member trust, capital adequacy, and strict adherence to regulatory norms. He drives the long-term vision of Shri Chathrapathi Shivaji Co-operative Society."
    },
    {
      name: "Sri. GANESH",
      role: "VICE PRESIDENT",
      image: vicePresidentImg,
      description: "Sri. Ganesh provides key oversight for deposit mobilization plans and credit verification guidelines. His banking expertise helps the board maintain financial compliance while designing accessible gold and vehicle loan systems for Udupi households."
    },
    {
      name: "Sri. PRASHANTH SHIROOR",
      role: "Chief Executive (Secretary)",
      image: ceoImg,
      description: "Sri. Prashanth Shiroor supervises day-to-day administrative operations, internal audit committees, ledger updates, and customer support channels. He bridges shareholder requests with board policies, guaranteeing absolute transparency."
    }
  ];

  const directors: Director[] = [
    {
      name: "Sri. RAGHUNATH NAIK",
      role: "Director",
      image: vip3,
      shortBio: "Advises on accounting, audit compliance, and general assembly records.",
      fullBio: "Sri. Raghunath Naik coordinates with state auditing authorities to verify balance sheets and check that every co-operative transaction complies with the Karnataka Co-operative Societies Act 1959.",
      email: "raghunath@shivajicooperative.in"
    },
    {
      name: "Sri. KRISHNA NAIK",
      role: "Director",
      image: vip4,
      shortBio: "Guides fixed deposit schemes and senior citizen interest distributions.",
      fullBio: "Sri. Krishna Naik focuses on expanding deposit portfolios. He designs flexible monthly/quarterly interest payout structures for fixed and recurring deposits.",
      email: "krishna@shivajicooperative.in"
    },
    {
      name: "Sri. LAXMANA NAIK",
      role: "Director",
      image: vip5,
      shortBio: "Oversees low-interest agricultural loans and crop credit facilities.",
      fullBio: "Sri. Laxmana Naik is dedicated to agrarian empowerment. He designs seasonal crop credit limits, irrigation machinery financing, and farm loan verification programs.",
      email: "laxmana@shivajicooperative.in"
    },
    {
      name: "Sri. RAJU C NAIK",
      role: "Director",
      image: vip6,
      shortBio: "Directs vehicle credit limits and small commercial trader loans.",
      fullBio: "Sri. Raju C Naik advises the credit appraisal committee on vehicle financing and working capital loan limits to help micro-businesses in Udupi expand.",
      email: "raju@shivajicooperative.in"
    },
    {
      name: "Sri. HARISH",
      role: "Director",
      image: vip7,
      shortBio: "Manages gold appraisal systems and secure vault operations.",
      fullBio: "Sri. Harish oversees branch vault operations. He ensures gold evaluation audits use correct weighing and testing procedures to guarantee asset safety.",
      email: "harish@text.in"
    },
    {
      name: "Sri. CHANDRA H NAIK",
      role: "Director",
      image: vip3,
      shortBio: "Drives localized welfare initiatives and public relations.",
      fullBio: "Sri. Chandra H Naik focuses on micro-finance programs and local co-operative awareness events. He ensures cooperative values drive our neighborhood outreach.",
      email: "chandra@shivajicooperative.in"
    },
    {
      name: "Sri. SATHISH NAIK",
      role: "Director",
      image: vip4,
      shortBio: "Advises on digital banking upgrades, SMS alerts, and server safety.",
      fullBio: "Sri. Sathish Naik guides technological integrations including secure text banking alerts, automated statement servers, and ledger digitalization setups.",
      email: "sathish@shivajicooperative.in"
    },
    {
      name: "Sri. KARUNAKARA KANCHAN",
      role: "Director",
      image: vip5,
      shortBio: "Supervises mortgage valuations and property credit frameworks.",
      fullBio: "Sri. Karunakara Kanchan evaluates properties for long-term mortgage loans. He verifies legal land documents and ensures fair asset valuations.",
      email: "karunakara@shivajicooperative.in"
    },
    {
      name: "Sri. SHEKHAR D SHETTY",
      role: "Director",
      image: vip6,
      shortBio: "Ensures democratic voting values and policy coordination.",
      fullBio: "Sri. Shekhar D Shetty manages policy amendments during the general body meet and guarantees equal shareholder rights inside society votes.",
      email: "shekhar@shivajicooperative.in"
    },
    {
      name: "Smt. JYOTHI M SHETTY",
      role: "Director",
      image: vip7,
      shortBio: "Coordinates women's self-help groups (SHG) micro-credit schemes.",
      fullBio: "Smt. Jyothi M Shetty champions female financial inclusion. She designs self-help group savings programs and provides cottage industry credit access.",
      email: "jyothi@shivajicooperative.in"
    },
    {
      name: "Smt. SHOBHA",
      role: "Director",
      image: vip3,
      shortBio: "Advocates for women shareholders and family deposit plans.",
      fullBio: "Smt. Shobha represents women members during executive reviews. She advocates for high-yield family savings plans and local welfare program funding.",
      email: "shobha@shivajicooperative.in"
    }
  ];

  return (
    <>
      <SEO 
        title="About Us & Board of Directors" 
        description="Learn about the governance, mission, and the 14 Board of Directors at Shri Chathrapathi Shivaji Co-operative Society Ltd. Udupi."
        path="/about"
      />

      {/* HERO SECTION with large background banner */}
      <section 
        className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center bg-cover bg-center border-b border-[#D4AF37]/30"
        style={{ backgroundImage: `linear-gradient(rgba(91, 70, 54, 0.75), rgba(91, 70, 54, 0.75)), url(${aboutBanner})` }}
      >
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#FFFDF8] tracking-tight m-0">
            Board of Directors
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#F6E7B0] font-sans font-bold tracking-widest uppercase">
            Governing with Trust & Financial Security Since 2013
          </p>
        </div>
      </section>

      <LanguageSwitcherWrapper backgroundColor="#FFFDF8" />

      {/* INSTITUTION MISSION & VALUES */}
      <section className="py-16 bg-[#FFFDF8] text-left">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col gap-6">
              <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Our Foundation</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636]">Democratic Leadership & Trust</h2>
              <div className="w-12 h-1 bg-[#FF9900] rounded-full"></div>
              
              <p className="text-sm sm:text-base text-[#5B4636]/80 leading-relaxed font-semibold">
                Shri Chathrapathi Shivaji Co-operative Society Ltd. operates under democratic principles where every shareholder has an equal voice. Our primary objective is to channel local savings back into localized gold, agriculture, mortgage, and vehicle credit limits to empower Udupi families.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2 select-none">
                <div className="flex items-center gap-3 p-3.5 bg-[#F8F6F2] rounded-xl border border-[#D4AF37]/25 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#FF9900]" />
                  <span className="text-xs sm:text-sm font-bold text-[#5B4636]">Fully Audited Records</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-[#F8F6F2] rounded-xl border border-[#D4AF37]/25 shadow-sm">
                  <Award className="w-6 h-6 text-[#FF9900]" />
                  <span className="text-xs sm:text-sm font-bold text-[#5B4636]">Co-operative Act Compliant</span>
                </div>
              </div>
            </div>

            {/* Mission / Vision Box */}
            <div className="bg-[#F8F6F2] border border-[#D4AF37]/25 p-8 rounded-2xl shadow-sm flex flex-col gap-6">
              <div>
                <h3 className="font-serif font-bold text-[#5B4636] text-lg sm:text-xl flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900]"></span> Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold mt-1.5 pl-4">
                  To provide secure, regulatory-compliant, and accessible banking services that improve the economic well-being of our community.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#5B4636] text-lg sm:text-xl flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9900]"></span> Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold mt-1.5 pl-4">
                  To become Udupi's most progressive cooperative credit society, fostering regional savings growth and community welfare.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXECUTIVE MEMBERS SECTION (Highlighted separately) */}
      <section className="py-16 bg-[#F8F6F2] border-y border-[#D4AF37]/20 text-left">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] mt-1.5">Executive Management</h2>
            <div className="w-12 h-1 bg-[#FF9900] rounded-full mx-auto mt-3"></div>
          </div>

          <div className="space-y-12">
            {executives.map((exec, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#D4AF37]/25 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 hover:shadow-md transition-shadow"
              >
                {/* Executive Portrait Image */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-[#F8F6F2] border border-[#D4AF37]/20 rounded-2xl overflow-hidden flex items-center justify-center p-1.5 shrink-0 select-none">
                  <img 
                    src={exec.image} 
                    alt={exec.name} 
                    className="w-full h-full object-cover rounded-xl border border-[#D4AF37]/10 shadow-sm"
                  />
                </div>

                {/* Description details */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-start sm:items-center justify-between flex-wrap gap-2">
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#5B4636] m-0">{exec.name}</h3>
                    <span className="px-3.5 py-1 bg-[#FFF4E6] border border-[#FF9900]/25 text-[#FF9900] text-xs font-bold rounded-full uppercase tracking-wider">
                      {exec.role}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold">
                    {exec.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-bold mt-2">
                    <ShieldCheck className="w-4 h-4" /> Official Managing Committee
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DIRECTORS SECTION (Remaining Directors) */}
      <section className="py-16 bg-white text-left">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Committee</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] mt-1.5">Board of Directors</h2>
            <p className="text-xs sm:text-sm text-[#5B4636]/70 mt-2 font-semibold">Click on any director card to view their full profile biography.</p>
          </div>

          {/* Cards Grid (Premium White & Gold Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((dir, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedDirector(dir)}
                className="bg-white border border-[#D4AF37]/20 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#FF9900] transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col gap-4">
                  {/* Photo circle */}
                  <div className="w-16 h-16 bg-[#F8F6F2] rounded-full border border-[#D4AF37]/25 overflow-hidden flex items-center justify-center p-1 select-none">
                    <img 
                      src={dir.image} 
                      alt={dir.name} 
                      className="w-full h-full object-cover rounded-full border border-[#D4AF37]/10 shadow-inner"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-serif font-bold text-[#5B4636] text-base sm:text-lg">{dir.name}</h3>
                    <span className="inline-block px-2.5 py-0.5 bg-[#FFF4E6] text-[#FF9900] text-[10px] font-bold rounded-md uppercase tracking-wider mt-1">
                      {dir.role}
                    </span>
                  </div>

                  <p className="text-xs text-[#5B4636]/80 leading-relaxed font-semibold">
                    {dir.shortBio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 text-[10px] font-bold text-[#FF9900] uppercase tracking-wider flex items-center gap-1">
                  Know More &rarr;
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL POPUP FOR DIRECTORS */}
      <AnimatePresence>
        {selectedDirector && (
          <>
            {/* Modal Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDirector(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />
            {/* Modal Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 bottom-4 top-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 bg-[#FFFDF8] w-full max-w-xl rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#D4AF37]/35 text-left overflow-y-auto max-h-[90vh]"
            >
              <div>
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/15">
                  <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Director Profile</span>
                  <button 
                    onClick={() => setSelectedDirector(null)}
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 border border-gray-200 min-h-[40px] min-w-[40px] flex items-center justify-center"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Details Content */}
                <div className="mt-6 flex flex-col sm:flex-row gap-6 items-start">
                  {/* Photo representation */}
                  <div className="w-24 h-24 bg-[#F8F6F2] rounded-full border border-[#D4AF37]/20 overflow-hidden flex items-center justify-center p-1.5 shrink-0 select-none">
                    <img 
                      src={selectedDirector.image} 
                      alt={selectedDirector.name} 
                      className="w-full h-full object-cover rounded-full border border-[#D4AF37]/10 shadow-inner"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#5B4636] m-0">{selectedDirector.name}</h3>
                    <span className="inline-block px-3 py-1 bg-[#FFF4E6] text-[#FF9900] text-xs font-bold rounded-md uppercase tracking-wider mt-1.5">
                      {selectedDirector.role}
                    </span>
                    <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold mt-4">
                      {selectedDirector.fullBio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Contact Details Footer */}
              <div className="mt-8 pt-4 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-xs font-semibold">
                <div className="flex flex-col gap-1.5">
                  {selectedDirector.email && (
                    <span className="flex items-center gap-1.5 text-[#5B4636]/75">
                      <Mail className="w-4 h-4 text-[#FF9900]" /> {selectedDirector.email}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-[#5B4636]/75">
                    <Phone className="w-4 h-4 text-[#FF9900]" /> 8861495090 (Udupi HQ)
                  </span>
                </div>
                <div className="bg-[#FFF4E6] text-[#FF9900] px-3 py-1 rounded text-[10px] font-bold border border-[#FF9900]/20 uppercase">
                  Verified Member
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
