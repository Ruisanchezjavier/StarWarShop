import React, { useEffect, useState } from 'react';
import '../../styles/StarPositions.css';
import '../../styles/StarBackground.css';

export const StarBackground = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setOffsetX(e.clientX / window.innerWidth);
      setOffsetY(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const backgroundStyle = {
    transform: `translate(-${offsetX * 50}px, -${offsetY * 50}px)`,
  };

  return (
    <div className="star-background" style={backgroundStyle}>
      {[...Array(500)].map((_, i) => (
        <div key={i} className="star"></div>
      ))}
    </div>
  );
};
