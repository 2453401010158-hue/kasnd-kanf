import React from 'react';
import { ArrowDown } from 'lucide-react';
import { EditorialImage } from './EditorialImage';
import { STUDENT_PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section id="top" className="relative w-full border-b border-[#111111]/10 bg-[#FBFBF9] overflow-hidden">
      {/* Magazine Cover Header Bar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 pb-4">
        
        {/* Editorial Masthead Top Metadata */}
        <div className="flex flex-wrap justify-between items-end border-b border-[#111111]/15 pb-4 text-[11px] font-sans tracking-[0.2em] uppercase text-[#555555]">
          <div className="flex items-center gap-3">
            <span>HỒ SƠ SƯ PHẠM & HỌC THUẬT</span>
            <span aria-hidden="true" className="text-[#999999]">·</span>
            <span>KHOA HÓA HỌC</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[#555555]">
            <span>ĐẠI HỌC SƯ PHẠM TP. HỒ CHÍ MINH (HCMUE)</span>
            <span aria-hidden="true" className="text-[#999999]">·</span>
            <span>2025 — 2026</span>
          </div>
          <div className="font-serif-luxury italic lowercase tracking-wider text-xs text-[#222222]">
            hướng đến giáo viên thcs
          </div>
        </div>

        {/* Massive Editorial Headline: PORTFOLIO */}
        <div className="py-6 sm:py-10 text-center select-none">
          <h1 className="font-serif-luxury text-6xl sm:text-8xl md:text-9xl lg:text-[136px] xl:text-[156px] tracking-tight leading-none text-[#111111] font-normal uppercase">
            Portfolio
          </h1>
        </div>

        {/* Magazine Cover 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch pb-12 pt-2">
          
          {/* Left Column: Academic Background & Competencies */}
          <div className="lg:col-span-3 flex flex-col justify-between order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-[#111111]/10 pt-6 lg:pt-0 lg:pr-8">
            <div className="space-y-7">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#888888] block mb-2">
                  01 / Nền Tảng Chuyên Môn
                </span>
                <h2 className="font-serif-luxury text-xl sm:text-2xl text-[#111111] leading-tight mb-2">
                  Khoa Học Tự Nhiên & Hóa Học
                </h2>
                <p className="text-xs font-sans text-[#666666] leading-relaxed">
                  Sinh viên năm 3 Khoa Hóa học, Trường ĐH Sư phạm TP.HCM. Chú trọng kiến thức hóa học thực nghiệm và sư phạm lứa tuổi THCS.
                </p>
              </div>

              <div className="w-12 h-[1px] bg-[#111111]/20" />

              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#888888] block mb-2">
                  02 / Kỹ Năng Trọng Tâm
                </span>
                <h3 className="font-serif-luxury text-xl text-[#111111] leading-tight mb-2">
                  Tiếng Anh & Chứng Chỉ MOS
                </h3>
                <p className="text-xs font-sans text-[#666666] leading-relaxed">
                  Làm chủ bộ công cụ Microsoft Office Specialist (Word, Excel, PowerPoint) ứng dụng soạn giáo án, bảng điểm, bài giảng trực quan; giao tiếp tiếng Anh tốt.
                </p>
              </div>

              <div className="w-12 h-[1px] bg-[#111111]/20" />

              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#888888] block mb-2">
                  03 / Định Hướng Sự Nghiệp
                </span>
                <p className="text-xs font-sans text-[#444444] leading-normal uppercase tracking-wider font-medium">
                  {STUDENT_PROFILE.careerGoal}
                </p>
              </div>
            </div>

            <div className="pt-8 mt-auto hidden lg:block">
              <div className="p-4 bg-[#F4F1EA] border border-[#EAE7E1]">
                <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#777777] block mb-1">
                  Đại Học Đào Tạo
                </span>
                <p className="font-serif-luxury text-sm text-[#111111]">
                  HCMUE — Sư Phạm TP.HCM
                </p>
                <p className="text-[11px] font-sans text-[#666666] mt-1">
                  Khoa Hóa học · Niên khóa 2023 — 2027
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Dominant Portrait / Laboratory Scene */}
          <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
            <div className="relative w-full max-w-[480px] group shadow-xl shadow-black/5 border border-[#111111]/10 bg-[#F4F1EA] p-3">
              {/* Corner Registration Marks like fine academic magazine print */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#111111]/40" />
              <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#111111]/40" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#111111]/40" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#111111]/40" />

              <EditorialImage
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200"
                alt="Nguyễn Ngọc Quỳnh Trâm — Chân Dung Hồ Sơ Sư Phạm"
                aspectRatio="portrait"
                className="w-full"
              />

              {/* Cover overlay footer */}
              <div className="pt-3 pb-1 flex justify-between items-center text-[10px] font-sans tracking-[0.2em] text-[#777777] uppercase">
                <span>HỒ SƠ TẬP GIẢNG NO. 03</span>
                <span>NIÊN KHÓA 2025 — 2026</span>
              </div>
            </div>

            {/* Student Name Typography under the photograph */}
            <div className="mt-5 text-center">
              <span className="text-xs font-sans tracking-[0.3em] text-[#777777] uppercase block mb-1">
                Sinh Viên Sư Phạm Hóa Học · Năm 3
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#111111] uppercase tracking-[0.08em]">
                {STUDENT_PROFILE.fullName}
              </h2>
            </div>
          </div>

          {/* Right Column: Table of Contents & Pedagogical Creed */}
          <div className="lg:col-span-3 flex flex-col justify-between order-3 border-t lg:border-t-0 lg:border-l border-[#111111]/10 pt-6 lg:pt-0 lg:pl-8">
            <div className="space-y-8">
              <div className="border border-[#111111]/15 p-5 bg-[#F4F1EA]">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#888888] block mb-2">
                  Danh Mục Hồ Sơ Sư Phạm
                </span>
                <ul className="text-xs font-sans space-y-2 text-[#444444]">
                  <li className="flex justify-between border-b border-[#111111]/5 pb-1">
                    <span>01. Kế Hoạch Bài Dạy KHTN 7</span>
                    <span className="font-serif-luxury italic">tr. 04</span>
                  </li>
                  <li className="flex justify-between border-b border-[#111111]/5 pb-1">
                    <span>02. Thí Nghiệm & An Toàn Lab</span>
                    <span className="font-serif-luxury italic">tr. 12</span>
                  </li>
                  <li className="flex justify-between border-b border-[#111111]/5 pb-1">
                    <span>03. Ứng Dụng Chuẩn Tin Học MOS</span>
                    <span className="font-serif-luxury italic">tr. 20</span>
                  </li>
                  <li className="flex justify-between border-b border-[#111111]/5 pb-1">
                    <span>04. Dự Án STEM Sáng Tạo THCS</span>
                    <span className="font-serif-luxury italic">tr. 32</span>
                  </li>
                  <li className="flex justify-between">
                    <span>05. Tiếng Anh Thuật Ngữ Hóa</span>
                    <span className="font-serif-luxury italic">tr. 46</span>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#888888] block mb-2">
                  Tâm Niệm Nghề Giáo
                </span>
                <blockquote className="font-editorial-italic text-lg text-[#222222] leading-snug">
                  "{STUDENT_PROFILE.philosophy}"
                </blockquote>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onExploreClick}
                className="w-full flex items-center justify-between px-5 py-3.5 border border-[#111111] text-xs font-sans uppercase tracking-[0.18em] text-[#111111] hover:bg-[#111111] hover:text-[#FBFBF9] transition-all group"
              >
                <span>Xem Hồ Sơ Sư Phạm</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
