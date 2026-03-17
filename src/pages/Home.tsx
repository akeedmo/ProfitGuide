import { Link } from 'react-router-dom';
import { Briefcase, Share2, Video, ShoppingCart, TrendingUp, ArrowLeft, ArrowRight, Mail, Send, Calendar, Clock, Globe, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  ar: {
    heroTitle: 'تعلم أفضل الطرق لربح المال من الإنترنت',
    heroDesc: 'بسهولة وبدون خبرة مسبقة. ابدأ رحلتك نحو الاستقلال المالي اليوم واكتشف الفرص اللامحدودة التي يوفرها لك العالم الرقمي. سواء كنت تبحث عن دخل إضافي أو وظيفة بدوام كامل، ستجد هنا كل ما تحتاجه للبدء.',
    heroCta: 'ابدأ رحلتك الآن',
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
    methods: [
      {
        title: 'العمل الحر',
        description: 'قدم مهاراتك وخدماتك للعملاء حول العالم عبر منصات العمل الحر مثل Upwork و مستقل. سواء كنت مبرمجاً، كاتباً، أو مصمماً، هناك دائماً من يبحث عن مهاراتك.',
        path: '/freelancing',
      },
      {
        title: 'التسويق بالعمولة',
        description: 'اربح عمولات من خلال الترويج لمنتجات وخدمات الشركات الأخرى. لا تحتاج لامتلاك منتج أو التعامل مع خدمة العملاء، فقط ركز على التسويق وجلب المبيعات.',
        path: '/affiliate-marketing',
      },
      {
        title: 'إنشاء المحتوى',
        description: 'شارك شغفك عبر يوتيوب، تيك توك، أو المدونات وحقق دخلاً مستداماً من خلال الإعلانات، الرعايات، ودعم المتابعين. المحتوى هو الملك في العصر الرقمي.',
        path: '/content-creation',
      },
      {
        title: 'المتاجر الإلكترونية',
        description: 'ابدأ متجرك الخاص وقم ببيع المنتجات المادية أو الرقمية بسهولة باستخدام منصات مثل Shopify أو سلة. يمكنك حتى البدء بنظام الدروبشيبينغ بدون مخزون.',
        path: '/ecommerce',
      },
      {
        title: 'الاستثمارات الرقمية',
        description: 'استثمر في العملات الرقمية، الأسهم، والأصول الافتراضية. تعلم كيف تجعل أموالك تعمل من أجلك وتنمو بمرور الوقت من خلال استراتيجيات استثمار ذكية.',
        path: '/digital-investments',
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
    heroTitle: 'Learn the Best Ways to Make Money Online',
    heroDesc: 'Easily and without prior experience. Start your journey to financial independence today and discover the limitless opportunities the digital world offers. Whether you seek extra income or a full-time job, you will find everything you need here.',
    heroCta: 'Start Your Journey Now',
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
    methods: [
      {
        title: 'Freelancing',
        description: 'Offer your skills and services to clients worldwide through platforms like Upwork and Fiverr. Whether you are a programmer, writer, or designer, someone is looking for your skills.',
        path: '/freelancing',
      },
      {
        title: 'Affiliate Marketing',
        description: 'Earn commissions by promoting other companies\' products and services. No need to own a product or handle customer service, just focus on marketing and driving sales.',
        path: '/affiliate-marketing',
      },
      {
        title: 'Content Creation',
        description: 'Share your passion via YouTube, TikTok, or blogs and generate sustainable income through ads, sponsorships, and fan support. Content is king in the digital age.',
        path: '/content-creation',
      },
      {
        title: 'E-commerce',
        description: 'Start your own store and sell physical or digital products easily using platforms like Shopify. You can even start with dropshipping without holding inventory.',
        path: '/ecommerce',
      },
      {
        title: 'Digital Investments',
        description: 'Invest in cryptocurrencies, stocks, and virtual assets. Learn how to make your money work for you and grow over time through smart investment strategies.',
        path: '/digital-investments',
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
    heroTitle: 'İnternetten Para Kazanmanın En İyi Yollarını Öğrenin',
    heroDesc: 'Kolayca ve önceden deneyim olmadan. Finansal bağımsızlığa giden yolculuğunuza bugün başlayın ve dijital dünyanın sunduğu sınırsız fırsatları keşfedin. İster ek gelir ister tam zamanlı bir iş arıyor olun, ihtiyacınız olan her şeyi burada bulacaksınız.',
    heroCta: 'Yolculuğunuza Şimdi Başlayın',
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
    methods: [
      {
        title: 'Serbest Çalışma',
        description: 'Upwork ve Fiverr gibi platformlar aracılığıyla becerilerinizi ve hizmetlerinizi dünya çapındaki müşterilere sunun. İster programcı, ister yazar veya tasarımcı olun, birileri becerilerinizi arıyor.',
        path: '/freelancing',
      },
      {
        title: 'Satış Ortaklığı',
        description: 'Diğer şirketlerin ürün ve hizmetlerini tanıtarak komisyon kazanın. Bir ürüne sahip olmanıza veya müşteri hizmetleriyle ilgilenmenize gerek yok, sadece pazarlamaya ve satışları artırmaya odaklanın.',
        path: '/affiliate-marketing',
      },
      {
        title: 'İçerik Üretimi',
        description: 'Tutkunuzu YouTube, TikTok veya bloglar aracılığıyla paylaşın ve reklamlar, sponsorluklar ve hayran desteği yoluyla sürdürülebilir gelir elde edin. Dijital çağda içerik kraldır.',
        path: '/content-creation',
      },
      {
        title: 'E-ticaret',
        description: 'Kendi mağazanızı kurun ve Shopify gibi platformları kullanarak fiziksel veya dijital ürünleri kolayca satın. Envanter tutmadan stoksuz satışla bile başlayabilirsiniz.',
        path: '/ecommerce',
      },
      {
        title: 'Dijital Yatırımlar',
        description: 'Kripto para birimlerine, hisse senetlerine ve sanal varlıklara yatırım yapın. Akıllı yatırım stratejileriyle paranızı sizin için nasıl çalıştıracağınızı ve zaman içinde nasıl büyüteceğinizi öğrenin.',
        path: '/digital-investments',
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

const icons = [
  <Briefcase className="h-8 w-8 text-slate-900" />,
  <Share2 className="h-8 w-8 text-emerald-500" />,
  <Video className="h-8 w-8 text-amber-500" />,
  <ShoppingCart className="h-8 w-8 text-slate-900" />,
  <TrendingUp className="h-8 w-8 text-emerald-500" />,
];

const articleImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
];

export default function Home() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];
  
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  
  const dynamicPosts = JSON.parse(localStorage.getItem('posts') || '[]');
  const allArticles = [...dynamicPosts, ...t.articles].slice(0, 6);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto mb-10">
            {t.heroDesc}
          </p>
          <div className="flex justify-center gap-4">
            <a href="#methods" className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition-colors shadow-lg">
              {t.heroCta}
            </a>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="methods" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-4">{t.methodsTitle}</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t.methodsDesc}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.methods.map((method, index) => (
            <Link 
              key={index} 
              to={method.path}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group"
            >
              <div className="bg-gray-50 dark:bg-slate-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-emerald-400 mb-3">{method.title}</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
                {method.description}
              </p>
              <div className="flex items-center text-emerald-500 dark:text-emerald-400 font-semibold group-hover:gap-2 transition-all">
                <span>{t.discoverMore}</span>
                <ArrowIcon className={`h-4 w-4 ${dir === 'rtl' ? 'mr-1' : 'ml-1'}`} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Start Now Section */}
      <section className="bg-white dark:bg-slate-900 py-24 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{t.whyStartTitle}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.whyStartDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-slate-200 dark:hover:border-emerald-500/50 transition-all text-center group">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t.reasons[0].title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t.reasons[0].desc}</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-500/50 transition-all text-center group">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t.reasons[1].title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t.reasons[1].desc}</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:border-amber-200 dark:hover:border-amber-500/50 transition-all text-center group">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t.reasons[2].title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t.reasons[2].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t.articlesTitle}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.articlesTitle}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">{t.articlesDesc}</p>
            </div>
            <Link to="/articles" className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 font-semibold hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all group">
              {t.viewAll}
              <ArrowIcon className={`h-5 w-5 ${dir === 'rtl' ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} transition-transform`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.map((article: any, index: number) => (
              <Link to={`/post/${article.id || index}`} key={index} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-slate-900 flex flex-col h-full hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                  <img 
                    src={article.image || articleImages[index % articleImages.length]} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                    <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date ? new Date(article.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : lang === 'en' ? 'en-US' : 'tr-TR') : '2026/03/16'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {article.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                      {t.readMore}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-colors">
                      <ArrowIcon className="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
