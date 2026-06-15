import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Calendar, Building, TrendingUp, CheckCircle2, ChevronLeft, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { SEO } from '../components/SEO';
import { LanguageSwitcherWrapper } from '../components/LanguageSwitcherWrapper';


// Local Asset Imports
import hero1 from '../assets/shivajisociety/images/vip1.png';
// import hero2 from '../assets/shivajisociety/images/inside-office.png';
// import hero3 from '../assets/shivajisociety/images/office-outlook.png';
import officeImage from '../assets/shivajisociety/images/inside-office1.png';
import officeOutlook from '../assets/shivajisociety/images/office-outlook.png';
import vvip1 from '../assets/shivajisociety/images/vvip1.png';
import vip6 from '../assets/shivajisociety/images/vip6.png';
import gallery1 from '../assets/shivajisociety/images/gallery3.png';


// Success Story Banners
import scholarshipImg from '../assets/shivajisociety/images/scholarship.png';
import socialImg from '../assets/shivajisociety/images/vip6.png';
import awardImg from '../assets/shivajisociety/images/award.png';


// Service Images
import personalLoanImg from '../assets/shivajisociety/images/personalloan.avif';
import mortgageLoanImg from '../assets/shivajisociety/images/mortagageloan.avif';
import vehicleLoanImg from '../assets/shivajisociety/images/vehicleloan.jpg';
import goldLoanImg from '../assets/shivajisociety/images/goldloan.jpg';
import groupLoanImg from '../assets/shivajisociety/images/grouploan.avif';
import housingLoanImg from '../assets/shivajisociety/images/houseloan.avif';
import fdImg from '../assets/shivajisociety/images/fd.avif';
import rdImg from '../assets/shivajisociety/images/rd.avif';
import pigmyImg from '../assets/shivajisociety/images/pigme.avif';
import neftImg from '../assets/shivajisociety/images/netfymg.avif';

interface CarouselSlide {
  image: string;
  title: string;
  tagline: string;
  description: string;
}

interface ServiceHighlight {
  name: string;
  description: string;
  image: string;
  link: string;
}

