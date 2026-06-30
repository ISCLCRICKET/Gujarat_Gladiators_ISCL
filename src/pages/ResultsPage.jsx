
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ResultCard from '@/components/ResultCard.jsx';

function ResultsPage() {
  const results = [
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
    {
      id: 3,
      opponent: 'Mumbai Warriors',
      winner: 'Mumbai Warriors',
      ggScore: '142/8',
      ggOvers: '20',
      opponentScore: '145/5',
      opponentOvers: '19.2',
      resultText: 'Mumbai Warriors won by 5 wickets',
      date: '2026-06-11',
      venue: 'Wankhede Stadium, Mumbai',
      playerOfMatch: 'Rohit Sharma (MW)',
      summary: 'Despite a valiant effort, Gujarat Gladiators fell short as Mumbai Warriors chased down the target with ease.',
    },
    {
      id: 4,
      opponent: 'Kolkata Knights',
      winner: 'Gujarat Gladiators',
      ggScore: '178/4',
      ggOvers: '20',
      opponentScore: '165/9',
      opponentOvers: '20',
      resultText: 'Gujarat Gladiators won by 13 runs',
      date: '2026-06-04',
      venue: 'Narendra Modi Stadium, Ahmedabad',
      playerOfMatch: 'Vikram Desai',
      summary: 'Explosive innings by Vikram Desai (62 off 38) set up a comfortable win for Gujarat Gladiators.',
    },
    {
      id: 5,
      opponent: 'Hyderabad Heroes',
      winner: 'Gujarat Gladiators',
      ggScore: '193/5',
      ggOvers: '20',
      opponentScore: '176/7',
      opponentOvers: '20',
      resultText: 'Gujarat Gladiators won by 17 runs',
      date: '2026-05-28',
      venue: 'Rajiv Gandhi International Stadium, Hyderabad',
      playerOfMatch: 'Karan Shah',
      summary: 'Outstanding bowling performance by Karan Shah (4/28) restricted Hyderabad Heroes to a below-par total.',
    },
    {
      id: 6,
      opponent: 'Delhi Dynamos',
      winner: 'Gujarat Gladiators',
      ggScore: '168/6',
      ggOvers: '20',
      opponentScore: '162/8',
      opponentOvers: '20',
      resultText: 'Gujarat Gladiators won by 6 runs',
      date: '2026-05-21',
      venue: 'Arun Jaitley Stadium, Delhi',
      playerOfMatch: 'Nikhil Joshi',
      summary: 'All-round performance by Nikhil Joshi (45 runs, 2 wickets) guided Gujarat Gladiators to victory.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Results - Gujarat Gladiators | Match Results</title>
        <meta name="description" content="View latest match results and scorecards for Gujarat Gladiators in the Indian Softball Cricket League." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1920&h=1080&fit=crop"
              alt="Cricket celebration"
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
                MATCH RESULTS
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Recent<br />
                <span className="text-gradient">Results</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Relive the excitement of Gujarat Gladiators' recent matches.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest results
              </h2>
              <p className="text-muted-foreground">
                Complete scorecards and match summaries from recent Gujarat Gladiators fixtures.
              </p>
            </div>

            <div className="space-y-8">
              {results.map((result, index) => (
                <ResultCard key={result.id} result={result} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ResultsPage;
