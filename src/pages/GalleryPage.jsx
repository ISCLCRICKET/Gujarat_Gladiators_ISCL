
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryImage from '@/components/GalleryImage.jsx';
import { Button } from '@/components/ui/button';

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Match Day', 'Practice', 'Celebrations', 'Behind the Scenes', 'Fans'];

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
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1698823104109-cb254da3a3cf?w=800&h=800&fit=crop',
      title: 'Team photo',
      category: 'Match Day',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=800&fit=crop',
      title: 'Stadium atmosphere',
      category: 'Fans',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=800&fit=crop',
      title: 'Player portrait',
      category: 'Behind the Scenes',
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=800&fit=crop',
      title: 'Practice drills',
      category: 'Practice',
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&h=800&fit=crop',
      title: 'Captain leading',
      category: 'Match Day',
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&h=800&fit=crop',
      title: 'Trophy moment',
      category: 'Celebrations',
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?w=800&h=800&fit=crop',
      title: 'Bowling action',
      category: 'Match Day',
    },
    {
      id: 14,
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',
      title: 'Wicket keeper',
      category: 'Match Day',
    },
    {
      id: 15,
      url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop',
      title: 'Team meeting',
      category: 'Behind the Scenes',
    },
    {
      id: 16,
      url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop',
      title: 'Fitness training',
      category: 'Practice',
    },
    {
      id: 17,
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop',
      title: 'Fan support',
      category: 'Fans',
    },
    {
      id: 18,
      url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&h=800&fit=crop',
      title: 'Victory lap',
      category: 'Celebrations',
    },
  ];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Gallery - Gujarat Gladiators | Photos & Moments</title>
        <meta name="description" content="Explore the Gujarat Gladiators gallery - match moments, celebrations, training sessions, and behind-the-scenes photos." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1698823104125-2f924a37d3c0?w=1920&h=1080&fit=crop"
              alt="Gujarat Gladiators gallery"
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
                PHOTO GALLERY
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Moments<br />
                <span className="text-gradient">Captured</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Relive the excitement through our collection of memorable moments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
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

            {/* Gallery Grid */}
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredImages.map((image, index) => (
                <GalleryImage key={image.id} image={image} index={index} />
              ))}
            </motion.div>

            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default GalleryPage;
