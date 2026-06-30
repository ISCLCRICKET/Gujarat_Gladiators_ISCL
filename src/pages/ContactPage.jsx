
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', handle: '@gujaratgladiators' },
    { icon: Twitter, href: '#', label: 'Twitter', handle: '@gg_official' },
    { icon: Facebook, href: '#', label: 'Facebook', handle: 'GujaratGladiators' },
    { icon: Youtube, href: '#', label: 'YouTube', handle: 'Gujarat Gladiators' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Gujarat Gladiators | Get in Touch</title>
        <meta name="description" content="Contact Gujarat Gladiators - reach out to our team for inquiries, partnerships, or fan engagement opportunities." />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A0A0A]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1920&h=1080&fit=crop"
              alt="Contact Gujarat Gladiators"
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
                GET IN TOUCH
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Contact<br />
                <span className="text-gradient">Us</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                We'd love to hear from you. Reach out to the Gujarat Gladiators team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Send us a message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Contact information
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of these channels.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:info@gujaratgladiators.com"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        info@gujaratgladiators.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+919876543210"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        Gujarat Gladiators Headquarters<br />
                        Ahmedabad, Gujarat, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-8 border-t border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6">Follow us</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-muted transition-colors duration-200 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-200">
                          <social.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-200" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground">{social.label}</div>
                          <div className="text-sm text-muted-foreground">{social.handle}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find us
              </h2>
              <p className="text-muted-foreground">
                Visit our headquarters in Ahmedabad, Gujarat.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-video rounded-2xl overflow-hidden luxury-shadow-lg bg-muted"
            >
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
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
