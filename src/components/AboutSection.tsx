import React from 'react';
import { EditorialImage } from './EditorialImage';
import { STUDENT_PROFILE, PEDAGOGICAL_MANIFESTO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="story" className="w-full bg-[#F4F1EA] py-20 lg:py-28 border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header Kicker */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#111111]/15 text-[11px] font-sans tracking-[0.22em] uppercase text-[#666666]">
          <span>TRANG BIÊN TẬP SƯ PHẠM · PHẦN I</span>
          <span>TIỂU SỬ & ĐỊNH HƯỚNG NGHỀ GIÁO</span>
        </div>

        {/* Double Page Editorial Spread Book Layout */}
        <div className="bg-[#FBFBF9] border border-[#111111]/15 shadow-2xl shadow-black/5 relative">
          
          {/* Center Book Crease / Binding Line (Desktop) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#111111]/10 z-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT PAGE (P. 14) */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 border-[#111111]/10">
              
              {/* Left Page Folio */}
              <div className="flex justify-between items-center text-[10px] font-sans tracking-[0.2em] text-[#888888] uppercase pb-8">
                <span>HCMUE — KHOA HÓA HỌC</span>
                <span>TRANG 14</span>
              </div>

              {/* Large Studio / Lab Photograph */}
              <div className="my-auto py-4">
                <div className="relative border border-[#111111]/10 p-2 bg-[#F4F1EA]">
                  <EditorialImage
                    src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1200"
                    alt="Phòng Thí Nghiệm & Học Tập Sư Phạm Hóa Học"
                    aspectRatio="portrait"
                  />
                </div>
                <div className="mt-3 flex justify-between items-start text-[11px] font-sans text-[#777777]">
                  <span className="max-w-[320px]">
                    Hình 1.1 — Chuẩn bị thí nghiệm trực quan và thiết kế học liệu thực hành Khoa học Tự nhiên.
                  </span>
                  <span className="font-serif-luxury italic text-[#444444]">Hồ sơ Lab 03</span>
                </div>
              </div>

              {/* Student Specifications & Academic Profile */}
              <div className="pt-8 border-t border-[#111111]/10">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#888888] block mb-3">
                  Thông Tin Học Vụ & Năng Lực Cốt Lõi
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
                  <div>
                    <span className="text-[#888888] block text-[10px] uppercase">Họ & Tên</span>
                    <span className="text-[#111111] font-medium">{STUDENT_PROFILE.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[#888888] block text-[10px] uppercase">Khóa Học</span>
                    <span className="text-[#111111] font-medium">Năm 3 (2023 — 2027)</span>
                  </div>
                  <div>
                    <span className="text-[#888888] block text-[10px] uppercase">Kỹ Năng MOS</span>
                    <span className="text-[#111111] font-medium">Word · Excel · PPT</span>
                  </div>
                  <div>
                    <span className="text-[#888888] block text-[10px] uppercase">Ngoại Ngữ</span>
                    <span className="text-[#111111] font-medium">Tiếng Anh Giao Tiếp</span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT PAGE (P. 15) */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              
              {/* Right Page Folio */}
              <div className="flex justify-between items-center text-[10px] font-sans tracking-[0.2em] text-[#888888] uppercase pb-8">
                <span>TIỂU LUẬN & ĐỊNH HƯỚNG NGHỀ GIÁO</span>
                <span>TRANG 15</span>
              </div>

              {/* Pedagogical Prose & Narrative */}
              <div className="my-auto space-y-6">
                
                <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#888888] block">
                  Tâm Nguyện Sư Phạm Cấp THCS
                </span>

                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#111111] leading-[1.2]">
                  "Đưa Hóa học từ những phương trình trừu tượng trở thành những hiện tượng diệu kỳ trong mắt học trò."
                </h3>

                <div className="space-y-4 text-sm sm:text-base font-sans text-[#333333] leading-relaxed">
                  <p>
                    Là một sinh viên năm 3 tại <strong>Khoa Hóa học — Trường Đại học Sư phạm TP. Hồ Chí Minh</strong>, em nuôi dưỡng ước mơ trở thành người giáo viên Khoa học Tự nhiên / Hóa học tận tâm tại các trường Trung học Cơ sở (cấp 2).
                  </p>
                  <p>
                    Lứa tuổi học sinh cấp 2 là giai đoạn bản lề: các em vừa tò mò, vừa bỡ ngỡ khi lần đầu tiếp cận môn Hóa. Em luôn chú trọng kết hợp <em>thực hành thí nghiệm trực quan</em>, vận dụng <em>kỹ năng tin học văn phòng quốc tế (MOS)</em> để xây dựng giáo án khoa học, slide tương tác sinh động, đồng thời sử dụng vốn <em>tiếng Anh</em> để cập nhật các mô hình giáo dục STEM và phương pháp giảng dạy hiện đại.
                  </p>
                </div>

                {/* Pedagogical Pull Quote */}
                <div className="p-6 bg-[#F4F1EA] border-l-2 border-[#111111] my-6">
                  <p className="font-editorial-italic text-lg text-[#111111] leading-relaxed">
                    "{PEDAGOGICAL_MANIFESTO.quote}"
                  </p>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#777777] block mt-2">
                    — Trích Nhật Ký Rèn Luyện Nghiệp Vụ Sư Phạm, 2025
                  </span>
                </div>

                {/* Future Career Path */}
                <div className="pt-2">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#888888] block mb-2">
                    Mục Tiêu Giảng Dạy Tương Lai
                  </span>
                  <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-sans text-[#444444]">
                    <span>Vị trí: <strong className="text-[#111111] font-medium">Giáo viên KHTN & Hóa học THCS</strong></span>
                    <span aria-hidden="true" className="text-[#999999]">·</span>
                    <span>Phương pháp: <strong className="text-[#111111] font-medium">Học qua Thực nghiệm & STEM</strong></span>
                    <span aria-hidden="true" className="text-[#999999]">·</span>
                    <span>Công nghệ: <strong className="text-[#111111] font-medium">Ứng Dụng MOS & Số Hóa Bài Giảng</strong></span>
                  </div>
                </div>

              </div>

              {/* Right Page Signature Footer */}
              <div className="pt-8 border-t border-[#111111]/10 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#888888] block">
                    Xác Thực Hồ Sơ Học Viên
                  </span>
                  <span className="font-serif-luxury text-sm text-[#111111]">
                    Khoa Hóa học · ĐH Sư Phạm TP.HCM
                  </span>
                </div>
                <div className="font-editorial-italic text-2xl text-[#111111]">
                  Nguyễn Ngọc Quỳnh Trâm
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
