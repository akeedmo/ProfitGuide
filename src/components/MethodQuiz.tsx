import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, CheckCircle2, ArrowRight, ArrowLeft, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const translations = {
  ar: {
    title: 'اختبار: ما هو المجال الأنسب لك؟',
    desc: 'أجب على 4 أسئلة بسيطة لنقترح عليك أفضل طريقة للبدء.',
    start: 'ابدأ الاختبار',
    next: 'التالي',
    prev: 'السابق',
    restart: 'إعادة الاختبار',
    resultTitle: 'المجال المقترح لك هو:',
    explore: 'استكشف هذا المجال',
    questions: [
      {
        q: 'كم ساعة يمكنك تخصيصها يومياً؟',
        options: [
          { text: 'أقل من ساعتين', score: { ecommerce: 1, affiliate: 2 } },
          { text: '2-4 ساعات', score: { freelancing: 2, content: 1 } },
          { text: 'أكثر من 4 ساعات', score: { freelancing: 1, content: 2, ecommerce: 2 } }
        ]
      },
      {
        q: 'هل تفضل العمل منفرداً أم التفاعل مع العملاء؟',
        options: [
          { text: 'أفضل العمل منفرداً تماماً', score: { affiliate: 2, ecommerce: 1 } },
          { text: 'لا أمانع التفاعل مع الآخرين', score: { freelancing: 2, content: 1 } }
        ]
      },
      {
        q: 'ما هو مستواك في اللغة الإنجليزية؟',
        options: [
          { text: 'ضعيف', score: { ecommerce: 2, content: 2 } },
          { text: 'متوسط أو جيد', score: { freelancing: 2, affiliate: 1 } }
        ]
      },
      {
        q: 'هل لديك رأس مال للبدء؟',
        options: [
          { text: 'لا، أريد البدء مجاناً', score: { freelancing: 2, content: 2, affiliate: 1 } },
          { text: 'نعم، يمكنني الاستثمار قليلاً', score: { ecommerce: 2, affiliate: 2 } }
        ]
      }
    ],
    results: {
      freelancing: { title: 'العمل الحر (Freelancing)', path: '/freelancing', desc: 'لديك مهارات يمكن بيعها مباشرة للعملاء.' },
      affiliate: { title: 'التسويق بالعمولة (Affiliate)', path: '/affiliate-marketing', desc: 'أنت بارع في الإقناع والترويج.' },
      content: { title: 'صناعة المحتوى (Content)', path: '/content-creation', desc: 'لديك شغف بمشاركة المعرفة والإبداع.' },
      ecommerce: { title: 'التجارة الإلكترونية (E-commerce)', path: '/ecommerce', desc: 'لديك عقلية تجارية وتريد بناء علامتك الخاصة.' }
    }
  },
  en: {
    title: 'Quiz: Which Field Suits You Best?',
    desc: 'Answer 4 simple questions to find your best starting point.',
    start: 'Start Quiz',
    next: 'Next',
    prev: 'Previous',
    restart: 'Restart Quiz',
    resultTitle: 'Your Suggested Field:',
    explore: 'Explore this Field',
    questions: [
      {
        q: 'How many hours can you dedicate daily?',
        options: [
          { text: 'Less than 2 hours', score: { ecommerce: 1, affiliate: 2 } },
          { text: '2-4 hours', score: { freelancing: 2, content: 1 } },
          { text: 'More than 4 hours', score: { freelancing: 1, content: 2, ecommerce: 2 } }
        ]
      },
      {
        q: 'Do you prefer working alone or interacting with clients?',
        options: [
          { text: 'I prefer working completely alone', score: { affiliate: 2, ecommerce: 1 } },
          { text: 'I don\'t mind interacting with others', score: { freelancing: 2, content: 1 } }
        ]
      },
      {
        q: 'What is your English level?',
        options: [
          { text: 'Basic', score: { ecommerce: 2, content: 2 } },
          { text: 'Intermediate or Good', score: { freelancing: 2, affiliate: 1 } }
        ]
      },
      {
        q: 'Do you have startup capital?',
        options: [
          { text: 'No, I want to start for free', score: { freelancing: 2, content: 2, affiliate: 1 } },
          { text: 'Yes, I can invest a little', score: { ecommerce: 2, affiliate: 2 } }
        ]
      }
    ],
    results: {
      freelancing: { title: 'Freelancing', path: '/freelancing', desc: 'You have skills that can be sold directly to clients.' },
      affiliate: { title: 'Affiliate Marketing', path: '/affiliate-marketing', desc: 'You are good at persuasion and promotion.' },
      content: { title: 'Content Creation', path: '/content-creation', desc: 'You have a passion for sharing knowledge and creativity.' },
      ecommerce: { title: 'E-commerce', path: '/ecommerce', desc: 'You have a business mindset and want to build your own brand.' }
    }
  },
  tr: {
    title: 'Test: Hangi Alan Size En Uygun?',
    desc: 'En iyi başlangıç noktanızı bulmak için 4 basit soruyu yanıtlayın.',
    start: 'Teste Başla',
    next: 'Sonraki',
    prev: 'Önceki',
    restart: 'Testi Yeniden Başlat',
    resultTitle: 'Önerilen Alanınız:',
    explore: 'Bu Alanı Keşfedin',
    questions: [
      {
        q: 'Günlük kaç saat ayırabilirsiniz?',
        options: [
          { text: '2 saatten az', score: { ecommerce: 1, affiliate: 2 } },
          { text: '2-4 saat', score: { freelancing: 2, content: 1 } },
          { text: '4 saatten fazla', score: { freelancing: 1, content: 2, ecommerce: 2 } }
        ]
      },
      {
        q: 'Yalnız çalışmayı mı yoksa müşterilerle etkileşim kurmayı mı tercih edersiniz?',
        options: [
          { text: 'Tamamen yalnız çalışmayı tercih ederim', score: { affiliate: 2, ecommerce: 1 } },
          { text: 'Başkalarıyla etkileşim kurmaktan çekinmem', score: { freelancing: 2, content: 1 } }
        ]
      },
      {
        q: 'İngilizce seviyeniz nedir?',
        options: [
          { text: 'Temel', score: { ecommerce: 2, content: 2 } },
          { text: 'Orta veya İyi', score: { freelancing: 2, affiliate: 1 } }
        ]
      },
      {
        q: 'Başlangıç sermayeniz var mı?',
        options: [
          { text: 'Hayır, ücretsiz başlamak istiyorum', score: { freelancing: 2, content: 2, affiliate: 1 } },
          { text: 'Evet, biraz yatırım yapabilirim', score: { ecommerce: 2, affiliate: 2 } }
        ]
      }
    ],
    results: {
      freelancing: { title: 'Freelance', path: '/freelancing', desc: 'Doğrudan müşterilere satılabilecek becerileriniz var.' },
      affiliate: { title: 'Satış Ortaklığı', path: '/affiliate-marketing', desc: 'İkna ve tanıtım konusunda iyisiniz.' },
      content: { title: 'İçerik Üretimi', path: '/content-creation', desc: 'Bilgi ve yaratıcılığı paylaşma tutkunuz var.' },
      ecommerce: { title: 'E-ticaret', path: '/ecommerce', desc: 'Ticari bir zihniyetiniz var ve kendi markanızı oluşturmak istiyorsunuz.' }
    }
  }
};

