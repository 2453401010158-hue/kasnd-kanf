import React, { useState } from 'react';
import { PedagogicalProject, PEDAGOGICAL_PROJECTS } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';
import { ArrowUpRight, BookOpen, LayoutGrid, Award } from 'lucide-react';

interface LookbookGridProps {
  onSelectProject: (project: PedagogicalProject) => void;
}

export const LookbookGrid: React.FC<LookbookGridProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất Cả');
  const [viewMode, setViewMode] = useState<'masonry' | 'magazine'>('masonry');

  const categories = ['Tất Cả', 'Kế Hoạch Bài Dạy', 'Thí Nghiệm & Lab', 'Ứng Dụng MOS', 'Hoạt Động STEM', 'Tiếng Anh Sư Phạm'];

  const filteredProjects = selectedCategory === 'Tất Cả'
    ? PEDAGOGICAL_PROJECTS
    : PEDAGOGICAL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="w-full bg-[#FBFBF9] py-20 lg:py-28 border-b border-[#111111]/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header & Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#111111]/15 pb-6 mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-sans tracking-[0.25em] uppercase text-[#777777] mb-2">
              <span>HỒ SƠ TẬP GIẢNG & HỌC LIỆU</span>
              <span aria-hidden="true">·</span>
              <span>KHOA HÓA HỌC HCMUE</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#111111] uppercase tracking-tight">
              Dự Án Sư Phạm
            </h2>
          </div>

          {/* Interactive Filters and View Mode Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            
            {/* Category Filter Controls */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#F4F1EA] border border-[#EAE7E1]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs font-sans tracking-wider uppercase transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[#111111] text-[#FBFBF9] font-medium'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle: Masonry vs Magazine Spread */}
            <div className="hidden sm:flex items-center border border-[#111111]/15 bg-[#F4F1EA] p-1">
              <button
                onClick={() => setViewMode('masonry')}
                title="Lưới Tạp Chí Bất Đối Xứng"
                className={`p-1.5 transition-colors ${
                  viewMode === 'masonry' ? 'bg-[#111111] text-[#FBFBF9]' : 'text-[#666666] hover:text-[#111111]'
                }`}
                aria-label="Lưới Tạp Chí"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('magazine')}
                title="Trang Trải Sách Sư Phạm"
                className={`p-1.5 transition-colors ${
                  viewMode === 'magazine' ? 'bg-[#111111] text-[#FBFBF9]' : 'text-[#666666] hover:text-[#111111]'
                }`}
                aria-label="Trang Trải Sách"
              >
                <BookOpen className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* MASONRY / ASYMMETRIC EDITORIAL GRID */}
        {viewMode === 'masonry' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {filteredProjects.map((project, idx) => {
              const isLarge = idx % 3 === 0;
              const colSpan = isLarge ? 'md:col-span-7' : 'md:col-span-5';
              const offsetTop = idx % 2 === 1 ? 'md:mt-10' : '';

              return (
                <article
                  key={project.id}
                  className={`${colSpan} ${offsetTop} group cursor-pointer`}
                  onClick={() => onSelectProject(project)}
                >
                  {/* Image container with fine editorial frame */}
                  <div className="relative border border-[#111111]/10 bg-[#F4F1EA] p-2 transition-all duration-300 group-hover:border-[#111111]/30">
                    <EditorialImage
                      src={project.imageUrl}
                      alt={project.title}
                      aspectRatio={project.aspect}
                    />

                    {/* Quick view button */}
                    <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#111111]/85 text-[#FBFBF9] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    {/* Small plate index overlay */}
                    <div className="absolute bottom-4 left-4 z-10 bg-[#FBFBF9]/90 px-2.5 py-1 text-[10px] font-sans tracking-[0.2em] text-[#222222] uppercase border border-[#111111]/10">
                      Hồ Sơ {project.index}
                    </div>
                  </div>

                  {/* Caption & Editorial Metadata */}
                  <div className="mt-4 pt-3 border-t border-[#111111]/10">
                    <div className="flex items-center justify-between text-[11px] font-sans text-[#777777] uppercase tracking-[0.2em] mb-1.5">
                      <span>{project.category}</span>
                      <span>{project.gradeLevel}</span>
                    </div>

                    <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#111111] group-hover:opacity-75 transition-opacity">
                      {project.index}. {project.title}
                    </h3>

                    <p className="mt-1 text-xs font-sans text-[#555555] line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>

                    {/* Unboxed Metadata with Typographic Separators */}
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-sans text-[#888888]">
                      <span>Đối tượng: {project.gradeLevel}</span>
                      <span aria-hidden="true">·</span>
                      <span>Công cụ: {project.tools.join(', ')}</span>
                      <span aria-hidden="true">·</span>
                      <span>Năm {project.year}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* MAGAZINE SPREAD VIEW (Curated double-page pedagogical view) */
          <div className="space-y-16">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-[#F4F1EA] border border-[#111111]/15 p-6 sm:p-10 lg:p-14 cursor-pointer group hover:border-[#111111]/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Photo Side */}
                  <div className="lg:col-span-7">
                    <div className="border border-[#111111]/10 p-2 bg-[#FBFBF9]">
                      <EditorialImage
                        src={project.imageUrl}
                        alt={project.title}
                        aspectRatio="landscape"
                      />
                    </div>
                  </div>

                  {/* Editorial Text Side */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-sans tracking-[0.25em] text-[#888888] uppercase mb-3">
                        <span>HỒ SƠ BÀI DẠY {project.index}</span>
                        <span>{project.gradeLevel}</span>
                      </div>
                      
                      <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#111111] leading-tight mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="font-editorial-italic text-lg text-[#333333] mb-4">
                        "{project.subtitle}"
                      </p>

                      <p className="text-sm font-sans text-[#555555] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="border-t border-[#111111]/15 pt-4 space-y-2 text-xs font-sans text-[#666666]">
                      <div className="flex justify-between">
                        <span className="text-[#888888] uppercase">Môn Học</span>
                        <span className="text-[#111111] font-medium">{project.subject}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888888] uppercase">Phương Pháp</span>
                        <span className="text-[#111111] font-medium">{project.lessonPlanDetails.teachingMethod}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#888888] uppercase">Công Cụ Ứng Dụng</span>
                        <span className="text-[#111111] font-medium">{project.tools.join(' · ')}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#111111] group-hover:translate-x-1 transition-transform">
                      <span>Xem Chi Tiết Kế Hoạch Bài Dạy</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
