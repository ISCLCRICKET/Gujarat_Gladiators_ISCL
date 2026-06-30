
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, Heart, Zap, Shield } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  const values = [
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We strive for excellence in every match, training session, and team interaction.',
    },
    {
      icon: Target,
      title: 'Discipline',
      description: 'Discipline forms the foundation of our success, both on and off the field.',
    },
    {
      icon: Users,
      title: 'Unity',
      description: 'Together we are stronger. Unity drives our team spirit and collective success.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for the game fuels our determination to compete at the highest level.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace modern techniques and strategies to stay ahead of the competition.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We play with honor, respect, and unwavering commitment to fair play.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Gujarat Gladiators | ISCL Team</title>
        <meta name="description" content="Learn about Gujarat Gladiators - our history, mission, vision, and core values. Representing Gujarat with pride in the Indian Softball Cricket League." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1920&h=1080&fit=crop"
              alt="Gujarat Gladiators team"
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
                ABOUT US
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                The story of<br />
                <span className="text-gradient">Gujarat Gladiators</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Forged in the spirit of warriors, united by passion, driven by excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team History */}
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
                  OUR HISTORY
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  A legacy of strength and glory
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2024, Gujarat Gladiators emerged as a powerhouse in the Indian Softball Cricket League, representing the vibrant state of Gujarat with pride and determination.
                  </p>
                  <p>
                    Our journey began with a vision to create a team that embodies the warrior spirit of gladiators - fierce, disciplined, and united in pursuit of victory. From our first match to our latest triumph, we have consistently demonstrated excellence on the field.
                  </p>
                  <p>
                    With a roster of talented athletes from across India, we have built a reputation for strategic gameplay, exceptional teamwork, and an unwavering commitment to representing Gujarat at the highest level of competition.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden luxury-shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=600&fit=crop"
                    alt="Team celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-12 luxury-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To represent Gujarat with honor and excellence in the Indian Softball Cricket League, inspiring the next generation of athletes through our commitment to teamwork, discipline, and sporting excellence. We aim to build a legacy that makes our state proud while promoting the spirit of cricket across communities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card rounded-2xl p-12 luxury-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Trophy size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Our vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most respected and successful team in the ISCL, known for our exceptional talent, strategic brilliance, and unwavering team spirit. We envision Gujarat Gladiators as a symbol of excellence that inspires pride in our state and sets new standards in softball cricket.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                CORE VALUES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What drives us forward
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our values shape every decision we make and every action we take, both on and off the field.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Gujarat Gladiators */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden luxury-shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop"
                    alt="Training session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                  WHY CHOOSE US
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  What sets us apart
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Trophy size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Championship mindset</h4>
                      <p className="text-muted-foreground">
                        Every player on our roster is committed to winning and bringing glory to Gujarat.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">World-class talent</h4>
                      <p className="text-muted-foreground">
                        Our squad features some of the finest athletes in softball cricket, each bringing unique skills and experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Strategic excellence</h4>
                      <p className="text-muted-foreground">
                        Our coaching staff employs cutting-edge strategies and analytics to maximize performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">Community connection</h4>
                      <p className="text-muted-foreground">
                        We are deeply rooted in Gujarat's communities, inspiring young athletes and giving back to our fans.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Philosophy */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-6">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Play like gladiators, win like champions
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                At Gujarat Gladiators, we believe that true victory comes from the perfect blend of individual excellence and collective strength. Like the gladiators of ancient times, we face every challenge with courage, discipline, and an unwavering will to succeed. Our philosophy is simple: train harder, play smarter, and never give up.
              </p>
              <div className="inline-block px-8 py-4 rounded-xl bg-primary/5 border-2 border-primary/20">
                <p className="text-2xl font-bold text-primary">
                  "Strength in unity, glory in victory"
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
