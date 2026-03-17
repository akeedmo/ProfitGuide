import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
  bulletClassName?: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ text, className = "", bulletClassName = "" }) => {
  if (!text) return null;

  // Split by period, but keep the period with the sentence
  const sentences = text.split('.').filter(s => s.trim()).map(s => s.trim() + '.');

  return (
    <div className={`space-y-4 ${className}`}>
      {sentences.map((sentence, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className={`mt-2.5 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] shrink-0 ${bulletClassName}`} />
          <p className="leading-relaxed text-[inherit] font-[inherit]">
            {sentence}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FormattedText;
