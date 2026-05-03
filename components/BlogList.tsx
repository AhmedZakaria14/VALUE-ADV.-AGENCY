"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Tag, Search } from 'lucide-react';

interface Article {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  tags: string[];
  category: string;
  categoryColor: string;
  date: string;
  content: string;
}

interface BlogListProps {
  initialArticles: Article[];
}

export default function BlogList({ initialArticles }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = initialArticles.filter((article) => {
    const query = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.keywords.some((keyword) => keyword.toLowerCase().includes(query)) ||
      article.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      article.metaDescription.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <div className="max-w-2xl mx-auto mb-12 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن مقال (العنوان، الكلمات المفتاحية...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-12 py-4 rounded-xl border border-gray-200 focus:border-[#e22a32] focus:ring-2 focus:ring-[#e22a32]/20 outline-none transition-all shadow-sm text-gray-700 bg-white font-sans"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        {searchQuery && (
          <p className="text-sm text-gray-500 mt-3 text-right font-sans">
            نتائج البحث: {filteredArticles.length} مقال
          </p>
        )}
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article key={article.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-[0_10px_50px_rgba(36,51,68,0.08)] transition-shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${article.categoryColor} font-sans`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 font-sans">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </div>
                </div>
                
                <h2 className="font-heading text-2xl text-[#243344] mb-3 font-bold line-clamp-2 hover:text-[#e22a32] transition-colors">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 font-sans">
                  {article.metaDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.keywords.slice(0, 3).map(keyword => (
                    <span key={keyword} className="inline-flex items-center gap-1 bg-gray-50 text-gray-600 px-2.5 py-1 rounded text-xs font-medium font-sans">
                      <Tag className="w-3 h-3" />
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center justify-center w-full bg-gray-50 hover:bg-[#e22a32] hover:text-white text-[#243344] font-bold py-2.5 rounded transition-colors font-sans"
                >
                  اقرأ المزيد &larr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-lg font-sans">لم يتم العثور على مقالات مطابقة لبحثك.</p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-4 text-[#e22a32] hover:underline font-medium font-sans"
          >
            مسح البحث
          </button>
        </div>
      )}
    </>
  );
}
