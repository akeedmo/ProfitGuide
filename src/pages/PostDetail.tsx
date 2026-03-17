import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { articlesData } from '../data/articlesData';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const { lang, dir } = useLanguage();
  
  const dynamicPosts = JSON.parse(localStorage.getItem('posts') || '[]');
  
  // Check hardcoded articles first
  let post = articlesData[lang]?.[id || ''];
  
  // If not found, check dynamic posts
  if (!post) {
    post = dynamicPosts.find((p: any) => p.id === id);
  }
  
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Post not found</h1>
        <Link to="/" className="text-emerald-600 dark:text-emerald-400">Go back home</Link>
      </div>
    );
  }

  const allHardcoded = Object.values(articlesData[lang] || {});
  const allPosts = [...allHardcoded, ...dynamicPosts];
  const otherPosts = allPosts.filter((p: any) => p.id !== id).slice(0, 5);

  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link 
          to="/articles" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors font-bold"
        >
          <BackIcon className="w-5 h-5" />
          {lang === 'ar' ? 'العودة إلى المقالات' : lang === 'en' ? 'Back to Articles' : 'Makalelere Dön'}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
          {post.image && (
            <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-3xl mb-8" />
          )}
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : lang === 'en' ? 'en-US' : 'tr-TR')}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{post.content}</p>
        </article>

        <aside className="lg:col-span-1">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              {lang === 'ar' ? 'منشورات أخرى' : lang === 'en' ? 'Other Posts' : 'Diğer Gönderiler'}
            </h2>
            <div className="space-y-4">
              {otherPosts.map((p: any) => (
                <Link key={p.id} to={`/post/${p.id}`} className="block group">
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{new Date(p.date).toLocaleDateString()}</p>
                </Link>
              ))}
              {otherPosts.length === 0 && (
                <p className="text-slate-500 dark:text-slate-400">{lang === 'ar' ? 'لا توجد منشورات أخرى.' : lang === 'en' ? 'No other posts.' : 'Başka gönderi yok.'}</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
