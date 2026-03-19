import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const defaultKeywords = "ربح المال من الانترنت، طرق الربح من الانترنت، الربح من الانترنت للمبتدئين، كيف اربح من الانترنت، مواقع ربح المال، العمل الحر للمبتدئين، الربح بدون رأس مال، الربح من الجوال، الربح من اليوتيوب، التسويق بالعمولة، كيف تربح المال من الانترنت للمبتدئين 2026، افضل طرق الربح من الانترنت بدون خبرة، مواقع صادقة للربح من الانترنت، شرح العمل الحر خطوة بخطوة، كيف تبدأ الربح من الصفر، make money online، earn money online، online income ideas، freelancing for beginners، affiliate marketing guide، passive income ideas، internetten para kazanma، online para kazanma، evden para kazanma، freelance nasıl başlanır، affiliate marketing nedir، ربح المال بالذكاء الاصطناعي، مواقع AI للربح، passive income 2026، side hustle ideas";

export default function SEO({ title, description, keywords }: SEOProps) {
  const { lang } = useLanguage();
  
  const siteTitle = lang === 'ar' ? 'دليل الربح من الانترنت' : lang === 'tr' ? 'İnternetten Kazanç Rehberi' : 'Online Profit Guide';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  const defaultDescription = lang === 'ar' 
    ? "موقع شامل لتعلم أفضل الطرق لربح المال من الإنترنت بسهولة وبدون خبرة، يشمل العمل الحر، التسويق بالعمولة، إنشاء المحتوى، والمزيد."
    : "Your comprehensive platform to learn the best ways to make money online easily and without experience.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content="https://profit-guide.vercel.app/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta name="google-site-verification" content="giuVa7OJ08egGzNqwU0o93jW9UowStR9py3PCL0ArDg" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteTitle,
          "url": "https://profit-guide.vercel.app/",
          "description": description || defaultDescription,
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://profit-guide.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <html lang={lang} />
    </Helmet>
  );
}
