import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const translations = {
  ar: {
    title: 'الأسئلة الشائعة (FAQ)',
    desc: 'إجابات على أكثر الأسئلة التي يطرحها المبتدئون حول الربح من الإنترنت والعمل الحر.',
    faqs: [
      {
        q: 'هل الربح من الإنترنت حقيقي أم مجرد وهم؟',
        a: 'نعم، حقيقي جداً. ملايين الأشخاص حول العالم يعتمدون على الإنترنت كمصدر دخل أساسي. لكنه ليس "سحراً" أو "ثراءً سريعاً"، بل هو عمل يتطلب جهداً، تعلماً، ووقتاً مثل أي عمل تقليدي.'
      },
      {
        q: 'كم أحتاج من الوقت لأبدأ في كسب المال؟',
        a: 'يختلف الأمر حسب المجال والجهد المبذول. في العمل الحر (Freelancing)، قد تحصل على أول عميل خلال أسابيع إذا كانت لديك مهارة. في مجالات مثل اليوتيوب أو التدوين، قد يستغرق الأمر من 6 أشهر إلى سنة لبناء جمهور وتحقيق دخل.'
      },
      {
        q: 'هل أحتاج إلى لغة إنجليزية قوية للعمل عبر الإنترنت؟',
        a: 'ليس بالضرورة، هناك سوق عربي ضخم جداً للعمل الحر وصناعة المحتوى. لكن، اللغة الإنجليزية تفتح لك أبواباً أوسع، وتتيح لك التعامل مع عملاء أجانب يدفعون مبالغ أكبر، وتسهل عليك تعلم مهارات جديدة من المصادر الأجنبية.'
      },
      {
        q: 'ما هو أفضل مجال للمبتدئين؟',
        a: 'لا يوجد "أفضل" مجال للجميع. يعتمد الأمر على شغفك وما تحب فعله. إذا كنت تحب الكتابة، ابدأ بالتدوين أو كتابة المحتوى. إذا كنت تحب التصميم، تعلم الجرافيك ديزاين. ابدأ بتعلم مهارة واحدة وركز عليها.'
      },
      {
        q: 'كيف أستلم أرباحي من الإنترنت؟',
        a: 'تختلف الطرق حسب المنصة وبلدك. أشهر الطرق هي: PayPal، التحويل البنكي المباشر، Payoneer، و Western Union. تأكد من دعم المنصة التي تعمل عليها لطرق الدفع المتاحة في بلدك.'
      },
      {
        q: 'هل أحتاج إلى رأس مال للبدء؟',
        a: 'في معظم المجالات (مثل العمل الحر، صناعة المحتوى، التسويق بالعمولة المجاني) لا تحتاج إلى رأس مال للبدء، فقط جهاز كمبيوتر واتصال بالإنترنت. مجالات أخرى مثل المتاجر الإلكترونية أو التداول تتطلب رأس مال.'
      },
      {
        q: 'كيف يمكنني تجنب عمليات النصب والاحتيال؟',
        a: 'دائماً ابحث عن تقييمات المنصة أو الشخص قبل البدء. لا تدفع أبداً "رسوم تأمين" أو "رسوم توظيف" للحصول على عمل. العمل الحقيقي هو الذي يدفع لك المال، وليس العكس.'
      },
      {
        q: 'هل أحتاج إلى شهادة جامعية للعمل كفريلانسر؟',
        a: 'لا، في عالم الإنترنت المهارة هي العملة الحقيقية. العملاء يهتمون بمعرض أعمالك (Portfolio) وما يمكنك إنجازه فعلياً أكثر من الشهادات الورقية.'
      },
      {
        q: 'ما هي أفضل المنصات العربية للعمل الحر؟',
        a: 'من أشهر المنصات العربية: "مستقل" للمشاريع الكبيرة، و"خمسات" للخدمات المصغرة، و"أريد" للمترجمين والكتاب.'
      },
      {
        q: 'كيف أسوق لنفسي كمبتدئ؟',
        a: 'ابدأ ببناء معرض أعمال قوي حتى لو بمشاريع وهمية أو تطوعية. انشر نصائح وخبراتك على لينكد إن وفيسبوك في مجموعات مجالك، وكن نشطاً في تقديم المساعدة.'
      },
      {
        q: 'هل يمكنني العمل من الهاتف فقط؟',
        a: 'هناك بعض المهام البسيطة التي يمكن القيام بها من الهاتف، لكن للعمل الاحترافي (برمجة، تصميم، مونتاج) ستحتاج بالتأكيد إلى جهاز كمبيوتر أو لابتوب لزيادة الإنتاجية والدقة.'
      },
      {
        q: 'ما هو الدروبشيبينغ (Dropshipping)؟',
        a: 'هو نموذج عمل في التجارة الإلكترونية حيث تبيع منتجات لا تملكها. عندما يطلب العميل من متجرك، تقوم بشرائه من المورد الذي يشحنه مباشرة للعميل، وأنت تربح الفرق بين السعرين.'
      },
      {
        q: 'كيف أختار المهارة المناسبة لي؟',
        a: 'جرب عدة أشياء بسيطة في البهاية. شاهد فيديوهات تعريفية عن التصميم، البرمجة، التسويق، والترجمة. المهارة التي تجد نفسك مستمتعاً بتعلمها ولا تشعر بالملل منها هي الأنسب لك.'
      },
      {
        q: 'هل يجب علي ترك وظيفتي الحالية للبدء؟',
        a: 'بالتأكيد لا. ابدأ بالعمل عبر الإنترنت كدخل إضافي في وقت فراغك. لا تترك وظيفتك إلا عندما يصبح دخلك من الإنترنت مستقراً ويغطي مصاريفك لعدة أشهر.'
      },
      {
        q: 'ما هي أهمية "النيش" (Niche)؟',
        a: 'النيش هو التخصص في مجال دقيق جداً (مثلاً: تصميم شعارات للمطاعم فقط). التخصص يجعلك خبيراً في نظرة العملاء ويسمح لك بطلب أسعار أعلى من الشخص الذي يعمل في كل شيء.'
      },
      {
        q: 'كيف أحافظ على استمرارية العمل؟',
        a: 'التنظيم هو السر. خصص ساعات محددة يومياً للعمل، استمر في تطوير مهاراتك، وحافظ على علاقات جيدة مع عملائك الحاليين لأنهم مصدرك الأفضل للعمل المستقبلي.'
      }
    ],
    moreQuestions: 'لديك أسئلة أخرى؟',
    contactUs: 'تواصل معنا وسنسعد بالإجابة على استفساراتك.'
  },
  en: {
    title: 'Frequently Asked Questions (FAQ)',
    desc: 'Answers to the most common questions beginners ask about making money online and freelancing.',
    faqs: [
      {
        q: 'Is making money online real or just an illusion?',
        a: 'Yes, it is very real. Millions of people around the world rely on the internet as their primary source of income. But it is not "magic" or "get rich quick", it is work that requires effort, learning, and time like any traditional job.'
      },
      {
        q: 'How long does it take to start making money?',
        a: 'It varies depending on the field and the effort put in. In freelancing, you might get your first client within weeks if you have a skill. In fields like YouTube or blogging, it may take 6 months to a year to build an audience and generate income.'
      },
      {
        q: 'Do I need strong English to work online?',
        a: 'Not necessarily, there is a huge Arab market for freelancing and content creation. However, English opens wider doors for you, allows you to deal with foreign clients who pay higher amounts, and makes it easier to learn new skills from foreign sources.'
      },
      {
        q: 'What is the best field for beginners?',
        a: 'There is no "best" field for everyone. It depends on your passion and what you like to do. If you like writing, start blogging or content writing. If you like design, learn graphic design. Start by learning one skill and focus on it.'
      },
      {
        q: 'How do I receive my earnings from the internet?',
        a: 'Methods vary depending on the platform and your country. The most popular methods are: PayPal, direct bank transfer, Payoneer, and Western Union. Make sure the platform you work on supports the payment methods available in your country.'
      },
      {
        q: 'Do I need capital to start?',
        a: 'In most fields (like freelancing, content creation, free affiliate marketing) you do not need capital to start, just a computer and an internet connection. Other fields like e-commerce or trading require capital.'
      },
      {
        q: 'How can I avoid scams?',
        a: 'Always research the platform or person before starting. Never pay "insurance fees" or "hiring fees" to get a job. Real work pays you, not the other way around.'
      },
      {
        q: 'Do I need a university degree to work as a freelancer?',
        a: 'No, in the online world, skill is the real currency. Clients care about your portfolio and what you can actually achieve more than paper certificates.'
      },
      {
        q: 'What are the best Arabic platforms for freelancing?',
        a: 'The most famous Arabic platforms are: "Mostaql" for large projects, "Khamsat" for micro-services, and "Ureed" for translators and writers.'
      },
      {
        q: 'How do I market myself as a beginner?',
        a: 'Start by building a strong portfolio even with fake or volunteer projects. Post tips and your experiences on LinkedIn and Facebook in groups related to your field, and be active in providing help.'
      },
      {
        q: 'Can I work from a phone only?',
        a: 'There are some simple tasks that can be done from a phone, but for professional work (programming, design, editing) you will definitely need a computer or laptop to increase productivity and accuracy.'
      },
      {
        q: 'What is Dropshipping?',
        a: 'It is a business model in e-commerce where you sell products you do not own. When a customer orders from your store, you buy it from the supplier who ships it directly to the customer, and you profit from the difference between the two prices.'
      },
      {
        q: 'How do I choose the right skill for me?',
        a: 'Try several simple things at first. Watch introductory videos about design, programming, marketing, and translation. The skill you find yourself enjoying learning and not feeling bored with is the most suitable for you.'
      },
      {
        q: 'Should I quit my current job to start?',
        a: 'Certainly not. Start working online as an additional income in your spare time. Do not leave your job until your online income becomes stable and covers your expenses for several months.'
      },
      {
        q: 'What is the importance of a "Niche"?',
        a: 'A niche is specializing in a very specific field (e.g., designing logos for restaurants only). Specialization makes you an expert in the eyes of clients and allows you to charge higher prices than someone who works in everything.'
      },
      {
        q: 'How do I maintain work continuity?',
        a: 'Organization is the secret. Allocate specific hours daily for work, continue to develop your skills, and maintain good relationships with your current clients because they are your best source for future work.'
      }
    ],
    moreQuestions: 'Have more questions?',
    contactUs: 'Contact us and we will be happy to answer your inquiries.'
  },
  tr: {
    title: 'Sıkça Sorulan Sorular (FAQ)',
    desc: 'Yeni başlayanların çevrimiçi para kazanma ve serbest çalışma hakkında sorduğu en yaygın soruların yanıtları.',
    faqs: [
      {
        q: 'İnternetten para kazanmak gerçek mi yoksa sadece bir illüzyon mu?',
        a: 'Evet, çok gerçek. Dünyanın dört bir yanındaki milyonlarca insan birincil gelir kaynağı olarak internete güveniyor. Ancak bu "sihir" veya "hızlı zengin olma" değildir, herhangi bir geleneksel iş gibi çaba, öğrenme ve zaman gerektiren bir iştir.'
      },
      {
        q: 'Para kazanmaya başlamak ne kadar sürer?',
        a: 'Alana ve harcanan çabaya göre değişir. Serbest çalışmada, bir beceriniz varsa ilk müşterinizi haftalar içinde bulabilirsiniz. YouTube veya blog yazarlığı gibi alanlarda, bir kitle oluşturmak ve gelir elde etmek 6 aydan bir yıla kadar sürebilir.'
      },
      {
        q: 'Çevrimiçi çalışmak için güçlü bir İngilizceye ihtiyacım var mı?',
        a: 'Şart değil, serbest çalışma ve içerik oluşturma için çok büyük bir Arap pazarı var. Ancak İngilizce size daha geniş kapılar açar, daha yüksek miktarlar ödeyen yabancı müşterilerle ilgilenmenize olanak tanır ve yabancı kaynaklardan yeni beceriler öğrenmenizi kolaylaştırır.'
      },
      {
        q: 'Yeni başlayanlar için en iyi alan hangisidir?',
        a: 'Herkes için "en iyi" alan yoktur. Tutkunuza ve ne yapmayı sevdiğinize bağlıdır. Yazmayı seviyorsanız, blog yazmaya veya içerik yazmaya başlayın. Tasarımı seviyorsanız, grafik tasarım öğrenin. Bir beceri öğrenerek başlayın ve ona odaklanın.'
      },
      {
        q: 'Kazançlarımı internetten nasıl alırım?',
        a: 'Yöntemler platforma ve ülkenize göre değişir. En popüler yöntemler şunlardır: PayPal, doğrudan banka havalesi, Payoneer ve Western Union. Çalıştığınız platformun ülkenizde bulunan ödeme yöntemlerini desteklediğinden emin olun.'
      },
      {
        q: 'Başlamak için sermayeye ihtiyacım var mı?',
        a: 'Çoğu alanda (serbest çalışma, içerik oluşturma, ücretsiz satış ortaklığı gibi) başlamak için sermayeye ihtiyacınız yoktur, sadece bir bilgisayar ve internet bağlantısı yeterlidir. E-ticaret veya ticaret gibi diğer alanlar sermaye gerektirir.'
      },
      {
        q: 'Dolandırıcılıklardan nasıl kaçınabilirim?',
        a: 'Başlamadan önce daima platformu veya kişiyi araştırın. İş bulmak için asla "sigorta ücreti" veya "işe alım ücreti" ödemeyin. Gerçek iş size ödeme yapar, tersi değil.'
      },
      {
        q: 'Freelancer olarak çalışmak için üniversite diplomasına ihtiyacım var mı?',
        a: 'Hayır, çevrimiçi dünyada beceri gerçek para birimidir. Müşteriler, kağıt sertifikalardan ziyade portföyünüzle ve gerçekte neyi başarabileceğinizle ilgilenirler.'
      },
      {
        q: 'Serbest çalışma için en iyi Arapça platformlar hangileridir?',
        a: 'En ünlü Arapça platformlar şunlardır: Büyük projeler için "Mostaql", mikro hizmetler için "Khamsat" ve çevirmenler ve yazarlar için "Ureed".'
      },
      {
        q: 'Yeni başlayan biri olarak kendimi nasıl pazarlarım?',
        a: 'Sahte veya gönüllü projelerle bile güçlü bir portföy oluşturarak başlayın. LinkedIn ve Facebook\'ta alanınızla ilgili gruplarda ipuçları ve deneyimlerinizi paylaşın ve yardım sağlama konusunda aktif olun.'
      },
      {
        q: 'Sadece telefondan çalışabilir miyim?',
        a: 'Telefondan yapılabilecek bazı basit görevler vardır, ancak profesyonel işler (programlama, tasarım, kurgu) için üretkenliği ve doğruluğu artırmak için kesinlikle bir bilgisayara veya dizüstü bilgisayara ihtiyacınız olacaktır.'
      },
      {
        q: 'Dropshipping nedir?',
        a: 'Sahip olmadığınız ürünleri sattığınız e-ticarette bir iş modelidir. Bir müşteri mağazanızdan sipariş verdiğinde, onu doğrudan müşteriye gönderen tedarikçiden satın alırsınız ve iki fiyat arasındaki farktan kar edersiniz.'
      },
      {
        q: 'Benim için doğru beceriyi nasıl seçerim?',
        a: 'İlk başta birkaç basit şey deneyin. Tasarım, programlama, pazarlama ve çeviri hakkında tanıtım videoları izleyin. Öğrenmekten keyif aldığınız ve sıkılmadığınız beceri sizin için en uygun olanıdır.'
      },
      {
        q: 'Başlamak için mevcut işimden ayrılmalı mıyım?',
        a: 'Kesinlikle hayır. Boş zamanlarınızda ek gelir olarak çevrimiçi çalışmaya başlayın. Çevrimiçi geliriniz istikrarlı hale gelene ve birkaç aylık masraflarınızı karşılayana kadar işinizden ayrılmayın.'
      },
      {
        q: 'Bir "Niş"in (Niche) önemi nedir?',
        a: 'Niş, çok özel bir alanda uzmanlaşmaktır (örneğin, yalnızca restoranlar için logolar tasarlamak). Uzmanlaşma sizi müşterilerin gözünde bir uzman yapar ve her şeyi yapan birinden daha yüksek fiyatlar talep etmenizi sağlar.'
      },
      {
        q: 'İş sürekliliğini nasıl sağlarım?',
        a: 'Organizasyon işin sırrıdır. Çalışmak için günlük belirli saatler ayırın, becerilerinizi geliştirmeye devam edin ve mevcut müşterilerinizle iyi ilişkiler sürdürün çünkü onlar gelecekteki işler için en iyi kaynağınızdır.'
      }
    ],
    moreQuestions: 'Başka sorularınız mı var?',
    contactUs: 'Bizimle iletişime geçin, sorularınızı yanıtlamaktan memnuniyet duyarız.'
  }
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang, dir } = useLanguage();
  const t = translations[lang];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title={t.title} description={t.desc} />
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-emerald-400 mb-6 flex items-center justify-center gap-3">
          <HelpCircle className="text-emerald-500 h-10 w-10" />
          {t.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-slate-300 leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div className="space-y-4">
        {t.faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`bg-white dark:bg-slate-800 rounded-2xl border transition-all duration-200 overflow-hidden ${
              openIndex === index ? 'border-emerald-500 shadow-md' : 'border-gray-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-500/50'
            }`}
          >
            <button
              className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-lg text-slate-900 dark:text-emerald-400 pr-4">{faq.q}</span>
              {openIndex === index ? (
                <ChevronUp className="text-emerald-500 shrink-0" />
              ) : (
                <ChevronDown className="text-gray-400 dark:text-slate-500 shrink-0" />
              )}
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed border-t border-gray-100 dark:border-slate-700 pt-4">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-100 dark:border-slate-700">
        <h3 className="text-xl font-bold text-slate-900 dark:text-emerald-400 mb-2">{t.moreQuestions}</h3>
        <p className="text-gray-600 dark:text-slate-300 mb-6">{t.contactUs}</p>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
          {lang === 'ar' ? 'اتصل بنا' : lang === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
        </button>
      </div>
    </div>
  );
}
