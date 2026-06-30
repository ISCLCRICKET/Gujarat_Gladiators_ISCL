
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import NewsCard from '@/components/NewsCard.jsx';

function NewsPage() {
  const featuredArticle = {
    id: 1,
    title: 'Gujarat Gladiators secure thrilling victory in season opener',
    description: 'The team showcased exceptional performance in their first match of the season, defeating Mumbai Warriors by 23 runs in a spectacular display of batting and bowling prowess.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=800&fit=crop',
    date: '2026-06-28',
    category: 'Match Report',
  };

  const recentArticles = [
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
    {
      id: 4,
      title: 'Rohan Patel achieves career-best bowling figures',
      description: 'All-rounder Rohan Patel takes 5 wickets for 18 runs in a stunning performance against Chennai Champions.',
      image: 'https://images.unsplash.com/photo-1698823104125-2f924a37d3c0?w=800&h=600&fit=crop',
      date: '2026-06-22',
      category: 'Player News',
    },
    {
      id: 5,
      title: 'Gujarat Gladiators announce community outreach program',
      description: 'Team launches initiative to promote cricket in rural Gujarat, providing coaching and equipment to young athletes.',
      image: 'https://images.unsplash.com/photo-1597947713858-445b8462f631?w=800&h=600&fit=crop',
      date: '2026-06-20',
      category: 'Community',
    },
    {
      id: 6,
      title: 'Record-breaking attendance at Narendra Modi Stadium',
      description: "Over 85,000 fans pack the stadium to witness Gujarat Gladiators' victory, setting a new ISCL attendance record.",
      image: 'https://images.unsplash.com/photo-1565787113675-4ebc851bfb55?w=800&h=600&fit=crop',
      date: '2026-06-18',
      category: 'Match Report',
    },
    {
      id: 7,
      title: 'Young talent Deepak Singh earns national call-up',
      description: 'Gujarat Gladiators all-rounder selected for India national team following impressive ISCL performances.',
      image: 'https://images.unsplash.com/photo-1684910494051-01121f5b14dd?w=800&h=600&fit=crop',
      date: '2026-06-16',
      category: 'Player News',
    },
  ];

  return (
    <>
      <Helmet>
        <title>News - Gujarat Gladiators | Latest Updates</title>
        <meta name="description" content="Stay updated with the latest news, match reports, and announcements from Gujarat Gladiators in the Indian Softball Cricket League." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1920&h=1080&fit=crop"
              alt="Gujarat Gladiators news"
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
                NEWS & UPDATES
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Latest<br />
                <span className="text-gradient">News</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Stay informed with the latest updates from Gujarat Gladiators.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured story
              </h2>
            </div>

            <NewsCard article={featuredArticle} index={0} featured={true} />
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Recent articles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default NewsPage;
