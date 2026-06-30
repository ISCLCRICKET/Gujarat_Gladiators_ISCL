
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, Award, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PlayerCard from '@/components/PlayerCard.jsx';
import FixtureCard from '@/components/FixtureCard.jsx';
import ResultCard from '@/components/ResultCard.jsx';
import NewsCard from '@/components/NewsCard.jsx';
import StatCard from '@/components/StatCard.jsx';
import GalleryImage from '@/components/GalleryImage.jsx';
import SponsorCard from '@/components/SponsorCard.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Button } from '@/components/ui/button';

function HomePage() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: Trophy, label: 'Matches Played', value: '47', suffix: '' },
    { icon: Target, label: 'Wins', value: '32', suffix: '' },
    { icon: Users, label: 'Win Percentage', value: '68', suffix: '%' },
    { icon: Award, label: 'Player of Match Awards', value: '18', suffix: '' },
    { icon: TrendingUp, label: 'Total Runs', value: '6847', suffix: '' },
    { icon: Zap, label: 'Total Wickets', value: '284', suffix: '' },
  ];

  const featuredPlayers = [
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
  ];

  const upcomingFixtures = [
    {
      id: 1,
      opponent: 'Mumbai Warriors',
      opponentLogo: 'https://via.placeholder.com/100',
      date: '2026-07-15T18:00:00',
      venue: 'Narendra Modi Stadium, Ahmedabad',
      status: 'Upcoming',
    },
    {
      id: 2,
      opponent: 'Delhi Dynamos',
      opponentLogo: 'https://via.placeholder.com/100',
      date: '2026-07-22T19:30:00',
      venue: 'Sardar Patel Stadium, Ahmedabad',
      status: 'Upcoming',
    },
  ];

  const latestResults = [
    {
      id: 1,
      opponent: 'Bangalore Blasters',
      winner: 'Gujarat Gladiators',
      ggScore: '187/6',
      ggOvers: '20',
      opponentScore: '164/8',
      opponentOvers: '20',
      resultText: 'Gujarat Gladiators won by 23 runs',
      date: '2026-06-25',
      venue: 'Narendra Modi Stadium, Ahmedabad',
      playerOfMatch: 'Arjun Mehta',
      summary: 'Brilliant batting display by Arjun Mehta (78 off 47) powered Gujarat Gladiators to a commanding victory.',
    },
    {
      id: 2,
      opponent: 'Chennai Champions',
      winner: 'Gujarat Gladiators',
      ggScore: '156/7',
      ggOvers: '20',
      opponentScore: '152/9',
      opponentOvers: '20',
      resultText: 'Gujarat Gladiators won by 4 runs',
      date: '2026-06-18',
      venue: 'Sardar Patel Stadium, Ahmedabad',
      playerOfMatch: 'Rohan Patel',
      summary: 'Nail-biting finish as Gujarat Gladiators defended a modest total with exceptional bowling in the final overs.',
    },
  ];

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1698823104125-2f924a37d3c0?w=800&h=800&fit=crop',
      title: 'Victory celebration',
      category: 'Match Day',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1597947713858-445b8462f631?w=800&h=800&fit=crop',
      title: 'Team huddle',
      category: 'Match Day',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1565787113675-4ebc851bfb55?w=800&h=800&fit=crop',
      title: 'Training session',
      category: 'Practice',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1684910494051-01121f5b14dd?w=800&h=800&fit=crop',
      title: 'Match action',
      category: 'Match Day',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1687709645969-0fb890c168c7?w=800&h=800&fit=crop',
      title: 'Team celebration',
      category: 'Celebrations',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1554731125-454408cd3c56?w=800&h=800&fit=crop',
      title: 'Behind the scenes',
      category: 'Behind the Scenes',
    },
  ];

  const latestNews = [
    {
      id: 1,
      title: 'Gujarat Gladiators secure thrilling victory in season opener',
      description: 'The team showcased exceptional performance in their first match of the season, defeating Mumbai Warriors by 23 runs.',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop',
      date: '2026-06-28',
      category: 'Match Report',
    },
    {
      id: 2,
      title: 'Captain Arjun Mehta named player of the tournament',
      description: 'Outstanding leadership and batting prowess earn Arjun Mehta the prestigious award for the third consecutive season.',
      image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=600&fit=crop',
      date: '2026-06-26',
      category: 'Awards',
    },
    {
      id: 3,
      title: 'New training facility inaugurated in Ahmedabad',
      description: 'State-of-the-art training complex opens, providing world-class facilities for the Gujarat Gladiators squad.',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop',
      date: '2026-06-24',
      category: 'Team News',
    },
  ];

  const sponsors = [
    { id: 1, name: 'Gujarat Tourism', category: 'Title Sponsor', logo: null },
    { id: 2, name: 'Adani Group', category: 'Principal Sponsor', logo: null },
    { id: 3, name: 'Tata Motors', category: 'Associate Sponsor', logo: null },
    { id: 4, name: 'Reliance Industries', category: 'Associate Sponsor', logo: null },
    { id: 5, name: 'HDFC Bank', category: 'Banking Partner', logo: null },
    { id: 6, name: 'Nike', category: 'Kit Sponsor', logo: null },
  ];

  return (
    <>
      <Helmet>
        <title>Gujarat Gladiators - ISCL Team | Home</title>
        <meta name="description" content="Gujarat Gladiators - Forged in strength, driven by glory, united for victory. Official ISCL team representing Gujarat in Softball Cricket." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
          {/* Animated Background */}
          <div ref={heroRef} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full animate-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider mb-6">
                    ISCL TEAM
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  GUJARAT<br />
                  <span className="text-gradient">GLADIATORS</span>
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
                  Forged in strength. Driven by glory. United for victory.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/players">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                      Meet the team
                    </Button>
                  </Link>
                  <Link to="/news">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                      Latest news
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Right Content - Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                  <img
                    src="https://horizons-cdn.hostinger.com/fc2b2249-4861-4c1b-9a02-e05cdaf47a54/9d821bb9e9b65ce6b6327fb12e6f2abf.png"
                    alt="Gujarat Gladiators Logo"
                    className="relative w-full max-w-md h-auto animate-float"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                  ABOUT US
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Representing Gujarat with pride
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Gujarat Gladiators embody the spirit of warriors, combining strength, unity, and discipline to compete at the highest level in the Indian Softball Cricket League.
                  </p>
                  <p>
                    Our team represents the vibrant culture and indomitable spirit of Gujarat, bringing together talented athletes who share a passion for excellence and a commitment to victory.
                  </p>
                  <p>
                    With a focus on teamwork, strategic gameplay, and relentless determination, we strive to make our state proud in every match we play.
                  </p>
                </div>
                <Link to="/about">
                  <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Learn more about us
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden luxury-shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1698823104109-cb254da3a3cf?w=800&h=800&fit=crop"
                    alt="Gujarat Gladiators team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Statistics */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                TEAM STATS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Performance highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Players */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                  OUR SQUAD
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Featured players
                </h2>
              </div>
              <Link to="/players">
                <Button variant="outline" className="hidden md:flex">
                  View all players
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredPlayers.map((player, index) => (
                <PlayerCard key={player.id} player={player} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <Link to="/players">
                <Button variant="outline">
                  View all players
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Fixtures */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                  UPCOMING MATCHES
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Next fixtures
                </h2>
              </div>
              <Link to="/fixtures">
                <Button variant="outline" className="hidden md:flex">
                  View all fixtures
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingFixtures.map((fixture, index) => (
                <FixtureCard key={fixture.id} fixture={fixture} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <Link to="/fixtures">
                <Button variant="outline">
                  View all fixtures
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Results */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                  RECENT MATCHES
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Latest results
                </h2>
              </div>
              <Link to="/results">
                <Button variant="outline" className="hidden md:flex">
                  View all results
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {latestResults.map((result, index) => (
                <ResultCard key={result.id} result={result} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <Link to="/results">
                <Button variant="outline">
                  View all results
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Team Gallery */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                  GALLERY
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Moments captured
                </h2>
              </div>
              <Link to="/gallery">
                <Button variant="outline" className="hidden md:flex">
                  View full gallery
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <GalleryImage key={image.id} image={image} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <Link to="/gallery">
                <Button variant="outline">
                  View full gallery
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                  NEWS & UPDATES
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  Latest news
                </h2>
              </div>
              <Link to="/news">
                <Button variant="outline" className="hidden md:flex">
                  View all news
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <Link to="/news">
                <Button variant="outline">
                  View all news
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                OUR PARTNERS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Proud sponsors
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {sponsors.map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                  GET IN TOUCH
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Contact us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Have questions or want to connect with the Gujarat Gladiators? Send us a message and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>

              <div className="space-y-8">
                <div className="aspect-video rounded-2xl overflow-hidden luxury-shadow-lg bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9876543210123!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzQnMTcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gujarat Gladiators Location"
                  />
                </div>

                <div className="bg-card rounded-2xl p-8 luxury-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-6">Follow us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                      aria-label="YouTube"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
