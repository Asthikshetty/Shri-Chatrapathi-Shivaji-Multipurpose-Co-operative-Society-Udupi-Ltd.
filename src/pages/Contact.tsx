import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, BellRing } from 'lucide-react';
import { SEO } from '../components/SEO';
import { LanguageSwitcherWrapper } from '../components/LanguageSwitcherWrapper';



interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formState.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    } else if (formState.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formState.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(formState.phone.trim())) {
      tempErrors.phone = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formState.email.trim() && !emailRegex.test(formState.email.trim())) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formState.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    } else if (formState.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          phone: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Shri Chathrapathi Shivaji Co-operative Society Ltd. Udupi. Find address, phone numbers, map coordinates, and validated inquiry forms."
        path="/contact"
      />

      {/* HERO SECTION */}
      <section className="bg-gray-50 border-b border-[#D4AF37]/15 py-12 md:py-16 text-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs text-[#FF9900] font-bold uppercase tracking-wider">Branch Details</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#5B4636] mt-2 m-0">
            Contact Us
          </h1>
          <p className="mt-3 text-base text-[#5B4636]/70 max-w-2xl mx-auto font-medium">
            Contact our Udupi branch for information regarding term deposits, pigmy collectors, or credit sanction requirements.
          </p>
        </div>
      </section>

      <LanguageSwitcherWrapper backgroundColor="#FFFFFF" />

      {/* MAIN CONTENT AREA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Info (Left) */}
            <div className="lg:col-span-5 text-left flex flex-col gap-8">
              
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#5B4636] mb-3">Branch Office Coordinates</h2>
                <div className="w-12 h-1 bg-[#FF9900] rounded-full"></div>
              </div>

              {/* Detail Items */}
              <div className="space-y-6 font-semibold text-[#5B4636]/80 text-sm">
                
                {/* Address */}
                <div className="flex gap-4">
                  <div className="p-3 bg-[#F8F6F2] border border-[#D4AF37]/20 text-[#FF9900] rounded-xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-base">Office Address</h4>
                    <p className="text-xs sm:text-sm text-[#5B4636]/80 mt-1 leading-relaxed">
                      Shri Chathrapathi Shivaji Co-operative Society Ltd.<br />
                      1st Floor, Karthik Towers, Near District Court,<br />
                      Udupi, Karnataka, India - 576101
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="p-3 bg-[#F8F6F2] border border-[#D4AF37]/20 text-[#FF9900] rounded-xl shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-base">Phone Numbers</h4>
                    <p className="text-xs sm:text-sm text-[#5B4636]/80 mt-1 flex flex-col gap-1">
                      <a href="tel:08204295090" className="hover:text-[#FF9900] transition-colors font-bold">
                        0820-4295090
                      </a>
                      <a href="tel:8861495090" className="hover:text-[#FF9900] transition-colors font-bold">
                        +91 8861495090
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="p-3 bg-[#F8F6F2] border border-[#D4AF37]/20 text-[#FF9900] rounded-xl shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-base">Email Address</h4>
                    <p className="text-xs sm:text-sm text-[#5B4636]/80 mt-1">
                      <a href="mailto:chathrapathishivaji@yahoo.in" className="hover:text-[#FF9900] transition-colors font-bold break-all">
                        chathrapathishivaji@yahoo.in
                      </a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4">
                  <div className="p-3 bg-[#F8F6F2] border border-[#D4AF37]/20 text-[#FF9900] rounded-xl shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-gray-900 text-base">Working Hours</h4>
                    <p className="text-xs sm:text-sm text-[#5B4636]/80 mt-1">
                      Monday - Saturday: 09:30 AM - 05:30 PM
                    </p>
                    <span className="text-xs text-red-500 font-bold block mt-0.5">Sunday: Holiday</span>
                  </div>
                </div>

              </div>

              {/* WHATSAPP NOTIFICATION SYSTEM (Coming Soon premium) */}
              <div className="bg-[#FFF4E6] border border-[#D4AF37]/25 p-6 rounded-2xl flex flex-col gap-4 text-left shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FF9900] text-white rounded-lg shadow-sm">
                    <BellRing className="w-5 h-5 animate-swing" />
                  </div>
                  <h4 className="font-serif font-bold text-[#5B4636] text-base">WhatsApp Alerts Portal</h4>
                </div>
                <p className="text-xs text-[#5B4636]/80 leading-relaxed font-semibold">
                  We are developing an automated alerts channel. Members will receive notifications regarding:
                </p>
                <ul className="text-xs text-[#5B4636]/80 font-bold space-y-1 pl-4 list-disc">
                  <li>Direct loan due reminders</li>
                  <li>Deposit maturity date warnings</li>
                  <li>Annual meeting notices & circular updates</li>
                </ul>
                <div className="bg-white border border-[#D4AF37]/20 py-1.5 px-3 rounded-lg text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-wider text-center shrink-0 w-fit select-none">
                  ⚡ Coming Soon Feature
                </div>
              </div>

            </div>

            {/* Inquiry Form (Right) */}
            <div className="lg:col-span-7 bg-[#F8F6F2] border border-[#D4AF37]/25 p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif font-bold text-[#5B4636] text-lg sm:text-xl text-left mb-6">Send an Inquiry</h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-start gap-3 text-xs font-semibold text-left">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <div>
                    <strong>Form Submitted!</strong> We will reach back to you shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-semibold text-xs sm:text-sm text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[#5B4636]/70 uppercase text-[10px] tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full bg-white border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-100'} p-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-4 font-medium`}
                    />
                    {errors.name && <span className="text-red-500 text-[10px] mt-0.5">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[#5B4636]/70 uppercase text-[10px] tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className={`w-full bg-white border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-100'} p-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-4 font-medium`}
                      placeholder="10-digit number"
                    />
                    {errors.phone && <span className="text-red-500 text-[10px] mt-0.5">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[#5B4636]/70 uppercase text-[10px] tracking-wider">Email (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 p-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-100 font-medium"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-[#5B4636]/70 uppercase text-[10px] tracking-wider">Subject Category</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 p-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-4 focus:ring-orange-100 font-semibold"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Savings & Deposits">Savings & Deposits</option>
                      <option value="Loan Schemes">Loan Schemes</option>
                      <option value="Locker Facility">Locker Facility</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[#5B4636]/70 uppercase text-[10px] tracking-wider">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full bg-white border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-100'} p-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-4 font-medium`}
                  />
                  {errors.message && <span className="text-red-500 text-[10px] mt-0.5">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF9900] hover:bg-[#D4AF37] disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm min-h-[44px] focus:ring-4 focus:ring-orange-100"
                >
                  {isSubmitting ? <span>Submitting...</span> : <><Send className="w-4.5 h-4.5" /> Send Message</>}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full border-t border-[#D4AF37]/15">
        <div className="w-full h-[350px] sm:h-[450px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.2426016773707!2d74.74667297508276!3d13.335179487014583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb595b6acb69%3A0xcb5f5fe1a301e20b!2sCHATRAPATI%20SHIVAJI%20MULTIPURPOSE%20CO%20OPERATIVE%20SOCIETY%20N%20UDUPI%20CHATRAPATHI%20SHIVAJI%20MULTIPURPOSE%20CO%20OP!5e0!3m2!1sen!2sin!4v1781383457645!5m2!1sen!2sin"
            className="w-full h-full border-0 absolute inset-0"
            allowFullScreen={true}
            loading="lazy"
            title="Google Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
