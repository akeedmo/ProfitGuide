import { Lightbulb, AlertCircle, Target, CheckCircle2, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import FormattedText from '../components/FormattedText';

const translations = {
  ar: {
    title: 'نصائح وأدلة (Tips & Guides)',
    desc: 'خلاصة تجارب الخبراء في العمل عبر الإنترنت. نصائح عملية لتجنب الأخطاء الشائعة وتسريع طريقك نحو النجاح.',
    section1Title: 'كيف تبدأ بدون خبرة أو رأس مال؟',
    section1Tips: [
      { title: 'استثمر وقتك في التعلم', desc: 'بما أنك لا تملك المال، رأس مالك هو وقتك. خصص ساعتين يومياً لتعلم مهارة مطلوبة (تصميم، برمجة، كتابة، تسويق) عبر يوتيوب.' },
      { title: 'ابدأ بالخدمات المصغرة', desc: 'قدم خدمات بسيطة على منصات مثل Fiverr أو خمسات (مثال: تفريغ صوتي، ترجمة بسيطة، تصميم صور مصغرة) لجمع أول رأس مال.' },
      { title: 'استخدم الأدوات المجانية', desc: 'لا تدفع مقابل برامج في البداية. استخدم Canva للتصميم، Google Docs للكتابة، و DaVinci Resolve للمونتاج.' }
    ],
    section2Title: 'أخطاء شائعة يقع فيها المبتدئون (تجنبها!)',
    section2Mistakes: [
      { title: 'توقع الثراء السريع', desc: 'العمل على الإنترنت هو "عمل" حقيقي يحتاج جهداً ووقتاً. لا تصدق إعلانات "اربح 1000 دولار في يومين".' },
      { title: 'التشتت بين مجالات كثيرة', desc: 'لا تحاول تعلم البرمجة والتصميم والتسويق في نفس الوقت. اختر مجالاً واحداً وركز عليه حتى تتقنه.' },
      { title: 'الاستسلام المبكر', desc: 'أول 3 إلى 6 أشهر هي الأصعب. قد لا ترى أي نتائج مالية. الاستمرارية هي الفاصل بين الناجح والفاشل.' },
      { title: 'تجاهل بناء معرض أعمال (Portfolio)', desc: 'العميل لا يهتم بشهاداتك بقدر اهتمامه برؤية أعمالك السابقة. نفذ مشاريع وهمية لتعرض مهاراتك.' }
    ],
    section3Title: 'قصص نجاح قصيرة للإلهام',
    section3Stories: [
      { title: 'من طالب إلى مطور مستقل', desc: 'تعلم البرمجة من يوتيوب خلال دراسته الجامعية، وبدأ ببناء مواقع بسيطة للشركات المحلية. الآن يدير وكالته الخاصة لتطوير الويب.' },
      { title: 'شغف الطبخ يتحول لمصدر دخل', desc: 'بدأت بتصوير وصفات طبخ بسيطة بهاتفها ونشرها على تيك توك. بعد عام، حصلت على عقود رعاية من شركات أغذية وأصدرت كتاب طبخ رقمي.' }
    ]
  },
  en: {
    title: 'Tips & Guides',
    desc: 'A summary of experts\' experiences in working online. Practical tips to avoid common mistakes and accelerate your path to success.',
    section1Title: 'How to start without experience or capital?',
    section1Tips: [
      { title: 'Invest your time in learning', desc: 'Since you don\'t have money, your capital is your time. Dedicate two hours a day to learning an in-demand skill (design, programming, writing, marketing) via YouTube.' },
      { title: 'Start with micro-services', desc: 'Offer simple services on platforms like Fiverr or Khamsat (e.g., transcription, simple translation, thumbnail design) to gather your first capital.' },
      { title: 'Use free tools', desc: 'Don\'t pay for software at the beginning. Use Canva for design, Google Docs for writing, and DaVinci Resolve for editing.' }
    ],
    section2Title: 'Common mistakes beginners make (Avoid them!)',
    section2Mistakes: [
      { title: 'Expecting quick wealth', desc: 'Working online is real "work" that requires effort and time. Don\'t believe "earn $1000 in two days" ads.' },
      { title: 'Getting distracted by too many fields', desc: 'Don\'t try to learn programming, design, and marketing at the same time. Choose one field and focus on it until you master it.' },
      { title: 'Giving up early', desc: 'The first 3 to 6 months are the hardest. You may not see any financial results. Consistency is the difference between success and failure.' },
      { title: 'Ignoring building a Portfolio', desc: 'The client doesn\'t care about your certificates as much as seeing your previous work. Create dummy projects to showcase your skills.' }
    ],
    section3Title: 'Short success stories for inspiration',
    section3Stories: [
      { title: 'From student to freelance developer', desc: 'Learned programming from YouTube during college, and started building simple websites for local businesses. Now runs his own web development agency.' },
      { title: 'Passion for cooking turns into income', desc: 'Started filming simple cooking recipes with her phone and posting them on TikTok. A year later, she got sponsorship deals from food companies and released a digital cookbook.' }
    ]
  },
  tr: {
    title: 'İpuçları ve Kılavuzlar (Tips & Guides)',
    desc: 'Uzmanların çevrimiçi çalışma deneyimlerinin bir özeti. Yaygın hatalardan kaçınmak ve başarıya giden yolunuzu hızlandırmak için pratik ipuçları.',
    section1Title: 'Deneyim veya sermaye olmadan nasıl başlanır?',
    section1Tips: [
      { title: 'Zamanınızı öğrenmeye yatırın', desc: 'Paranız olmadığı için sermayeniz zamanınızdır. YouTube aracılığıyla talep gören bir beceriyi (tasarım, programlama, yazma, pazarlama) öğrenmeye günde iki saat ayırın.' },
      { title: 'Mikro hizmetlerle başlayın', desc: 'İlk sermayenizi toplamak için Fiverr veya Khamsat gibi platformlarda basit hizmetler (ör. deşifre, basit çeviri, küçük resim tasarımı) sunun.' },
      { title: 'Ücretsiz araçları kullanın', desc: 'Başlangıçta yazılıma para ödemeyin. Tasarım için Canva\'yı, yazmak için Google Dokümanlar\'ı ve kurgu için DaVinci Resolve\'u kullanın.' }
    ],
    section2Title: 'Yeni başlayanların yaptığı yaygın hatalar (Bunlardan kaçının!)',
    section2Mistakes: [
      { title: 'Hızlı zenginlik beklemek', desc: 'Çevrimiçi çalışmak, çaba ve zaman gerektiren gerçek bir "iştir". "İki günde 1000 dolar kazanın" reklamlarına inanmayın.' },
      { title: 'Çok fazla alana dağılmak', desc: 'Aynı anda programlama, tasarım ve pazarlama öğrenmeye çalışmayın. Bir alan seçin ve ustalaşana kadar ona odaklanın.' },
      { title: 'Erken pes etmek', desc: 'İlk 3 ila 6 ay en zorudur. Herhangi bir finansal sonuç göremeyebilirsiniz. Tutarlılık, başarı ile başarısızlık arasındaki farktır.' },
      { title: 'Portföy oluşturmayı görmezden gelmek', desc: 'Müşteri, sertifikalarınızı önceki çalışmalarınızı görmek kadar önemsemez. Becerilerinizi sergilemek için sahte projeler oluşturun.' }
    ],
    section3Title: 'İlham için kısa başarı hikayeleri',
    section3Stories: [
      { title: 'Öğrencilikten serbest geliştiriciye', desc: 'Üniversite sırasında YouTube\'dan programlama öğrendi ve yerel işletmeler için basit web siteleri oluşturmaya başladı. Şimdi kendi web geliştirme ajansını yönetiyor.' },
      { title: 'Yemek yapma tutkusu gelire dönüşüyor', desc: 'Telefonuyla basit yemek tarifleri çekmeye ve bunları TikTok\'ta yayınlamaya başladı. Bir yıl sonra gıda şirketlerinden sponsorluk anlaşmaları aldı ve dijital bir yemek kitabı çıkardı.' }
    ]
  }
};

export default function TipsGuides() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = t.title;
    const text = `${shareTitle}\n${lang === 'ar' ? 'اكتشف أفضل النصائح للربح من الإنترنت:' : 'Discover the best tips for online profit:'}\n`;
    
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
      navigator.clipboard.writeText(`${text}${shareUrl}`);
      alert(lang === 'ar' ? 'تم نسخ الرابط!' : 'Link copied!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title={t.title} description={t.desc} />
      <div className="mb-12 text-center relative">
        <div className="absolute top-0 right-0">
          <button 
            onClick={handleShare}
            className="p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
            title={lang === 'ar' ? 'مشاركة' : 'Share'}
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-emerald-400 mb-6">{t.title}</h1>
        <FormattedText text={t.desc} className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto" />
      </div>

      <div className="space-y-16">
        {/* Section 1 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Target className="text-emerald-500" />
            {t.section1Title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.section1Tips.map((tip, index) => (
              <div key={index} className="card p-6">
                <div className="bg-emerald-100 dark:bg-emerald-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-emerald-400 mb-3">{tip.title}</h3>
                <FormattedText text={tip.desc} className="text-gray-600 dark:text-slate-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <AlertCircle className="text-red-500" />
            {t.section2Title}
          </h2>
          <div className="card p-8 border-red-100 dark:border-red-900/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.section2Mistakes.map((mistake, index) => (
                <div key={index} className="card p-5 border-red-50 dark:border-red-900/50">
                  <h3 className="font-bold text-red-800 dark:text-red-400 mb-2">{mistake.title}</h3>
                  <FormattedText text={mistake.desc} className="text-gray-700 dark:text-slate-300 text-sm" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Lightbulb className="text-amber-500" />
            {t.section3Title}
          </h2>
          <div className="space-y-6">
            {t.section3Stories.map((story, index) => (
              <div key={index} className="card p-6 flex gap-4 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-emerald-400 mb-2">{story.title}</h3>
                  <FormattedText text={story.desc} className="text-gray-600 dark:text-slate-300" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
