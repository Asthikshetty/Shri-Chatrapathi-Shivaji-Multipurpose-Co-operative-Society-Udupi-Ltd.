import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CreditCard, Landmark, Coins, Briefcase, CheckCircle, Percent, Users, Building, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';


// Local Asset Imports
import serviceBanner from '../assets/shivajisociety/images/inside-office1.png';
import goldLoanImg from '../assets/shivajisociety/images/goldloan.jpg';
import vehicleLoanImg from '../assets/shivajisociety/images/vehicleloan.jpg';
import personalLoanImg from '../assets/shivajisociety/images/personalloan.avif';
import mortgageLoanImg from '../assets/shivajisociety/images/mortagageloan.avif';
import groupLoanImg from '../assets/shivajisociety/images/grouploan.avif';
import housingLoanImg from '../assets/shivajisociety/images/houseloan.avif';
import fdImg from '../assets/shivajisociety/images/fd.avif';
import rdImg from '../assets/shivajisociety/images/rd.avif';
import pigmyImg from '../assets/shivajisociety/images/pigme.avif';
import neftImg from '../assets/shivajisociety/images/netfymg.avif';

interface ServiceDetail {
  id: string;
  name: string;
  category: 'Loans' | 'Deposits' | 'Welfare';
  rate: string;
  features: string[];
  eligibility: string;
  benefits: string[];
  documents: string[];
  explanation: string;
  terms: string;
  process: string;
  image: string;
  icon: React.ReactNode;
}

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const serviceList: ServiceDetail[] = [
    {
      id: "gold-loan",
      name: "Gold Loan",
      category: 'Loans',
      rate: "0.91% P.M.",
      features: ["Instant valuation", "Secure fireproof vaults storage", "No hidden transaction costs"],
      eligibility: "Active shareholders owning 22k gold ornaments",
      benefits: ["Immediate liquid credit", "Lowest interest rates in Udupi", "Flexible repayment terms"],
      documents: ["Aadhaar Card copy", "PAN Card copy", "Shareholder Registry Proof"],
      explanation: "Shri Chathrapathi Shivaji Gold Loan offers immediate funds against your gold ornaments. Our transparent valuation ensures you get maximum credit against pledged gold with safe custody assurance.",
      terms: "Loans up to ₹5,00,000. Maximum tenure of 12 months.",
      process: "Bring your gold to our branch counter. Verification, weighing, and cash disbursement are completed in 15 minutes.",
      image: goldLoanImg,
      icon: <Coins className="w-6 h-6" />
    },
    {
      id: "vehicle-loan",
      name: "Vehicle Loan",
      category: 'Loans',
      rate: "1.08% P.M.",
      features: ["Funding up to 80% of vehicle value", "Fast invoice checks", "Flexible EMIs"],
      eligibility: "Salaried members or established regional traders with regular income",
      benefits: ["Purchase personal or commercial utilities", "Low upfront charges", "Quick approval limits"],
      documents: ["Vehicle Quotation invoice", "Income Statements (3 months)", "KYC documents"],
      explanation: "Purchase commercial utilities or personal transport vehicles with our easy repayment credits. We finance new vehicles with flexible loan tenures.",
      terms: "Co-obligation signature of a verified member is required.",
      process: "Submit quotation and income proof. Appraisal and sanction completed in 3 business days.",
      image: vehicleLoanImg,
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      id: "personal-loan",
      name: "Personal Loan",
      category: 'Loans',
      rate: "1.3% P.M.",
      features: ["Hassle-free credits", "No property collateral required", "Flexible repayments"],
      eligibility: "Registered members with valid income and introducer reference",
      benefits: ["Emergency funds support", "Transparent ledgers", "Quick disbursal"],
      documents: ["Income Statement/Salary slip", "Co-signatory registry", "Aadhaar & PAN details"],
      explanation: "Designed to meet emergency expenses, personal requirements, or working capital gaps for local traders without pledging fixed assets.",
      terms: "Requires two active member references as co-obligants.",
      process: "Apply with income details and co-obligants references. Verification takes 48 hours.",
      image: personalLoanImg,
      icon: <Users className="w-6 h-6" />
    },
    {
      id: "mortgage-loan",
      name: "Mortgage Loan",
      category: 'Loans',
      rate: "1.16% P.M.",
      features: ["High limit assistance", "Audited valuation", "Long term repayments"],
      eligibility: "Members holding clear title deeds in Udupi district",
      benefits: ["Fund business growth or constructions", "Lower rates than personal loans", "Generous whitespace repayment"],
      documents: ["Original Title Deeds", "Form 15 & 16 Encumbrance Certificates", "Revenue Tax receipts"],
      explanation: "Leverage your commercial or residential building value to obtain long-term credit. Transparent legal audits guarantee seamless processing.",
      terms: "Subject to legal search reports and engineering site valuation.",
      process: "Submit property papers. Site valuation by society engineer is conducted, followed by board sanction.",
      image: mortgageLoanImg,
      icon: <Landmark className="w-6 h-6" />
    },
    {
      id: "group-loan",
      name: "Group Loan",
      category: 'Loans',
      rate: "1.08% P.M.",
      features: ["Joint liability schemes", "No individual collateral", "Micro-credit aids"],
      eligibility: "Registered self-help groups (SHG) with active local savings logs",
      benefits: ["Empowers rural cottage ventures", "Weekly/Monthly small collections", "Socio-economic growth"],
      documents: ["SHG Resolution Book", "Member savings statements", "Group leader KYC"],
      explanation: "Joint liability group loans to support rural entrepreneurship, tailoring, pickling, or agricultural allied setups by cooperative groups.",
      terms: "Group liability ensures joint responsibility for payouts.",
      process: "Direct verification of group activities by our desk officer, followed by immediate sanction to group accounts.",
      image: groupLoanImg,
      icon: <Users className="w-6 h-6" />
    },
    {
      id: "housing-loan",
      name: "Housing Loan",
      category: 'Loans',
      rate: "1.16% P.M.",
      features: ["Construct or renovate", "Flexible long tenures", "Direct progress payouts"],
      eligibility: "Land owners with approved construction drafts",
      benefits: ["Build dream homes in Udupi", "Competitive rates", "Low processing fees"],
      documents: ["Approved building blueprint", "Estimated construction budget", "Land records (RTC)"],
      explanation: "Get financial aid to build new houses or extend existing home floors. Payouts are made in installments based on construction progress.",
      terms: "Subject to construction updates checked by society managers.",
      process: "Submit approved blueprint and RTC papers. Branch sanction is processed following documentation reviews.",
      image: housingLoanImg,
      icon: <Building className="w-6 h-6" />
    },
    {
      id: "fd-schemes",
      name: "Swabhiman Fixed Deposit (FD)",
      category: 'Deposits',
      rate: "7% to 9.5% P.A.",
      features: ["Compounded quarterly", "Senior citizens earn premium yields", "Minimum ₹1,000 deposit"],
      eligibility: "Individual members, institutions or minors",
      benefits: ["Guaranteed return stability", "FD Loan facility up to 90%", "Flexible payouts (monthly/quarterly)"],
      documents: ["KYC (Aadhaar & PAN)", "Recent photographs (2)", "Introduction reference"],
      explanation: "Our primary fixed deposit schemes designed to offer market-leading interest yields. Backed by audited society reserves and capital stability.",
      terms: "Premature withdrawals are permitted subject to society interest regulations.",
      process: "Fill the FD application. Handover cash/cheque with KYC docs. Receive physical FD receipt instantly.",
      image: fdImg,
      icon: <Landmark className="w-6 h-6" />
    },
    {
      id: "rd-schemes",
      name: "Recurring Deposit (RD)",
      category: 'Deposits',
      rate: "9.00% P.A.",
      features: ["Monthly savings habit", "Fixed tenure selection", "Guaranteed returns"],
      eligibility: "Registered shareholder members",
      benefits: ["Accumulate lump sum", "Disciplined small deposits", "Attractive interest rate"],
      documents: ["KYC details", "RD ledger setup reference"],
      explanation: "Deposit a fixed amount every month starting from ₹500 to build a capital cushion for family requirements or marriages.",
      terms: "Tenure options from 12 months to 60 months.",
      process: "RD account setup at desk counter. Deposits can be made via branch cash counter or pigmy collectors.",
      image: rdImg,
      icon: <Landmark className="w-6 h-6" />
    },
    {
      id: "pigmy-deposit",
      name: "Daily Deposit (Pigmy)",
      category: 'Deposits',
      rate: "4.00% P.A.",
      features: ["Doorstep collection service", "Small daily savings", "Withdrawal flexibilities"],
      eligibility: "Daily wage earners, shopkeepers, and household members",
      benefits: ["Save daily micro-amounts", "Zero branch visit requirement", "Emergency loan access"],
      documents: ["KYC (Aadhaar/PAN)", "Account opening check"],
      explanation: "Our verified Pigmy collector visits your shop or house daily to deposit micro-savings into your account, encouraging regular savings.",
      terms: "Collectors use digital devices to record transactions instantly.",
      process: "Fill Pigmy form. Collector is assigned to your area to start daily ledger collections.",
      image: pigmyImg,
      icon: <Coins className="w-6 h-6" />
    },
    {
      id: "neft-rtgs",
      name: "RTGS / NEFT Services",
      category: 'Welfare',
      rate: "Standard Bank charges",
      features: ["Interbank money transfer", "Fast processing", "Audited receipt logs"],
      eligibility: "Active saving account holders",
      benefits: ["Send funds anywhere in India", "Safe transaction trail", "Immediate confirmations"],
      documents: ["Beneficiary bank details", "Transfer instruction voucher"],
      explanation: "Transfer money to other banks across India via NEFT / RTGS services. Direct integration ensures fast confirmations.",
      terms: "Subject to RBI clearing hours and transaction limits.",
      process: "Fill transfer voucher at counter. Funds are sent to recipient bank instantly.",
      image: neftImg,
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <>
      <SEO 
        title="Financial Services & Interest Rates" 
        description="Comprehensive loan packages, fixed deposit interest rates, recurring deposits, and pigmy collections at Shri Chathrapathi Shivaji Co-operative Society Ltd. Udupi."
        path="/services"
      />

      {/* SERVICES HERO Banner */}
      <section 
        className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center bg-cover bg-center border-b border-[#D4AF37]/30"
        style={{ backgroundImage: `linear-gradient(rgba(91, 70, 54, 0.75), rgba(91, 70, 54, 0.75)), url(${serviceBanner})` }}
      >
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-[#FFFDF8] tracking-tight m-0">
            Our Financial Services
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#F6E7B0] font-sans font-bold tracking-widest uppercase">
            Providing Secure Savings & Affordable Credit Structures
          </p>
        </div>
      </section>

      {/* SWABHIMAN FD RATES TABLE & JEEJA MATHA SCHEME */}
      <section className="py-16 bg-[#FFFDF8] text-left" id="schemes">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Rates Table (Left) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#5B4636] flex items-center gap-2 border-b border-[#D4AF37]/25 pb-3">
                <Percent className="w-6 h-6 text-[#FF9900]" /> Swabhiman FD Interest Rates
              </h2>
              
              <div className="overflow-x-auto border border-[#D4AF37]/20 rounded-2xl shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FF9900] text-white text-xs sm:text-sm uppercase font-semibold">
                      <th className="p-4 border-b border-[#D4AF37]/25">Deposit Tenure</th>
                      <th className="p-4 border-b border-[#D4AF37]/25">Interest Rate (P.A.)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D4AF37]/10 text-xs sm:text-sm font-semibold text-[#5B4636]">
                    <tr className="bg-white">
                      <td className="p-4">180 Days to Below 364 Days</td>
                      <td className="p-4 text-[#FF9900] font-extrabold text-base">7.00% p.a.</td>
                    </tr>
                    <tr className="bg-[#F8F6F2]">
                      <td className="p-4">1 Year</td>
                      <td className="p-4 text-[#FF9900] font-extrabold text-base">9.00% p.a.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4">2 Years</td>
                      <td className="p-4 text-[#FF9900] font-extrabold text-base">9.50% p.a.</td>
                    </tr>
                    <tr className="bg-[#F8F6F2]">
                      <td className="p-4">3 Years and Above</td>
                      <td className="p-4 text-[#FF9900] font-extrabold text-base">7.00% p.a.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-xs text-[#5B4636]/60 leading-relaxed">
                * Note: Rates are governed under the state co-operative audit frameworks. Compounded quarterly on maturity schemes. Premature closures are subject to board norms.
              </p>
            </div>

            {/* Jeeja Matha & Benefit Schemes (Right) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#5B4636] border-b border-[#D4AF37]/25 pb-3">
                Special Deposit Schemes
              </h2>

              {/* Cash Certificate */}
              <div className="p-6 bg-[#F8F6F2] border border-[#D4AF37]/25 rounded-2xl shadow-sm flex flex-col gap-3">
                <span className="px-2.5 py-0.5 bg-[#FFF4E6] text-[#FF9900] text-[10px] font-bold rounded w-fit uppercase">Special Scheme</span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#5B4636]">Jeeja Matha Cash Certificate</h3>
                <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold">
                  A premium double scheme certificate where your primary deposit doubles in value over a fixed tenure of <strong>120 months</strong>. Safe, stable, and highly transparent.
                </p>
              </div>

              {/* RD Scheme */}
              <div className="p-6 bg-white border border-[#D4AF37]/20 rounded-2xl shadow-sm flex flex-col gap-3">
                <span className="px-2.5 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded w-fit uppercase">Regular Savings</span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#5B4636]">Recurring Deposit (RD)</h3>
                <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold">
                  Secure guaranteed interest rates of <strong>9.00% p.a.</strong> by depositing small amounts regularly every month.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE DETAILS SECTION (Large Service Cards) */}
      <section className="py-16 bg-[#F8F6F2] border-y border-[#D4AF37]/20 text-left">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Catalog</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] mt-1.5">Financial Schemes Directory</h2>
            <div className="w-12 h-1 bg-[#FF9900] rounded-full mx-auto mt-3"></div>
          </div>

          <div className="space-y-12">
            {serviceList.map((service) => (
              <div 
                key={service.id} 
                id={service.id}
                className="bg-white border border-[#D4AF37]/25 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row gap-8 items-stretch"
              >
                {/* Visual Graphic Block */}
                <div className="w-full lg:w-1/3 bg-[#FFFDF8] border border-[#D4AF37]/15 rounded-2xl flex flex-col justify-between p-5 shrink-0 relative shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 bg-[#FFF4E6] text-[#FF9900] text-[10px] font-bold rounded uppercase tracking-wider">
                      {service.category}
                    </span>
                    <div className="p-2 bg-[#FF9900] text-white rounded-lg shadow-sm shrink-0">
                      {service.icon}
                    </div>
                  </div>

                  {/* Styled Service Image */}
                  <div className="my-4 aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#D4AF37]/15 shadow-sm bg-[#F8F6F2] flex items-center justify-center">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif font-extrabold text-lg sm:text-xl text-[#5B4636] leading-tight m-0">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase">Rate:</span>
                      <span className="text-base font-bold text-[#FF9900]">{service.rate}</span>
                    </div>
                  </div>
                </div>

                {/* Content details */}
                <div className="w-full lg:w-2/3 flex flex-col justify-between gap-6 font-semibold">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    {/* Features */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Key Features</h4>
                      <ul className="space-y-1.5 text-xs text-[#5B4636]/80 font-semibold pl-4 list-disc">
                        {service.features.map((feat, i) => <li key={i}>{feat}</li>)}
                      </ul>
                    </div>
                    {/* Eligibility */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Eligibility</h4>
                      <p className="text-xs text-[#5B4636]/80 leading-relaxed font-semibold pl-4 border-l-2 border-[#D4AF37]">
                        {service.eligibility}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm border-t border-gray-100 pt-4">
                    {/* Benefits */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Benefits</h4>
                      <ul className="space-y-1.5 text-xs text-[#5B4636]/80 font-semibold pl-4 list-disc">
                        {service.benefits.map((ben, i) => <li key={i}>{ben}</li>)}
                      </ul>
                    </div>
                    {/* Required Documents */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Required Documents</h4>
                      <ul className="space-y-1.5 text-xs text-[#5B4636]/80 font-semibold pl-4 list-disc">
                        {service.documents.map((doc, i) => <li key={i}>{doc}</li>)}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-gray-150 flex items-center justify-between flex-wrap gap-4">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="bg-white hover:bg-[#FFF4E6] text-[#5B4636] border-2 border-[#D4AF37] text-xs font-bold py-2 px-5 rounded-lg transition-colors min-h-[40px] flex items-center"
                    >
                      Know More
                    </button>
                    
                    <a
                      href="https://wa.me/8861495090?text=Hi,%20I%20need%20more%20information%20about%20your%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF9900] hover:bg-[#D4AF37] text-white text-xs font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm min-h-[40px] flex items-center gap-1.5"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MEMBER BENEFIT SCHEMES */}
      <section className="py-16 bg-[#FFFDF8] text-left">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 select-none">
            <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Welfare</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] mt-1.5">Member Benefit Schemes</h2>
            <p className="text-[#5B4636]/70 mt-2 text-xs sm:text-sm font-semibold">Special cooperative safety nets and benefit programs for registered stakeholders.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Savings Benefits", desc: "Access high-yield savings interest and zero maintenance charge ledgers." },
              { title: "Easy Loan Access", desc: "Pre-approved micro credit lines, gold loans, and crop credits with minimal checking." },
              { title: "Financial Security", desc: "Secure safety lockers access and legal audits guarantee capital safety." },
              { title: "Member Support Programs", desc: "Subsidized education aids and medical loans during family emergencies." },
              { title: "Cooperative Welfare Benefits", desc: "Share dividend payouts approved during annual general body meetings." }
            ].map((scheme, idx) => (
              <div key={idx} className="p-6 bg-[#F8F6F2] border border-[#D4AF37]/25 rounded-2xl shadow-sm flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#FF9900] shrink-0 mt-0.5" />
                <div className="font-semibold">
                  <h4 className="font-serif font-bold text-gray-900 text-sm sm:text-base">{scheme.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{scheme.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICE DETAIL POPUP MODAL */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />
            {/* Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 bottom-4 top-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 bg-[#FFFDF8] w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#D4AF37]/35 text-left overflow-y-auto max-h-[90vh]"
            >
              <div>
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/15">
                  <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">{selectedService.category} Scheme Detail</span>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 border border-gray-200 min-h-[40px] min-w-[40px] flex items-center justify-center"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="mt-6 flex flex-col gap-5 font-semibold text-xs sm:text-sm">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h3 className="font-serif font-bold text-lg sm:text-2xl text-[#5B4636] m-0">{selectedService.name}</h3>
                    <div className="bg-[#FFF4E6] text-[#FF9900] px-3.5 py-1.5 rounded-lg border border-[#FF9900]/25 font-bold uppercase tracking-wide">
                      Rate: {selectedService.rate}
                    </div>
                  </div>
                  
                  <p className="text-[#5B4636]/80 leading-relaxed">
                    {selectedService.explanation}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-[#D4AF37]/15 py-4 my-2 text-xs">
                    <div>
                      <span className="text-[10px] font-bold text-[#FF9900] uppercase tracking-wider">Application Terms</span>
                      <p className="text-[#5B4636]/80 leading-relaxed mt-1">{selectedService.terms}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#FF9900] uppercase tracking-wider">Process Pipeline</span>
                      <p className="text-[#5B4636]/80 leading-relaxed mt-1">{selectedService.process}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-end gap-3 select-none">
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-bold py-2.5 px-5 rounded-lg text-xs min-h-[40px]"
                >
                  Close Window
                </button>
                <a
                  href="https://wa.me/8861495090?text=Hi,%20I%20need%20more%20information%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF9900] hover:bg-[#D4AF37] text-white font-bold py-2.5 px-6 rounded-lg text-xs min-h-[40px] flex items-center gap-1.5"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
