
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SponsorCard from '@/components/SponsorCard.jsx';

function SponsorsPage() {
  const titleSponsors = [
    { id: 1, name: 'Gujarat Tourism', category: 'Title Sponsor', logo: null },
  ];

  const principalSponsors = [
    { id: 2, name: 'Adani Group', category: 'Principal Sponsor', logo: null },
    { id: 3, name: 'Tata Motors', category: 'Principal Sponsor', logo: null },
  ];

  const associateSponsors = [
    { id: 4, name: 'Reliance Industries', category: 'Associate Sponsor', logo: null },
    { id: 5, name: 'HDFC Bank', category: 'Associate Sponsor', logo: null },
    { id: 6, name: 'Airtel', category: 'Associate Sponsor', logo: null },
    { id: 7, name: 'Coca-Cola', category: 'Associate Sponsor', logo: null },
  ];

  const officialPartners = [
    { id: 8, name: 'Nike', category: 'Kit Sponsor', logo: null },
    { id: 9, name: 'MRF', category: 'Equipment Partner', logo: null },
    { id: 10, name: 'Gatorade', category: 'Hydration Partner', logo: null },
    { id: 11, name: 'Star Sports', category: 'Broadcast Partner', logo: null },
  ];

  return (
    <>
      <Helmet>
        <title>Sponsors - Gujarat Gladiators | Our Partners</title>
        <meta name="description" content="Meet the proud sponsors and partners of Gujarat Gladiators in the Indian Softball Cricket League." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1920&h=1080&fit=crop"
              alt="Gujarat Gladiators sponsors"
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
                OUR PARTNERS
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Proud<br />
                <span className="text-gradient">Sponsors</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Together we build success and create lasting partnerships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Title Sponsor */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                TITLE SPONSOR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our title sponsor
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              {titleSponsors.map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Principal Sponsors */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                PRINCIPAL SPONSORS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Principal partners
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {principalSponsors.map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Associate Sponsors */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                ASSOCIATE SPONSORS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Associate partners
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {associateSponsors.map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Official Partners */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                OFFICIAL PARTNERS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Official partners
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {officialPartners.map((sponsor, index) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                BECOME A PARTNER
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Join our winning team
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Partner with Gujarat Gladiators and align your brand with excellence, passion, and the spirit of victory. Reach millions of cricket fans across India and beyond.
              </p>
              <div className="bg-card rounded-2xl p-8 luxury-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Partnership opportunities
                </h3>
                <p className="text-muted-foreground mb-6">
                  For sponsorship and partnership inquiries, please contact our commercial team.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">
                    <span className="font-semibold">Email:</span> partnerships@gujaratgladiators.com
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">Phone:</span> +91 98765 43210
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SponsorsPage;
