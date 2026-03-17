import { PenTool, Laptop, BookOpen, Briefcase, Layout, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  ar: {
    title: 'أدوات ومصادر (Tools & Resources)',
    desc: 'مجموعة من أفضل الأدوات والمنصات التي ستساعدك في رحلتك للربح من الإنترنت، سواء كنت مصمماً، كاتباً، أو مبرمجاً. هذه الأدوات تم اختيارها بعناية لتسريع عملك وزيادة إنتاجيتك.',
    designTitle: 'أدوات التصميم والمونتاج',
    designTools: [
      { name: 'Canva', url: 'https://www.canva.com', desc: 'أداة تصميم جرافيك سهلة الاستخدام للمبتدئين والمحترفين. ممتازة لتصميم صور السوشيال ميديا، العروض التقديمية، والشعارات الاحترافية بخطوات بسيطة وبدون خبرة معقدة.' },
      { name: 'Figma', url: 'https://www.figma.com', desc: 'أداة احترافية لتصميم واجهات المستخدم (UI/UX) وتعمل بالكامل من المتصفح. تتيح التعاون مع فريق العمل في الوقت الفعلي وتعتبر المعيار الذهبي في تصميم المواقع والتطبيقات.' },
      { name: 'CapCut', url: 'https://www.capcut.com', desc: 'تطبيق مجاني وقوي جداً لمونتاج الفيديوهات القصيرة (تيك توك، ريلز) على الهاتف والكمبيوتر، يحتوي على مكتبة ضخمة من القوالب والتأثيرات الجاهزة.' },
      { name: 'Adobe Express', url: 'https://www.adobe.com/express/', desc: 'أداة تصميم سريعة من أدوبي توفر آلاف القوالب الاحترافية والخطوط المتميزة لتصميم محتوى بصري جذاب بسرعة وسهولة.' },
      { name: 'Pixlr', url: 'https://pixlr.com', desc: 'محرر صور مجاني يعمل عبر المتصفح، يوفر أدوات تعديل متقدمة تشبه فوتوشوب ولكنها أبسط وأسرع للاستخدام اليومي.' }
    ],
    learningTitle: 'منصات التعلم وتطوير المهارات',
    learningTools: [
      { name: 'Coursera', url: 'https://www.coursera.org', desc: 'يقدم دورات من أفضل الجامعات العالمية مثل جوجل وستانفورد. يمكنك التقديم على "الدعم المالي" لأخذ الدورات والحصول على الشهادات مجاناً.' },
      { name: 'Udemy', url: 'https://www.udemy.com', desc: 'أكبر منصة للكورسات في مختلف المجالات بأسعار رخيصة جداً (خاصة وقت التخفيضات). ممتازة لتعلم المهارات التقنية والبرمجة والتسويق.' },
      { name: 'YouTube', url: 'https://www.youtube.com', desc: 'المدرسة المجانية الأكبر في العالم. يمكنك تعلم أي مهارة تقريباً بالبحث الصحيح ومتابعة القنوات التعليمية المتخصصة في مجالك.' },
      { name: 'Skillshare', url: 'https://www.skillshare.com', desc: 'منصة تعليمية تركز على المهارات الإبداعية مثل التصميم، التصوير، والرسم. مثالية للمستقلين الذين يرغبون في تطوير حسهم الفني.' },
      { name: 'Khan Academy', url: 'https://www.khanacademy.org', desc: 'منصة تعليمية مجانية تماماً تقدم دروساً في مختلف العلوم والرياضيات والبرمجة بأسلوب مبسط وشيق.' }
    ],
    managementTitle: 'أدوات التنظيم وإدارة المشاريع',
    managementTools: [
      { name: 'Notion', url: 'https://www.notion.so', desc: 'مساحة عمل متكاملة لكتابة الملاحظات، تنظيم المهام، وإدارة المشاريع. يمكنك بناء قواعد بيانات كاملة لتتبع عملائك ومشاريعك المستقلة.' },
      { name: 'Trello', url: 'https://trello.com', desc: 'أداة بسيطة تعتمد على نظام "البطاقات" (Kanban) لتتبع تقدم المهام والمشاريع. ممتازة للعمل الفردي أو مع فرق صغيرة.' },
      { name: 'Google Workspace', url: 'https://workspace.google.com', desc: 'مجموعة أدوات جوجل (Docs, Sheets, Drive) الأساسية لأي عمل عبر الإنترنت. توفر مساحة تخزين سحابية وأدوات تعاونية لا غنى عنها.' },
      { name: 'Slack', url: 'https://slack.com', desc: 'أداة التواصل الأولى لفرق العمل، تتيح تنظيم المحادثات في قنوات ومشاركة الملفات والربط مع أدوات العمل الأخرى.' },
      { name: 'Airtable', url: 'https://www.airtable.com', desc: 'أداة تجمع بين سهولة جداول البيانات وقوة قواعد البيانات، ممتازة لتنظيم المحتوى وتتبع العمليات المعقدة.' }
    ],
    visitSite: 'زيارة الموقع'
  },
  en: {
    title: 'Tools & Resources',
    desc: 'A collection of the best tools and platforms that will help you on your journey to making money online, whether you are a designer, writer, or programmer. These tools are carefully selected to speed up your workflow.',
    designTitle: 'Design and Editing Tools',
    designTools: [
      { name: 'Canva', url: 'https://www.canva.com', desc: 'An easy-to-use graphic design tool for beginners and professionals. Excellent for designing social media images, presentations, and professional logos with simple steps.' },
      { name: 'Figma', url: 'https://www.figma.com', desc: 'A professional tool for designing user interfaces (UI/UX) that works entirely from the browser. It allows real-time team collaboration and is the gold standard for web design.' },
      { name: 'CapCut', url: 'https://www.capcut.com', desc: 'A free and very powerful application for editing short videos (TikTok, Reels) on mobile and PC, containing a huge library of ready-made templates and effects.' },
      { name: 'Adobe Express', url: 'https://www.adobe.com/express/', desc: 'A fast design tool from Adobe providing thousands of professional templates and premium fonts to create attractive visual content quickly.' },
      { name: 'Pixlr', url: 'https://pixlr.com', desc: 'A free browser-based photo editor providing advanced editing tools similar to Photoshop but simpler and faster for daily use.' }
    ],
    learningTitle: 'Learning and Skill Development Platforms',
    learningTools: [
      { name: 'Coursera', url: 'https://www.coursera.org', desc: 'Offers courses from top global universities like Google and Stanford. You can apply for "Financial Aid" to take courses and get certificates for free.' },
      { name: 'Udemy', url: 'https://www.udemy.com', desc: 'The largest platform for courses in various fields at very cheap prices (especially during sales). Excellent for learning technical skills, programming, and marketing.' },
      { name: 'YouTube', url: 'https://www.youtube.com', desc: 'The largest free school in the world. You can learn almost any skill with the right search and by following specialized educational channels in your field.' },
      { name: 'Skillshare', url: 'https://www.skillshare.com', desc: 'A learning platform focusing on creative skills like design, photography, and drawing. Ideal for freelancers wanting to develop their artistic sense.' },
      { name: 'Khan Academy', url: 'https://www.khanacademy.org', desc: 'A completely free learning platform offering lessons in various sciences, mathematics, and programming in a simplified and interesting way.' }
    ],
    managementTitle: 'Organization and Project Management Tools',
    managementTools: [
      { name: 'Notion', url: 'https://www.notion.so', desc: 'An integrated workspace for writing notes, organizing tasks, and managing projects. You can build complete databases to track your clients and freelance projects.' },
      { name: 'Trello', url: 'https://trello.com', desc: 'A simple tool based on a "card" system (Kanban) to track the progress of tasks and projects. Excellent for solo work or with small teams.' },
      { name: 'Google Workspace', url: 'https://workspace.google.com', desc: 'Google\'s suite of tools (Docs, Sheets, Drive) essential for any online business. It provides indispensable cloud storage and collaborative tools.' },
      { name: 'Slack', url: 'https://slack.com', desc: 'The leading communication tool for teams, allowing organization of conversations into channels and file sharing.' },
      { name: 'Airtable', url: 'https://www.airtable.com', desc: 'A tool combining the ease of spreadsheets with the power of databases, excellent for content organization and tracking complex processes.' }
    ],
    visitSite: 'Visit Site'
  },
  tr: {
    title: 'Araçlar ve Kaynaklar',
    desc: 'İster tasarımcı, ister yazar, ister programcı olun, çevrimiçi para kazanma yolculuğunuzda size yardımcı olacak en iyi araçların ve platformların bir koleksiyonu. Bu araçlar iş akışınızı hızlandırmak için özenle seçilmiştir.',
    designTitle: 'Tasarım ve Kurgu Araçları',
    designTools: [
      { name: 'Canva', url: 'https://www.canva.com', desc: 'Yeni başlayanlar ve profesyoneller için kullanımı kolay bir grafik tasarım aracı. Sosyal medya görselleri, sunumlar ve profesyonel logolar tasarlamak için mükemmeldir.' },
      { name: 'Figma', url: 'https://www.figma.com', desc: 'Tamamen tarayıcıdan çalışan kullanıcı arayüzleri (UI/UX) tasarlamak için profesyonel bir araç. Gerçek zamanlı ekip işbirliğine olanak tanır ve web tasarımı için altın standarttır.' },
      { name: 'CapCut', url: 'https://www.capcut.com', desc: 'Mobil ve PC\'de kısa videoları (TikTok, Reels) düzenlemek için ücretsiz ve çok güçlü bir uygulama, devasa bir hazır şablon ve efekt kitaplığı içerir.' },
      { name: 'Adobe Express', url: 'https://www.adobe.com/express/', desc: 'Adobe\'den binlerce profesyonel şablon ve premium yazı tipi sağlayan hızlı bir tasarım aracı.' },
      { name: 'Pixlr', url: 'https://pixlr.com', desc: 'Photoshop\'a benzer ancak günlük kullanım için daha basit ve daha hızlı gelişmiş düzenleme araçları sağlayan ücretsiz tarayıcı tabanlı fotoğraf editörü.' }
    ],
    learningTitle: 'Öğrenme ve Beceri Geliştirme Platformları',
    learningTools: [
      { name: 'Coursera', url: 'https://www.coursera.org', desc: 'Google ve Stanford gibi dünyanın en iyi üniversitelerinden kurslar sunar. Kursları ücretsiz almak ve sertifika almak için "Mali Yardım" başvurusunda bulunabilirsiniz.' },
      { name: 'Udemy', url: 'https://www.udemy.com', desc: 'Çeşitli alanlardaki kurslar için çok ucuz fiyatlarla (özellikle indirimler sırasında) en büyük platform. Teknik beceriler, programlama ve pazarlama öğrenmek için mükemmeldir.' },
      { name: 'YouTube', url: 'https://www.youtube.com', desc: 'Dünyadaki en büyük ücretsiz okul. Doğru arama ile ve alanınızdaki uzmanlaşmış eğitim kanallarını takip ederek hemen hemen her beceriyi öğrenebilirsiniz.' },
      { name: 'Skillshare', url: 'https://www.skillshare.com', desc: 'Tasarım, fotoğrafçılık ve çizim gibi yaratıcı becerilere odaklanan bir öğrenme platformu.' },
      { name: 'Khan Academy', url: 'https://www.khanacademy.org', desc: 'Çeşitli bilimler, matematik ve programlama alanlarında basitleştirilmiş ve ilginç bir şekilde dersler sunan tamamen ücretsiz bir öğrenme platformu.' }
    ],
    managementTitle: 'Organizasyon ve Proje Yönetimi Araçları',
    managementTools: [
      { name: 'Notion', url: 'https://www.notion.so', desc: 'Not yazmak, görevleri düzenlemek ve projeleri yönetmek için entegre bir çalışma alanı. Müşterilerinizi ve serbest projelerinizi izlemek için eksiksiz veritabanları oluşturabilirsiniz.' },
      { name: 'Trello', url: 'https://trello.com', desc: 'Görevlerin ve projelerin ilerlemesini izlemek için "kart" sistemine (Kanban) dayalı basit bir araç. Bireysel çalışma veya küçük ekiplerle mükemmeldir.' },
      { name: 'Google Workspace', url: 'https://workspace.google.com', desc: 'Herhangi bir çevrimiçi iş için gerekli olan Google\'ın araç paketi (Dokümanlar, E-Tablolar, Drive). Vazgeçilmez bulut depolama ve işbirliği araçları sağlar.' },
      { name: 'Slack', url: 'https://slack.com', desc: 'Ekipler için önde gelen iletişim aracı, konuşmaların kanallar halinde düzenlenmesine ve dosya paylaşımına olanak tanır.' },
      { name: 'Airtable', url: 'https://www.airtable.com', desc: 'Elektronik tabloların kolaylığını veritabanlarının gücüyle birleştiren bir araç, içerik organizasyonu ve karmaşık süreçlerin takibi için mükemmeldir.' }
    ],
    visitSite: 'Siteyi Ziyaret Et'
  }
};

