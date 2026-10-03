import React, { useState } from 'react';
import { Hammer } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel = 'Home Improvement & Property Maintenance',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#F5F8FB] border border-[#195490]/15 p-8 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 flex items-center justify-center bg-white border border-[#195490]/20 text-[#FE800F] rounded-md mb-3">
          <Hammer className="w-6 h-6" />
        </div>
        <span className="text-sm font-semibold text-[#195490] max-w-xs">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
