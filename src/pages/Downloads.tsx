import React from 'react';
import { FileText, Download, ShieldAlert, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { LanguageSwitcherWrapper } from '../components/LanguageSwitcherWrapper';


// Local Asset Import
import downloadBanner from '../assets/shivajisociety/images/inside-office.png';
import applicationform from '../assets/downloads/Chatrapathi-Share-Application.pdf';

interface DownloadItem {
  title: string;
  description: string;
  filename: string;
  size: string;
}

interface CategoryGroup {
  name: string;
  items: DownloadItem[];
}

export const Downloads: React.FC = () => {
  const categories: CategoryGroup[] = [
    {
      name: "Membership Applications",
      items: [
        {
          title: "Shareholder Membership Form",
          description: "Required to register as a cooperative member and obtain share certificates.",
          filename:applicationform,
          size: "245 KB"
        }
      ]
    },
    {
      name: "Loan Applications",
      items: [
        {
          title: "Gold Loan Form",
          description: "Pledge gold ornaments and request quick credit disbursal.",
          filename: applicationform,
          size: "185 KB"
        },
        {
          title: "Personal Credit Application Form",
          description: "Apply for short term unsecured personal credit limits.",
          filename: applicationform,
          size: "210 KB"
        },
        {
          title: "Vehicle Finance Form",
          description: "Request commercial utility or personal transport vehicle credit.",
          filename: applicationform,
          size: "310 KB"
        },
        {
          title: "Housing Loan Form",
          description: "Apply for construction, extension, or renovation financial aids.",
          filename: applicationform,
          size: "420 KB"
        }
      ]
    },
    {
      name: "Other Services",
      items: [
        {
          title: "KYC Details Update Form",
          description: "Update PAN, Aadhaar, address or contact details in your ledger.",
          filename: applicationform,
          size: "140 KB"
        },
        {
          title: "Swabhiman Fixed Deposit (FD) Form",
          description: "Open high-yield term deposits with custom payout terms.",
          filename: applicationform,
          size: "190 KB"
        },
        {
          title: "Recurring Deposit (RD) Account Form",
          description: "Form to start monthly Recurring Deposits with fixed maturity.",
          filename: "rd_opening_form.pdf",
          size: "172 KB"
        },
        {
          title: "Savings Bank Account Opening Form",
          description: "Open standard shareholder savings ledger with Pigmy link options.",
          filename: applicationform,
          size: "215 KB"
        }
      ]
    }
  ];

const handleDownload = (fileUrl: string) => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileUrl.split('/').pop() || 'document.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <>
      <SEO 
        title="Application Downloads" 
        description="Download official forms for membership, FD, RD, gold loans, and KYC updates from Shri Chathrapathi Shivaji Co-operative Society Ltd. Udupi."
        path="/downloads"
      />

      {/* HERO BANNER with background image */}
      <section 
        className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center bg-cover bg-center border-b border-[#D4AF37]/30"
        style={{ backgroundImage: `linear-gradient(rgba(91, 70, 54, 0.75), rgba(91, 70, 54, 0.75)), url(${downloadBanner})` }}
      >
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#FFFDF8] tracking-tight m-0">
            Application Downloads
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#F6E7B0] font-sans font-bold tracking-widest uppercase">
            Print & Fill Official Application Forms At Your Convenience
          </p>
        </div>
      </section>

      <LanguageSwitcherWrapper backgroundColor="#FFFDF8" />

      {/* DOWNLOAD CATEGORIES */}
      <section className="py-16 bg-[#FFFDF8] text-left">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Download Forms Directory (Left) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {categories.map((cat, catIdx) => (
                <div key={catIdx} className="flex flex-col gap-5">
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-[#5B4636] border-b border-[#D4AF37]/25 pb-2">
                    {cat.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cat.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx} 
                        className="bg-white border border-[#D4AF37]/20 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:border-[#FF9900]"
                      >
                        <div className="flex gap-3.5 items-start">
                          <div className="p-3 bg-red-50 text-red-600 rounded-xl shrink-0 border border-red-100">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-serif font-bold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed font-semibold">{item.description}</p>
                            <span className="text-[10px] text-gray-400 font-bold block mt-1">PDF Form | Size: {item.size}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDownload(item.filename)}
                          className="w-full mt-5 bg-[#FF9900] hover:bg-[#D4AF37] text-white py-2 px-4 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[40px] shadow-sm"
                          aria-label={`Download ${item.title}`}
                        >
                          <Download className="w-4 h-4" /> Download Form
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist & Guidelines (Right) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              <div className="bg-[#F8F6F2] border border-[#D4AF37]/25 p-6 rounded-2xl text-left flex flex-col gap-5">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#5B4636] flex items-center gap-2 border-b border-[#D4AF37]/15 pb-2">
                  <CheckCircle className="w-5 h-5 text-[#FF9900]" /> KYC Checklist
                </h3>
                
                <ul className="space-y-4 text-xs sm:text-sm text-[#5B4636]/80 font-semibold leading-relaxed">
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#FF9900]/15 text-[#FF9900] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                    <span><strong>Proof of Identity:</strong> Self-attested photocopy of Aadhaar Card or Passport.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#FF9900]/15 text-[#FF9900] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                    <span><strong>Proof of Tax:</strong> Photocopy of PAN Card is mandatory for FDs above ₹50,000.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#FF9900]/15 text-[#FF9900] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                    <span><strong>Photos:</strong> 2 passport size photographs matching bank registry specs.</span>
                  </li>
                </ul>
                
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3 text-xs text-amber-800">
                  <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600" />
                  <div>
                    <strong>Important:</strong> Gold Loan credit forms must be signed and certified directly at our Udupi counter.
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};
