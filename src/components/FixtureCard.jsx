
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

function FixtureCard({ fixture, index = 0 }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const matchDate = new Date(fixture.date);
      const now = new Date();
      const difference = matchDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);

        if (days > 0) {
          setTimeLeft(`${days}d ${hours}h`);
        } else if (hours > 0) {
          setTimeLeft(`${hours}h ${minutes}m`);
        } else {
          setTimeLeft(`${minutes}m`);
        }
      } else {
        setTimeLeft('Match started');
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [fixture.date]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Match Teams */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">GG</span>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">Gujarat Gladiators</div>
            <div className="text-sm text-muted-foreground">Home</div>
          </div>
        </div>
        <div className="text-2xl font-bold text-muted-foreground">VS</div>
        <div className="flex items-center gap-4">
          <div>
            <div className="text-lg font-bold text-foreground text-right">{fixture.opponent}</div>
            <div className="text-sm text-muted-foreground text-right">Away</div>
          </div>
          <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center">
            <img
              src={fixture.opponentLogo}
              alt={fixture.opponent}
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Match Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Calendar size={16} className="text-primary" />
          <span>{new Date(fixture.date).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Clock size={16} className="text-primary" />
          <span>{new Date(fixture.date).toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <MapPin size={16} className="text-primary" />
          <span>{fixture.venue}</span>
        </div>
      </div>

      {/* Countdown & Status */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-foreground">{fixture.status}</span>
        </div>
        <div className="px-4 py-2 rounded-lg bg-primary/10">
          <span className="text-sm font-bold text-primary">{timeLeft}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default FixtureCard;
