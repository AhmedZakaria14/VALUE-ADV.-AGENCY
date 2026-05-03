'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, PenTool, Zap, ShieldCheck, Truck } from 'lucide-react';

const services = [
  {
    title: "تنفيذ متوافق مع اشتراطات البلدية",
    description: "نلتزم بكافة المعايير الرسمية لضمان سلامة وقانونية لوحتك.",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "فريق من أمهر الفنيين",
    description: "نجمع بين الخبرة الطويلة وحداثة التصميم.",
    icon: PenTool,
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "أحدث معدات الليزر",
    description: "دقة متناهية في التنفيذ بفضل تكنولوجيا الليزر الحديثة.",
    icon: Zap,
    color: "from-yellow-500 to-orange-400"
  },
  {
    title: "ضمان جودة شاملة",
    description: "نضمن لك أفضل النتائج مع خدمة صيانة مستمرة.",
    icon: Palette,
    color: "from-green-500 to-teal-400"
  },
  {
    title: "تسليم سريع وأسعار تنافسية",
    description: "نلتزم بالمواعيد مع تقديم أفضل قيمة مقابل السعر.",
    icon: Truck,
    color: "from-red-500 to-rose-400"
  }
];

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center h-full text-center"
        >
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${services[index].color} flex items-center justify-center mb-4 shadow-lg`}>
            {React.createElement(services[index].icon, { className: "w-8 h-8 text-white" })}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{services[index].title}</h3>
          <p className="text-sm text-white/80">{services[index].description}</p>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-white w-6' : 'bg-white/50'}`}
          />
        ))}
      </div>
      <button 
        onClick={() => setIndex((prev) => (prev + 1) % services.length)}
        className="absolute top-1/2 right-2 text-white/50 hover:text-white"
      >
        &gt;
      </button>
    </div>
  );
}
