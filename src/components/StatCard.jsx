
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function StatCard({ stat, index = 0 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(stat.value);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-8 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
    >
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
        <stat.icon size={32} className="text-primary" />
      </div>

      {/* Value */}
      <div className="mb-2">
        <span className="text-4xl md:text-5xl font-bold text-foreground">
          {count}
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="text-sm font-medium text-muted-foreground tracking-wide">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default StatCard;
