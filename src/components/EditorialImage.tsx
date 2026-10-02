import React, { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'tall';
  caption?: string;
  priority?: boolean;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'portrait',
  caption,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
    tall: 'aspect-[2/3]',
  }[aspectRatio];

  return (
    <figure className="relative w-full overflow-hidden bg-[#F4F1EA]">
      <div className={`relative w-full overflow-hidden ${aspectClasses} ${className}`}>
        {/* Loading placeholder skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-[#EAE7E1] animate-pulse flex items-center justify-center">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#777777] font-sans">
              Archive Plate
            </span>
          </div>
        )}

        {hasError ? (
          /* Zero-broken-image editorial fallback */
          <div className="absolute inset-0 bg-[#F4F1EA] border border-[#EAE7E1] p-6 flex flex-col justify-between items-center text-center">
            <div className="w-full flex justify-between items-center text-[10px] tracking-[0.25em] text-[#888888] uppercase font-sans">
              <span>Plate No. ARCHIVE</span>
              <span>35mm Film</span>
            </div>
            
            <div className="my-auto py-8">
              <div className="w-12 h-12 mx-auto mb-3 border border-[#111111]/20 rounded-full flex items-center justify-center">
                <span className="font-serif-luxury italic text-lg text-[#111111]">EB</span>
              </div>
              <p className="font-serif-luxury text-base text-[#111111] max-w-[200px] leading-snug">
                {alt || 'Editorial Study'}
              </p>
              <div className="w-8 h-[1px] bg-[#111111]/30 mx-auto my-3" />
              <p className="text-[11px] font-sans tracking-widest text-[#777777] uppercase">
                Studio Archives
              </p>
            </div>

            <div className="text-[9px] font-sans tracking-[0.2em] text-[#999999] uppercase">
              Monochrome Series · Studio Paris
            </div>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-700 ease-out will-change-transform group-hover:scale-105 ${
              isLoaded ? 'opacity-100 filter grayscale contrast-[1.05]' : 'opacity-0'
            }`}
          />
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 text-[11px] font-sans text-[#666666] tracking-wide flex items-center justify-between">
          <span>{caption}</span>
          <span className="text-[#999999]">2025</span>
        </figcaption>
      )}
    </figure>
  );
};
