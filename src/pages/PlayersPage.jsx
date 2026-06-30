
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PlayerCard from '@/components/PlayerCard.jsx';
import { Button } from '@/components/ui/button';

function PlayersPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Batsman', 'Bowler', 'All-Rounder', 'Wicket Keeper'];

  const players = [
    {
      id: 1,
      name: 'Arjun Mehta',
      role: 'Batsman',
      jerseyNumber: 10,
      isCaptain: true,
      nationality: 'India',
      battingStyle: 'Right-hand bat',
      bowlingStyle: null,
      image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=600&fit=crop',
    },
    {
      id: 2,
      name: 'Rohan Patel',
      role: 'All-Rounder',
      jerseyNumber: 7,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Right-hand bat',
      bowlingStyle: 'Right-arm fast',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=600&fit=crop',
    },
    {
      id: 3,
      name: 'Karan Shah',
      role: 'Bowler',
      jerseyNumber: 23,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Right-hand bat',
      bowlingStyle: 'Right-arm medium',
      image: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?w=400&h=600&fit=crop',
    },
    {
      id: 4,
      name: 'Vikram Desai',
      role: 'Wicket Keeper',
      jerseyNumber: 1,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Left-hand bat',
      bowlingStyle: null,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    },
    {
      id: 5,
      name: 'Aditya Kumar',
      role: 'Batsman',
      jerseyNumber: 18,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Left-hand bat',
      bowlingStyle: null,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
    },
    {
      id: 6,
      name: 'Rahul Sharma',
      role: 'Bowler',
      jerseyNumber: 11,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Right-hand bat',
      bowlingStyle: 'Left-arm spin',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop',
    },
    {
      id: 7,
      name: 'Nikhil Joshi',
      role: 'All-Rounder',
      jerseyNumber: 5,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Right-hand bat',
      bowlingStyle: 'Right-arm off-spin',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop',
    },
    {
      id: 8,
      name: 'Sanjay Rao',
      role: 'Batsman',
      jerseyNumber: 14,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Right-hand bat',
      bowlingStyle: null,
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=600&fit=crop',
    },
    {
      id: 9,
      name: 'Manish Verma',
      role: 'Bowler',
      jerseyNumber: 21,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Right-hand bat',
      bowlingStyle: 'Right-arm fast',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=600&fit=crop',
    },
    {
      id: 10,
      name: 'Deepak Singh',
      role: 'All-Rounder',
      jerseyNumber: 8,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Left-hand bat',
      bowlingStyle: 'Left-arm medium',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop',
    },
    {
      id: 11,
      name: 'Amit Gupta',
      role: 'Batsman',
      jerseyNumber: 3,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Right-hand bat',
      bowlingStyle: null,
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=600&fit=crop',
    },
    {
      id: 12,
      name: 'Suresh Nair',
      role: 'Bowler',
      jerseyNumber: 19,
      isCaptain: false,
      nationality: 'India',
      battingStyle: 'Right-hand bat',
      bowlingStyle: 'Right-arm leg-spin',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop',
    },
  ];

  const filteredPlayers = activeFilter === 'All' 
    ? players 
    : players.filter(player => player.role === activeFilter);

  return (
    <>
      <Helmet>
        <title>Players - Gujarat Gladiators | ISCL Team Squad</title>
        <meta name="description" content="Meet the Gujarat Gladiators squad - talented athletes representing Gujarat in the Indian Softball Cricket League." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1920&h=1080&fit=crop"
              alt="Gujarat Gladiators players"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider mb-6">
                OUR SQUAD
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Meet the<br />
                <span className="text-gradient">Gladiators</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Talented athletes united by passion, driven by excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Players Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  variant={activeFilter === filter ? 'default' : 'outline'}
                  className={activeFilter === filter 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'border-border hover:bg-muted'
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Players Grid */}
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredPlayers.map((player, index) => (
                <PlayerCard key={player.id} player={player} index={index} />
              ))}
            </motion.div>

            {filteredPlayers.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No players found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PlayersPage;
