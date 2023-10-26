"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  src: string;
}

export const LazyImage = ({ src }: LazyImageProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    const iObserver = new IntersectionObserver((entries, self) => {
      entries.forEach(({ isIntersecting }) => {
        setShouldLoad(isIntersecting);
        // You can remove this block to hide images already loaded outside the screen.
        if (isIntersecting) {
          self.disconnect();
        }
      });
    }, {});
    ref.current && iObserver.observe(ref.current);
    return () => {
      iObserver.disconnect();
    };
  }, []);

  return shouldLoad ? (
    <img className="w-full h-full object-cover" src={src} /> // eslint-disable-line
  ) : (
    <img ref={ref} /> // eslint-disable-line
  );
};
