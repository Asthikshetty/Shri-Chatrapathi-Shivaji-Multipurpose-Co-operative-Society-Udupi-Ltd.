import React from 'react';
import { Shield, Users } from 'lucide-react';
import { SEO } from '../components/SEO';


interface BoardMember {
  name: string;
  role: string;
  bio: string;
  icon: React.ReactNode;
}

export const BoardMembers: React.FC = () => {
  const members: BoardMember[] = [
    {
      name: "Sri. DINESH C NAIK",
      role: "PRESIDENT",
      bio: "Leads the society with strategic vision and ensures regulatory compliance across all banking and service operations.",
      icon: (
        <svg className="w-16 h-16 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. GANESH",
      role: "VICE PRESIDENT",
      bio: "Oversees credit risk management and member welfare policies, assuring institutional stability and transparency.",
      icon: (
        <svg className="w-16 h-16 text-[#C8A24A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. PRASHANTH SHIROOR",
      role: "Chief Executive Officer / Manager",
      bio: "Handles day-to-day administration, ledger management, audit compliance, and general member grievance redressal.",
      icon: (
        <svg className="w-16 h-16 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. RAGHUNATH NAIK",
      role: "Director",
      bio: "Directs internal accounting standards and regulatory audit processes, maintaining compliance with Karnataka State norms.",
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. KRISHNA NAIK",
      role: "Director",
      bio: "Formulates deposit growth plans and fixed/recurring deposit interest rates for general and senior citizen categories.",
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. LAXMANA NAIK",
      role: "Director",
      bio: "Supervises agricultural micro-credit programs and localized agrarian credit services for regional farmers.",
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. RAJU C NAIK",
      role: "Director",
      bio: "Directs vehicle finance schemes and commercial loan appraisal limits to uplift small regional traders.",
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. HARISH",
      role: "Director",
      bio: "Collaborates on gold appraisal operations and high-security safe deposit locker infrastructure planning.",
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. CHANDRA H NAIK",
      role: "Director",
      bio: "Drives community engagement and co-operative welfare operations inside Udupi and surrounding taluks.",
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. SATHISH NAIK",
      role: "Director",
      bio: "Manages public outreach campaigns, membership expansion registry, and digital SMS alerts deployment.",
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. KARUNAKARA KANCHAN",
      role: "Director",
      bio: "Oversees property mortgage loan guidelines and valuation standards for residential credit projects.",
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Sri. SHEKHAR D SHETTY",
      role: "Director",
      bio: "Guides institutional growth strategies and ensures adherence to democratic co-operative values.",
      icon: (
        <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Smt. JYOTHI M SHETTY",
      role: "Director",
      bio: "Promotes women's self-help groups (SHG) micro-finance schemes and savings accounts participation.",
      icon: (
        <svg className="w-16 h-16 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    },
    {
      name: "Smt. SHOBHA",
      role: "Director",
      bio: "Formulates family savings plans and coordinates general assembly reviews on behalf of women shareholders.",
      icon: (
        <svg className="w-16 h-16 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804" />
        </svg>
      )
    }
  ];

  return (
    <>
      <SEO 
        title="Board of Directors" 
        description="Meet the Board of Directors and managing committee of Shri Chathrapathi Shivaji Co-operative Society. Our professional management ensures stable local growth."
        path="/board-members"
      />

      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111827] m-0">
            Our Management Board
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Led by experienced professionals committed to the principles of trust, co-operation, and community development.
          </p>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center">
                  
                  {/* Styled Avatar Placeholder */}
                  <div className="w-24 h-24 bg-gray-50 border border-gray-150 rounded-full flex items-center justify-center shadow-inner mb-4">
                    {member.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-950">{member.name}</h3>
                  <span className="inline-block px-3 py-1 bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold rounded-full mt-1.5 uppercase tracking-wide">
                    {member.role}
                  </span>
                  
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    {member.bio}
                  </p>

                </div>

                <div className="w-full mt-6 pt-4 border-t border-gray-100 text-xs text-gray-400 flex items-center justify-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#C8A24A]" /> Verified Committee Member
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Governance Standards */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200/80 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-[#1E3A8A]/5 text-[#1E3A8A] rounded-lg mt-1">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1E3A8A]">Democratic Governance</h3>
                <p className="text-sm text-gray-600 mt-1 max-w-xl">
                  Shri Chathrapathi Shivaji Co-operative Society follows a democratic pattern where every member has equal voting rights. General body meetings are conducted annually to review auditing logs and approve policy amendments.
                </p>
              </div>
            </div>
            <div className="bg-[#C8A24A]/10 text-[#1E3A8A] px-4 py-2 rounded-lg text-xs font-bold border border-[#C8A24A]/25 uppercase tracking-wider text-center shrink-0">
              Karnataka Act, 1959 Compliant
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
