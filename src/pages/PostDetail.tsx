import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Clock, ArrowRight, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Bookmark, MessageSquare } from 'lucide-react';
import { articlesData } from '../data/articlesData';
import SEO from '../components/SEO';
import ReactMarkdown from 'react-markdown';
import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { lang, dir } = useLanguage();
  const [readingTime, setReadingTime] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const dynamicPosts = JSON.parse(localStorage.getItem('posts') || '[]');
  
  // Check hardcoded articles first
  let post = articlesData[lang]?.[id || ''];
  
  // If not found, check dynamic posts
  if (!post) {
    post = dynamicPosts.find((p: any) => p.id === id);
  }
  
  useEffect(() => {
    if (post) {
      const words = post.content.split(/\s+/).length;
      setReadingTime(Math.ceil(words / 200));
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {lang === 'ar' ? 'المقال غير موجود' : lang === 'en' ? 'Post not found' : 'Makale bulunamadı'}
          </h1>
          <Link to="/articles" className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
            {lang === 'ar' ? 'العودة للمقالات' : lang === 'en' ? 'Back to Articles' : 'Makalelere Dön'}
          </Link>
        </motion.div>
      </div>
    );
  }

  const allHardcoded = Object.values(articlesData[lang] || {});
  const allPosts = [...allHardcoded, ...dynamicPosts];
  const otherPosts = allPosts.filter((p: any) => p.id !== id).slice(0, 4);

  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = async (platform: string) => {
    const text = `${shareTitle}\n${lang === 'ar' ? 'اقرأ المزيد في دليل الربح:' : 'Read more at Profit Guide:'}\n`;
    const fullUrl = `${text}${shareUrl}`;

    if (platform === 'native') {
      if (navigator.share) {
        try {
          await navigator.share({
            title: shareTitle,
            text: text,
            url: shareUrl,
          });
        } catch (err) {
          console.error('Error sharing:', err);
        }
      } else {
        handleShare('copy');
      }
      return;
    }

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(fullUrl);
        alert(lang === 'ar' ? 'تم نسخ الرابط مع الوصف!' : 'Link copied with description!');
        break;
    }
  };

  return (
    <div className="relative">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-emerald-500 z-50 origin-[0%]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title={post.title} 
          description={post.content.substring(0, 160)} 
          keywords={`${post.category}, ${post.title}`}
        />

        <div className="mb-8">
          <Link 
            to="/articles" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors font-bold group"
          >
            <BackIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {lang === 'ar' ? 'العودة إلى المقالات' : lang === 'en' ? 'Back to Articles' : 'Makalelere Dön'}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="badge bg-emerald-500 text-white px-4 py-1.5 rounded-full">
                    {post.category}
                  </span>
                  <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800" />
                </div>

                <h1 className="h1 mb-8 leading-[1.1]">
                  {post.title}
                </h1>

                <div className="metadata flex flex-wrap items-center gap-6 border-y border-slate-100 dark:border-slate-800 py-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                      {lang === 'ar' ? 'د' : 'P'}
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-bold leading-none mb-1">
                        {lang === 'ar' ? 'دليل الربح' : 'Profit Guide'}
                      </p>
                      <p className="text-xs opacity-70">{lang === 'ar' ? 'فريق التحرير' : 'Editorial Team'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-500" />
                    {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : lang === 'en' ? 'en-US' : 'tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span>{readingTime} {lang === 'ar' ? 'دقائق للقراءة' : lang === 'en' ? 'min read' : 'dakika okuma'}</span>
                  </div>
                </div>
              </header>

              {post.image && (
                <div className="relative aspect-video mb-12 rounded-[2rem] overflow-hidden shadow-2xl group">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}

              <div className="prose prose-lg dark:prose-invert max-w-none prose-emerald prose-headings:font-black prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-img:rounded-3xl">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {/* Share Section */}
              <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <h3 className="h3 font-bold text-slate-900 dark:text-white">
                      {lang === 'ar' ? 'شارك المقال:' : lang === 'en' ? 'Share this:' : 'Paylaş:'}
                    </h3>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleShare('native')}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 font-bold"
                      >
                        <Share2 className="w-5 h-5" />
                        <span>{lang === 'ar' ? 'مشاركة' : lang === 'en' ? 'Share' : 'Paylaş'}</span>
                      </button>
                      <button 
                        onClick={() => handleShare('facebook')}
                        className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"
                        title="Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleShare('twitter')}
                        className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"
                        title="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleShare('linkedin')}
                        className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      <Bookmark className="w-4 h-4" />
                      <span className="text-sm font-bold">{lang === 'ar' ? 'حفظ' : 'Save'}</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm font-bold">{lang === 'ar' ? 'تعليق' : 'Comment'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Other Posts */}
              <div className="card p-8 bg-white dark:bg-slate-800/50 backdrop-blur-sm">
                <h2 className="h2 text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                  {lang === 'ar' ? 'مقالات قد تهمك' : lang === 'en' ? 'Related Articles' : 'İlginizi Çekebilir'}
                </h2>
                <div className="space-y-8">
                  {otherPosts.map((p: any) => (
                    <Link key={p.id} to={`/post/${p.id}`} className="group block">
                      <div className="flex gap-4">
                        {p.image && (
                          <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        )}
                        <div className="flex flex-col justify-center">
                          <span className="badge text-emerald-500 mb-1">
                            {p.category}
                          </span>
                  <h3 className="h3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                            {p.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {otherPosts.length === 0 && (
                    <p className="text-slate-500 dark:text-slate-400">{lang === 'ar' ? 'لا توجد منشورات أخرى.' : lang === 'en' ? 'No other posts.' : 'Başka gönderi yok.'}</p>
                  )}
                </div>
              </div>

              {/* Newsletter / CTA */}
              <div className="card p-8 bg-slate-900 dark:bg-emerald-900/20 border-none overflow-hidden relative group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all" />
                <div className="relative z-10">
                  <h3 className="h3 text-white mb-3">
                    {lang === 'ar' ? 'اشترك في نشرتنا' : 'Join Newsletter'}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {lang === 'ar' ? 'احصل على أحدث طرق الربح من الإنترنت مباشرة في بريدك.' : 'Get the latest online profit methods directly to your inbox.'}
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder={lang === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                    <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-black py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20">
                      {lang === 'ar' ? 'اشترك الآن' : 'Subscribe Now'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
