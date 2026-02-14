import React from 'react';
import { useInView } from '../hooks/useInView';

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-in';
  delay?: number;
  duration?: number;
}

const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`animate-base ${isInView ? `animate-${animation}` : 'animate-hidden'} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimateIn;
