import { Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { articlesData } from '../data/articlesData';

export default function Articles() {
  const { lang } = useLanguage();
  
  const translations = {
    ar: {
      title: 'المقالات',
      desc: 'اكتشف أحدث المقالات حول العمل عبر الإنترنت والنجاح الرقمي.',
      readMore: 'اقرأ المزيد',
    },
    en: {
      title: 'Articles',
      desc: 'Discover the latest articles on online work and digital success.',
      readMore: 'Read More',
    },
    tr: {
      title: 'Makaleler',
      desc: 'Çevrimiçi çalışma ve dijital başarı hakkındaki en son makaleleri keşfedin.',
      readMore: 'Devamını Oku',
    }
  };

  const t = translations[lang];
  const articles = Object.values(articlesData[lang] || {});

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-emerald-400 mb-6">{t.title}</h1>
        <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article: any) => (
          <div key={article.id} className="card p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(article.date).toLocaleDateString()}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-emerald-400 mb-3 flex-grow">{article.title}</h3>
            <Link to={`/post/${article.id}`} className="inline-block mt-4 text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
              {t.readMore}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
