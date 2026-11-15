import React, { useState } from 'react';
import { MissionMark } from './MissionMark';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  objectPosition?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle,
  objectPosition = 'center',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full min-h-[160px] bg-stone-200/80 flex flex-col items-center justify-center p-6 text-center text-stone-600"
        role="img"
        aria-label={alt}
      >
        <MissionMark className="w-10 h-10 text-forest-900/50 mb-2" />
        <p className="text-xs font-medium tracking-wide text-stone-700 max-w-[20ch]">
          {fallbackTitle || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      style={{ objectPosition }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};
