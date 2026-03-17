import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, DollarSign, Clock, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const translations = {
  ar: {
    title: 'حاسبة الأرباح المتوقعة',
    desc: 'احسب دخلك المحتمل بناءً على المجال وعدد ساعات العمل.',
    method: 'اختر المجال',
    hours: 'ساعات العمل يومياً',
    experience: 'مستوى الخبرة',
    expLevels: ['مبتدئ', 'متوسط', 'محترف'],
    calculate: 'احسب الآن',
    result: 'الأرباح المتوقعة شهرياً',
    disclaimer: '* هذه تقديرات تقريبية بناءً على متوسطات السوق.',
    methods: [
      { name: 'العمل الحر', rate: 15 },
      { name: 'التسويق بالعمولة', rate: 20 },
      { name: 'صناعة المحتوى', rate: 25 },
      { name: 'التجارة الإلكترونية', rate: 30 },
    ]
  },
  en: {
    title: 'Profit Calculator',
    desc: 'Calculate your potential income based on field and working hours.',
    method: 'Choose Field',
    hours: 'Working hours per day',
    experience: 'Experience Level',
    expLevels: ['Beginner', 'Intermediate', 'Professional'],
    calculate: 'Calculate Now',
    result: 'Estimated Monthly Profit',
    disclaimer: '* These are approximate estimates based on market averages.',
    methods: [
      { name: 'Freelancing', rate: 15 },
      { name: 'Affiliate Marketing', rate: 20 },
      { name: 'Content Creation', rate: 25 },
      { name: 'E-commerce', rate: 30 },
    ]
  },
  tr: {
    title: 'Kazanç Hesaplayıcı',
    desc: 'Alana ve çalışma saatlerine göre potansiyel gelirinizi hesaplayın.',
    method: 'Alan Seçin',
    hours: 'Günlük çalışma saati',
    experience: 'Deneyim Seviyesi',
    expLevels: ['Başlangıç', 'Orta', 'Profesyonel'],
    calculate: 'Şimdi Hesapla',
    result: 'Tahmini Aylık Kazanç',
    disclaimer: '* Bunlar piyasa ortalamalarına dayalı yaklaşık tahminlerdir.',
    methods: [
      { name: 'Freelance', rate: 15 },
      { name: 'Satış Ortaklığı', rate: 20 },
      { name: 'İçerik Üretimi', rate: 25 },
      { name: 'E-ticaret', rate: 30 },
    ]
  }
};

export default function ProfitCalculator() {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const [methodIndex, setMethodIndex] = useState(0);
  const [hours, setHours] = useState(4);
  const [exp, setExp] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const baseRate = t.methods[methodIndex].rate;
    const expMultiplier = 1 + (exp * 0.5);
    const monthly = baseRate * hours * 22 * expMultiplier;
    setResult(Math.round(monthly));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h3 className="h3">{t.title}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{t.desc}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.method}</label>
          <select 
            value={methodIndex}
            onChange={(e) => setMethodIndex(Number(e.target.value))}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {t.methods.map((m, i) => (
              <option key={i} value={i}>{m.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            {t.hours}: <span className="text-emerald-600 font-bold">{hours}</span>
          </label>
          <input 
            type="range" 
            min="1" 
            max="16" 
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.experience}</label>
          <div className="grid grid-cols-3 gap-3">
            {t.expLevels.map((level, i) => (
              <button
                key={i}
                onClick={() => setExp(i)}
                className={`py-2 rounded-xl text-sm font-medium transition-all ${
                  exp === i 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' 
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={calculate}
          className="w-full bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
        >
          <TrendingUp className="w-5 h-5" />
          {t.calculate}
        </button>

        {result !== null && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-8 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800 text-center"
          >
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">{t.result}</p>
            <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1">
              <DollarSign className="w-8 h-8" />
              {result.toLocaleString()}
            </div>
            <p className="text-[10px] text-slate-400 mt-4 italic">{t.disclaimer}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
