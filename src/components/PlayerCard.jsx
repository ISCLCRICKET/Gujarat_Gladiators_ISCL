
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

function PlayerCard({ player, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/players/${player.id}`}
        className="group block bg-card rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-300 hover:-translate-y-2"
      >
        {/* Player Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Jersey Number Overlay */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl font-bold text-[#0A0A0A]">{player.jerseyNumber}</span>
          </div>
          {/* Captain Badge */}
          {player.isCaptain && (
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center gap-1.5">
              <Crown size={14} className="text-[#0A0A0A]" />
              <span className="text-xs font-semibold text-[#0A0A0A] tracking-wide">CAPTAIN</span>
            </div>
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
        </div>

        {/* Player Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
            {player.name}
          </h3>
          <p className="text-sm font-medium text-primary mb-3">{player.role}</p>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Nationality</span>
              <span className="font-medium text-foreground">{player.nationality}</span>
            </div>
            <div className="flex justify-between">
              <span>Batting</span>
              <span className="font-medium text-foreground">{player.battingStyle}</span>
            </div>
            {player.bowlingStyle && (
              <div className="flex justify-between">
                <span>Bowling</span>
                <span className="font-medium text-foreground">{player.bowlingStyle}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default PlayerCard;
