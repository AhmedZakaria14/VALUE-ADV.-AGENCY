"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

const allImages = Array.from({ length: 55 }, (_, i) => ({
  src: `/images/whatsapp-${i + 1}.jpeg`,
  alt: `أعمال وكالة فاليو للدعاية والإعلان بالرياض - مشروع ${i + 1}`
}));

export default function PortfolioGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  // Scroll lock
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex]);

  const closeLightbox = useCallback(() => setSelectedImageIndex(null), []);

  const goToNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % allImages.length);
    }
  }, [selectedImageIndex]);

  const goToPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + allImages.length) % allImages.length);
    }
  }, [selectedImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToPrev(); // RTL: Right arrow goes to previous
      if (e.key === "ArrowLeft") goToNext();  // RTL: Left arrow goes to next
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, closeLightbox, goToNext, goToPrev]);

  // Swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext(); // Swiped left
    } else if (distance < -minSwipeDistance) {
      goToPrev(); // Swiped right
    }
  };

  return (
    <section id="portfolio" className="py-24 px-6 md:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl text-[#243344] text-center mb-4 font-bold">أعمالنا</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-sans">تصفح أحدث أعمالنا في تصميم وتنفيذ اللوحات الإعلانية</p>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {allImages.slice(0, visibleCount).map((item, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.src}
                className="md:cursor-pointer group relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_10px_50px_rgba(36,51,68,0.08)] hover:shadow-[0_10px_50px_rgba(36,51,68,0.15)] transition-all duration-300 bg-gray-100"
                onClick={() => {
                  if (window.innerWidth >= 768) {
                    setSelectedImageIndex(index);
                  }
                }}
              >
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-3 py-1 bg-[#e22a32] text-white text-xs font-bold rounded-full mb-2 font-sans">
                      لوحات محلات
                    </span>
                    <h3 className="text-white font-heading text-xl font-bold">
                      مشروع {index + 1}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < allImages.length && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => Math.min(prev + 12, allImages.length))}
              className="bg-white border-2 border-[#e22a32] text-[#e22a32] hover:bg-[#e22a32] hover:text-white px-8 py-3 rounded-full font-bold transition-colors duration-300 font-sans"
            >
              عرض المزيد
            </button>
          </div>
        )}
      </div>

      {/* ROBUST LIGHTBOX */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex flex-col"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEndHandler}
            style={{ touchAction: 'none', height: '100dvh' }}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-end z-[100000] pointer-events-none">
              <button 
                className="text-white/70 hover:text-white bg-black/50 hover:bg-[#e22a32] rounded-full p-3 transition-all flex items-center justify-center cursor-pointer pointer-events-auto"
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                aria-label="إغلاق"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button 
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-[100000] text-white/70 hover:text-white bg-black/50 hover:bg-[#e22a32] rounded-full p-3 transition-all flex items-center justify-center cursor-pointer"
              onClick={goToPrev}
              aria-label="السابق"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button 
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-[100000] text-white/70 hover:text-white bg-black/50 hover:bg-[#e22a32] rounded-full p-3 transition-all flex items-center justify-center cursor-pointer"
              onClick={goToNext}
              aria-label="التالي"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Image Container */}
            <div className="flex-1 relative w-full h-full flex items-center justify-center py-20 px-0 md:p-16 z-40 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full flex items-center justify-center pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={allImages[selectedImageIndex].src}
                    alt={allImages[selectedImageIndex].alt}
                    fill
                    quality={100}
                    className="object-contain drop-shadow-2xl select-none"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[100000] text-white/90 bg-black/60 px-5 py-2 rounded-full text-sm font-bold tracking-widest font-sans backdrop-blur-sm pointer-events-none">
              {selectedImageIndex + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
