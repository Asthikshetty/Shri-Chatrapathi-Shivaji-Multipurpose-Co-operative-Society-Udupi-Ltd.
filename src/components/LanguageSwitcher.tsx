import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export const LanguageSwitcher: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'kn'>('en');

  useEffect(() => {
    // 1. Get saved language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage') as 'en' | 'kn' | null;
    if (savedLang) {
      setCurrentLang(savedLang);
    }

    // 2. Define the callback initialized by the Google Translate script
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,kn',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
      
      // Apply saved translation once loaded
      setTimeout(() => {
        const activeLang = localStorage.getItem('preferredLanguage') as 'en' | 'kn' | null;
        if (activeLang && activeLang !== 'en') {
          const selectEl = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
          if (selectEl) {
            selectEl.value = activeLang;
            selectEl.dispatchEvent(new Event('change'));
          }
        }
      }, 800);
    };

    // 3. Inject Google Translate script dynamically if not present
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    }

    // 4. Create hidden container for Google Translate widget
    if (!document.getElementById('google_translate_element')) {
      const div = document.createElement('div');
      div.id = 'google_translate_element';
      div.style.display = 'none';
      document.body.appendChild(div);
    }

    // 5. Inject custom styles to hide Translate widget frames, tooltips, and highlights
    if (!document.getElementById('google-translate-styles')) {
      const style = document.createElement('style');
      style.id = 'google-translate-styles';
      style.innerHTML = `
        /* Hide default Google Translate widgets and headers */
        .skiptranslate,
        #google_translate_element,
        .goog-te-banner-frame,
        .goog-te-banner-frame.skiptranslate,
        iframe.goog-te-banner-frame,
        .goog-te-gadget-icon,
        .goog-te-gadget-simple,
        .goog-te-menu-value {
          display: none !important;
          visibility: hidden !important;
        }
        body {
          top: 0px !important;
          position: static !important;
        }
        /* Hide translate hover tooltips */
        #goog-gt-tt,
        .goog-te-balloon-frame,
        #goog-gt-tt.skiptranslate {
          display: none !important;
          visibility: hidden !important;
        }
        /* Hide translate text highlights */
        .goog-text-highlight {
          background-color: transparent !important;
          box-shadow: none !important;
          box-sizing: border-box !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const handleLanguageChange = (lang: 'en' | 'kn') => {
    setCurrentLang(lang);
    localStorage.setItem('preferredLanguage', lang);

    // Configure Translate cookie (googtrans=/en/lang)
    const cookieVal = `googtrans=/en/${lang}`;
    document.cookie = `${cookieVal}; path=/`;
    document.cookie = `${cookieVal}; path=/; domain=${window.location.hostname}`;
    
    const hostParts = window.location.hostname.split('.');
    if (hostParts.length > 2) {
      const baseDomain = '.' + hostParts.slice(-2).join('.');
      document.cookie = `${cookieVal}; path=/; domain=${baseDomain}`;
    }

    // Trigger select element inside the Google Translate widget
    const selectEl = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
    if (selectEl) {
      selectEl.value = lang;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      // Fallback reload if widget is not initialized yet
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center font-sans font-bold text-xs border border-[#D4AF37]/35 bg-[#F8F6F2] rounded-full overflow-hidden select-none shadow-sm h-9 pl-3.5 pr-2 gap-1">
      <span className="text-[#FF9900] flex items-center justify-center mr-1">
        <Globe className="w-3.5 h-3.5" />
      </span>
      <button
        type="button"
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
          currentLang === 'en'
            ? 'bg-[#FF9900] text-white shadow-sm'
            : 'text-[#5B4636] hover:bg-[#FFF4E6]'
        }`}
      >
        English
      </button>
      <span className="text-[#D4AF37]/35 select-none px-0.5">|</span>
      <button
        type="button"
        onClick={() => handleLanguageChange('kn')}
        className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center ${
          currentLang === 'kn'
            ? 'bg-[#FF9900] text-white shadow-sm'
            : 'text-[#5B4636] hover:bg-[#FFF4E6]'
        }`}
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
};
