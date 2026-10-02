import React, { useState } from 'react';
import { SKILL_COMPETENCIES, SkillItem } from '../data/portfolioData';
import { ChevronRight, FileText, CheckCircle2, Globe2, Laptop, FlaskConical, GraduationCap } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILL_COMPETENCIES[0]);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Công nghệ') || category.includes('MOS')) return <Laptop className="w-4 h-4" />;
    if (category.includes('Ngoại Ngữ')) return <Globe2 className="w-4 h-4" />;
    if (category.includes('Thực Nghiệm')) return <FlaskConical className="w-4 h-4" />;
    return <GraduationCap className="w-4 h-4" />;
  };

  return (
    <section id="skills" className="w-full bg-[#F4F1EA] py-20 lg:py-28 border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111]/15 pb-6 mb-12">
          <div>
            <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#777777] block mb-2">
              HỒ SƠ NĂNG LỰC & CHỨNG CHỈ NGHỀ NGHIỆP
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl text-[#111111] uppercase tracking-tight">
              Kỹ Năng & Năng Lực
            </h2>
          </div>
          <p className="text-xs font-sans text-[#666666] max-w-sm mt-3 md:mt-0 leading-relaxed">
            Sự kết hợp giữa chuyên môn Hóa học thực nghiệm, kỹ năng tin học văn phòng quốc tế (MOS) và năng lực tiếng Anh trong môi trường giáo dục hiện đại.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Skills List Table */}
          <div className="lg:col-span-7 divide-y divide-[#111111]/10 border-t border-b border-[#111111]/10">
            {SKILL_COMPETENCIES.map((item) => {
              const isSelected = activeSkill.name === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => setActiveSkill(item)}
                  className={`py-6 px-4 cursor-pointer transition-all duration-200 flex items-start justify-between group ${
                    isSelected ? 'bg-[#FBFBF9]' : 'hover:bg-[#FBFBF9]/60'
                  }`}
                >
                  <div className="space-y-1.5 pr-4">
                    <div className="flex items-center gap-2.5 text-[11px] font-sans text-[#777777] uppercase tracking-wider">
                      <span className="text-[#111111] flex items-center gap-1.5 font-medium">
                        {getCategoryIcon(item.category)}
                        {item.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#666666]">{item.proficiency}</span>
                    </div>

                    <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#111111] group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </h3>

                    <p className="text-xs font-sans text-[#666666] line-clamp-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 text-[#777777] group-hover:text-[#111111] transition-colors shrink-0">
                    <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'rotate-90 text-[#111111]' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Skill Detail Spotlight (Magazine Pullout Card) */}
          <div className="lg:col-span-5 bg-[#FBFBF9] border border-[#111111]/15 p-8 sm:p-10 shadow-lg shadow-black/5 relative">
            <div className="text-[10px] font-sans tracking-[0.2em] text-[#999999] uppercase mb-4 flex items-center justify-between">
              <span>ỨNG DỤNG SƯ PHẠM THỰC TẾ</span>
              <span className="font-mono text-[#555555]">CHỨNG THỰC NĂNG LỰC</span>
            </div>

            <div className="mb-6 pt-2">
              <h4 className="font-serif-luxury text-2xl sm:text-3xl text-[#111111] leading-snug">
                {activeSkill.name}
              </h4>
              <p className="text-xs font-sans text-[#666666] mt-2 leading-relaxed">
                {activeSkill.description}
              </p>
            </div>

            <div className="border-t border-[#111111]/10 pt-6 space-y-4">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#888888] block mb-1">
                  Mức độ làm chủ & Đào tạo
                </span>
                <div className="flex items-center gap-2 text-xs font-sans text-[#111111] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>{activeSkill.proficiency}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#888888] block mb-1">
                  Vận dụng trong giảng dạy THCS
                </span>
                <p className="text-xs font-sans text-[#333333] leading-relaxed bg-[#F4F1EA] p-3 border border-[#EAE7E1]">
                  {activeSkill.application}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#111111]/10 flex items-center justify-between text-xs font-sans text-[#555555]">
              <span>Khoa Hóa học — HCMUE</span>
              <span className="font-serif-luxury italic text-[#111111]">Nguyễn Ngọc Quỳnh Trâm</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
