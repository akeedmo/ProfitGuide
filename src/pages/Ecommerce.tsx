import { ShoppingBag, Store, Package, CreditCard, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const translations = {
  ar: {
    title: 'المتاجر الإلكترونية (E-commerce)',
    desc: 'بيع المنتجات المادية أو الرقمية عبر الإنترنت هو من أكثر نماذج العمل استقراراً وقابلية للتوسع.',
    section1Title: 'أنواع المنتجات التي يمكنك بيعها (15 نوعاً)',
    products: [
      { title: 'الملابس والأزياء', desc: 'بيع الملابس، الأحذية، والحقائب. سوق ضخم يتطلب متابعة صيحات الموضة.' },
      { title: 'الإلكترونيات والملحقات', desc: 'الهواتف، السماعات، واكسسوارات الكمبيوتر. طلب مستمر وعالي.' },
      { title: 'المنتجات الرقمية', desc: 'كتب إلكترونية، قوالب تصميم، وكورسات مسجلة. ربح صافي عالي بدون شحن.' },
      { title: 'الدروبشيبينغ', desc: 'بيع منتجات الموردين مباشرة للعملاء دون الحاجة لتخزينها بنفسك.' },
      { title: 'مستحضرات التجميل', desc: 'منتجات العناية بالبشرة والشعر والمكياج. ولاء عالي من العملاء.' },
      { title: 'المنتجات اليدوية', desc: 'صناعات يدوية، لوحات، وهدايا مخصصة. تميز بمنتجات فريدة.' },
      { title: 'الأثاث والديكور', desc: 'قطع ديكور منزلية، إضاءة، وأثاث بسيط. سوق ينمو بسرعة.' },
      { title: 'الأدوات الرياضية', desc: 'معدات التمارين المنزلية وملابس الرياضة. وعي صحي متزايد.' },
      { title: 'ألعاب الأطفال', desc: 'ألعاب تعليمية وترفيهية. سوق دائم الطلب طوال العام.' },
      { title: 'الطباعة عند الطلب', desc: 'تصميم التيشرتات والأكواب وطباعتها فقط عند طلب العميل.' },
      { title: 'المأكولات والمشروبات', desc: 'بيع القهوة المختصة، التمور، أو الحلويات المغلفة.' },
      { title: 'الاشتراكات الرقمية', desc: 'خدمات اشتراك شهرية في محتوى أو أدوات برمجية.' },
      { title: 'مستلزمات الحيوانات', desc: 'طعام واكسسوارات الحيوانات الأليفة. سوق متخصص ومربح.' },
      { title: 'الأدوات المكتبية', desc: 'منظمات، أقلام، وأدوات مكتبية مبتكرة لعشاق التنظيم.' },
      { title: 'قطع غيار السيارات', desc: 'اكسسوارات وقطع غيار متخصصة. سوق تقني بجمهور محدد.' },
    ],
    section2Title: 'كيف تنشئ متجرك الإلكتروني؟',
    createStoreBtn: 'انشئ متجرك الآن',
    platforms: [
      { name: 'Shopify', url: 'https://www.shopify.com', desc: 'المنصة العالمية الأولى. سهولة فائقة في الاستخدام وتطبيقات لا حصر لها.' },
      { name: 'سلة (Salla)', url: 'https://salla.sa', desc: 'الخيار الأول في السعودية والخليج. دعم كامل لوسائل الدفع والشحن المحلية.' },
      { name: 'زد (Zid)', url: 'https://zid.sa', desc: 'منظومة متكاملة للتجارة الحديثة تدعم نمو تجارتك وتوفر حلولاً لوجستية.' },
      { name: 'WooCommerce', url: 'https://woocommerce.com', desc: 'لمحبي التحكم الكامل. إضافة مجانية للوردبريس تمنحك مرونة غير محدودة.' },
      { name: 'YouCan', url: 'https://youcan.shop', desc: 'منصة ممتازة للمبتدئين والدروبشيبينغ، توفر أدوات قوية بتكلفة منخفضة.' },
      { name: 'Wix eCommerce', url: 'https://www.wix.com/ecommerce/net', desc: 'تجمع بين جمال التصميم وسهولة إدارة المتجر الإلكتروني.' },
    ],
    section3Title: 'نصائح لنجاح متجرك',
    tips: [
      'صور احترافية: العميل لا يلمس المنتج، صورك هي ما يبيعه.',
      'وصف دقيق: اكتب وصفاً يحل مشكلة العميل وليس فقط سرد للمواصفات.',
      'خدمة عملاء ممتازة: الرد السريع وحل المشاكل يبني ولاءً للعلامة التجارية.',
      'التسويق: متجر بدون تسويق (إعلانات ممولة، تيك توك، انستغرام) لن يزوره أحد.',
      'تحسين محركات البحث (SEO): تأكد من ظهور متجرك في نتائج البحث الأولى.',
      'العروض والخصومات: استخدم كوبونات الخصم لجذب عملاء جدد وتحفيز الشراء.',
      'تحليل البيانات: راقب أداء متجرك باستمرار واعرف من أين يأتي عملاؤك.',
      'تجربة المستخدم (UX): اجعل عملية الشراء سهلة وسريعة قدر الإمكان.'
    ]
  },
  en: {
    title: 'E-commerce',
    desc: 'Selling physical or digital products online is one of the most stable and scalable business models.',
    section1Title: 'Types of products you can sell (15 Types)',
    products: [
      { title: 'Clothing & Fashion', desc: 'Selling clothes, shoes, and bags. A huge market that requires following fashion trends.' },
      { title: 'Electronics & Accessories', desc: 'Phones, headphones, and computer accessories. Constant and high demand.' },
      { title: 'Digital Products', desc: 'eBooks, design templates, and recorded courses. High net profit without shipping.' },
      { title: 'Dropshipping', desc: 'Selling supplier products directly to customers without having to store them yourself.' },
      { title: 'Cosmetics', desc: 'Skin, hair care, and makeup products. High customer loyalty.' },
      { title: 'Handmade Products', desc: 'Handicrafts, paintings, and personalized gifts. Stand out with unique products.' },
      { title: 'Furniture & Decor', desc: 'Home decor pieces, lighting, and simple furniture. Fast-growing market.' },
      { title: 'Sports Equipment', desc: 'Home workout equipment and sportswear. Increasing health awareness.' },
      { title: 'Toys & Games', desc: 'Educational and entertaining toys. A market with constant demand all year round.' },
      { title: 'Print on Demand', desc: 'Designing t-shirts and mugs and printing them only when the customer orders.' },
      { title: 'Food & Beverages', desc: 'Selling specialty coffee, dates, or packaged sweets.' },
      { title: 'Digital Subscriptions', desc: 'Monthly subscription services for content or software tools.' },
      { title: 'Pet Supplies', desc: 'Food and accessories for pets. A niche and profitable market.' },
      { title: 'Stationery', desc: 'Planners, pens, and innovative stationery for organization enthusiasts.' },
      { title: 'Auto Parts', desc: 'Specialized accessories and spare parts. A technical market with a specific audience.' },
    ],
    section2Title: 'How to create your online store?',
    createStoreBtn: 'Create Your Store Now',
    platforms: [
      { name: 'Shopify', url: 'https://www.shopify.com', desc: 'The world\'s leading platform. Extremely easy to use with countless apps.' },
      { name: 'Salla', url: 'https://salla.sa', desc: 'The first choice in Saudi Arabia and the Gulf. Full support for local payment and shipping methods.' },
      { name: 'Zid', url: 'https://zid.sa', desc: 'An integrated ecosystem for modern commerce that supports your business growth.' },
      { name: 'WooCommerce', url: 'https://woocommerce.com', desc: 'For those who love full control. A free WordPress plugin that gives you unlimited flexibility.' },
      { name: 'YouCan', url: 'https://youcan.shop', desc: 'Excellent platform for beginners and dropshipping, providing powerful tools at low cost.' },
      { name: 'Wix eCommerce', url: 'https://www.wix.com/ecommerce/net', desc: 'Combines beautiful design with easy online store management.' },
    ],
    section3Title: 'Tips for your store\'s success',
    tips: [
      'Professional photos: The customer cannot touch the product, your photos are what sells it.',
      'Accurate description: Write a description that solves the customer\'s problem, not just listing specifications.',
      'Excellent customer service: Fast response and problem-solving build brand loyalty.',
      'Marketing: A store without marketing (paid ads, TikTok, Instagram) will not be visited by anyone.',
      'SEO Optimization: Ensure your store appears in the top search results.',
      'Offers and Discounts: Use discount coupons to attract new customers and stimulate purchases.',
      'Data Analysis: Constantly monitor your store\'s performance and know where your customers are coming from.',
      'User Experience (UX): Make the buying process as easy and fast as possible.'
    ]
  },
  tr: {
    title: 'E-ticaret (E-commerce)',
    desc: 'Fiziksel veya dijital ürünleri çevrimiçi satmak, en istikrarlı ve ölçeklenebilir iş modellerinden biridir.',
    section1Title: 'Satabileceğiniz ürün türleri (15 Tür)',
    products: [
      { title: 'Giyim ve Moda', desc: 'Kıyafet, ayakkabı ve çanta satışı. Moda trendlerini takip etmeyi gerektiren devasa bir pazar.' },
      { title: 'Elektronik ve Aksesuarlar', desc: 'Telefonlar, kulaklıklar ve bilgisayar aksesuarları. Sürekli ve yüksek talep.' },
      { title: 'Dijital Ürünler', desc: 'E-kitaplar, tasarım şablonları ve kayıtlı kurslar. Nakliye olmadan yüksek net kâr.' },
      { title: 'Stoksuz Satış (Dropshipping)', desc: 'Tedarikçi ürünlerini kendiniz stoklamak zorunda kalmadan doğrudan müşterilere satmak.' },
      { title: 'Kozmetik', desc: 'Cilt, saç bakımı ve makyaj ürünleri. Yüksek müşteri sadakati.' },
      { title: 'El Yapımı Ürünler', desc: 'El sanatları, tablolar ve kişiselleştirilmiş hediyeler. Benzersiz ürünlerle öne çıkın.' },
      { title: 'Mobilya ve Dekorasyon', desc: 'Ev dekorasyon parçaları, aydınlatma ve basit mobilyalar. Hızla büyüyen pazar.' },
      { title: 'Spor Ekipmanları', desc: 'Evde egzersiz ekipmanları ve spor giyim. Artan sağlık bilinci.' },
      { title: 'Oyuncaklar ve Oyunlar', desc: 'Eğitici ve eğlenceli oyuncaklar. Tüm yıl boyunca sürekli talep gören bir pazar.' },
      { title: 'Talep Üzerine Baskı', desc: 'Tişört ve kupa tasarlayıp sadece müşteri sipariş verdiğinde bastırmak.' },
      { title: 'Yiyecek ve İçecek', desc: 'Özel kahve, hurma veya paketlenmiş tatlılar satmak.' },
      { title: 'Dijital Abonelikler', desc: 'İçerik veya yazılım araçları için aylık abonelik hizmetleri.' },
      { title: 'Evcil Hayvan Malzemeleri', desc: 'Evcil hayvanlar için mama ve aksesuarlar. Niş ve kârlı bir pazar.' },
      { title: 'Kırtasiye', desc: 'Organizasyon meraklıları için planlayıcılar, kalemler ve yenilikçi kırtasiye ürünleri.' },
      { title: 'Oto Yedek Parça', desc: 'Özel aksesuarlar ve yedek parçalar. Belirli bir kitleye sahip teknik bir pazar.' },
    ],
    section2Title: 'Çevrimiçi mağazanızı nasıl oluşturursunuz?',
    createStoreBtn: 'Mağazanızı Şimdi Oluşturun',
    platforms: [
      { name: 'Shopify', url: 'https://www.shopify.com', desc: 'Dünyanın önde gelen platformu. Sayısız uygulama ile kullanımı son derece kolay.' },
      { name: 'Salla', url: 'https://salla.sa', desc: 'Suudi Arabistan ve Körfez\'deki ilk tercih. Yerel ödeme ve nakliye yöntemleri için tam destek.' },
      { name: 'Zid', url: 'https://zid.sa', desc: 'İş büyümenizi destekleyen modern ticaret için entegre bir ekosistem.' },
      { name: 'WooCommerce', url: 'https://woocommerce.com', desc: 'Tam kontrolü sevenler için. Size sınırsız esneklik sağlayan ücretsiz bir WordPress eklentisi.' },
      { name: 'YouCan', url: 'https://youcan.shop', desc: 'Yeni başlayanlar ve dropshipping için mükemmel bir platform, düşük maliyetle güçlü araçlar sunar.' },
      { name: 'Wix eCommerce', url: 'https://www.wix.com/ecommerce/net', desc: 'Güzel tasarımı kolay çevrimiçi mağaza yönetimiyle birleştirir.' },
    ],
    section3Title: 'Mağazanızın başarısı için ipuçları',
    tips: [
      'Profesyonel fotoğraflar: Müşteri ürüne dokunamaz, fotoğraflarınız onu satan şeydir.',
      'Doğru açıklama: Sadece özellikleri listelemekle kalmayıp, müşterinin sorununu çözen bir açıklama yazın.',
      'Mükemmel müşteri hizmetleri: Hızlı yanıt ve sorun çözme marka sadakati oluşturur.',
      'Pazarlama: Pazarlaması olmayan (ücretli reklamlar, TikTok, Instagram) bir mağazayı kimse ziyaret etmeyecektir.',
      'SEO Optimizasyonu: Mağazanızın en üst arama sonuçlarında göründüğünden emin olun.',
      'Teklifler ve İndirimler: Yeni müşteriler çekmek ve satın almaları teşvik etmek için indirim kuponları kullanın.',
      'Veri Analizi: Mağazanızın performansını sürekli izleyin ve müşterilerinizin nereden geldiğini bilin.',
      'Kullanıcı Deneyimi (UX): Satın alma sürecini mümkün olduğunca kolay ve hızlı hale getirin.'
    ]
  }
};

export default function Ecommerce() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];
  const [openProductIndex, setOpenProductIndex] = useState<number | null>(null);

  const toggleProduct = (index: number) => {
    setOpenProductIndex(openProductIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title={t.title} description={t.desc} />
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-emerald-400 mb-6">{t.title}</h1>
        <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {t.desc}
        </p>
      </div>

      <div className="space-y-16">
        {/* Section 1 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Package className="text-emerald-500" />
            {t.section1Title}
          </h2>
          <div className="space-y-4">
            {t.products.map((product, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
                <button 
                  onClick={() => toggleProduct(index)}
                  className="w-full flex items-center justify-between p-6 text-right focus:outline-none hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                  style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-emerald-400">{product.title}</h3>
                  {openProductIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-emerald-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-emerald-500" />
                  )}
                </button>
                {openProductIndex === index && (
                  <div className="p-6 pt-0 border-t border-gray-50 dark:border-slate-700">
                    <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed">{product.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Store className="text-emerald-500" />
            {t.section2Title}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.platforms.map((platform, index) => (
                <div key={index} className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-emerald-400 mb-2">{platform.name}</h3>
                  <p className="text-gray-600 dark:text-slate-300 mb-4 flex-grow">{platform.desc}</p>
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors gap-2"
                  >
                    <Store className="w-4 h-4" />
                    {t.createStoreBtn}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <ShoppingBag className="text-emerald-500" />
            {t.section3Title}
          </h2>
          <div className="bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-700 rounded-2xl p-8">
            <ul className="space-y-4">
              {t.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 shrink-0 h-6 w-6" />
                  <span className="text-gray-700 dark:text-slate-300 text-lg">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
