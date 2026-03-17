import { CheckCircle2, Star, TrendingUp, MonitorPlay } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const translations = {
  ar: {
    title: 'العمل الحر (Freelancing)',
    desc: 'اكتشف كيف يمكنك تحويل مهاراتك إلى مصدر دخل مستدام من خلال العمل الحر عبر الإنترنت.',
    section1Title: 'ما هو العمل الحر ولماذا هو مستقبل العمل؟',
    section1P1: 'العمل الحر (Freelancing) هو أن تعمل لحسابك الخاص وتقدم خدماتك لعملاء متعددين بدلاً من الالتزام بوظيفة تقليدية بدوام كامل. أنت مدير نفسك، تحدد ساعات عملك، وتختار المشاريع التي ترغب في العمل عليها.',
    section1P2: 'كيف تبدأ؟',
    section1L1: 'حدد مهاراتك (كتابة، تصميم، برمجة، ترجمة، تسويق...).',
    section1L2: 'قم ببناء معرض أعمال (Portfolio) يبرز أفضل ما لديك.',
    section1L3: 'سجل في منصات العمل الحر وابدأ في تقديم العروض.',
    section2Title: 'أفضل منصات العمل الحر لعام 2026',
    platforms: [
      { name: 'Upwork', url: 'https://www.upwork.com', desc: 'أكبر منصة عالمية للعمل الحر، تناسب المحترفين والمشاريع الكبيرة وطويلة الأمد.' },
      { name: 'Fiverr', url: 'https://www.fiverr.com', desc: 'مثالية للمبتدئين ولتقديم خدمات محددة بأسعار تبدأ من 5 دولارات.' },
      { name: 'مستقل (Mostaql)', url: 'https://mostaql.com', desc: 'أفضل منصة عربية للعمل الحر، تربط المستقلين العرب بأصحاب المشاريع في العالم العربي.' },
      { name: 'Freelancer', url: 'https://www.freelancer.com', desc: 'منصة عالمية ضخمة تتيح لك التنافس على آلاف المشاريع في مختلف المجالات.' },
      { name: 'خمسات (Khamsat)', url: 'https://khamsat.com', desc: 'سوق عربي لبيع وشراء الخدمات المصغرة بأسعار تبدأ من 5 دولارات.' },
      { name: 'Toptal', url: 'https://www.toptal.com', desc: 'منصة حصرية تضم أفضل 3% من المستقلين في العالم، مناسبة للمحترفين ذوي الخبرة العالية.' },
      { name: 'PeoplePerHour', url: 'https://www.peopleperhour.com', desc: 'منصة بريطانية ممتازة تركز على المشاريع بالساعة وتقديم الخدمات المستقلة.' },
      { name: 'Guru', url: 'https://www.guru.com', desc: 'منصة مرنة تتيح للمستقلين عرض محافظ أعمالهم والتقدم للمشاريع بسهولة.' },
      { name: 'أريد (Ureed)', url: 'https://ureed.com', desc: 'منصة عربية تركز بشكل كبير على خدمات الترجمة والتحرير وصناعة المحتوى.' },
      { name: 'DesignCrowd', url: 'https://www.designcrowd.com', desc: 'منصة متخصصة للمصممين تتيح المشاركة في مسابقات التصميم والعمل مع العملاء.' },
    ],
    section3Title: 'نصائح للمبتدئين وأمثلة عملية',
    section3Sub: 'كيف تزيد فرصك في الحصول على مشاريع؟',
    tips: [
      { title: '1. تحسين ملفك الشخصي', desc: 'استخدم صورة احترافية، واكتب نبذة تعريفية واضحة تركز على القيمة التي تقدمها للعميل وليس فقط على مهاراتك.' },
      { title: '2. اختيار المشاريع المناسبة', desc: 'لا تتقدم لكل مشروع تراه. اختر المشاريع التي تتطابق تماماً مع مهاراتك ويمكنك إنجازها بجودة عالية.' },
    ],
    exampleTitle: 'مثال عملي: كيف تقدم عرض ناجح (Proposal)',
    exampleText: '"مرحباً [اسم العميل]، قرأت تفاصيل مشروعك بخصوص [اذكر المشكلة/المشروع]، وأنا واثق من قدرتي على إنجازه باحترافية لأنني قمت بمشاريع مشابهة سابقاً. سأقوم بـ [اذكر خطوة أو خطوتين ستقوم بها] لضمان أفضل نتيجة. يمكنك الاطلاع على معرض أعمالي المرفق. متى يمكننا مناقشة التفاصيل؟"',
    exampleNote: 'السر هنا هو التخصيص، التركيز على مشكلة العميل، وإضافة دعوة لاتخاذ إجراء (Call to Action) في النهاية.'
  },
  en: {
    title: 'Freelancing',
    desc: 'Discover how you can turn your skills into a sustainable income source through online freelancing.',
    section1Title: 'What is freelancing and why is it the future of work?',
    section1P1: 'Freelancing is working for yourself and offering your services to multiple clients instead of committing to a traditional full-time job. You are your own boss, set your own hours, and choose the projects you want to work on.',
    section1P2: 'How to start?',
    section1L1: 'Identify your skills (writing, design, programming, translation, marketing...).',
    section1L2: 'Build a portfolio that highlights your best work.',
    section1L3: 'Register on freelancing platforms and start submitting proposals.',
    section2Title: 'Best Freelancing Platforms for 2026',
    platforms: [
      { name: 'Upwork', url: 'https://www.upwork.com', desc: 'The largest global freelancing platform, suitable for professionals and large, long-term projects.' },
      { name: 'Fiverr', url: 'https://www.fiverr.com', desc: 'Ideal for beginners and offering specific services starting at $5.' },
      { name: 'Mostaql', url: 'https://mostaql.com', desc: 'The best Arabic freelancing platform, connecting Arab freelancers with project owners in the Arab world.' },
      { name: 'Freelancer', url: 'https://www.freelancer.com', desc: 'A massive global platform allowing you to compete for thousands of projects across various fields.' },
      { name: 'Khamsat', url: 'https://khamsat.com', desc: 'An Arabic marketplace for buying and selling micro-services starting at $5.' },
      { name: 'Toptal', url: 'https://www.toptal.com', desc: 'An exclusive platform featuring the top 3% of freelancers worldwide, suitable for highly experienced professionals.' },
      { name: 'PeoplePerHour', url: 'https://www.peopleperhour.com', desc: 'An excellent UK-based platform focusing on hourly projects and freelance services.' },
      { name: 'Guru', url: 'https://www.guru.com', desc: 'A flexible platform allowing freelancers to showcase their portfolios and apply for projects easily.' },
      { name: 'Ureed', url: 'https://ureed.com', desc: 'An Arabic platform focusing heavily on translation, editing, and content creation services.' },
      { name: 'DesignCrowd', url: 'https://www.designcrowd.com', desc: 'A specialized platform for designers allowing participation in design contests and working with clients.' },
    ],
    section3Title: 'Tips for Beginners and Practical Examples',
    section3Sub: 'How to increase your chances of getting projects?',
    tips: [
      { title: '1. Optimize your profile', desc: 'Use a professional photo, and write a clear bio focusing on the value you provide to the client, not just your skills.' },
      { title: '2. Choose the right projects', desc: 'Do not apply to every project you see. Choose projects that perfectly match your skills and that you can deliver with high quality.' },
    ],
    exampleTitle: 'Practical Example: How to submit a successful proposal',
    exampleText: '"Hello [Client Name], I read the details of your project regarding [mention the problem/project], and I am confident in my ability to complete it professionally because I have done similar projects before. I will [mention one or two steps you will take] to ensure the best result. You can check my attached portfolio. When can we discuss the details?"',
    exampleNote: 'The secret here is personalization, focusing on the client\'s problem, and adding a Call to Action at the end.'
  },
  tr: {
    title: 'Serbest Çalışma (Freelancing)',
    desc: 'Becerilerinizi çevrimiçi serbest çalışma yoluyla nasıl sürdürülebilir bir gelir kaynağına dönüştürebileceğinizi keşfedin.',
    section1Title: 'Serbest çalışma nedir ve neden işin geleceğidir?',
    section1P1: 'Serbest çalışma, geleneksel tam zamanlı bir işe bağlı kalmak yerine kendi adınıza çalışmak ve hizmetlerinizi birden fazla müşteriye sunmaktır. Kendi patronunuzsunuz, çalışma saatlerinizi belirlersiniz ve üzerinde çalışmak istediğiniz projeleri seçersiniz.',
    section1P2: 'Nasıl başlanır?',
    section1L1: 'Becerilerinizi belirleyin (yazarlık, tasarım, programlama, çeviri, pazarlama...).',
    section1L2: 'En iyi çalışmalarınızı öne çıkaran bir portföy oluşturun.',
    section1L3: 'Serbest çalışma platformlarına kaydolun ve teklif göndermeye başlayın.',
    section2Title: '2026 İçin En İyi Serbest Çalışma Platformları',
    platforms: [
      { name: 'Upwork', url: 'https://www.upwork.com', desc: 'Profesyoneller ve büyük, uzun vadeli projeler için uygun en büyük küresel serbest çalışma platformu.' },
      { name: 'Fiverr', url: 'https://www.fiverr.com', desc: 'Yeni başlayanlar ve 5 dolardan başlayan fiyatlarla belirli hizmetler sunmak için idealdir.' },
      { name: 'Mostaql', url: 'https://mostaql.com', desc: 'Arap serbest çalışanları Arap dünyasındaki proje sahipleriyle buluşturan en iyi Arap serbest çalışma platformu.' },
      { name: 'Freelancer', url: 'https://www.freelancer.com', desc: 'Çeşitli alanlarda binlerce proje için rekabet etmenizi sağlayan devasa bir küresel platform.' },
      { name: 'Khamsat', url: 'https://khamsat.com', desc: '5 dolardan başlayan fiyatlarla mikro hizmetler alıp satmak için bir Arap pazarı.' },
      { name: 'Toptal', url: 'https://www.toptal.com', desc: 'Dünya çapındaki serbest çalışanların en iyi %3\'ünü barındıran, son derece deneyimli profesyoneller için uygun özel bir platform.' },
      { name: 'PeoplePerHour', url: 'https://www.peopleperhour.com', desc: 'Saatlik projelere ve serbest hizmetlere odaklanan mükemmel bir İngiltere merkezli platform.' },
      { name: 'Guru', url: 'https://www.guru.com', desc: 'Serbest çalışanların portföylerini sergilemelerine ve projelere kolayca başvurmalarına olanak tanıyan esnek bir platform.' },
      { name: 'Ureed', url: 'https://ureed.com', desc: 'Büyük ölçüde çeviri, düzenleme ve içerik oluşturma hizmetlerine odaklanan bir Arap platformu.' },
      { name: 'DesignCrowd', url: 'https://www.designcrowd.com', desc: 'Tasarımcılar için tasarım yarışmalarına katılmaya ve müşterilerle çalışmaya olanak tanıyan özel bir platform.' },
    ],
    section3Title: 'Yeni Başlayanlar İçin İpuçları ve Pratik Örnekler',
    section3Sub: 'Proje alma şansınızı nasıl artırabilirsiniz?',
    tips: [
      { title: '1. Profilinizi optimize edin', desc: 'Profesyonel bir fotoğraf kullanın ve sadece becerilerinize değil, müşteriye sağladığınız değere odaklanan net bir biyografi yazın.' },
      { title: '2. Doğru projeleri seçin', desc: 'Gördüğünüz her projeye başvurmayın. Becerilerinizle mükemmel şekilde eşleşen ve yüksek kalitede teslim edebileceğiniz projeleri seçin.' },
    ],
    exampleTitle: 'Pratik Örnek: Başarılı bir teklif nasıl sunulur',
    exampleText: '"Merhaba [Müşteri Adı], [sorunu/projeyi belirtin] ile ilgili projenizin ayrıntılarını okudum ve daha önce benzer projeler yaptığım için profesyonelce tamamlayabileceğime güveniyorum. En iyi sonucu sağlamak için [atacağınız bir veya iki adımı belirtin] yapacağım. Ekli portföyümü inceleyebilirsiniz. Ayrıntıları ne zaman görüşebiliriz?"',
    exampleNote: 'Buradaki sır kişiselleştirme, müşterinin sorununa odaklanma ve sonuna bir Harekete Geçirici Mesaj (Call to Action) eklemektir.'
  }
};

