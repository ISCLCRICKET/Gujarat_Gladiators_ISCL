
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FixtureCard from '@/components/FixtureCard.jsx';

function FixturesPage() {
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
    {
      id: 3,
      opponent: 'Bangalore Blasters',
      opponentLogo: 'https://via.placeholder.com/100',
      date: '2026-07-29T18:00:00',
      venue: 'Narendra Modi Stadium, Ahmedabad',
      status: 'Upcoming',
    },
    {
      id: 4,
      opponent: 'Chennai Champions',
      opponentLogo: 'https://via.placeholder.com/100',
      date: '2026-08-05T19:30:00',
      venue: 'M. A. Chidambaram Stadium, Chennai',
      status: 'Upcoming',
    },
    {
      id: 5,
      opponent: 'Kolkata Knights',
      opponentLogo: 'https://via.placeholder.com/100',
      date: '2026-08-12T18:00:00',
      venue: 'Eden Gardens, Kolkata',
      status: 'Upcoming',
    },
    {
      id: 6,
      opponent: 'Hyderabad Heroes',
      opponentLogo: 'https://via.placeholder.com/100',
      date: '2026-08-19T19:30:00',
      venue: 'Sardar Patel Stadium, Ahmedabad',
      status: 'Upcoming',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Fixtures - Gujarat Gladiators | Upcoming Matches</title>
        <meta name="description" content="View upcoming fixtures and match schedule for Gujarat Gladiators in the Indian Softball Cricket League." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1920&h=1080&fit=crop"
              alt="Cricket stadium"
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
                MATCH SCHEDULE
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Upcoming<br />
                <span className="text-gradient">Fixtures</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Mark your calendars for the next Gujarat Gladiators matches.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Fixtures */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Upcoming matches
              </h2>
              <p className="text-muted-foreground">
                Get ready to support Gujarat Gladiators in these exciting upcoming fixtures.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingFixtures.map((fixture, index) => (
                <FixtureCard key={fixture.id} fixture={fixture} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* League Table Placeholder */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                League standings
              </h2>
              <p className="text-muted-foreground">
                Current position in the ISCL league table.
              </p>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden luxury-shadow">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Position</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Team</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Played</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Won</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Lost</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="bg-primary/5">
                      <td className="px-6 py-4 text-sm font-bold text-primary">2</td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">Gujarat Gladiators</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">47</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">32</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">15</td>
                      <td className="px-6 py-4 text-sm text-center font-bold text-primary">64</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">1</td>
                      <td className="px-6 py-4 text-sm text-foreground">Mumbai Warriors</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">48</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">35</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">13</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">70</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">3</td>
                      <td className="px-6 py-4 text-sm text-foreground">Delhi Dynamos</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">46</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">29</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">17</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">58</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">4</td>
                      <td className="px-6 py-4 text-sm text-foreground">Bangalore Blasters</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">47</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">27</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">20</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">54</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-muted-foreground">5</td>
                      <td className="px-6 py-4 text-sm text-foreground">Chennai Champions</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">46</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">24</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">22</td>
                      <td className="px-6 py-4 text-sm text-center text-foreground">48</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FixturesPage;
