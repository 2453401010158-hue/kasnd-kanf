import React, { useState, useEffect } from 'react';
import { PedagogicalProject } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, Share2, Check, BookOpen, Layers } from 'lucide-react';

interface LightboxModalProps {
  project: PedagogicalProject | null;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  onClose,
  onNavigate,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate('next');
      if (e.key === 'ArrowLeft') onNavigate('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!project) return null;

  const currentImage = project.gallery[activeImageIndex] || project.imageUrl;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-[1280px] max-h-[92vh] bg-[#FBFBF9] border border-[#111111]/20 shadow-2xl flex flex-col lg:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar for Mobile */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-[#111111]/10 bg-[#F4F1EA]">
          <span className="text-xs font-sans tracking-[0.18em] uppercase text-[#666666]">
            Hồ sơ {project.index} · {project.title}
          </span>
          <button
            onClick={onClose}
            className="p-1 text-[#111111] hover:opacity-70"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Left Side: Visual / Lab Document View */}
        <div className="lg:w-7/12 bg-[#1A1A1A] relative flex flex-col items-center justify-center p-4 sm:p-8 min-h-[350px] lg:min-h-[640px]">
          
          {/* Main Selected Image */}
          <div className="relative max-h-[70vh] w-full flex items-center justify-center overflow-hidden">
            <img
              src={currentImage}
              alt={`${project.title} - Ảnh ${activeImageIndex + 1}`}
              referrerPolicy="no-referrer"
              className="max-h-[68vh] max-w-full object-contain shadow-2xl"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('prev');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FBFBF9]/90 text-[#111111] hover:bg-[#FBFBF9] flex items-center justify-center transition-colors shadow-lg"
            aria-label="Hồ sơ trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('next');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FBFBF9]/90 text-[#111111] hover:bg-[#FBFBF9] flex items-center justify-center transition-colors shadow-lg"
            aria-label="Hồ sơ tiếp theo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Gallery Thumbnails */}
          {project.gallery.length > 1 && (
            <div className="mt-4 flex items-center gap-2 overflow-x-auto py-1 px-2 bg-black/40 rounded-sm">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`w-12 h-16 overflow-hidden border transition-all ${
                    activeImageIndex === i ? 'border-white opacity-100 scale-105' : 'border-transparent opacity-60 hover:opacity-90'
                  }`}
                >
                  <img
                    src={img}
                    alt="Thumbnail"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Image index counter */}
          <div className="absolute bottom-4 left-4 text-[10px] font-sans tracking-[0.2em] text-[#AAAAAA] uppercase">
            Học liệu {activeImageIndex + 1} / {project.gallery.length}
          </div>
        </div>

        {/* Right Side: Pedagogical Details & Lesson Plan Breakdown */}
        <div className="lg:w-5/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto bg-[#FBFBF9]">
          
          <div>
            {/* Header controls (Desktop) */}
            <div className="hidden lg:flex items-center justify-between pb-6 border-b border-[#111111]/10">
              <span className="text-[10px] font-sans tracking-[0.22em] uppercase text-[#777777]">
                HỒ SƠ {project.index} · {project.gradeLevel}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="p-1.5 text-[#555555] hover:text-[#111111] transition-colors"
                  title="Sao chép liên kết hồ sơ"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-[#555555] hover:text-[#111111] transition-colors"
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="pt-6">
              <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.25em] text-[#888888] mb-1">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>Năm {project.year}</span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#111111] leading-tight">
                {project.title}
              </h2>
              <p className="font-editorial-italic text-base text-[#444444] mt-2">
                "{project.subtitle}"
              </p>
            </div>

            {/* Description */}
            <div className="mt-6 text-xs sm:text-sm font-sans text-[#444444] leading-relaxed space-y-3">
              <p>{project.description}</p>
            </div>

            {/* Objectives */}
            <div className="mt-6 pt-6 border-t border-[#111111]/10">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#777777] block mb-3">
                Mục Tiêu Phát Triển Năng Lực Học Sinh
              </span>
              <ul className="space-y-2 text-xs font-sans text-[#555555]">
                {project.pedagogicalObjectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#999999] font-serif-luxury italic">—</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teaching Methodology Structure */}
            <div className="mt-6 pt-6 border-t border-[#111111]/10 space-y-2.5 text-xs font-sans">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] block mb-2">
                Cấu Trúc Tổ Chức Hoạt Động Bài Dạy
              </span>
              <div className="bg-[#F4F1EA] p-3.5 border border-[#EAE7E1] space-y-2">
                <div>
                  <span className="text-[#888888] block text-[10px] uppercase">Năng Lực Trọng Tâm</span>
                  <span className="font-medium text-[#111111]">{project.lessonPlanDetails.targetCompetencies}</span>
                </div>
                <div>
                  <span className="text-[#888888] block text-[10px] uppercase">Phương Pháp Giảng Dạy</span>
                  <span className="font-medium text-[#111111]">{project.lessonPlanDetails.teachingMethod}</span>
                </div>
                <div>
                  <span className="text-[#888888] block text-[10px] uppercase">Hoạt Động Trải Nghiệm Thực Tế</span>
                  <span className="font-medium text-[#111111]">{project.lessonPlanDetails.practicalActivity}</span>
                </div>
              </div>
            </div>

            {/* Applied Tools & Software */}
            <div className="mt-4 pt-3 flex flex-wrap items-center gap-1.5 text-[11px] font-sans text-[#666666]">
              <span className="text-[#888888] uppercase text-[10px]">Công Cụ Ứng Dụng:</span>
              {project.tools.map((tool, i) => (
                <span key={i} className="text-[#111111] font-medium bg-[#EAE7E1] px-2 py-0.5">
                  {tool}
                </span>
              ))}
            </div>

          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-4 border-t border-[#111111]/10 flex justify-between items-center text-[11px] font-sans text-[#777777]">
            <span>Nhấn phím ESC để đóng cửa sổ</span>
            <span className="font-serif-luxury italic text-[#111111]">Khoa Hóa học · ĐH Sư Phạm TP.HCM</span>
          </div>

        </div>

      </div>
    </div>
  );
};
