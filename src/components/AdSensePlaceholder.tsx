import { useState, useEffect } from 'react';

interface AdProps {
  format?: 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

export default function AdSensePlaceholder({ format = 'horizontal', className = '' }: AdProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const heights: Record<string, string> = {
    horizontal: 'min-h-[90px] md:min-h-[100px]',
    vertical: 'min-h-[250px] md:min-h-[300px]',
    rectangle: 'min-h-[250px] md:min-h-[280px]',
  };

  if (!hydrated) {
    return <div className={`w-full ${heights[format]} bg-gray-50 rounded-lg ${className}`} />;
  }

  return (
    <div className={`w-full ${heights[format]} bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200 ${className}`}>
      <p className="text-xs text-gray-400 text-center px-4">
        Publicidade
      </p>
    </div>
  );
}
