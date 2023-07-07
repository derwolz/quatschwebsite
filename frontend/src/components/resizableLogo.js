

import React, { useEffect, useRef, useState } from 'react';

function ResizableLogo({ src, alt, maxWidth }) {
  const [logoWidth, setLogoWidth] = useState(0);
  const logoRef = useRef(null);

  useEffect(() => {
    const updateLogoWidth = () => {
      const logo = logoRef.current;
      if (logo) {
        const width = Math.min(logo.offsetWidth, maxWidth);
        setLogoWidth(width);
      }
    };

    updateLogoWidth();
    window.addEventListener('resize', updateLogoWidth);

    return () => {
      window.removeEventListener('resize', updateLogoWidth);
    };
  }, [maxWidth]);

  return (
    <img
      ref={logoRef}
      src={src}
      alt={alt}
      style={{ width: `${165}px` }}
    />
  );
}

export default ResizableLogo;