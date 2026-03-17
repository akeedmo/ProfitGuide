import { Link2, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import FormattedText from '../components/FormattedText';

const translations = {
  ar: {
    title: 'التسويق بالعمولة (Affiliate Marketing)',
    desc: 'تعلم كيف تربح المال من خلال الترويج لمنتجات وخدمات الشركات الأخرى دون الحاجة لامتلاك منتجك الخاص.',
    section1Title: 'ما هو التسويق بالعمولة؟',
    section1P1: 'التسويق بالعمولة هو عملية ترويج منتجات أو خدمات شركة أخرى مقابل الحصول على عمولة عن كل عملية بيع تتم من خلال الرابط الخاص بك (Affiliate Link).',
    section1P2: 'كيف يعمل؟',
    steps: [
      'تجد منتجاً أو خدمة تعجبك.',
      'تنضم إلى برنامج التسويق بالعمولة الخاص بالشركة.',
      'تحصل على رابط فريد خاص بك.',
      'تروج للرابط عبر مدونتك، قناتك، أو حساباتك على السوشيال ميديا.',
      'عندما يشتري شخص ما عبر رابطك، تحصل على نسبة مئوية من الأرباح.'
    ],
    section2Title: 'أفضل منصات التسويق بالعمولة',
    platforms: [
      { name: 'Amazon Associates', url: 'https://affiliate-program.amazon.com', desc: 'أشهر برنامج في العالم. عمولات منخفضة نسبياً لكن معدل التحويل (البيع) مرتفع جداً لثقة الناس بأمازون.' },
      { name: 'ClickBank', url: 'https://www.clickbank.com', desc: 'متخصص في المنتجات الرقمية (كورسات، برامج). يتميز بعمولات عالية جداً تصل إلى 75%.' },
      { name: 'CJ Affiliate', url: 'https://www.cj.com', desc: 'شبكة ضخمة تضم آلاف العلامات التجارية العالمية. مناسبة للمسوقين ذوي الخبرة.' },
      { name: 'Impact', url: 'https://impact.com', desc: 'منصة حديثة توفر أدوات متقدمة لتتبع الشراكات وإدارة الحملات التسويقية.' },
      { name: 'Rakuten Advertising', url: 'https://rakutenadvertising.com', desc: 'شبكة عالمية قوية تضم العديد من العلامات التجارية الكبرى في مختلف المجالات.' },
      { name: 'PartnerStack', url: 'https://partnerstack.com', desc: 'منصة متخصصة في برامج الشراكة للشركات التقنية والبرمجيات (SaaS).' },
      { name: 'ShareASale', url: 'https://www.shareasale.com', desc: 'شبكة عريقة تضم مجموعة واسعة من التجار والمنتجات في مختلف القطاعات.' },
    ],
    section3Title: 'خطوات عملية للربح من التسويق بالعمولة',
    section3Sub: 'نصائح لزيادة الأرباح',
    tips: [
      { title: '1. بناء جمهور مهتم (Niche)', desc: 'لا تروج لكل شيء. اختر مجالاً محدداً (مثل: التقنية، اللياقة، الطبخ) وابنِ جمهوراً يثق برأيك في هذا المجال.' },
      { title: '2. إنشاء محتوى قيم', desc: 'استخدم المدونات (SEO) أو وسائل التواصل الاجتماعي لتقديم مراجعات صادقة للمنتجات، مقارنات، أو شروحات (Tutorials) تفيد المتابع قبل أن تطلب منه الشراء.' },
    ],
    exampleTitle: 'مثال عملي: كيفية اختيار منتج مربح',
    exampleSteps: [
      { bold: 'الطلب:', text: 'هل يبحث الناس عن حل لهذه المشكلة؟ استخدم أدوات مثل Google Trends.' },
      { bold: 'الجودة:', text: 'تأكد من أن المنتج ممتاز لتجنب فقدان ثقة متابعيك.' },
      { bold: 'العمولة:', text: 'هل العمولة تستحق الجهد التسويقي؟ (المنتجات الرقمية غالباً أفضل).' },
    ]
  },
  en: {
    title: 'Affiliate Marketing',
    desc: 'Learn how to make money by promoting other companies\' products and services without needing to own your own product.',
    section1Title: 'What is Affiliate Marketing?',
    section1P1: 'Affiliate marketing is the process of promoting another company\'s products or services in exchange for a commission on every sale made through your unique link (Affiliate Link).',
    section1P2: 'How does it work?',
    steps: [
      'You find a product or service you like.',
      'You join the company\'s affiliate program.',
      'You get your own unique link.',
      'You promote the link via your blog, channel, or social media accounts.',
      'When someone buys through your link, you get a percentage of the profits.'
    ],
    section2Title: 'Best Affiliate Marketing Platforms',
    platforms: [
      { name: 'Amazon Associates', url: 'https://affiliate-program.amazon.com', desc: 'The most famous program in the world. Relatively low commissions, but the conversion rate is very high due to people\'s trust in Amazon.' },
      { name: 'ClickBank', url: 'https://www.clickbank.com', desc: 'Specializes in digital products (courses, software). Features very high commissions up to 75%.' },
      { name: 'CJ Affiliate', url: 'https://www.cj.com', desc: 'A huge network featuring thousands of global brands. Suitable for experienced marketers.' },
      { name: 'Impact', url: 'https://impact.com', desc: 'A modern platform providing advanced tools for partnership tracking and campaign management.' },
      { name: 'Rakuten Advertising', url: 'https://rakutenadvertising.com', desc: 'A powerful global network featuring many major brands across various fields.' },
      { name: 'PartnerStack', url: 'https://partnerstack.com', desc: 'A platform specialized in partnership programs for tech companies and SaaS.' },
      { name: 'ShareASale', url: 'https://www.shareasale.com', desc: 'A long-standing network featuring a wide range of merchants and products across various sectors.' },
    ],
    section3Title: 'Practical Steps to Profit from Affiliate Marketing',
    section3Sub: 'Tips to Increase Profits',
    tips: [
      { title: '1. Build an interested audience (Niche)', desc: 'Don\'t promote everything. Choose a specific niche (e.g., tech, fitness, cooking) and build an audience that trusts your opinion in this field.' },
      { title: '2. Create valuable content', desc: 'Use blogs (SEO) or social media to provide honest product reviews, comparisons, or tutorials that benefit the follower before asking them to buy.' },
    ],
    exampleTitle: 'Practical Example: How to choose a profitable product',
    exampleSteps: [
      { bold: 'Demand:', text: 'Are people looking for a solution to this problem? Use tools like Google Trends.' },
      { bold: 'Quality:', text: 'Make sure the product is excellent to avoid losing your followers\' trust.' },
      { bold: 'Commission:', text: 'Is the commission worth the marketing effort? (Digital products are often better).' },
    ]
  },
  tr: {
    title: 'Satış Ortaklığı (Affiliate Marketing)',
    desc: 'Kendi ürününüze sahip olmanıza gerek kalmadan diğer şirketlerin ürün ve hizmetlerini tanıtarak nasıl para kazanacağınızı öğrenin.',
    section1Title: 'Satış Ortaklığı Nedir?',
    section1P1: 'Satış ortaklığı, kendi benzersiz bağlantınız (Affiliate Link) aracılığıyla yapılan her satıştan komisyon karşılığında başka bir şirketin ürün veya hizmetlerini tanıtma sürecidir.',
    section1P2: 'How does it work?',
    steps: [
      'Beğendiğiniz bir ürün veya hizmet bulursunuz.',
      'Şirketin satış ortaklığı programına katılırsınız.',
      'Kendi benzersiz bağlantınızı alırsınız.',
      'Bağlantıyı blogunuz, kanalınız veya sosyal medya hesaplarınız üzerinden tanıtırsınız.',
      'Birisi bağlantınız üzerinden satın aldığında, kârdan bir yüzde alırsınız.'
    ],
    section2Title: 'En İyi Satış Ortaklığı Platformları',
    platforms: [
      { name: 'Amazon Associates', url: 'https://affiliate-program.amazon.com', desc: 'Dünyadaki en ünlü program. Nispeten düşük komisyonlar, ancak insanların Amazon\'a olan güveni nedeniyle dönüşüm oranı çok yüksek.' },
      { name: 'ClickBank', url: 'https://www.clickbank.com', desc: 'Dijital ürünlerde (kurslar, yazılımlar) uzmanlaşmıştır. %75\'e varan çok yüksek komisyonlara sahiptir.' },
      { name: 'CJ Affiliate', url: 'https://www.cj.com', desc: 'Binlerce küresel markayı barındıran devسا bir ağ. Deneyimli pazarlamacılar için uygundur.' },
      { name: 'Impact', url: 'https://impact.com', desc: 'Ortaklık takibi ve kampanya yönetimi için gelişmiş araçlar sağlayan modern bir platform.' },
      { name: 'Rakuten Advertising', url: 'https://rakutenadvertising.com', desc: 'Çeşitli alanlarda birçok büyük markayı içeren güçlü bir küresel ağ.' },
      { name: 'PartnerStack', url: 'https://partnerstack.com', desc: 'Teknoloji şirketleri ve yazılımlar (SaaS) için ortaklık programlarında uzmanlaşmış bir platform.' },
      { name: 'ShareASale', url: 'https://www.shareasale.com', desc: 'Çeşitli sektörlerde çok çeşitli tüccarları ve ürünleri içeren köklü bir ağ.' },
    ],
    section3Title: 'Satış Ortaklığından Kâr Elde Etmek İçin Pratik Adımlar',
    section3Sub: 'Kârı Artırmak İçin İpuçları',
    tips: [
      { title: '1. İlgili bir kitle oluşturun (Niş)', desc: 'Her şeyi tanıtmayın. Belirli bir niş seçin (ör. teknoloji, fitness, yemek pişirme) ve bu alanda fikrinize güvenen bir kitle oluşturun.' },
      { title: '2. Değerli içerik oluşturun', desc: 'Takipçiden satın almasını istemeden önce ona fayda sağlayan dürüst ürün incelemeleri, karşılaştırmalar veya eğitimler sunmak için blogları (SEO) veya sosyal medyayı kullanın.' },
    ],
    exampleTitle: 'Pratik Öرnek: Kârlı bir ürün nasıl seçilir',
    exampleSteps: [
      { bold: 'Talep:', text: 'İnsanlar bu soruna bir çözüm arıyor mu? Google Trends gibi araçları kullanın.' },
      { bold: 'Kalite:', text: 'Takipçilerinizin güvenini kaybetmemek için ürünün mükemmel olduğundan emin olun.' },
      { bold: 'Komisyon:', text: 'Komisyon pazarlama çabasına değer mi? (Dijital ürünler genellikle daha iyidir).' },
    ]
  }
};

export default function AffiliateMarketing() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title={t.title} description={t.desc} />
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-emerald-400 mb-6">{t.title}</h1>
        <FormattedText text={t.desc} className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto" />
      </div>

      <div className="space-y-16">
        {/* Section 1 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Link2 className="text-emerald-500" />
            {t.section1Title}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700 prose prose-lg prose-slate dark:prose-invert max-w-none">
            <FormattedText text={t.section1P1} className="text-gray-700 dark:text-slate-300" />
            <p className="text-gray-900 dark:text-white mt-4">
              <strong>{t.section1P2}</strong>
            </p>
            <ol className={`list-decimal space-y-2 mt-4 ${dir === 'rtl' ? 'pr-6' : 'pl-6'}`}>
              {t.steps.map((step, index) => (
                <li key={index} className="text-gray-700 dark:text-slate-300">{step}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Target className="text-emerald-500" />
            {t.section2Title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.platforms.map((platform, index) => (
              <div 
                key={index} 
                className="card flex flex-col justify-between hover:border-emerald-200 dark:hover:border-emerald-500/50 hover:shadow-md transition-all group p-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-emerald-400 mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">{platform.name}</h3>
                  <FormattedText text={platform.desc} className="text-gray-600 dark:text-slate-300 mb-6" />
                </div>
                <a 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-emerald-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  {lang === 'ar' ? 'للتعرف على المنصة' : lang === 'en' ? 'Learn more about the platform' : 'Platform hakkında bilgi edinin'}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <TrendingUp className="text-emerald-500" />
            {t.section3Title}
          </h2>
          <div className="bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-emerald-400 mb-4">{t.section3Sub}</h3>
            <div className="space-y-6">
              {t.tips.map((tip, index) => (
                <div key={index}>
                  <h4 className="font-bold text-slate-800 dark:text-emerald-300 mb-2">{tip.title}</h4>
                  <FormattedText text={tip.desc} className="text-gray-700 dark:text-slate-300" />
                </div>
              ))}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm mt-6 border border-gray-100 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-emerald-400 mb-3">{t.exampleTitle}</h4>
                <ul className="space-y-3 text-gray-600 dark:text-slate-300">
                  {t.exampleSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="text-emerald-500 mt-1 shrink-0 h-5 w-5" /> 
                      <span><strong className="dark:text-white">{step.bold}</strong> {step.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