export default function Freelancing() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];

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
            <MonitorPlay className="text-emerald-500" />
            {t.section1Title}
          </h2>
          <div className="card p-8 prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-slate-300">{t.section1P1}</p>
            <p className="text-gray-900 dark:text-white mt-4">
              <strong>{t.section1P2}</strong>
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2"><CheckCircle2 className="text-emerald-500 mt-1 shrink-0" /> <span className="text-gray-700 dark:text-slate-300">{t.section1L1}</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="text-emerald-500 mt-1 shrink-0" /> <span className="text-gray-700 dark:text-slate-300">{t.section1L2}</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="text-emerald-500 mt-1 shrink-0" /> <span className="text-gray-700 dark:text-slate-300">{t.section1L3}</span></li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Star className="text-amber-500" />
            {t.section2Title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.platforms.map((platform, index) => (
              <div 
                key={index} 
                className="card flex flex-col justify-between hover:border-emerald-200 dark:hover:border-emerald-500/50 hover:shadow-md transition-all group p-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-emerald-400 mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">{platform.name}</h3>
                  <p className="text-gray-600 dark:text-slate-300 mb-6">{platform.desc}</p>
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
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-emerald-400 mb-4">{t.section3Sub}</h3>
            <div className="space-y-6">
              {t.tips.map((tip, index) => (
                <div key={index}>
                  <h4 className="font-bold text-slate-800 dark:text-emerald-300 mb-2">{tip.title}</h4>
                  <p className="text-gray-700 dark:text-slate-300">{tip.desc}</p>
                </div>
              ))}
              <div className="card p-6 mt-6 border-l-4 border-emerald-500 dark:border-slate-700" style={{ borderLeftColor: dir === 'rtl' ? 'transparent' : '#10B981', borderRightColor: dir === 'rtl' ? '#10B981' : 'transparent', borderRightWidth: dir === 'rtl' ? '4px' : '0' }}>
                <h4 className="font-bold text-slate-900 dark:text-emerald-400 mb-3">{t.exampleTitle}</h4>
                <p className="text-gray-600 dark:text-slate-300 mb-4 italic">"{t.exampleText}"</p>
                <p className="text-sm text-gray-500 dark:text-slate-400">{t.exampleNote}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
