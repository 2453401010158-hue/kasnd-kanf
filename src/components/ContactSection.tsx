import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, GraduationCap, FileCheck } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    purpose: 'Cơ hội Thực tập / Giảng dạy THCS',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="w-full bg-[#111111] text-[#FBFBF9] py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Top Header Colophon */}
        <div className="border-b border-[#FBFBF9]/15 pb-10 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#AAAAAA] block mb-2">
              KẾT NỐI HỌC THUẬT & THỰC TẬP SƯ PHẠM
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[#FBFBF9] uppercase tracking-tight">
              Liên Hệ & Hợp Tác
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-sans text-[#BBBBBB] max-w-md leading-relaxed">
            Sẵn sàng kết nối với quý Ban giám hiệu các trường THCS, quý thầy cô tổ bộ môn Khoa học Tự nhiên và các dự án giáo dục STEM tại TP. Hồ Chí Minh.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-[#FBFBF9]/15">
          
          {/* Left Column: Direct Info & Academic Base */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#888888] block mb-3">
                Thư Điện Tử Chính Thức
              </span>
              <a
                href={`mailto:${STUDENT_PROFILE.email}`}
                className="font-serif-luxury text-xl sm:text-2xl text-[#FBFBF9] hover:text-[#D8D4CC] transition-colors underline decoration-1 underline-offset-8"
              >
                {STUDENT_PROFILE.email}
              </a>
              <p className="text-xs font-sans text-[#888888] mt-2">
                Hồi đáp thư trao đổi học vụ thường trong vòng 24 giờ.
              </p>
            </div>

            {/* University & Department Details */}
            <div className="pt-6 border-t border-[#FBFBF9]/10 space-y-4">
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#888888] block">
                Cơ Sở Đào Tạo Sư Phạm
              </span>
              
              <div className="p-4 bg-[#1A1A1A] border border-[#FBFBF9]/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-sans text-[#FBFBF9] font-medium">
                  <GraduationCap className="w-4 h-4 text-[#D8D4CC]" />
                  <span>{STUDENT_PROFILE.university}</span>
                </div>
                <div className="text-[11px] font-sans text-[#AAAAAA] pl-6">
                  {STUDENT_PROFILE.faculty} · Sinh viên Năm 3
                </div>
                <div className="text-[11px] font-sans text-[#888888] pl-6 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>280 An Dương Vương, Phường 4, Quận 5, TP. Hồ Chí Minh</span>
                </div>
              </div>

              <div className="p-4 bg-[#1A1A1A] border border-[#FBFBF9]/10">
                <span className="text-[10px] font-sans text-[#888888] uppercase block mb-1">
                  Kỹ Năng Cốt Lõi Tích Hợp
                </span>
                <p className="text-xs font-sans text-[#D8D4CC]">
                  • Chứng chỉ Tin học Văn phòng MOS (Word, Excel, PowerPoint)
                </p>
                <p className="text-xs font-sans text-[#D8D4CC] mt-1">
                  • Năng lực Tiếng Anh giao tiếp & Tài liệu Khoa học Song ngữ
                </p>
                <p className="text-xs font-sans text-[#D8D4CC] mt-1">
                  • Định hướng: Giáo viên Khoa học Tự nhiên / Hóa học THCS (Cấp 2)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-[#1A1A1A] border border-[#FBFBF9]/15 p-8 sm:p-10">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#EAE7E1] mx-auto animate-bounce" />
                <h3 className="font-serif-luxury text-2xl text-[#FBFBF9]">
                  Thư Kết Nối Đã Được Gửi Thành Công
                </h3>
                <p className="text-xs font-sans text-[#AAAAAA] max-w-md mx-auto leading-relaxed">
                  Cảm ơn quý Thầy / Cô / Quý trường <strong className="text-[#FBFBF9]">{formData.name}</strong>. Quỳnh Trâm đã nhận được thông tin liên hệ về <span className="italic">{formData.purpose}</span> và sẽ phản hồi sớm nhất.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        purpose: 'Cơ hội Thực tập / Giảng dạy THCS',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-sans uppercase tracking-widest text-[#111111] bg-[#FBFBF9] hover:bg-[#EAE7E1] transition-colors"
                  >
                    Gửi Thư Khác
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#888888] block mb-2">
                    Gửi Thư Trao Đổi & Kết Nối Sư Phạm
                  </span>
                  <p className="text-xs font-sans text-[#AAAAAA]">
                    Mời quý thầy cô, nhà trường hoặc đồng nghiệp gửi lời nhắn trực tiếp tới sinh viên Nguyễn Ngọc Quỳnh Trâm.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-[#888888] mb-1.5">
                      Họ và Tên / Quý Đơn Vị *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="VD: Trường THCS Nguyễn Du"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111111] border border-[#FBFBF9]/20 px-3.5 py-2.5 text-xs text-[#FBFBF9] placeholder-[#555555] focus:outline-none focus:border-[#FBFBF9] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-[#888888] mb-1.5">
                      Địa Chỉ Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="thayco@thcs.edu.vn"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#111111] border border-[#FBFBF9]/20 px-3.5 py-2.5 text-xs text-[#FBFBF9] placeholder-[#555555] focus:outline-none focus:border-[#FBFBF9] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-[#888888] mb-1.5">
                      Mục Đích Liên Hệ
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full bg-[#111111] border border-[#FBFBF9]/20 px-3.5 py-2.5 text-xs text-[#FBFBF9] focus:outline-none focus:border-[#FBFBF9] transition-colors"
                    >
                      <option value="Cơ hội Thực tập / Giảng dạy THCS">Cơ hội Thực tập / Trợ giảng THCS</option>
                      <option value="Trao đổi Kế hoạch bài dạy KHTN">Trao đổi Kế hoạch bài dạy KHTN</option>
                      <option value="Hợp tác Hoạt động STEM trường học">Hợp tác Hoạt động STEM trường học</option>
                      <option value="Giao lưu Học thuật Khoa Hóa học">Giao lưu Học thuật Khoa Hóa học</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-[#888888] mb-1.5">
                      Địa Bàn / Trường
                    </label>
                    <input
                      type="text"
                      placeholder="VD: Quận 1, Quận 5, TP. Thủ Đức..."
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#111111] border border-[#FBFBF9]/20 px-3.5 py-2.5 text-xs text-[#FBFBF9] placeholder-[#555555] focus:outline-none focus:border-[#FBFBF9] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#888888] mb-1.5">
                    Nội Dung Lời Nhắn
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ghi chú thêm về cơ hội thực tập, thời gian hoặc yêu cầu chuyên môn..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#111111] border border-[#FBFBF9]/20 px-3.5 py-2.5 text-xs text-[#FBFBF9] placeholder-[#555555] focus:outline-none focus:border-[#FBFBF9] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-sans tracking-[0.22em] uppercase text-[#111111] bg-[#FBFBF9] hover:bg-[#EAE7E1] transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <span>Gửi Thư Kết Nối Sư Phạm</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Colophon Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#777777] gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif-luxury text-sm text-[#FBFBF9]">{STUDENT_PROFILE.fullName}</span>
            <span aria-hidden="true">·</span>
            <span>Khoa Hóa học · ĐH Sư Phạm TP.HCM (HCMUE)</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-[#AAAAAA]">
            <span>Định Hướng: Giáo Viên THCS</span>
            <span>·</span>
            <span>Tiếng Anh & MOS</span>
            <span>·</span>
            <a href="#top" className="hover:text-[#FBFBF9] transition-colors">
              Lên Đầu Trang ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