export default function MethodQuiz() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const PrevIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const [step, setStep] = useState(-1); // -1: start, 0-3: questions, 4: result
  const [scores, setScores] = useState({ freelancing: 0, affiliate: 0, content: 0, ecommerce: 0 });

  const handleOption = (score: any) => {
    const newScores = { ...scores };
    Object.keys(score).forEach(key => {
      newScores[key as keyof typeof scores] += score[key];
    });
    setScores(newScores);
    setStep(step + 1);
  };

  const getResult = () => {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return t.results[sorted[0][0] as keyof typeof t.results];
  };

  const reset = () => {
    setStep(-1);
    setScores({ freelancing: 0, affiliate: 0, content: 0, ecommerce: 0 });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 max-w-2xl mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        {step === -1 && (
          <motion.div 
            key="start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center py-8"
          >
            <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">{t.desc}</p>
            <button 
              onClick={() => setStep(0)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-emerald-500/30"
            >
              {t.start}
            </button>
          </motion.div>
        )}

        {step >= 0 && step < 4 && (
          <motion.div 
            key={`q-${step}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Question {step + 1} / 4</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className={`h-1.5 w-8 rounded-full ${i <= step ? 'bg-emerald-500' : 'bg-slate-100 dark:bg-slate-700'}`}></div>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">{t.questions[step].q}</h3>
            <div className="space-y-3">
              {t.questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOption(opt.score)}
                  className="w-full text-right bg-slate-50 dark:bg-slate-900 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 p-5 rounded-2xl transition-all flex items-center justify-between group"
                >
                  <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">{opt.text}</span>
                  <ArrowIcon className="w-5 h-5 text-slate-300 group-hover:text-emerald-500" />
                </button>
              ))}
            </div>
            {step > 0 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-medium mt-4"
              >
                <PrevIcon className="w-4 h-4" />
                {t.prev}
              </button>
            )}
          </motion.div>
        )}

        {step === 4 && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{t.resultTitle}</p>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">{getResult().title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-sm mx-auto">{getResult().desc}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={getResult().path}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-emerald-500/30"
              >
                {t.explore}
              </Link>
              <button 
                onClick={reset}
                className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-bold py-4 px-8 rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                <RefreshCcw className="w-5 h-5" />
                {t.restart}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
