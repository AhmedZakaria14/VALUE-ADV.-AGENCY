import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Tag, ChevronRight, Share2 } from 'lucide-react';

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

  // Get related articles (just the next 3 for simplicity)
  const relatedArticles = articles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 md:px-12">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-sans">
          <Link href="/" className="hover:text-[#e22a32] transition-colors">الرئيسية</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-[#e22a32] transition-colors">المدونة</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#243344] font-medium truncate">{article.title}</span>
        </nav>

        <article className="bg-white rounded-2xl shadow-[0_10px_50px_rgba(36,51,68,0.08)] border border-gray-100 overflow-hidden">
          {/* Article Header */}
          <header className="p-8 md:p-12 border-b border-gray-100 bg-gray-50/50">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 font-sans">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${article.categoryColor}`}>
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

          {/* Article Content */}
          <div className="p-8 md:p-12 prose prose-lg prose-blue max-w-none prose-headings:font-heading prose-headings:text-[#243344] prose-p:text-gray-600 prose-p:font-sans prose-li:text-gray-600 prose-li:font-sans prose-a:text-[#e22a32] hover:prose-a:text-[#243344]">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Article Footer */}
          <footer className="p-8 md:p-12 border-t border-gray-100 bg-gray-50/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-sans">
              <div className="flex flex-wrap gap-2">
                <span className="text-[#243344] font-bold ml-2">الوسوم:</span>
                {article.tags.map(tag => (
                  <span key={tag} className="text-sm text-gray-500 hover:text-[#e22a32] cursor-pointer transition-colors">
                    #{tag.replace(/\s+/g, '_')}
                  </span>
                ))}
              </div>
              
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#e22a32] transition-colors font-medium bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm">
                <Share2 className="w-4 h-4" />
                مشاركة المقال
              </button>
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
