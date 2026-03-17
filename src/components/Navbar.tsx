import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, DollarSign, Globe,
  Home, Briefcase, Share2, Video, 
  ShoppingCart, TrendingUp, Wrench, BookOpen,
  Lightbulb, HelpCircle, Sun, Moon, Info, Settings
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const getIconForPath = (path: string) => {
  switch(path) {
    case '/': return Home;
    case '/freelancing': return Briefcase;
    case '/affiliate-marketing': return Share2;
    case '/content-creation': return Video;
    case '/ecommerce': return ShoppingCart;
    case '/digital-investments': return TrendingUp;
    case '/tools-resources': return Wrench;
    case '/articles': return BookOpen;
    case '/tips-guides': return Lightbulb;
    case '/faq': return HelpCircle;
    case '/about': return Info;
    default: return Home;
  }
};

const translations = {
  ar: {
    title: 'دليل الربح من الانترنت',
    links: [
      { name: 'الرئيسية', path: '/' },
      { name: 'العمل الحر', path: '/freelancing' },
      { name: 'التسويق بالعمولة', path: '/affiliate-marketing' },
      { name: 'إنشاء المحتوى', path: '/content-creation' },
      { name: 'المتاجر الإلكترونية', path: '/ecommerce' },
      { name: 'الاستثمارات الرقمية', path: '/digital-investments' },
      { name: 'أدوات وموارد', path: '/tools-resources' },
      { name: 'المقالات', path: '/articles' },
      { name: 'النصائح', path: '/tips-guides' },
      { name: 'الأسئلة الشائعة', path: '/faq' },
      { name: 'من نحن', path: '/about' },
    ]
  },
  en: {
    title: 'Profit Guide',
    links: [
      { name: 'Home', path: '/' },
      { name: 'Freelancing', path: '/freelancing' },
      { name: 'Affiliate Marketing', path: '/affiliate-marketing' },
      { name: 'Content Creation', path: '/content-creation' },
      { name: 'E-commerce', path: '/ecommerce' },
      { name: 'Digital Investments', path: '/digital-investments' },
      { name: 'Tools & Resources', path: '/tools-resources' },
      { name: 'Articles', path: '/articles' },
      { name: 'Tips', path: '/tips-guides' },
      { name: 'FAQ', path: '/faq' },
      { name: 'About Us', path: '/about' },
    ]
  },
  tr: {
    title: 'Kazanç Rehberi',
    links: [
      { name: 'Ana Sayfa', path: '/' },
      { name: 'Serbest Çalışma', path: '/freelancing' },
      { name: 'Satış Ortaklığı', path: '/affiliate-marketing' },
      { name: 'İçerik Üretimi', path: '/content-creation' },
      { name: 'E-ticaret', path: '/ecommerce' },
      { name: 'Dijital Yatırımlar', path: '/digital-investments' },
      { name: 'Araçlar ve Kaynaklar', path: '/tools-resources' },
      { name: 'Makaleler', path: '/articles' },
      { name: 'İpuçları', path: '/tips-guides' },
      { name: 'SSS', path: '/faq' },
      { name: 'Hakkımızda', path: '/about' },
    ]
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[lang];

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-slate-900 shadow-sm sticky top-0 z-40 transition-colors duration-300 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-1.5 text-white">
                <DollarSign className="h-6 w-6 text-emerald-500" />
                <span className="font-bold h3 whitespace-nowrap">{t.title}</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:gap-2 lg:gap-3">
              {t.links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-bold transition-all border ${
                      isActive
                        ? 'bg-slate-950 text-emerald-400 border-emerald-500/50 shadow-lg shadow-black/20'
                        : 'text-slate-300 border-slate-800 hover:border-emerald-500/30 hover:bg-slate-950 hover:text-emerald-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="h-6 w-px bg-slate-800 mx-1"></div>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                className="p-2 ml-2 rtl:mr-2 rtl:ml-0 rounded-full hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-300" />
                )}
              </button>

              {/* Language Switcher */}
              <div className="relative ml-2 rtl:mr-2 rtl:ml-0">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 focus:outline-none p-2 rounded-full hover:bg-slate-800 transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  <span className="uppercase text-sm font-semibold">{lang}</span>
                </button>
                
                {isLangOpen && (
                  <div className="absolute top-full mt-2 w-32 bg-slate-800 rounded-md shadow-lg py-1 border border-slate-700 right-0 rtl:right-auto rtl:left-0">
                    <button onClick={() => { setLang('ar'); setIsLangOpen(false); }} className="block w-full text-start px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">🇸🇦 العربية</button>
                    <button onClick={() => { setLang('en'); setIsLangOpen(false); }} className="block w-full text-start px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">🇬🇧 English</button>
                    <button onClick={() => { setLang('tr'); setIsLangOpen(false); }} className="block w-full text-start px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">🇹🇷 Türkçe</button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden gap-2">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-slate-800 transition-colors focus:outline-none"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-300" />
                )}
              </button>
              <div className="relative">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 focus:outline-none p-2 rounded-full hover:bg-slate-800 transition-colors"
                >
                  <Globe className="h-5 w-5" />
                </button>
                {isLangOpen && (
                  <div className="absolute top-full mt-2 w-32 bg-slate-800 rounded-md shadow-lg py-1 border border-slate-700 right-0 rtl:right-auto rtl:left-0">
                    <button onClick={() => { setLang('ar'); setIsLangOpen(false); }} className="block w-full text-start px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">🇸🇦 العربية</button>
                    <button onClick={() => { setLang('en'); setIsLangOpen(false); }} className="block w-full text-start px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">🇬🇧 English</button>
                    <button onClick={() => { setLang('tr'); setIsLangOpen(false); }} className="block w-full text-start px-4 py-2 text-sm text-slate-300 hover:bg-slate-700">🇹🇷 Türkçe</button>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsOpen(true)}
                className="text-slate-300 hover:text-emerald-400 focus:outline-none p-2 rounded-full hover:bg-slate-800 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 dark:bg-slate-900/60 backdrop-blur-sm z-50 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar (Drawer) */}
      <div 
        className={`fixed top-0 bottom-0 w-[75vw] max-w-[280px] bg-white dark:bg-slate-900 z-50 shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          dir === 'rtl' ? 'right-0' : 'left-0'
        } ${
          isOpen 
            ? 'translate-x-0' 
            : dir === 'rtl' ? 'translate-x-full' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-slate-900 dark:text-emerald-400">
            <DollarSign className="h-6 w-6 text-emerald-500" />
            <span className="font-bold h3">{t.title}</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Drawer Content - Grid of Boxes */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            {t.links.map((link) => {
              const Icon = getIconForPath(link.path);
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center p-3 rounded-xl border transition-all gap-3 group ${
                    isActive
                      ? 'bg-slate-950 border-emerald-500/30 text-emerald-400 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-600 hover:text-emerald-700 dark:hover:text-emerald-400 hover:shadow-sm'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400' : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shadow-sm'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold">{link.name}</span>
                </Link>
              );
            })}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
            <Link to="/settings" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-600 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all group">
              <div className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shadow-sm transition-colors">
                <Settings className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold">{lang === 'ar' ? 'الإعدادات' : lang === 'en' ? 'Settings' : 'Ayarlar'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Fixed Top Navigation for Mobile */}
      <div className="md:hidden sticky top-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-30 p-2 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {t.links.map((link) => {
            const Icon = getIconForPath(link.path);
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors w-20 ${
                  isActive
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold truncate w-full text-center">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
