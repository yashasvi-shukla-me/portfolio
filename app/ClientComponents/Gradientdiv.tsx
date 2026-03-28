"use client";
import React, { ReactNode, useEffect, useState } from "react";

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}

interface GradientdivProps {
  children: ReactNode;
  className: string;
}

const Gradientdiv: React.FC<GradientdivProps> = ({ children, className }) => {
  const { x, y } = useMousePosition();

  return (
    <div
      style={{
        background: `radial-gradient(circle at ${x}px ${y}px, #111E42 1%, #101932 25%)`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Gradientdiv;
