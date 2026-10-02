import React, { useState } from 'react';
import { X, Send, CheckCircle2, GraduationCap } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    grade: 'Khối 7 - 8 THCS',
    position: 'Trợ Giảng / Thực Tập Sư Phạm',
    details: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#111111]/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-[#FBFBF9] border border-[#111111]/20 shadow-2xl p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#555555] hover:text-[#111111]"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-10 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#111111] mx-auto animate-bounce" />
            <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#777777] block">
              Thư Kết Nối Đã Gửi
            </span>
            <h3 className="font-serif-luxury text-3xl text-[#111111]">
              Gửi Thông Tin Thành Công
            </h3>
            <p className="text-xs font-sans text-[#555555] max-w-sm mx-auto leading-relaxed">
              Thông tin liên hệ của quý Thầy/Cô đã được gửi trực tiếp đến sinh viên <strong>Nguyễn Ngọc Quỳnh Trâm</strong> (Khoa Hóa học - ĐH Sư phạm TP.HCM). Em sẽ liên hệ phản hồi sớm nhất có thể.
            </p>
            <div className="pt-6">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#111111] text-[#FBFBF9] text-xs font-sans uppercase tracking-widest hover:bg-[#333333]"
              >
                Đóng Cửa Sổ
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#111111]/15 pb-4 mb-6">
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#777777] block mb-1">
                KHOA HÓA HỌC · HCMUE
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#111111]">
                Kết Nối Với Quỳnh Trâm
              </h2>
              <p className="text-xs font-sans text-[#666666] mt-1">
                Trao đổi cơ hội thực tập giảng dạy, trợ giảng hoặc dự án Khoa học Tự nhiên cấp THCS.
              </p>
            </div>

            {/* Quick Profile Summary */}
            <div className="bg-[#F4F1EA] border border-[#EAE7E1] p-4 mb-6 flex flex-wrap justify-between items-center text-xs font-sans text-[#444444]">
              <div>
                <strong className="text-[#111111]">Học vụ:</strong> Sinh viên Năm 3 · Khoa Hóa học (HCMUE)
              </div>
              <div className="text-[11px] text-[#666666] mt-1 sm:mt-0">
                Kỹ năng: Tiếng Anh · MOS (Word, Excel, PPT)
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1">
                    Họ Tên / Trường THCS *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Cô Minh Hương - THCS..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#111111]/15 px-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1">
                    Email Liên Hệ *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="thayco@truongthcs.edu.vn"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#111111]/15 px-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1">
                    Nhu Cầu Trao Đổi
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#111111]/15 px-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                  >
                    <option value="Trợ Giảng / Thực Tập Sư Phạm">Cơ hội Thực tập / Trợ giảng môn KHTN</option>
                    <option value="Giáo viên Thỉnh giảng Cấp 2">Giáo viên Khoa học Tự nhiên Cấp 2</option>
                    <option value="Dự án Thí nghiệm STEM">Phối hợp Hoạt động STEM trường THCS</option>
                    <option value="Trao đổi Chuyên môn">Giao lưu & Chia sẻ học liệu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1">
                    Khối Lớp Mục Tiêu
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#111111]/15 px-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                  >
                    <option value="Khối 6 THCS">Khoa học Tự nhiên 6</option>
                    <option value="Khối 7 THCS">Khoa học Tự nhiên 7 (Phân môn Hóa học)</option>
                    <option value="Khối 8 THCS">Khoa học Tự nhiên 8 (Chất & Biến đổi hóa học)</option>
                    <option value="Khối 9 THCS">Khoa học Tự nhiên 9 (Hóa vô cơ & Hữu cơ cơ bản)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#666666] mb-1">
                  Nội Dung Trao Đổi Cụ Thể
                </label>
                <textarea
                  rows={3}
                  placeholder="Ghi chú về thời gian, địa điểm trường hoặc yêu cầu bài dạy thử..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#FFFFFF] border border-[#111111]/15 px-3 py-2 text-xs text-[#111111] focus:outline-none focus:border-[#111111] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#111111] text-[#FBFBF9] text-xs font-sans tracking-[0.2em] uppercase hover:bg-[#333333] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Gửi Lời Nhắn Đến Quỳnh Trâm</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
