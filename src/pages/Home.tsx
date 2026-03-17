import { Link } from 'react-router-dom';
import { Briefcase, Share2, Video, ShoppingCart, TrendingUp, ArrowLeft, ArrowRight, Mail, Send, Calendar, Clock, Globe, Zap, Shield, Sparkles, Star, Users, Target, List } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { motion } from 'motion/react';
import ProfitCalculator from '../components/ProfitCalculator';
import MethodQuiz from '../components/MethodQuiz';
import FormattedText from '../components/FormattedText';

const translations = {
  ar: {
    heroTitle: 'تعلم أفضل الطرق لربح المال\nمن الإنترنت',
    heroDesc: 'بسهولة وبدون خبرة مسبقة. ابدأ رحلتك نحو الاستقلال المالي اليوم واكتشف الفرص اللامحدودة التي يوفرها لك العالم الرقمي. سواء كنت تبحث عن دخل إضافي أو وظيفة بدوام كامل، ستجد هنا كل ما تحتاجه للبدء.',
    heroCta: 'ابدأ رحلتك الآن',
    quickLinks: 'فهرس المحتويات',
    sections: {
      stats: 'إحصائيات النجاح',
      methods: 'طرق الربح',
      tools: 'أدوات تفاعلية',
      quiz: 'اختبار تحديد المسار',
      articles: 'مقالات تعليمية'
    },
    methodsTitle: 'أفضل الطرق للمبتدئين والمحترفين',
    methodsDesc: 'اختر المجال الذي يناسب مهاراتك واهتماماتك وابدأ في بناء مصدر دخلك الخاص. لقد قمنا بتصنيف وتلخيص أفضل الطرق المجربة والمضمونة لتحقيق أرباح حقيقية من الإنترنت.',
    discoverMore: 'اكتشف المزيد',
    whyStartTitle: 'لماذا يجب أن تبدأ الآن؟',
    whyStartDesc: 'العالم يتجه نحو الرقمنة بسرعة، والفرص المتاحة اليوم قد لا تكون موجودة غداً. إليك أهم الأسباب للبدء في العمل عبر الإنترنت:',
    reasons: [
      { title: 'حرية الزمان والمكان', desc: 'اعمل من أي مكان في العالم وفي الوقت الذي يناسبك. أنت مدير نفسك.' },
      { title: 'مصادر دخل متعددة', desc: 'لا تعتمد على راتب واحد. يمكنك بناء عدة مصادر دخل تعمل معاً.' },
      { title: 'تكلفة بدء شبه معدومة', desc: 'معظم مجالات العمل عبر الإنترنت لا تتطلب رأس مال للبدء، فقط حاسوب واتصال بالإنترنت.' }
    ],
    articlesTitle: 'قصص نجاح ومقالات مميزة',
    articlesDesc: 'تعلم من تجارب الآخرين واكتشف أسرار النجاح. مقالاتنا تغطي أحدث الاستراتيجيات والنصائح العملية التي يمكنك تطبيقها فوراً.',
    viewAll: 'عرض كل المقالات',
    readMore: 'اقرأ المزيد',
    stats: [
      { label: 'زائر نشط', value: '+50k', icon: Users },
      { label: 'طريقة ربح', value: '12+', icon: Target },
      { label: 'تقييم إيجابي', value: '4.9', icon: Star },
    ],
    methods: [
      {
        title: 'العمل الحر',
        description: 'قدم مهاراتك وخدماتك للعملاء حول العالم عبر منصات العمل الحر مثل Upwork و مستقل. سواء كنت مبرمجاً، كاتباً، أو مصمماً، هناك دائماً من يبحث عن مهاراتك.',
        path: '/freelancing',
        color: 'bg-slate-900',
        icon: Briefcase
      },
      {
        title: 'التسويق بالعمولة',
        description: 'اربح عمولات من خلال الترويج لمنتجات وخدمات الشركات الأخرى. لا تحتاج لامتلاك منتج أو التعامل مع خدمة العملاء، فقط ركز على التسويق وجلب المبيعات.',
        path: '/affiliate-marketing',
        color: 'bg-emerald-500',
        icon: Share2
      },
      {
        title: 'إنشاء المحتوى',
        description: 'شارك شغفك عبر يوتيوب، تيك توك، أو المدونات وحقق دخلاً مستداماً من خلال الإعلانات، الرعايات، ودعم المتابعين. المحتوى هو الملك في العصر الرقمي.',
        path: '/content-creation',
        color: 'bg-amber-500',
        icon: Video
      },
      {
        title: 'المتاجر الإلكترونية',
        description: 'ابدأ متجرك الخاص وقم ببيع المنتجات المادية أو الرقمية بسهولة باستخدام منصات مثل Shopify أو سلة. يمكنك حتى البدء بنظام الدروبشيبينغ بدون مخزون.',
        path: '/ecommerce',
        color: 'bg-slate-900',
        icon: ShoppingCart
      },
      {
        title: 'الاستثمارات الرقمية',
        description: 'استثمر في العملات الرقمية، الأسهم، والأصول الافتراضية. تعلم كيف تجعل أموالك تعمل من أجلك وتنمو بمرور الوقت من خلال استراتيجيات استثمار ذكية.',
        path: '/digital-investments',
        color: 'bg-emerald-500',
        icon: TrendingUp
      },
    ],
    articles: [
      {
        id: '1',
        title: 'كيف تبدأ في العمل الحر بدون خبرة سابقة؟ خطوات عملية للبدء من الصفر',
        category: 'العمل الحر',
      },
      {
        id: '2',
        title: 'أفضل 5 منصات للتسويق بالعمولة للمبتدئين في عام 2026',
        category: 'التسويق بالعمولة',
      },
      {
        id: '3',
        title: 'دليلك الشامل لإنشاء قناة يوتيوب ناجحة وتحقيق الدخل منها',
        category: 'إنشاء المحتوى',
      },
    ]
  },
  en: {
    heroTitle: 'Learn the Best Ways\nto Make Money Online',
    heroDesc: 'Easily and without prior experience. Start your journey to financial independence today and discover the limitless opportunities the digital world offers. Whether you seek extra income or a full-time job, you will find everything you need here.',
    heroCta: 'Start Your Journey Now',
    quickLinks: 'Quick Navigation',
    sections: {
      stats: 'Success Stats',
      methods: 'Profit Methods',
      tools: 'Interactive Tools',
      quiz: 'Path Finder Quiz',
      articles: 'Educational Articles'
    },
    methodsTitle: 'Best Methods for Beginners and Professionals',
    methodsDesc: 'Choose the field that suits your skills and interests and start building your own income source. We have categorized and summarized the best proven methods to generate real online profits.',
    discoverMore: 'Discover More',
    whyStartTitle: 'Why Should You Start Now?',
    whyStartDesc: 'The world is rapidly digitizing, and today\'s opportunities might not be here tomorrow. Here are the top reasons to start working online:',
    reasons: [
      { title: 'Time & Location Freedom', desc: 'Work from anywhere in the world at your own pace. You are your own boss.' },
      { title: 'Multiple Income Streams', desc: 'Don\'t rely on a single paycheck. Build multiple income streams that work together.' },
      { title: 'Zero Startup Cost', desc: 'Most online businesses require no capital to start, just a computer and internet connection.' }
    ],
    articlesTitle: 'Success Stories & Featured Articles',
    articlesDesc: 'Learn from the experiences of others and discover the secrets of success. Our articles cover the latest strategies and practical tips you can apply immediately.',
    viewAll: 'View All Articles',
    readMore: 'Read More',
    stats: [
      { label: 'Active Visitors', value: '+50k', icon: Users },
      { label: 'Profit Methods', value: '12+', icon: Target },
      { label: 'Positive Rating', value: '4.9', icon: Star },
    ],
    methods: [
      {
        title: 'Freelancing',
        description: 'Offer your skills and services to clients worldwide through platforms like Upwork and Fiverr. Whether you are a programmer, writer, or designer, someone is looking for your skills.',
        path: '/freelancing',
        color: 'bg-slate-900',
        icon: Briefcase
      },
      {
        title: 'Affiliate Marketing',
        description: 'Earn commissions by promoting other companies\' products and services. No need to own a product or handle customer service, just focus on marketing and driving sales.',
        path: '/affiliate-marketing',
        color: 'bg-emerald-500',
        icon: Share2
      },
      {
        title: 'Content Creation',
        description: 'Share your passion via YouTube, TikTok, or blogs and generate sustainable income through ads, sponsorships, and fan support. Content is king in the digital age.',
        path: '/content-creation',
        color: 'bg-amber-500',
        icon: Video
      },
      {
        title: 'E-commerce',
        description: 'Start your own store and sell physical or digital products easily using platforms like Shopify. You can even start with dropshipping without holding inventory.',
        path: '/ecommerce',
        color: 'bg-slate-900',
        icon: ShoppingCart
      },
      {
        title: 'Digital Investments',
        description: 'Invest in cryptocurrencies, stocks, and virtual assets. Learn how to make your money work for you and grow over time through smart investment strategies.',
        path: '/digital-investments',
        color: 'bg-emerald-500',
        icon: TrendingUp
      },
    ],
    articles: [
      {
        id: '1',
        title: 'How to start freelancing with no prior experience? Practical steps to start from scratch',
        category: 'Freelancing',
      },
      {
        id: '2',
        title: 'Top 5 affiliate marketing platforms for beginners in 2026',
        category: 'Affiliate Marketing',
      },
      {
        id: '3',
        title: 'Your comprehensive guide to creating a successful YouTube channel and monetizing it',
        category: 'Content Creation',
      },
    ]
  },
  tr: {
    heroTitle: 'İnternetten Para Kazanmanın\nEn İyi Yollarını Öğrenin',
    heroDesc: 'Kolayca ve önceden deneyim olmadan. Finansal bağımsızlığa giden yolculuğunuza bugün başlayın ve dijital dünyanın sunduğu sınırsız fırsatları keşfedin. İster ek gelir ister tam zamanlı bir iş arıyor olun, ihtiyacınız olan her şeyi burada bulacaksınız.',
    heroCta: 'Yolculuğunuza Şimdi Başlayın',
    quickLinks: 'Hızlı Gezinti',
    sections: {
      stats: 'Başarı İstatistikleri',
      methods: 'Kazanç Yöntemleri',
      tools: 'Etkileşimli Araçlar',
      quiz: 'Yol Bulucu Testi',
      articles: 'Eğitici Makaleler'
    },
    methodsTitle: 'Yeni Başlayanlar ve Profesyoneller İçin En İyi Yöntemler',
    methodsDesc: 'Becerilerinize ve ilgi alanlarınıza uygun alanı seçin ve kendi gelir kaynağınızı oluşturmaya başlayın. Gerçek çevrimiçi karlar elde etmek için kanıtlanmış en iyi yöntemleri kategorize ettik ve özetledik.',
    discoverMore: 'Daha Fazlasını Keşfet',
    whyStartTitle: 'Neden Şimdi Başlamalısınız?',
    whyStartDesc: 'Dünya hızla dijitalleşiyor ve bugünün fırsatları yarın burada olmayabilir. Çevrimiçi çalışmaya başlamak için en önemli nedenler şunlardır:',
    reasons: [
      { title: 'Zaman ve Mekan Özgürlüğü', desc: 'Dünyanın her yerinden kendi hızınızda çalışın. Kendi patronunuzsunuz.' },
      { title: 'Çoklu Gelir Akışları', desc: 'Tek bir maaş çekine güvenmeyin. Birlikte çalışan birden fazla gelir akışı oluşturun.' },
      { title: 'Sıfır Başlangıç Maliyeti', desc: 'Çoğu çevrimiçi işletme başlamak için sermaye gerektirmez, sadece bir bilgisayar ve internet bağlantısı yeterlidir.' }
    ],
    articlesTitle: 'Başarı Hikayeleri ve Öne Çıkan Makaleler',
    articlesDesc: 'Başkalarının deneyimlerinden öğrenin ve başarının sırlarını keşfedin. Makalelerimiz, hemen uygulayabileceğiniz en son stratejileri ve pratik ipuçlarını kapsar.',
    viewAll: 'Tüm Makaleleri Görüntüle',
    readMore: 'Devamını Oku',
    stats: [
      { label: 'Aktif Ziyaretçi', value: '+50k', icon: Users },
      { label: 'Kazanç Yöntemi', value: '12+', icon: Target },
      { label: 'Olumlu Puan', value: '4.9', icon: Star },
    ],
    methods: [
      {
        title: 'Serbest Çalışma',
        description: 'Upwork ve Fiverr gibi platformlar aracılığıyla becerilerinizi ve hizmetlerinizi dünya çapındaki müşterilere sunun. İster programcı, ister yazar veya tasarımcı olun, birileri becerilerinizi arıyor.',
        path: '/freelancing',
        color: 'bg-slate-900',
        icon: Briefcase
      },
      {
        title: 'Satış Ortaklığı',
        description: 'Diğer şirketlerin ürün ve hizmetlerini tanıtarak komisyon kazanın. Bir ürüne sahip olmanıza veya müşteri hizmetleriyle ilgilenmenize gerek yok, sadece pazarlamaya ve satışları artırmaya odaklanın.',
        path: '/affiliate-marketing',
        color: 'bg-emerald-500',
        icon: Share2
      },
      {
        title: 'İçerik Üretimi',
        description: 'Tutkunuzu YouTube, TikTok veya bloglar aracılığıyla paylaşın ve reklamlar, sponsorluklar ve hayran desteği yoluyla sürdürülebilir gelir elde edin. Dijital çağda içerik kraldır.',
        path: '/content-creation',
        color: 'bg-amber-500',
        icon: Video
      },
      {
        title: 'E-ticaret',
        description: 'Kendi mağazanızı kurun ve Shopify gibi platformları kullanarak fiziksel veya dijital ürünleri kolayca satın. Envanter tutmadan stoksuz satışla bile başlayabilirsiniz.',
        path: '/ecommerce',
        color: 'bg-slate-900',
        icon: ShoppingCart
      },
      {
        title: 'Dijital Yatırımlar',
        description: 'Kripto para birimlerine, hisse senetlerine ve sanal varlıklara yatırım yapın. Akıllı yatırım stratejileriyle paranızı sizin için nasıl çalıştıracağınızı ve zaman içinde nasıl büyüteceğinizi öğrenin.',
        path: '/digital-investments',
        color: 'bg-emerald-500',
        icon: TrendingUp
      },
    ],
    articles: [
      {
        id: '1',
        title: 'Hiç deneyiminiz olmadan serbest çalışmaya nasıl başlarsınız? Sıfırdan başlamak için pratik adımlar',
        category: 'Serbest Çalışma',
      },
      {
        id: '2',
        title: '2026\'da yeni başlayanlar için en iyi 5 satış ortaklığı platformu',
        category: 'Satış Ortaklığı',
      },
      {
        id: '3',
        title: 'Başarılı bir YouTube kanalı oluşturmak ve ondan para kazanmak için kapsamlı rehberiniz',
        category: 'İçerik Üretimi',
      },
    ]
  }
};

const articleImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=60',
];

export default function Home() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];
  
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  
  const dynamicPosts = JSON.parse(localStorage.getItem('posts') || '[]');
  const allArticles = [...dynamicPosts, ...t.articles].slice(0, 6);

  return (
    <div className="space-y-32 pb-32 overflow-hidden">
      <SEO />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 opacity-95"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=60')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          
          {/* Animated Glows */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 -left-24 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-8">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'ar' ? 'دليلك الشامل لعام 2026' : lang === 'en' ? 'Your Comprehensive 2026 Guide' : 'Kapsamlı 2026 Rehberiniz'}</span>
              </div>
              <h1 className="h1 tracking-tight mb-8 text-emerald-500 leading-tight whitespace-pre-line">
                {t.heroTitle}
              </h1>
              <FormattedText text={t.heroDesc} className="mb-12 max-w-2xl text-lg md:text-xl text-white font-bold" />
              
              {/* Quick Links Index */}
              <div className="mb-12 p-6 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm max-w-2xl">
                <div className="flex items-center gap-3 mb-4 text-emerald-400 font-black">
                  <List className="w-5 h-5" />
                  <span>{t.quickLinks}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(t.sections).map(([id, label]) => (
                    <a 
                      key={id} 
                      href={`#${id}`}
                      className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm font-bold group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors" />
                      {label as string}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <a href="#methods" className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-emerald-500/40 hover:-translate-y-1">
                  {t.heroCta}
                </a>
                <div className="flex -space-x-3 rtl:space-x-reverse items-center">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full border-4 border-slate-900 shadow-xl" alt="User" />
                  ))}
                  <div className="ps-6">
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-xs text-slate-400 font-bold mt-1">{lang === 'ar' ? '+10,000 مستخدم نشط' : '+10,000 Active Users'}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-[2.5rem] shadow-2xl border border-slate-700/50">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=60" 
                  className="rounded-[2rem] shadow-inner" 
                  alt="Dashboard" 
                />
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -left-10 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">Monthly Growth</p>
                      <p className="text-xl font-black text-slate-900 dark:text-white">+145%</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Methods Section */}
      <section id="methods" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h2 text-slate-900 dark:text-white mb-6"
          >
            {t.methodsTitle}
          </motion.h2>
          <FormattedText text={t.methodsDesc} className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          {/* Large Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] shadow-2xl"
          >
            <Link to={t.methods[0].path} className="absolute inset-0 z-20"></Link>
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=60" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Freelancing" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="h3 text-white mb-4">{t.methods[0].title}</h3>
              <p className="text-slate-200 text-lg max-w-xl leading-relaxed">{t.methods[0].description}</p>
            </div>
          </motion.div>

          {/* Medium Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-4 md:row-span-1 bg-emerald-500 rounded-[2.5rem] p-10 relative group overflow-hidden shadow-xl"
          >
            <Link to={t.methods[1].path} className="absolute inset-0 z-20"></Link>
            <div className="relative z-10">
              <Share2 className="w-12 h-12 text-white mb-6" />
              <h3 className="h3 text-white mb-4">{t.methods[1].title}</h3>
              <div className="flex items-center text-white/80 font-bold group-hover:gap-2 transition-all">
                <span>{t.discoverMore}</span>
                <ArrowIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Medium Card 2 */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-4 md:row-span-1 bg-slate-900 rounded-[2.5rem] p-10 relative group overflow-hidden shadow-xl"
          >
            <Link to={t.methods[2].path} className="absolute inset-0 z-20"></Link>
            <div className="relative z-10">
              <Video className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="h3 text-white mb-4">{t.methods[2].title}</h3>
              <div className="flex items-center text-white/60 font-bold group-hover:gap-2 transition-all">
                <span>{t.discoverMore}</span>
                <ArrowIcon className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Small Cards */}
          {t.methods.slice(3).map((method, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.01 }}
              className="md:col-span-6 md:row-span-1 bg-white dark:bg-slate-800 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-700 shadow-xl relative group overflow-hidden"
            >
              <Link to={method.path} className="absolute inset-0 z-20"></Link>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <method.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="h3 text-slate-900 dark:text-white mb-2">{method.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 line-clamp-2">{method.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section id="tools" className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <ProfitCalculator />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="h2 text-white mb-8 leading-tight">
                {lang === 'ar' ? 'خطط لمستقبلك المالي بدقة' : 'Plan Your Financial Future Precisely'}
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                {lang === 'ar' ? 'استخدم أدواتنا التفاعلية لتقدير أرباحك واختيار المجال الأمثل لك بناءً على وقتك ومهاراتك الحالية.' : 'Use our interactive tools to estimate your profits and choose the ideal field for you based on your time and current skills.'}
              </p>
              <ul className="space-y-6">
                {[
                  { t: 'تقديرات دقيقة بناءً على بيانات السوق', i: Zap },
                  { t: 'توصيات مخصصة لكل مستخدم', i: Target },
                  { t: 'تحديثات مستمرة لأحدث طرق الربح', i: Sparkles },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-200 font-bold">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <item.i className="w-5 h-5 text-emerald-400" />
                    </div>
                    {item.t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="h2 text-slate-900 dark:text-white mb-4">
            {lang === 'ar' ? 'حائر من أين تبدأ؟' : 'Confused where to start?'}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            {lang === 'ar' ? 'دعنا نساعدك في اتخاذ القرار الصحيح في أقل من دقيقة.' : 'Let us help you make the right decision in less than a minute.'}
          </p>
        </div>
        <MethodQuiz />
      </section>

      {/* Featured Articles Section */}
      <section id="articles" className="bg-white dark:bg-slate-900 py-32 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="h2 text-slate-900 dark:text-white mb-6">{t.articlesTitle}</h2>
                <FormattedText text={t.articlesDesc} className="text-xl text-slate-600 dark:text-slate-300" />
              </div>
            <Link to="/articles" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all flex items-center gap-3">
              {t.viewAll}
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allArticles.map((article: any, index: number) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group flex flex-col h-full"
              >
                <Link to={`/post/${article.id || index}`} className="block relative h-72 rounded-[2rem] overflow-hidden mb-6 shadow-2xl">
                  <img 
                    src={article.image || articleImages[index % articleImages.length]} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="badge bg-emerald-500 text-white px-4 py-2 rounded-full uppercase tracking-widest">
                      {article.category}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        const shareUrl = `${window.location.origin}/post/${article.id || index}`;
                        const text = `${article.title}\n${lang === 'ar' ? 'اقرأ المزيد في دليل الربح:' : 'Read more at Profit Guide:'}\n`;
                        if (navigator.share) {
                          navigator.share({ title: article.title, text: text, url: shareUrl });
                        } else {
                          navigator.clipboard.writeText(`${text}${shareUrl}`);
                          alert(lang === 'ar' ? 'تم نسخ الرابط!' : 'Link copied!');
                        }
                      }}
                      className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-emerald-500 transition-all"
                      title={lang === 'ar' ? 'مشاركة' : 'Share'}
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </Link>
                <div className="px-2">
                  <div className="metadata flex items-center gap-4 mb-4 uppercase tracking-widest">
                    <span>{article.date ? new Date(article.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : lang === 'en' ? 'en-US' : 'tr-TR') : '2026/03/16'}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>5 min read</span>
                  </div>
                  <h3 className="h3 mb-4 line-clamp-2 group-hover:text-emerald-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <Link to={`/post/${article.id || index}`} className="btn-read-more inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    {t.readMore}
                    <ArrowIcon className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
