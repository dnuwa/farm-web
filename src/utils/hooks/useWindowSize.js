import React, { useState, useEffect, useLayoutEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 800,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      let changeWindowSize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener('resize', changeWindowSize);
      return () => {
        window.removeEventListener('resize', changeWindowSize);
      };
    }
  }, []);

  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }, [window.innerWidth]);
  }
  return windowSize;
};

export default useWindowSize;
