import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Settings as SettingsIcon, Users, FileText, BarChart3, LogOut, PlusCircle, Image as ImageIcon, Send, Sun, Moon, Key } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const translations = {
  ar: {
    title: 'الإعدادات',
    loginTitle: 'تسجيل الدخول للإدارة',
    passwordPlaceholder: 'أدخل كلمة المرور',
    loginBtn: 'دخول',
    errorMsg: 'كلمة المرور غير صحيحة',
    welcome: 'مرحباً بك في لوحة التحكم',
    logout: 'تسجيل الخروج',
    stats: [
      { label: 'الزوار اليوم', value: '1,245' },
      { label: 'المقالات', value: '48' },
      { label: 'التفاعلات', value: '342' },
    ],
    menu: [
      { name: 'إدارة المحتوى', icon: FileText },
      { name: 'إدارة المستخدمين', icon: Users },
      { name: 'الإحصائيات', icon: BarChart3 },
      { name: 'إعدادات الموقع', icon: SettingsIcon },
    ],
    createPost: 'إنشاء منشور جديد',
    postTitle: 'عنوان المنشور',
    postContent: 'محتوى المنشور',
    postCategory: 'التصنيف',
    publishBtn: 'نشر الآن',
    uploadImage: 'إرفاق صورة',
    siteSettings: 'إعدادات الموقع',
    changePassword: 'تغيير كلمة المرور',
    newPassword: 'كلمة المرور الجديدة',
    save: 'حفظ',
    darkMode: 'الوضع الليلي'
  },
  en: {
    title: 'Settings',
    loginTitle: 'Admin Login',
    passwordPlaceholder: 'Enter password',
    loginBtn: 'Login',
    errorMsg: 'Incorrect password',
    welcome: 'Welcome to the Dashboard',
    logout: 'Logout',
    stats: [
      { label: 'Visitors Today', value: '1,245' },
      { label: 'Articles', value: '48' },
      { label: 'Interactions', value: '342' },
    ],
    menu: [
      { name: 'Content Management', icon: FileText },
      { name: 'User Management', icon: Users },
      { name: 'Statistics', icon: BarChart3 },
      { name: 'Site Settings', icon: SettingsIcon },
    ],
    createPost: 'Create New Post',
    postTitle: 'Post Title',
    postContent: 'Post Content',
    postCategory: 'Category',
    publishBtn: 'Publish Now',
    uploadImage: 'Upload Image',
    siteSettings: 'Site Settings',
    changePassword: 'Change Password',
    newPassword: 'New Password',
    save: 'Save',
    darkMode: 'Dark Mode'
  },
  tr: {
    title: 'Ayarlar',
    loginTitle: 'Yönetici Girişi',
    passwordPlaceholder: 'Şifreyi girin',
    loginBtn: 'Giriş Yap',
    errorMsg: 'Yanlış şifre',
    welcome: 'Kontrol Paneline Hoş Geldiniz',
    logout: 'Çıkış Yap',
    stats: [
      { label: 'Bugünkü Ziyaretçiler', value: '1,245' },
      { label: 'Makaleler', value: '48' },
      { label: 'Etkileşimler', value: '342' },
    ],
    menu: [
      { name: 'İçerik Yönetimi', icon: FileText },
      { name: 'Kullanıcı Yönetimi', icon: Users },
      { name: 'İstatistikler', icon: BarChart3 },
      { name: 'Site Ayarları', icon: SettingsIcon },
    ],
    createPost: 'Yeni Gönderi Oluştur',
    postTitle: 'Gönderi Başlığı',
    postContent: 'Gönderi İçeriği',
    postCategory: 'Kategori',
    publishBtn: 'Şimdi Yayınla',
    uploadImage: 'Resim Yükle',
    siteSettings: 'Site Ayarları',
    changePassword: 'Şifreyi Değiştir',
    newPassword: 'Yeni Şifre',
    save: 'Kaydet',
    darkMode: 'Karanlık Mod'
  }
};

