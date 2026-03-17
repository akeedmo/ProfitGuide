import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BackButton() {
  const { lang } = useLanguage();
  return (
    <Link to="/" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors mb-4">
      <ArrowLeft className="w-5 h-5" />
      {lang === 'ar' ? 'العودة للرئيسية' : lang === 'en' ? 'Back to Home' : 'Ana Sayfaya Dön'}
    </Link>
  );
}
