import { Youtube, Instagram, Mic, Users, PlayCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import FormattedText from '../components/FormattedText';

const translations = {
  ar: {
    title: 'إنشاء المحتوى (Content Creation)',
    desc: 'حول شغفك وأفكارك إلى محتوى جذاب يحقق لك دخلاً مستداماً عبر مختلف المنصات الرقمية.',
    section1Title: 'ابدأ قناتك على YouTube',
    section1P1: 'يوتيوب هو ثاني أكبر محرك بحث في العالم. إنشاء قناة ناجحة يتطلب صبراً واستمرارية، لكنه من أكثر الطرق ربحية على المدى الطويل.',
    stepsTitle: 'خطوات البداية',
    steps: [
      'حدد فكرة القناة (Niche) والجمهور المستهدف.',
      'جهز معدات بسيطة (هاتف ذكي، إضاءة جيدة، مايكروفون).',
      'تعلم أساسيات المونتاج (برامج مثل Premiere أو CapCut).',
      'التزم بجدول نشر منتظم.'
    ],
    incomeTitle: 'طرق تحقيق الدخل',
    income: [
      'إعلانات جوجل (AdSense) بعد تحقيق الشروط.',
      'الرعايات (Sponsorships) من الشركات.',
      'التسويق بالعمولة في وصف الفيديو.',
      'بيع منتجاتك الخاصة (Merch).'
    ],
    section2Title: 'الربح من تيك توك وإنستغرام',
    section2P1: 'المنصات التي تعتمد على الفيديوهات القصيرة (Reels & TikToks) هي الأسرع في النمو والانتشار حالياً.',
    sponsorshipsTitle: 'الرعايات والإعلانات (Brand Deals)',
    sponsorshipsDesc: 'عندما تبني جمهوراً متفاعلاً، ستدفع لك الشركات للترويج لمنتجاتها في فيديوهاتك. لا تحتاج لملايين المتابعين، "المايكرو إنفلونسرز" (10k-50k متابع) مطلوبون جداً لارتفاع نسبة تفاعلهم.',
    giftsTitle: 'الهدايا والدعم المباشر',
    giftsDesc: 'عبر البث المباشر (Live Streams) في تيك توك، يمكن للمتابعين إرسال هدايا افتراضية يمكنك تحويلها إلى أموال حقيقية.',
    section3Title: 'البودكاست والمدونات الصوتية: فرص الربح الجديدة',
    section3P1: 'البودكاست يشهد نمواً هائلاً في العالم العربي. إذا كنت تجيد التحدث وتمتلك معلومات قيمة أو قدرة على إجراء حوارات شيقة، فهذا المجال لك.',
    tipsTitle: 'نصائح لجذب جمهور كبير',
    tips: [
      { title: 'جودة الصوت أولاً', desc: 'المستمع لن يكمل حلقة بصوت سيء. استثمر في مايكروفون جيد وعزل للغرفة.' },
      { title: 'استضافة المؤثرين', desc: 'استضف أشخاصاً لديهم جمهور بالفعل، سيشاركون الحلقة مع متابعيهم مما يكبر جمهورك.' },
      { title: 'الاستمرارية', desc: 'حدد موعداً ثابتاً للنشر (مثلاً: كل يوم خميس) والتزم به ليبني المستمعون عادة الاستماع لك.' },
      { title: 'الترويج عبر المقاطع القصيرة', desc: 'قص أفضل اللحظات من البودكاست وانشرها كـ Reels أو TikToks لجذب مستمعين جدد.' },
    ]
  },
  en: {
    title: 'Content Creation',
    desc: 'Turn your passion and ideas into engaging content that generates sustainable income across various digital platforms.',
    section1Title: 'Start your YouTube channel',
    section1P1: 'YouTube is the second largest search engine in the world. Creating a successful channel requires patience and consistency, but it is one of the most profitable methods in the long run.',
    stepsTitle: 'Getting Started',
    steps: [
      'Define the channel idea (Niche) and target audience.',
      'Prepare simple equipment (smartphone, good lighting, microphone).',
      'Learn the basics of editing (software like Premiere or CapCut).',
      'Commit to a regular publishing schedule.'
    ],
    incomeTitle: 'Ways to Monetize',
    income: [
      'Google Ads (AdSense) after meeting the requirements.',
      'Sponsorships from companies.',
      'Affiliate marketing in the video description.',
      'Selling your own products (Merch).'
    ],
    section2Title: 'Profit from TikTok and Instagram',
    section2P1: 'Platforms that rely on short videos (Reels & TikToks) are the fastest growing and spreading currently.',
    sponsorshipsTitle: 'Sponsorships and Ads (Brand Deals)',
    sponsorshipsDesc: 'When you build an engaged audience, companies will pay you to promote their products in your videos. You don\'t need millions of followers, "Micro-influencers" (10k-50k followers) are highly sought after due to their high engagement rates.',
    giftsTitle: 'Gifts and Direct Support',
    giftsDesc: 'Through Live Streams on TikTok, followers can send virtual gifts that you can convert into real money.',
    section3Title: 'Podcasts and Audio Blogs: New Profit Opportunities',
    section3P1: 'Podcasts are experiencing massive growth. If you are good at speaking and have valuable information or the ability to conduct interesting interviews, this field is for you.',
    tipsTitle: 'Tips to attract a large audience',
    tips: [
      { title: 'Audio quality first', desc: 'The listener will not finish an episode with bad audio. Invest in a good microphone and room isolation.' },
      { title: 'Hosting influencers', desc: 'Host people who already have an audience, they will share the episode with their followers, which will grow your audience.' },
      { title: 'Consistency', desc: 'Set a fixed publishing schedule (e.g., every Thursday) and stick to it to build a listening habit for your audience.' },
      { title: 'Promotion via short clips', desc: 'Cut the best moments from the podcast and publish them as Reels or TikToks to attract new listeners.' },
    ]
  },
  tr: {
    title: 'İçerik Üretimi (Content Creation)',
    desc: 'Tutkunuzu ve fikirlerinizi çeşitli dijital platformlarda sürdürülebilir gelir sağlayan ilgi çekici içeriğe dönüştürün.',
    section1Title: 'YouTube kanalınızı başlatın',
    section1P1: 'YouTube dünyanın en büyük ikinci arama motorudur. Başarılı bir kanal oluşturmak sabır ve tutarlılık gerektirir, ancak uzun vadede en kârlı yöntemlerden biridir.',
    stepsTitle: 'Başlarken',
    steps: [
      'Kanal fikrini (Niş) ve hedef kitleyi belirleyin.',
      'Basit ekipmanlar hazırlayın (akıllı telefon, iyi aydınlatma, mikrofon).',
      'Kurgunun temellerini öğrenin (Premiere veya CapCut gibi yazılımlar).',
      'Düzenli bir yayın programına bağlı kalın.'
    ],
    incomeTitle: 'Para Kazanma Yolları',
    income: [
      'Gereksinimleri karşıladıktan sonra Google Reklamları (AdSense).',
      'Şirketlerden sponsorluklar.',
      'Video açıklamasında satış ortaklığı.',
      'Kendi ürünlerinizi satmak (Merch).'
    ],
    section2Title: 'TikTok ve Instagram\'dan Kâr Edin',
    section2P1: 'Kısa videolara dayanan platformlar (Reels & TikToks) şu anda en hızlı büyüyen ve yayılan platformlardır.',
    sponsorshipsTitle: 'Sponsorluklar ve Reklamlar (Marka Anlaşmaları)',
    sponsorshipsDesc: 'Etkileşimli bir kitle oluşturduğunuzda, şirketler ürünlerini videolarınızda tanıtmanız için size ödeme yapacaktır. Milyonlarca takipçiye ihtiyacınız yok, "Mikro etkileyiciler" (10k-50k takipçi) yüksek etkileşim oranları nedeniyle çok rağbet görüyor.',
    giftsTitle: 'Hediyeler ve Doğrudan Destek',
    giftsDesc: 'TikTok\'taki Canlı Yayınlar aracılığıyla takipçileriniz, gerçek paraya dönüştürebileceğiniz sanal hediyeler gönderebilir.',
    section3Title: 'Podcast\'ler ve Sesli Bloglar: Yeni Kâr Fırsatları',
    section3P1: 'Podcast\'ler muazzam bir büyüme yaşıyor. Konuşmakta iyiyseniz ve değerli bilgilere veya ilginç röportajlar yapma yeteneğine sahipseniz, bu alan tam size göre.',
    tipsTitle: 'Geniş bir kitleyi çekmek için ipuçları',
    tips: [
      { title: 'Önce ses kalitesi', desc: 'Dinleyici kötü sesli bir bölümü bitirmez. İyi bir mikrofona ve oda yalıtımına yatırım yapın.' },
      { title: 'Etkileyicileri ağırlamak', desc: 'Zaten bir kitlesi olan kişileri ağırlayın, bölümü takipçileriyle paylaşacaklar ve bu da kitlenizi büyütecektir.' },
      { title: 'Tutarlılık', desc: 'Sabit bir yayın programı belirleyin (örneğin her Perşembe) ve dinleyicileriniz için bir dinleme alışkanlığı oluşturmak için buna bağlı kalın.' },
      { title: 'Kısa kliplerle tanıtım', desc: 'Podcast\'teki en iyi anları kesin ve yeni dinleyiciler çekmek için Reels veya TikToks olarak yayınlayın.' },
    ]
  }
};

export default function ContentCreation() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title={t.title} description={t.desc} />
      <div className="mb-12 text-center">
        <h1 className="h1 text-slate-900 dark:text-emerald-400 mb-6">{t.title}</h1>
        <FormattedText text={t.desc} className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto" />
      </div>

      <div className="space-y-16">
        {/* Section 1 */}
        <section>
          <h2 className="h2 text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Youtube className="text-amber-500" />
            {t.section1Title}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
            <FormattedText text={t.section1P1} className="text-lg text-gray-600 dark:text-slate-300 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-slate-900/50 rounded-xl p-6 border border-gray-100 dark:border-slate-700">
                <h3 className="h3 font-bold text-slate-900 dark:text-emerald-400 mb-3 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-emerald-500" /> {t.stepsTitle}
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-slate-300 text-sm">
                  {t.steps.map((step, index) => (
                    <li key={index}>• {step}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-slate-900/50 rounded-xl p-6 border border-gray-100 dark:border-slate-700">
                <h3 className="h3 font-bold text-slate-900 dark:text-emerald-400 mb-3 flex items-center gap-2">
                  <span className="text-xl">💰</span> {t.incomeTitle}
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-slate-300 text-sm">
                  {t.income.map((inc, index) => (
                    <li key={index}>• {inc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="h2 text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Instagram className="text-amber-500" />
            {t.section2Title}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700 prose prose-lg prose-slate dark:prose-invert max-w-none">
            <FormattedText text={t.section2P1} className="text-gray-700 dark:text-slate-300" />
            <div className="space-y-4 mt-6">
              <div className="border-emerald-500 px-4" style={{ borderRightWidth: dir === 'rtl' ? '4px' : '0', borderLeftWidth: dir === 'ltr' ? '4px' : '0' }}>
                <h3 className="h3 font-bold text-slate-900 dark:text-emerald-400">{t.sponsorshipsTitle}</h3>
                <FormattedText text={t.sponsorshipsDesc} className="text-gray-600 dark:text-slate-300 text-base" />
              </div>
              <div className="border-emerald-500 px-4" style={{ borderRightWidth: dir === 'rtl' ? '4px' : '0', borderLeftWidth: dir === 'ltr' ? '4px' : '0' }}>
                <h3 className="h3 font-bold text-slate-900 dark:text-emerald-400">{t.giftsTitle}</h3>
                <FormattedText text={t.giftsDesc} className="text-gray-600 dark:text-slate-300 text-base" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="h2 text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Mic className="text-amber-500" />
            {t.section3Title}
          </h2>
          <div className="bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-700 rounded-2xl p-8">
            <FormattedText text={t.section3P1} className="text-gray-700 dark:text-slate-300 text-lg mb-6" />
            <h3 className="h3 text-slate-900 dark:text-emerald-400 mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-emerald-500" /> {t.tipsTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.tips.map((tip, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
                  <h3 className="h3 font-bold text-slate-900 dark:text-emerald-400 mb-2">{tip.title}</h3>
                  <FormattedText text={tip.desc} className="text-sm text-gray-600 dark:text-slate-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
