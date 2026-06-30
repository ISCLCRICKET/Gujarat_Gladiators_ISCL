
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

function NewsCard({ article, index = 0, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-card rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Featured Image */}
      <div className={`relative overflow-hidden bg-muted ${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-primary/90 backdrop-blur-sm">
          <span className="text-xs font-semibold text-[#0A0A0A] tracking-wide">{article.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        {/* Date */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar size={14} className="text-primary" />
          <time className="text-sm text-muted-foreground">
            {new Date(article.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          {article.title}
        </h3>

        {/* Description */}
        <p className={`text-muted-foreground leading-relaxed mb-4 ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {article.description}
        </p>

        {/* Read More Link */}
        <Link
          to={`/news/${article.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
        >
          Read more
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

export default NewsCard;
