import { Info, Target, Users, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const translations = {
  ar: {
    title: 'من نحن',
    desc: 'تعرف على رؤيتنا ومهمتنا في مساعدة الشباب العربي على تحقيق الاستقلال المالي من خلال العمل عبر الإنترنت.',
    missionTitle: 'مهمتنا',
    missionDesc: 'نسعى لتقديم محتوى تعليمي عالي الجودة وموثوق يساعد المبتدئين والمحترفين على اكتشاف أفضل الطرق لربح المال من الإنترنت، بعيداً عن الوعود الوهمية.',
    visionTitle: 'رؤيتنا',
    visionDesc: 'أن نكون المرجع الأول والأكثر ثقة في العالم العربي لكل ما يخص العمل الحر، التجارة الإلكترونية، والاستثمار الرقمي.',
    valuesTitle: 'قيمنا الأساسية',
    values: [
      { title: 'الشفافية', desc: 'نقدم المعلومات بصدق ووضوح دون مبالغة أو تضليل.' },
      { title: 'الجودة', desc: 'نحرص على تقديم محتوى دقيق ومحدث باستمرار.' },
      { title: 'التمكين', desc: 'نهدف إلى تمكين الأفراد من بناء مستقبلهم المهني بأنفسهم.' },
    ],
    contactTitle: 'تواصل معنا',
    contactDesc: 'نحن دائماً هنا لمساعدتك والإجابة على استفساراتك. لا تتردد في التواصل معنا عبر البريد الإلكتروني:',
  },
  en: {
    title: 'About Us',
    desc: 'Learn about our vision and mission to help youth achieve financial independence through online work.',
    missionTitle: 'Our Mission',
    missionDesc: 'We strive to provide high-quality, reliable educational content that helps beginners and professionals discover the best ways to make money online, away from false promises.',
    visionTitle: 'Our Vision',
    visionDesc: 'To be the first and most trusted reference in the Arab world for everything related to freelancing, e-commerce, and digital investment.',
    valuesTitle: 'Our Core Values',
    values: [
      { title: 'Transparency', desc: 'We present information honestly and clearly without exaggeration or misleading.' },
      { title: 'Quality', desc: 'We are keen to provide accurate and constantly updated content.' },
      { title: 'Empowerment', desc: 'We aim to empower individuals to build their own professional futures.' },
    ],
    contactTitle: 'Contact Us',
    contactDesc: 'We are always here to help you and answer your inquiries. Do not hesitate to contact us via email:',
  },
  tr: {
    title: 'Hakkımızda',
    desc: 'Gençlerin çevrimiçi çalışma yoluyla finansal bağımsızlığa ulaşmalarına yardımcı olma vizyonumuz ve misyonumuz hakkında bilgi edinin.',
    missionTitle: 'Misyonumuz',
    missionDesc: 'Yeni başlayanların ve profesyonellerin internetten para kazanmanın en iyi yollarını keşfetmelerine yardımcı olan yüksek kaliteli, güvenilir eğitim içeriği sunmaya çalışıyoruz.',
    visionTitle: 'Vizyonumuz',
    visionDesc: 'Serbest çalışma, e-ticaret ve dijital yatırım ile ilgili her şeyde Arap dünyasında ilk ve en güvenilir referans olmak.',
    valuesTitle: 'Temel Değerlerimiz',
    values: [
      { title: 'Şeffaflık', desc: 'Bilgileri abartmadan veya yanıltmadan dürüst ve net bir şekilde sunuyoruz.' },
      { title: 'Kalite', desc: 'Doğru ve sürekli güncellenen içerik sunmaya özen gösteriyoruz.' },
      { title: 'Güçlendirme', desc: 'Bireyleri kendi profesyonel geleceklerini inşa etmeleri için güçlendirmeyi hedefliyoruz.' },
    ],
    contactTitle: 'Bize Ulaşın',
    contactDesc: 'Size yardımcı olmak ve sorularınızı yanıtlamak için her zaman buradayız. E-posta yoluyla bizimle iletişime geçmekten çekinmeyin:',
  }
};

export default function About() {
  const { lang } = useLanguage();
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

      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900/50 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.missionTitle}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t.missionDesc}</p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center mb-6">
              <Info className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.visionTitle}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t.visionDesc}</p>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{t.valuesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4 border border-slate-100 dark:border-slate-700">
                  {index === 0 ? <Shield className="w-8 h-8 text-emerald-500" /> : index === 1 ? <Target className="w-8 h-8 text-emerald-500" /> : <Users className="w-8 h-8 text-amber-500" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-slate-100 dark:text-slate-300 mb-6 max-w-2xl mx-auto">{t.contactDesc}</p>
          <a href="mailto:qydalrfyd@gmail.com" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-emerald-500/30">
            qydalrfyd@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
