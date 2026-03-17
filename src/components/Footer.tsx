import { Link } from 'react-router-dom';
import { DollarSign, Mail, Send, Facebook, Twitter, Instagram, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  ar: {
    title: 'دليل الربح من الانترنت',
    desc: 'منصتك الشاملة لتعلم أفضل الطرق لربح المال من الإنترنت بسهولة وبدون خبرة. ابدأ رحلتك نحو الاستقلال المالي اليوم واكتشف الفرص اللامحدودة.',
    quickLinks: 'روابط سريعة',
    links: [
      { name: 'العمل الحر', path: '/freelancing' },
      { name: 'التسويق بالعمولة', path: '/affiliate-marketing' },
      { name: 'صناعة المحتوى', path: '/content-creation' },
      { name: 'المتاجر الإلكترونية', path: '/ecommerce' },
      { name: 'الاستثمارات الرقمية', path: '/digital-investments' },
      { name: 'أدوات ومصادر', path: '/tools-resources' },
      { name: 'نصائح وإرشادات', path: '/tips-guides' },
      { name: 'المقالات', path: '/articles' },
      { name: 'الأسئلة الشائعة', path: '/faq' },
      { name: 'من نحن', path: '/about' },
    ],
    contact: 'تواصل معنا',
    copyright: 'دليل الربح من الانترنت. جميع الحقوق محفوظة.'
  },
  en: {
    title: 'Online Profit Guide',
    desc: 'Your comprehensive platform to learn the best ways to make money online easily and without experience. Start your journey to financial independence today.',
    quickLinks: 'Quick Links',
    links: [
      { name: 'Freelancing', path: '/freelancing' },
      { name: 'Affiliate Marketing', path: '/affiliate-marketing' },
      { name: 'Content Creation', path: '/content-creation' },
      { name: 'E-commerce', path: '/ecommerce' },
      { name: 'Digital Investments', path: '/digital-investments' },
      { name: 'Tools & Resources', path: '/tools-resources' },
      { name: 'Tips & Guides', path: '/tips-guides' },
      { name: 'Articles', path: '/articles' },
      { name: 'FAQ', path: '/faq' },
      { name: 'About Us', path: '/about' },
    ],
    contact: 'Contact Us',
    copyright: 'Online Profit Guide. All rights reserved.'
  },
  tr: {
    title: 'İnternetten Kazanç Rehberi',
    desc: 'İnternetten kolayca ve deneyimsiz para kazanmanın en iyi yollarını öğrenmek için kapsamlı platformunuz. Finansal bağımsızlık yolculuğunuza bugün başlayın.',
    quickLinks: 'Hızlı Bağlantılar',
    links: [
      { name: 'Serbest Çalışma', path: '/freelancing' },
      { name: 'Satış Ortaklığı', path: '/affiliate-marketing' },
      { name: 'İçerik Oluşturma', path: '/content-creation' },
      { name: 'E-ticaret', path: '/ecommerce' },
      { name: 'Dijital Yatırımlar', path: '/digital-investments' },
      { name: 'Araçlar ve Kaynaklar', path: '/tools-resources' },
      { name: 'İpuçları ve Kılavuzlar', path: '/tips-guides' },
      { name: 'Makaleler', path: '/articles' },
      { name: 'SSS', path: '/faq' },
      { name: 'Hakkımızda', path: '/about' },
    ],
    contact: 'Bize Ulaşın',
    copyright: 'İnternetten Kazanç Rehberi. Tüm hakları saklıdır.'
  }
};

export default function Footer() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];
  const ChevronIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-slate-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Description */}
          <div className="md:col-span-12 lg:col-span-6">
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-1.5 rounded-lg shadow-lg shadow-emerald-500/20">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight">{t.title}</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
              {t.desc}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-12 lg:col-span-6">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-2 h-6 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></span>
              {t.quickLinks}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              {t.links.map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300 p-1 -mx-1 rounded-lg hover:bg-slate-800/50"
                  >
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
                      <ChevronIcon className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-medium text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-emerald-400 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
