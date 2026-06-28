import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Tag, ChevronRight, Share2 } from 'lucide-react';
import { applyInternalLinks } from '@/lib/internal-links';
import ShareButton from '@/components/ShareButton';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);
  
  if (!article) {
    return {
      title: 'مقال غير موجود',
    };
  }

  return {
    title: `${article.title} | VALUE ADV. AGENCY`,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.date,
      authors: ['VALUE ADV. AGENCY'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription,
    }
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);
  
  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.metaDescription,
    "keywords": article.keywords.join(', '),
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "VALUE ADV. AGENCY",
      "url": "https://valueadvagency.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VALUE ADV. AGENCY",
      "logo": {
        "@type": "ImageObject",
        "url": "https://valueadvagency.com/logo.png"
      }
    }
  };

  let faqJsonLd = null;
  if (article.faq && article.faq.length > 0) {
    faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": article.faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  }

  // Get related articles (just the next 3 for simplicity)
  const relatedArticles = articles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 md:px-12">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      {faqJsonLd && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} 
        />
      )}
      
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-sans">
          <Link href="/" className="hover:text-[#e22a32] transition-colors">الرئيسية</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-[#e22a32] transition-colors">المدونة</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#243344] font-medium truncate">{article.title}</span>
        </nav>

        <article className="bg-white md:rounded-3xl shadow-[0_10px_50px_rgba(36,51,68,0.08)] border-y md:border border-gray-100 overflow-hidden -mx-6 md:mx-0">
          {/* Article Header */}
          <header className="p-8 md:p-14 lg:p-16 border-b border-gray-100 bg-gray-50/50">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 font-sans">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${article.categoryColor || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
                {article.category}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e22a32]"></span>
                <span>VALUE ADV. AGENCY</span>
              </div>
            </div>
            
            <h1 className="font-heading text-3xl md:text-5xl text-[#243344] leading-tight mb-6 font-bold">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 font-sans">
              {article.keywords.map(keyword => (
                <span key={keyword} className="inline-flex items-center gap-1 bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">
                  <Tag className="w-3 h-3" />
                  {keyword}
                </span>
              ))}
            </div>
          </header>

          {/* Table of Contents */}
          {article.table_of_contents && article.table_of_contents.length > 0 && (
            <div className="p-8 md:p-14 lg:p-16 pb-0 md:pb-0 lg:pb-0">
              <div className="bg-gray-50/80 rounded-2xl p-6 md:p-8 border border-gray-100">
                <h2 className="font-heading text-xl md:text-2xl text-[#243344] font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#e22a32] shadow-sm">
                    {/* Just a simple icon or dot */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#e22a32]"></div>
                  </span>
                  جدول المحتويات:
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-4 font-sans text-gray-700">
                  {article.table_of_contents.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group py-2 md:py-0">
                      <span className="text-[#e22a32] font-bold opacity-50 text-sm mt-1">{(index + 1).toString().padStart(2, '0')}</span>
                      <a href={`#${item.anchor}`} className="hover:text-[#e22a32] transition-colors leading-relaxed group-hover:underline underline-offset-4 decoration-gray-300 group-hover:decoration-[#e22a32] w-full">
                        {item.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Article Content */}
          <div 
            className="p-8 md:p-14 lg:p-16 prose md:prose-lg prose-blue max-w-none 
            prose-headings:font-heading prose-headings:text-[#243344] prose-headings:font-bold 
            prose-h2:mt-12 md:prose-h2:mt-16 prose-h2:mb-6 md:prose-h2:mb-8 prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:-tracking-tight
            prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-4
            prose-h3:mt-8 md:prose-h3:mt-10 prose-h3:mb-4 md:prose-h3:mb-6 prose-h3:text-xl md:prose-h3:text-2xl
            prose-p:text-gray-700 prose-p:font-sans prose-p:leading-[2] md:prose-p:leading-[2.2] prose-p:mb-6 md:prose-p:mb-8 prose-p:text-[17px] md:prose-p:text-[19px]
            prose-li:text-gray-700 prose-li:font-sans prose-li:leading-[2] md:prose-li:leading-[2.2] prose-li:text-[17px] md:prose-li:text-[19px]
            prose-ol:pl-0 prose-ol:pr-6 prose-ul:pl-0 prose-ul:pr-6 prose-marker:font-bold prose-marker:text-[#e22a32]
            prose-strong:text-[#243344] prose-strong:font-bold prose-strong:bg-gray-50 prose-strong:px-1 prose-strong:rounded
            prose-a:text-[#e22a32] prose-a:font-bold prose-a:underline hover:prose-a:text-[#243344] prose-a:underline-offset-[6px] prose-a:decoration-1 prose-a:decoration-[#e22a32]/40 hover:prose-a:decoration-[#243344] prose-a:transition-all
            scroll-mt-24 text-right" 
            dir="rtl"
          >
            <div dangerouslySetInnerHTML={{ __html: applyInternalLinks(article.content, article.slug) }} />
            
            {article.faq && article.faq.length > 0 && (
              <div className="mt-16 bg-gray-50/80 p-8 md:p-10 rounded-3xl border border-gray-100" id="faq">
                <h2 className="font-heading text-2xl md:text-3xl text-[#243344] font-bold mb-8 text-center">الأسئلة الشائعة</h2>
                <div className="space-y-6">
                  {article.faq.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-heading text-lg md:text-xl text-[#243344] font-bold mb-3 flex gap-3 items-start">
                        <span className="text-[#e22a32]">Q.</span>
                        {item.question}
                      </h3>
                      <div className="flex gap-3 items-start">
                        <span className="text-[#e22a32] font-bold mt-1">A.</span>
                        <p className="font-sans text-gray-600 leading-relaxed md:leading-loose text-base m-0">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Article Footer */}
          <footer className="p-8 md:p-14 lg:p-16 border-t border-gray-100 bg-gray-50/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-sans">
              <div className="flex flex-wrap gap-2">
                <span className="text-[#243344] font-bold ml-2">الوسوم:</span>
                {article.tags.map(tag => (
                  <span key={tag} className="text-sm text-gray-500 hover:text-[#e22a32] cursor-pointer transition-colors">
                    #{tag.replace(/\s+/g, '_')}
                  </span>
                ))}
              </div>
              
              <ShareButton 
                title={article.title} 
                text={article.excerpt || article.metaDescription} 
                url={`/blog/${article.slug}`} 
              />
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-3xl text-[#243344] mb-8 font-bold">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(related => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group bg-white rounded-xl shadow-[0_10px_50px_rgba(36,51,68,0.08)] border border-gray-100 p-6 hover:shadow-[0_10px_50px_rgba(36,51,68,0.15)] transition-all">
                  <h3 className="font-heading text-xl text-[#243344] mb-3 font-bold line-clamp-2 group-hover:text-[#e22a32] transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 font-sans">
                    {related.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
