import * as cheerio from 'cheerio';
import { articles } from '@/data/articles';

export interface InternalLinkRule {
  keywords: string[];
  url: string;
  maxReplacements?: number; // Maximum times this rule should apply per article (default 1)
  exactMatch?: boolean; // If true, matches exact phrase. If false, matches case-insensitive etc
}

// Fixed core rules for major pages
const coreRules: InternalLinkRule[] = [
  {
    keywords: ['وكالة فاليو للتسويق', 'وكالة فاليو'],
    url: '/',
    maxReplacements: 1,
  },
  {
    keywords: ['خدمات تصميم اللوحات', 'تصميم اللوحات الإعلانية', 'اللوحات الإعلانية', 'للوحات الإعلانية', 'لوحات إعلانية', 'صناعة اللوحات'],
    url: '/services',
    maxReplacements: 1,
  },
  {
    keywords: ['اتصل بنا', 'تواصل معنا', 'للتواصل معنا'],
    url: '/contact',
    maxReplacements: 1,
  },
];

export function getSmartInternalLinksRules(currentSlug?: string): InternalLinkRule[] {
  const rules = [...coreRules];
  
  // Dynamically extract rules from all articles
  for (const article of articles) {
    if (currentSlug && article.slug === currentSlug) continue; // Don't link to self
    
    const words = new Set<string>();
    
    if (article.focus_keyword) words.add(article.focus_keyword.trim());
    
    if (article.keywords && Array.isArray(article.keywords)) {
      article.keywords.forEach(k => {
        if (k.trim()) words.add(k.trim());
      });
    }
    
    // Attempt standard title if it's short and missing a question mark
    if (article.title && article.title.length <= 40 && !article.title.includes('?')) {
      words.add(article.title.trim());
    }
    
    // Remove "وكالة فاليو" from the blog targets, since it's targeted in the core rules to the homepage
    words.delete('وكالة فاليو');
    
    const validKeywords = Array.from(words).sort((a, b) => b.length - a.length);
    
    if (validKeywords.length > 0) {
      rules.push({
        url: `/blog/${article.slug}`,
        keywords: validKeywords,
        maxReplacements: 1, // Only link once to the same article from another article
      });
    }
  }
  
  return rules;
}

export function applyInternalLinks(htmlContent: string, currentSlug?: string): string {
  try {
    const rules = getSmartInternalLinksRules(currentSlug);
    const $ = cheerio.load(htmlContent, null, false);
    
    // State to keep track of replacement counts
    const replacedCounts = new Map<string, number>();
    
    // Flatten keywords into a structured list
    const keywordTargets = rules.flatMap((rule, ruleIndex) => 
      rule.keywords.map(keyword => ({
        keyword,
        url: rule.url,
        ruleIndex,
        maxReplacements: rule.maxReplacements || 1,
      }))
    ).sort((a, b) => b.keyword.length - a.keyword.length);
    
    // We only want to replace text in text nodes that are direct children of p, li, td, th
    const elementsToProcess = $('p, li');
    
    elementsToProcess.each((_, el) => {
      const processNode = (node: any) => {
        if (node.type === 'text') {
          let text = node.data;
          let textChanged = false;
          
          for (const target of keywordTargets) {
            const currentCount = replacedCounts.get(`${target.ruleIndex}`) || 0;
            if (currentCount >= target.maxReplacements) continue;
            
            // Regex to find exact word/phrase boundary
            const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const keywordEscaped = escapeRegExp(target.keyword);
            
            // Optional Arabic prefixes (and, the, to, etc.)
            const prefixes = "(?:و|ف|ب|ك|ل|ال|وال|فال|بال|كال|لل|لِل|والم|بالم|كالم)?";
            // Optional suffixes for plurals or pronouns
            const suffixes = "(?:ها|هم|هن|ه|ك|كم|كن|ي|نا|ات|ون|ين|ان|ة)?";
            
            // Allow Unicode letters and numbers
            const regex = new RegExp(`(^|[^\\p{L}\\p{N}])(${prefixes}${keywordEscaped}${suffixes})(?=[^\\p{L}\\p{N}]|$)`, 'gu');
            
            let matched = false;
            const newText = text.replace(regex, (match: string, p1: string, p2: string) => {
              const cCount = replacedCounts.get(`${target.ruleIndex}`) || 0;
              if (cCount < target.maxReplacements) {
                replacedCounts.set(`${target.ruleIndex}`, cCount + 1);
                matched = true;
                return `${p1}<a href="${target.url}" class="internal-link font-medium underline decoration-1 text-[#e22a32] hover:text-[#243344] transition-colors" title="${target.keyword}">${p2}</a>`;
              }
              return match;
            });
            
            if (matched) {
              text = newText;
              textChanged = true;
            }
          }
          
          if (textChanged) {
             $(node).replaceWith(text);
          }
        } else if (node.type === 'tag') {
          const tagName = node.name.toLowerCase();
          if (!['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'pre', 'button'].includes(tagName)) {
            if (node.children) {
              const children = [...node.children];
              children.forEach(processNode);
            }
          }
        }
      };
      
      const elChildren = [...el.children];
      elChildren.forEach(processNode);
    });
    
    return $.html();
  } catch (error) {
    console.error('Error applying internal links:', error);
    return htmlContent; 
  }
}

