'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image';
import { aboutSections } from '@/data/about-sections';

interface RotatingCircleProps {
  onSectionClick: (index: number) => void;
  isPaused?: boolean;
}

export const RotatingCircle: React.FC<RotatingCircleProps> = ({
  onSectionClick,
  isPaused = false,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const anglePerSection = 360 / aboutSections.length;

  const getSectionPath = (index: number): string => {
    const startAngle = index * anglePerSection - 90;
    const endAngle = (index + 1) * anglePerSection - 90;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = 200 + 200 * Math.cos(startRad);
    const y1 = 200 + 200 * Math.sin(startRad);
    const x2 = 200 + 200 * Math.cos(endRad);
    const y2 = 200 + 200 * Math.sin(endRad);

    return `M 200 200 L ${x1} ${y1} A 200 200 0 0 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square">
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: isPaused ? 0 : 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))' }}
        >
          <defs>
            {aboutSections.map((section, index) => (
              <React.Fragment key={section.id}>
                <clipPath id={`clip-${section.id}`}>
                  <path d={getSectionPath(index)} />
                </clipPath>
                <linearGradient
                  id={`gradient-${section.id}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: section.color, stopOpacity: 0.3 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: section.color, stopOpacity: 0.6 }}
                  />
                </linearGradient>
              </React.Fragment>
            ))}
          </defs>

          {aboutSections.map((section, index) => {
            const centerAngle = (index * anglePerSection + anglePerSection / 2 - 90) * (Math.PI / 180);
            const iconX = 200 + 120 * Math.cos(centerAngle);
            const iconY = 200 + 120 * Math.sin(centerAngle);

            return (
              <g key={section.id}>
                <path
                  d={getSectionPath(index)}
                  fill={`url(#gradient-${section.id})`}
                  stroke={section.color}
                  strokeWidth="3"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => onSectionClick(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0.85,
                    filter: hoveredIndex === index ? 'brightness(1.1)' : 'none',
                  }}
                />
                
                <text
                  x={iconX}
                  y={iconY - 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="40"
                  className="pointer-events-none"
                >
                  {section.icon}
                </text>
                
                <text
                  x={iconX}
                  y={iconY + 25}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="14"
                  fontWeight="700"
                  fill="#FFFFFF"
                  className="pointer-events-none"
                  style={{
                    filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))',
                  }}
                >
                  {section.shortTitle}
                </text>
              </g>
            );
          })}

          <circle
            cx="200"
            cy="200"
            r="70"
            fill="white"
            stroke="#FF9F0D"
            strokeWidth="4"
          />
          
          <foreignObject x="150" y="130" width="100" height="50">
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src="/images/logo.png" 
                alt="Streetman Flames Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
          </foreignObject>

          <text
            x="200"
            y="200"
            textAnchor="middle"
            fill="#0D0D0D"
            fontSize="16"
            fontWeight="700"
          >
            Streetman
          </text>
          <text
            x="200"
            y="220"
            textAnchor="middle"
            fill="#8B0000"
            fontSize="20"
            fontWeight="800"
          >
            Flames
          </text>
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1, rotate: -360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute top-4 right-4 text-6xl">🔥</div>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1, rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute bottom-8 left-8 text-5xl">🍗</div>
      </motion.div>
    </div>
  );
};