export const Home: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTopSlide, setActiveTopSlide] = useState(0);

  const topCarouselSlides = [
    {
      image: hero1,
      alt: "Empowering Members Through Trust"
    },
    {
      image: vvip1,
      alt: "Annual Meeting 2025"
    },
    {
      image: vip6,
      alt: "Highest Yields on Swabhiman Fixed Deposits"
    }
  ];

  const carouselSlides: CarouselSlide[] = [
    {
      image: gallery1,
      title: "Empowering Rural Families, Building Communities",
      tagline: "Shri Chathrapathi Shivaji Multipurpose Co-operative Society Ltd Udupi.",
      description: "Delivering customized credit limits, secure deposits, and financial stability since 2013."
    },
    {
      image: vip6,
      title: "Lowest Gold Loan Interest Rates in Udupi",
      tagline: "Instant Liquid Cash @ 0.91% P.M.",
      description: "Pledge your ornaments securely with our certified appraisal officers. Minimal documentation required."
    },
    {
      image: vvip1,
      title: "Highest Yields on Swabhiman Fixed Deposits",
      tagline: "Earn up to 9.5% p.a. Return",
      description: "Grow your hard-earned savings securely under audited state regulations. Senior citizens benefit from special yields."
    }
  ];

  const services: ServiceHighlight[] = [
    { name: "Gold Loan", description: "Avail instant cash credit at 0.91% p.m. with secure locker storage.", image: goldLoanImg, link: "/services" },
    { name: "Mortgage Loan", description: "Long term property loans at 1.16% p.m. for expansion or emergency.", image: mortgageLoanImg, link: "/services" },
    { name: "Vehicle Loan", description: "Fund commercial transport or personal utility vehicles at 1.08% p.m.", image: vehicleLoanImg, link: "/services" },
    { name: "Personal Loan", description: "Easy credit schemes up to limit for registered traders at 1.30% p.m.", image: personalLoanImg, link: "/services" },
    { name: "Group Loan", description: "Support women self-help ventures and micro-activities at 1.08% p.m.", image: groupLoanImg, link: "/services" },
    { name: "Housing Loan", description: "Build your dream home with low rates and easy paperwork at 1.16% p.m.", image: housingLoanImg, link: "/services" },
    { name: "FD Schemes", description: "Swabhiman fixed deposits starting from 7% up to 9.5% p.a. yield.", image: fdImg, link: "/services" },
    { name: "RD Schemes", description: "Establish regular savings habit with guaranteed 9.00% p.a. interest.", image: rdImg, link: "/services" },
    { name: "Pigmy Deposit", description: "Daily Pigmy collection scheme at your doorstep yielding 4.00% p.a.", image: pigmyImg, link: "/services" },
    { name: "RTGS / NEFT", description: "Fast, secure local money transfers to any bank across India.", image: neftImg, link: "/services" }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  // Auto-play top carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTopSlide((prev) => (prev + 1) % topCarouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [topCarouselSlides.length]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  // Contact form state
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', subject: 'General', message: '' });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: typeof errors = {};
    let isValid = true;
    if (!formState.name.trim()) { tempErrors.name = "Name is required"; isValid = false; }
    if (!/^[6-9]\d{9}$/.test(formState.phone.trim())) { tempErrors.phone = "Enter a valid 10-digit mobile number"; isValid = false; }
    if (formState.message.trim().length < 5) { tempErrors.message = "Message is too short"; isValid = false; }

    if (isValid) {
      setIsSubmitted(true);
      setFormState({ name: '', phone: '', email: '', subject: 'General', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <>
      <SEO
        title="Empowering Members Through Trust"
        description="Shri Chathrapathi Shivaji Multipurpose Co-operative Society Ltd. Udupi. Offering gold loans at 0.91% p.m., FD up to 9.5%, and daily Pigmy deposits. Trusted since 2013."
        path="/"
      />

      {/* TOP DARK CAROUSEL (Premium Banking-Grade Leadership Showcase) */}
      <section className="relative w-full bg-[#5B4636] overflow-hidden select-none h-[270px] sm:h-[380px] md:h-[520px] lg:h-[580px] border-b border-[#D4AF37]/35 shadow-inner">
        {/* Carousel Indicators (Centered at the very bottom) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {topCarouselSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTopSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeTopSlide === idx ? 'w-5 bg-[#FF9900]' : 'w-1.5 bg-white/40 hover:bg-white'
                }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Previous / Next Navigation Controls */}
        <button
          onClick={() => setActiveTopSlide((prev) => (prev - 1 + topCarouselSlides.length) % topCarouselSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/35 hover:bg-[#FF9900] text-white border border-white/10 transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActiveTopSlide((prev) => (prev + 1) % topCarouselSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/35 hover:bg-[#FF9900] text-white border border-white/10 transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slides Inner Container */}
        <div className="relative w-full h-full">
          {topCarouselSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${activeTopSlide === idx
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-95 z-0 pointer-events-none'
                }`}
            >
              {/* Responsive Photo Display - object-contain on mobile to prevent cropping, object-cover on desktop for full width */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-contain sm:object-cover object-center brightness-100"
                loading="eager"
              />
              {/* Minimalist modern text caption centered at the bottom with a subtle text shadow */}
              <div className="absolute bottom-8 left-0 right-0 text-center z-20 px-4">
                <p className="text-white text-xs sm:text-sm md:text-base font-sans font-bold tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] m-0">
                  {slide.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LanguageSwitcherWrapper backgroundColor="#FFFDF8" />

      {/* SECTION 3: HERO SECTION (Warm White background, 2-column) */}
      <section className="bg-[#FFFDF8] py-12 md:py-20 relative overflow-hidden select-none">
        {/* Subtle curved gold background decorations */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-[#D4AF37]/15 rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] border border-[#D4AF37]/10 rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Typography */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5 text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FFF4E6] text-[#FF9900] uppercase tracking-wider border border-[#D4AF37]/25">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Serving Members since 2014
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#5B4636] leading-tight tracking-tight m-0">
                Empowering Rural Families,<br />
                <span className="text-[#FF9900]">Building Stronger Communities.</span>
              </h1>
              <p className="text-[#5B4636]/80 font-sans font-medium text-base sm:text-lg max-w-xl leading-relaxed">
                Welcome to Chathrapathi Shivaji Multipurpose Co-operative Society Ltd. We build financial strength through cooperative values, secure deposits, and credit programs designed to help our members prosper.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  to="/services"
                  className="bg-[#FF9900] hover:bg-[#D4AF37] text-white font-bold py-3.5 px-7 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg min-h-[44px]"
                >
                  Explore Services <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/downloads"
                  className="bg-white hover:bg-[#FFF4E6] text-[#5B4636] border border-[#D4AF37]/40 font-bold py-3.5 px-7 rounded-xl transition-all duration-300 min-h-[44px] flex items-center shadow-sm"
                >
                  Become a Member
                </Link>
              </div>
            </div>

            {/* Right Column: Visuals with floating statistics */}
            <div className="lg:col-span-5 relative z-10 flex justify-center">
              <div className="relative w-full max-w-[450px]">
                {/* Large rural agriculture visual overlay */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-md relative group bg-[#F8F6F2]">
                  <img
                    src={officeOutlook}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Shri Chathrapathi Shivaji Multipurpose Co-operative Society Office Outlook"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent flex flex-col justify-end p-5 text-white text-left">
                    <span className="font-serif font-bold text-base leading-tight">Chathrapathi Shivaji Multipurpose Co-operative Society</span>
                    <span className="text-[10px] opacity-90 font-bold uppercase tracking-wider mt-1">Udupi HQ Office</span>
                  </div>
                </div>

                {/* Floating statistics card (Glassmorphism white card) */}
                {/*<div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md border border-[#D4AF37]/25 p-5 rounded-2xl shadow-lg flex flex-col gap-1.5 text-left max-w-[200px] select-none">
                  <div className="flex items-center gap-2 text-[#FF9900]">
                    <Users className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Milestone</span>
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase">Active Shareholder Members</span>
                </div>*/}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AUTO SLIDING HERO CAROUSEL */}
      <section className="py-10 bg-white border-y border-[#D4AF37]/15">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F6F2] rounded-3xl border border-[#D4AF37]/25 relative overflow-hidden p-8 sm:p-12 min-h-[350px] flex flex-col justify-between shadow-inner">

            {/* Slide content (fade animation overlay) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
              <div className="md:col-span-8 flex flex-col gap-4">
                <span className="px-3.5 py-1 bg-[#FFF4E6] border border-[#FF9900]/30 text-[#FF9900] text-xs font-bold rounded-full w-fit uppercase tracking-wider">
                  {carouselSlides[activeSlide].tagline}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-extrabold text-[#5B4636] m-0">
                  {carouselSlides[activeSlide].title}
                </h2>
                <p className="text-[#5B4636]/80 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                  {carouselSlides[activeSlide].description}
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center">
                {/* Visual slide block */}
                <div className="w-full max-w-[280px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-md">
                  <img
                    src={carouselSlides[activeSlide].image}
                    alt={carouselSlides[activeSlide].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Slide Navigation and Dots */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#D4AF37]/15">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {carouselSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-8 bg-[#FF9900]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrevSlide}
                  className="p-2 border border-[#D4AF37]/35 rounded-xl hover:bg-white text-[#5B4636] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center bg-[#FFFDF8]"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="p-2 border border-[#D4AF37]/35 rounded-xl hover:bg-white text-[#5B4636] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center bg-[#FFFDF8]"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ACTION BUTTONS (Center Aligned, Premium) */}
      <section className="py-8 bg-white select-none">
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/services"
            className="bg-[#FF9900] hover:bg-[#D4AF37] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[44px] min-w-[160px] text-center"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="bg-[#FFFDF8] hover:bg-[#FFF4E6] text-[#5B4636] border-2 border-[#D4AF37] font-bold py-3.5 px-8 rounded-full transition-all duration-300 min-h-[44px] min-w-[160px] text-center shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* SECTION 4: QUICK SERVICES (6 circular service icons) */}
      <section className="py-12 bg-[#FFFDF8] border-b border-[#D4AF37]/15">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

            {[
              { name: "Savings", desc: "Stable return deposits" },
              { name: "Loans", desc: "Gold & mortgage credit" },
              { name: "Insurance", desc: "Social security cover" },
              { name: "Education", desc: "Scholarships schemes" },
              { name: "Welfare", desc: "Member aid schemes" },
              { name: "Membership", desc: "Become stakeholder" }
            ].map((serv, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-[#D4AF37]/20 shadow-sm flex flex-col items-center text-center gap-2 group hover:border-[#FF9900] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-[#FFF4E6] group-hover:bg-[#FF9900] transition-colors flex items-center justify-center text-[#FF9900] group-hover:text-white border border-[#D4AF37]/10">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#5B4636] group-hover:text-[#FF9900] transition-colors mt-2">{serv.name}</h4>
                <p className="text-[11px] text-[#5B4636]/70 leading-relaxed font-semibold">{serv.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SECTION 5: ABOUT SOCIETY (Split Layout, Warm background) */}
      <section className="py-16 bg-[#F8F6F2] relative overflow-hidden" id="about-preview">
        {/* Subtle wheat pattern watermark/decorations */}
        <div className="absolute -top-10 -left-10 opacity-5 pointer-events-none select-none">
          <Building className="w-96 h-96 text-[#D4AF37]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">

            {/* Left: Office Image & Circular badge */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[500px]">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-md relative group">
                  <img
                    src={officeImage}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Co-operative Office Building Udupi"
                  />
                  <div className="absolute inset-0 bg-[#5B4636]/10 flex flex-col justify-end p-5 text-white text-left bg-gradient-to-t from-black/50 via-transparent to-transparent">
                    <span className="font-serif font-bold text-base leading-tight text-shadow-subtle">Karthik Towers Office</span>
                    <span className="text-[10px] opacity-90 font-bold uppercase tracking-wider mt-1">Udupi HQ</span>
                  </div>
                </div>
                {/* Gold circular badge "Since 2013" */}
                <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-[#D4AF37] border-4 border-white text-white flex flex-col items-center justify-center shadow-md select-none font-bold">
                  <span className="text-[10px] uppercase tracking-wider">Founded</span>
                  <span className="text-base font-serif font-extrabold mt-0.5">2014</span>
                </div>
              </div>
            </div>

            {/* Right: Content details */}
            <div className="flex flex-col gap-5">
              <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">About Our Society</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] leading-tight m-0">
                Chathrapathi Shivaji Multipurpose Co-operative Society Ltd.
              </h2>
              <div className="w-16 h-1 bg-[#FF9900] rounded-full"></div>

              <p className="text-sm sm:text-base text-[#5B4636]/80 leading-relaxed font-semibold">
                Chathrapathi Shivaji Multipurpose Co-operative Society Ltd. is committed to providing reliable financial services and member welfare initiatives. The society works towards financial inclusion, community development, savings growth, and affordable credit facilities for its members.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-[#D4AF37]/15 py-4 my-2">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#FF9900] uppercase tracking-wider">Mission</span>
                  <p className="text-[11px] text-[#5B4636]/80 leading-normal font-semibold">Provide secure and accessible financial services to improve well-being.</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#FF9900] uppercase tracking-wider">Vision</span>
                  <p className="text-[11px] text-[#5B4636]/80 leading-normal font-semibold">To become one of the most trusted co-operatives in Karnataka.</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-[#FF9900] uppercase tracking-wider">Values</span>
                  <p className="text-[11px] text-[#5B4636]/80 leading-normal font-semibold">Trust, Transparency, Service, Member Welfare & Growth.</p>
                </div>
              </div>

              <div>
                <Link
                  to="/about"
                  className="bg-[#FF9900] hover:bg-[#D4AF37] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-sm min-h-[44px]"
                >
                  Meet Board Members <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: IMPACT COUNTERS (Full Width Orange Strip) */}
      <section className="bg-[#FF9900] text-white py-12 select-none border-y border-[#D4AF37]/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-1.5">
              <Users className="w-8 h-8 text-[#F6E7B0]" />
              <span className="text-2xl sm:text-3xl font-serif font-extrabold mt-1">3,218+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-100">Registered Members</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <TrendingUp className="w-8 h-8 text-[#F6E7B0]" />
              <span className="text-2xl sm:text-3xl font-serif font-extrabold mt-1">₹40+ Crore</span>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-100">Annual Business Volume</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Calendar className="w-8 h-8 text-[#F6E7B0]" />
              <span className="text-2xl sm:text-3xl font-serif font-extrabold mt-1">12+ Years</span>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-100">Years of Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES HIGHLIGHT SECTION */}
      <section className="py-16 bg-white border-b border-[#D4AF37]/15">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12 select-none">
            <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Our Offerings</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] mt-1.5">Our Financial Services</h2>
            <div className="w-12 h-1 bg-[#FF9900] rounded-full mx-auto mt-3"></div>
          </div>

          {/* Cards Grid (Mobile 1 col, Tablet 2 col, Desktop 3 col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((serv, index) => (
              <div
                key={index}
                className="bg-white border border-[#D4AF37]/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left group hover:border-[#FF9900]"
              >
                {/* Card Top Image Block with background image */}
                <div
                  className="h-40 p-6 flex flex-col justify-between relative border-b border-[#D4AF37]/15 bg-cover bg-center overflow-hidden"
                  style={{
  backgroundImage: `linear-gradient(
    rgba(12, 2, 2, 0.05),
    rgba(255, 255, 255, 0.05)
  ), url(${serv.image})`}}>
                  <span className="px-3 py-1 bg-white border border-[#D4AF37]/35 text-[#5B4636] text-[10px] font-extrabold rounded-md uppercase tracking-wider w-fit z-10 shadow-sm">
                    Active Scheme
                  </span>
                  <div className="flex items-center gap-3 z-10">
                    <div className="p-2.5 bg-[#FF9900] text-white rounded-lg shadow-sm shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#5B4636] m-0">{serv.name}</h3>
                  </div>
                </div>

                {/* Card Content & Description */}
                <div className="p-5 flex flex-col justify-between flex-grow gap-4">
                  <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold">
                    {serv.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Cooperative standard</span>
                    <Link
                      to={serv.link}
                      className="text-xs font-bold text-[#FF9900] group-hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center select-none">
            <Link
              to="/services"
              className="bg-white hover:bg-[#FFF4E6] text-[#5B4636] border-2 border-[#D4AF37] font-bold py-3 px-8 rounded-xl transition-all duration-300 inline-flex items-center gap-2 shadow-sm min-h-[44px]"
            >
              View All Financial Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 9 – SUCCESS STORIES (magazine layout) */}
      <section className="py-16 bg-[#F8F6F2] border-b border-[#D4AF37]/15">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12 select-none">
            <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Impact</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] mt-1.5">Success Stories</h2>
            <p className="text-[#5B4636]/70 mt-2 text-xs sm:text-sm font-semibold">Real testimonies of members who achieved growth via our credit assistance programs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Story 1 */}
            <div className="bg-white border border-[#D4AF37]/25 p-6 rounded-2xl shadow-sm text-left flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                <div className="h-40 rounded-xl overflow-hidden mb-2 border border-[#D4AF37]/15">
                  <img src={awardImg} className="w-full h-full object-cover" alt="Modernizing Agriculture" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF9900] bg-[#FFF4E6] px-2.5 py-1 rounded w-fit">Agricultural credit</span>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#5B4636]">Modernizing Agriculture</h3>
                <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold">
                  "Availing the low-interest agricultural equipment credit scheme allowed me to purchase a tractor for crop harvesting. Our crop yield increased by 40% in a single harvest cycle."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3 select-none">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center font-bold text-sm text-[#5B4636]">MS</div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Sri. Mahabala Shettigar</h4>
                  <span className="text-[10px] text-gray-400 font-semibold block">Member Farmer, Udupi</span>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white border border-[#D4AF37]/25 p-6 rounded-2xl shadow-sm text-left flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                <div className="h-40 rounded-xl overflow-hidden mb-2 border border-[#D4AF37]/15">
                  <img src={socialImg} className="w-full h-full object-cover" alt="Cottage Industry Growth" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF9900] bg-[#FFF4E6] px-2.5 py-1 rounded w-fit">Self Help Sangha</span>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#5B4636]">Cottage Industry Growth</h3>
                <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold">
                  "Our self-help sangha obtained group credit limits to set up a home pickle business. Today, 10 women work independently and support their households sustainably."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3 select-none">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center font-bold text-sm text-[#5B4636]">SS</div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Saraswathi Swasahaya Sangha</h4>
                  <span className="text-[10px] text-gray-400 font-semibold block">Micro-Enterprise Group</span>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white border border-[#D4AF37]/25 p-6 rounded-2xl shadow-sm text-left flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-4">
                <div className="h-40 rounded-xl overflow-hidden mb-2 border border-[#D4AF37]/15">
                  <img src={scholarshipImg} className="w-full h-full object-cover" alt="Securing Higher Education" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF9900] bg-[#FFF4E6] px-2.5 py-1 rounded w-fit">Education Loan</span>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#5B4636]">Securing Higher Education</h3>
                <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold">
                  "Securing the quick educational credit scheme for my daughter allowed her to take admission in engineering without high capital constraints. We are highly grateful."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3 select-none">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center font-bold text-sm text-[#5B4636]">AD</div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Smt. Ananya Devadiga</h4>
                  <span className="text-[10px] text-gray-400 font-semibold block">Shareholder Parent</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MAP SECTION (Google Maps Embed responsive, Karthik Towers) */}
      <section className="py-16 bg-white border-b border-[#D4AF37]/15">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 select-none">
            <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Location</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] mt-1.5">Visit Our Office</h2>
            <p className="text-[#5B4636]/70 mt-2 text-xs sm:text-sm font-semibold">1st Floor, Karthik Towers, Near District Court, Udupi - 576101</p>
          </div>

          <div className="w-full h-[350px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.2426016773707!2d74.74667297508276!3d13.335179487014583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb595b6acb69%3A0xcb5f5fe1a301e20b!2sCHATRAPATI%20SHIVAJI%20MULTIPURPOSE%20CO%20OPERATIVE%20SOCIETY%20N%20UDUPI%20CHATRAPATHI%20SHIVAJI%20MULTIPURPOSE%20CO%20OP!5e0!3m2!1sen!2sin!4v1781383457645!5m2!1sen!2sin"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen={true}
              loading="lazy"
              title="Chathrapathi Shivaji Multipurpose Co-operative Society Location in Udupi"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION (validated contact form + details) */}
      <section className="py-16 bg-[#FFFDF8]" id="contact-section">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            {/* Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5B4636] leading-tight m-0">
                Contact Us
              </h2>
              <div className="w-12 h-1 bg-[#FF9900] rounded-full"></div>

              <p className="text-xs sm:text-sm text-[#5B4636]/80 leading-relaxed font-semibold">
                Submit queries directly to our ledger officer. Physical applications must be signed and verified at the branch counter.
              </p>

              <div className="space-y-4 font-semibold text-[#5B4636] mt-4">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-[#FF9900]" />
                  <span>1st Floor, Karthik Towers, Near District Court, Udupi - 576101</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-[#FF9900]" />
                  <span>0820-4295090 / 8861495090</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-5 h-5 text-[#FF9900]" />
                  <span>chathrapathishivaji@yahoo.in</span>
                </div>
              </div>
            </div>

            {/* Validation Form */}
            <div className="lg:col-span-7 bg-[#F8F6F2] border border-[#D4AF37]/25 p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif font-bold text-[#5B4636] text-lg sm:text-xl mb-6">Inquiry Form</h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl text-xs font-semibold">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4 font-semibold text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-[#5B4636]/70 uppercase text-[10px] tracking-wider">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleFormChange}
                      className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900]/40 font-medium"
                    />
                    {errors.name && <span className="text-red-500 text-[10px] mt-0.5">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-[#5B4636]/70 uppercase text-[10px] tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleFormChange}
                      className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900]/40 font-medium"
                    />
                    {errors.phone && <span className="text-red-500 text-[10px] mt-0.5">{errors.phone}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-[#5B4636]/70 uppercase text-[10px] tracking-wider">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleFormChange}
                    className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900]/40 font-medium"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-[#5B4636]/70 uppercase text-[10px] tracking-wider">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleFormChange}
                    className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900]/40 font-medium"
                  />
                  {errors.message && <span className="text-red-500 text-[10px] mt-0.5">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF9900] hover:bg-[#D4AF37] text-white py-3 rounded-xl transition-all duration-300 font-bold min-h-[44px] flex items-center justify-center shadow-sm"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
