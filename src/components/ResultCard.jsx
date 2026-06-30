
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Award } from 'lucide-react';

function ResultCard({ result, index = 0 }) {
  const isWinner = result.winner === 'Gujarat Gladiators';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-card rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-300 ${
        isWinner ? 'ring-2 ring-primary/20' : ''
      }`}
    >
      {/* Winner Banner */}
      {isWinner && (
        <div className="bg-primary px-6 py-3 flex items-center justify-center gap-2">
          <Trophy size={18} className="text-[#0A0A0A]" />
          <span className="text-sm font-bold text-[#0A0A0A] tracking-wide">MATCH WON</span>
        </div>
      )}

      <div className="p-6">
        {/* Match Teams & Scores */}
        <div className="space-y-4 mb-6">
          {/* Gujarat Gladiators */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">GG</span>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Gujarat Gladiators</div>
                <div className="text-sm text-muted-foreground">{result.ggOvers} overs</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground">{result.ggScore}</div>
          </div>

          {/* Opponent */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <span className="text-xl font-bold text-muted-foreground">OP</span>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">{result.opponent}</div>
                <div className="text-sm text-muted-foreground">{result.opponentOvers} overs</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-foreground">{result.opponentScore}</div>
          </div>
        </div>

        {/* Match Result */}
        <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-sm font-semibold text-center text-foreground">
            {result.resultText}
          </p>
        </div>

        {/* Match Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Calendar size={16} className="text-primary" />
            <span>{new Date(result.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            <span>{result.venue}</span>
          </div>
          {result.playerOfMatch && (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Award size={16} className="text-primary" />
              <span>Player of the Match: <span className="font-semibold text-foreground">{result.playerOfMatch}</span></span>
            </div>
          )}
        </div>

        {/* Match Summary */}
        {result.summary && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {result.summary}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default ResultCard;