export default function Settings() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];
  const { theme, toggleTheme } = useTheme();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [newPassword, setNewPassword] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postCategory, setPostCategory] = useState(lang === 'ar' ? 'العمل الحر' : lang === 'en' ? 'Freelancing' : 'Serbest Çalışma');
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [posts, setPosts] = useState<any[]>(() => JSON.parse(localStorage.getItem('posts') || '[]'));

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle || !postContent) return;

    const newPost = {
      id: Date.now().toString(),
      title: postTitle,
      category: postCategory,
      content: postContent,
      image: postImage,
      date: new Date().toISOString(),
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    setPostTitle('');
    setPostContent('');
    setPostImage(null);
    setSuccessMessage(lang === 'ar' ? 'تم نشر المنشور بنجاح!' : lang === 'en' ? 'Post published successfully!' : 'Gönderi başarıyla yayınlandı!');
    
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.loginTitle}</h2>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.passwordPlaceholder}
                className={`w-full bg-slate-50 dark:bg-slate-900 border ${error ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
              />
              {error && <p className="text-red-500 text-sm mt-2">{t.errorMsg}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-lg shadow-emerald-500/30"
            >
              {t.loginBtn}
            </button>
          </form>
          <div className="mt-4">
            <Link 
              to="/" 
              className="w-full flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium py-2 transition-colors"
            >
              {lang === 'ar' ? 'العودة للموقع' : lang === 'en' ? 'Back to Site' : 'Siteye Dön'}
            </Link>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            (Hint: password is "admin123")
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t.welcome}</h1>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 px-4 py-2 rounded-lg transition-colors font-medium"
        >
          <LogOut className="w-4 h-4" />
          {t.logout}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Site Settings Section */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">{t.siteSettings}</h2>
          
          <div className="space-y-8">
            {/* Change Password */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                <Key className="w-4 h-4" />
                {t.changePassword}
              </label>
              <div className="space-y-4">
                <input
                  type="password"
                  autoComplete="off"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder={t.newPassword}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                  {t.save}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard/Post Creation Section */}
        <div className="card p-8">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 dark:border-slate-700">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center">
              <PlusCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.createPost}</h2>
          </div>

          <form className="space-y-6" onSubmit={handlePublish}>
            {successMessage && (
              <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 text-center font-medium">
                {successMessage}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.postTitle}</label>
                <input 
                  type="text" 
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder={t.postTitle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.postCategory}</label>
                <select 
                  value={postCategory}
                  onChange={(e) => setPostCategory(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                >
                  <option>{lang === 'ar' ? 'العمل الحر' : lang === 'en' ? 'Freelancing' : 'Serbest Çalışma'}</option>
                  <option>{lang === 'ar' ? 'التسويق بالعمولة' : lang === 'en' ? 'Affiliate Marketing' : 'Satış Ortaklığı'}</option>
                  <option>{lang === 'ar' ? 'المتاجر الإلكترونية' : lang === 'en' ? 'E-commerce' : 'E-ticaret'}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.postContent}</label>
              <textarea 
                rows={6}
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                required
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                placeholder={t.postContent}
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
              <div className="w-full sm:w-auto relative">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <button type="button" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-medium py-3 px-6 rounded-xl transition-colors">
                  <ImageIcon className="w-5 h-5" />
                  {postImage ? (lang === 'ar' ? 'تم اختيار الصورة' : lang === 'en' ? 'Image Selected' : 'Resim Seçildi') : t.uploadImage}
                </button>
              </div>
              <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-emerald-500/30">
                <Send className={`w-5 h-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                {t.publishBtn}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="card mt-12 p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 dark:border-slate-700">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {lang === 'ar' ? 'المنشورات الأخيرة' : lang === 'en' ? 'Recent Posts' : 'Son Gönderiler'}
          </h2>
        </div>

        <div className="space-y-6">
          {posts.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-400 text-center py-8">
              {lang === 'ar' ? 'لا توجد منشورات حتى الآن.' : lang === 'en' ? 'No posts yet.' : 'Henüz gönderi yok.'}
            </p>
          ) : (
            posts.map((post: any) => (
              <div key={post.id} className="card flex flex-col md:flex-row gap-6 p-6 items-center">
                {post.image && (
                  <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : lang === 'en' ? 'en-US' : 'tr-TR')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{post.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 line-clamp-2">{post.content}</p>
                </div>
                <div className="flex items-center justify-end md:justify-start">
                  <button 
                    onClick={() => {
                      const updatedPosts = posts.filter(p => p.id !== post.id);
                      setPosts(updatedPosts);
                      localStorage.setItem('posts', JSON.stringify(updatedPosts));
                    }}
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title={lang === 'ar' ? 'حذف' : lang === 'en' ? 'Delete' : 'Sil'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
