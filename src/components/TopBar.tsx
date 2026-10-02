import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

interface TopBarProps {
  onOpenBooking: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Hồ Sơ Sư Phạm', href: '#works' },
    { label: 'Triết Lý Giáo Dục', href: '#story' },
    { label: 'Năng Lực & Kỹ Năng', href: '#skills' },
    { label: 'Liên Hệ Thực Tập', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF9]/95 backdrop-blur-sm border-b border-[#111111]/10 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-18 flex items-center justify-between">
        
        {/* Zone 1: Single text element Brand Zone */}
        <a 
          href="#top" 
          className="font-serif-luxury tracking-[0.12em] text-base lg:text-lg font-medium text-[#111111] uppercase hover:opacity-75 transition-opacity"
        >
          {STUDENT_PROFILE.fullName}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[12px] font-sans uppercase tracking-[0.18em] text-[#555555]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#111111] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#FBFBF9] bg-[#111111] hover:bg-[#333333] transition-colors whitespace-nowrap"
          >
            <span>Kết Nối Sư Phạm</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111] focus:outline-none"
            aria-label="Mở menu điều hướng"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBFBF9] border-b border-[#111111]/10 px-6 py-6 space-y-4">
          <div className="pb-2 border-b border-[#111111]/5">
            <span className="text-[10px] font-sans uppercase tracking-widest text-[#777777] block">
              {STUDENT_PROFILE.university}
            </span>
            <span className="font-serif-luxury text-sm text-[#111111]">
              {STUDENT_PROFILE.faculty} · Sinh viên Năm 3
            </span>
          </div>
          <nav className="flex flex-col space-y-4 text-xs font-sans tracking-[0.18em] uppercase text-[#444444]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-[#111111]/5 hover:text-[#111111]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-xs font-sans tracking-[0.18em] uppercase text-[#FBFBF9] bg-[#111111]"
            >
              Gửi Thư Kết Nối Sư Phạm
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