export default function ToolsResources() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-emerald-400 mb-6">{t.title}</h1>
        <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {t.desc}
        </p>
      </div>

      <div className="space-y-16">
        {/* Design Tools */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-emerald-400 mb-8 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700 pb-4">
            <PenTool className="text-emerald-500 w-8 h-8" />
            {t.designTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.designTools.map((tool, index) => (
              <a 
                key={index} 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-500/50 transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
                  <div className="p-2 bg-slate-50 dark:bg-slate-700 rounded-full group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-colors">
                    <ExternalLink className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-slate-300 text-base leading-relaxed flex-grow mb-6">{tool.desc}</p>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center gap-2 mt-auto">
                  {t.visitSite}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Learning Platforms */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-emerald-400 mb-8 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700 pb-4">
            <BookOpen className="text-emerald-500 w-8 h-8" />
            {t.learningTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.learningTools.map((tool, index) => (
              <a 
                key={index} 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-500/50 transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
                  <div className="p-2 bg-slate-50 dark:bg-slate-700 rounded-full group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-colors">
                    <ExternalLink className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-slate-300 text-base leading-relaxed flex-grow mb-6">{tool.desc}</p>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center gap-2 mt-auto">
                  {t.visitSite}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Management Tools */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-emerald-400 mb-8 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700 pb-4">
            <Layout className="text-emerald-500 w-8 h-8" />
            {t.managementTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.managementTools.map((tool, index) => (
              <a 
                key={index} 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-500/50 transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{tool.name}</h3>
                  <div className="p-2 bg-slate-50 dark:bg-slate-700 rounded-full group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-colors">
                    <ExternalLink className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-slate-300 text-base leading-relaxed flex-grow mb-6">{tool.desc}</p>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm flex items-center gap-2 mt-auto">
                  {t.visitSite}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
