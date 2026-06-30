
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

function GalleryImage({ image, index = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group relative aspect-square overflow-hidden rounded-2xl bg-muted cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Zoom Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <ZoomIn size={24} className="text-[#0A0A0A]" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-primary/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-semibold text-[#0A0A0A] tracking-wide">{image.category}</span>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/95 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto rounded-2xl"
              />
              {image.title && (
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-sm text-white/70">{image.category}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default GalleryImage;
