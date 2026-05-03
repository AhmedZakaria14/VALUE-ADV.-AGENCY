"use client";

import { Phone } from "lucide-react";

const PHONE_NUMBER = "0571449439";
const WHATSAPP_LINK = `https://wa.me/966571449439`;

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-[99] flex flex-col gap-4">
      {/* Call Button */}
      <a 
        href={`tel:${PHONE_NUMBER}`}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#243344] to-[#1a2531] flex items-center justify-center shadow-[0_6px_30px_rgba(36,51,68,0.45)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group relative"
        aria-label="اتصال هاتفي"
      >
        <Phone className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:animate-pulse" />
        <div className="absolute inset-0 rounded-full bg-[#243344]/30 animate-ping -z-10" style={{ animationDuration: '2s' }}></div>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#128C7E] to-[#25D366] flex items-center justify-center shadow-[0_6px_30px_rgba(37,211,102,0.45)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group relative"
        target="_blank" 
        rel="noopener noreferrer nofollow" 
        aria-label="واتساب"
      >
        <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a11.95 11.95 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 0C5.373 0 0 5.373 0 11.99c0 2.11.553 4.083 1.518 5.793L0 24l6.335-1.491A11.935 11.935 0 0011.99 24C18.607 24 24 18.627 24 11.99 24 5.373 18.607 0 11.99 0zm0 21.818a9.813 9.813 0 01-5.007-1.374l-.36-.214-3.753.983.999-3.649-.235-.374A9.822 9.822 0 012.182 11.99C2.182 6.575 6.575 2.182 11.99 2.182c5.416 0 9.808 4.393 9.808 9.808 0 5.416-4.392 9.828-9.808 9.828z"/></svg>
        <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-wa-ping -z-10"></div>
      </a>
    </div>
  );
}
