'use client';

import { Share2, Check } from 'lucide-react';
import { useState } from 'react';

export default function ShareButton({ title, text, url }: { title: string, text: string, url: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const fullUrl = `https://value-adv.com${url}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: fullUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-bold ${
        copied 
          ? 'bg-green-50 text-green-600 border border-green-200' 
          : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow'
      }`}
      title="مشاركة المقال"
    >
      {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5 text-[#e22a32]" />}
      <span>{copied ? 'تم النسخ!' : 'مشاركة المقال'}</span>
    </button>
  );
}
