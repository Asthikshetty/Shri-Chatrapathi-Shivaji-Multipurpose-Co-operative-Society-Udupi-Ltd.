import React from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';

interface LanguageSwitcherWrapperProps {
  backgroundColor?: string;
}

export const LanguageSwitcherWrapper: React.FC<LanguageSwitcherWrapperProps> = ({
  backgroundColor = '#FFFDF8',
}) => {
  return (
    <div 
      className="w-full pt-4 pb-1 px-4 sm:px-6 lg:px-8 select-none"
      style={{ backgroundColor }}
    >
      <div className="max-w-[1400px] mx-auto w-full flex justify-end">
        <LanguageSwitcher />
      </div>
    </div>
  );
};
