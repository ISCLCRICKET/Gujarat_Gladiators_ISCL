
import React from 'react';
import { motion } from 'framer-motion';

function SponsorCard({ sponsor, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl p-8 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
    >
      <div className="relative w-full h-24 flex items-center justify-center">
        {sponsor.logo ? (
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        ) : (
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground mb-1">{sponsor.name}</div>
            <div className="text-sm text-muted-foreground">{sponsor.category}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default SponsorCard;
