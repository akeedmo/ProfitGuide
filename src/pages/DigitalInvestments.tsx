import { LineChart, Bitcoin, TrendingUp, AlertTriangle, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import FormattedText from '../components/FormattedText';

const translations = {
  ar: {
    title: 'الاستثمارات الرقمية (Digital Investments)',
    desc: 'تنمية أموالك عبر الإنترنت من خلال الاستثمار في الأصول الرقمية والأسواق المالية.',
    warningTitle: 'تحذير هام جداً',
    warningDesc: 'الاستثمار يحمل مخاطر عالية، خاصة في العملات الرقمية. لا تستثمر أبداً أموالاً لا يمكنك تحمل خسارتها، ولا تقترض لتستثمر. قم ببحثك الخاص (DYOR) قبل اتخاذ أي قرار.',
    section1Title: 'العملات الرقمية (Cryptocurrencies)',
    section1P1: 'هي عملات افتراضية مشفرة تعمل على تقنية البلوكشين (Blockchain).',
    cryptoTypes: [
      { name: 'البيتكوين (Bitcoin - BTC)', desc: 'العملة الأولى والأشهر، تعتبر "الذهب الرقمي" ومخزناً للقيمة.' },
      { name: 'الإيثيريوم (Ethereum - ETH)', desc: 'منصة للتطبيقات اللامركزية والعقود الذكية، العملة الثانية من حيث الأهمية.' },
      { name: 'العملات البديلة (Altcoins)', desc: 'أي عملة غير البيتكوين. تحمل مخاطر أعلى بكثير ولكن قد تحقق عوائد أكبر.' }
    ],
    section2Title: 'تداول الأسهم (Stock Trading)',
    section2P1: 'شراء حصص في شركات حقيقية (مثل أبل، تسلا، جوجل) عبر منصات تداول رقمية.',
    stockTypes: [
      { title: 'الاستثمار طويل الأمد', desc: 'شراء أسهم شركات قوية والاحتفاظ بها لسنوات للاستفادة من نموها وتوزيعات الأرباح.' },
      { title: 'المضاربة (Day Trading)', desc: 'شراء وبيع الأسهم في نفس اليوم للاستفادة من تقلبات الأسعار. (عالي المخاطر جداً ويحتاج خبرة كبيرة).' }
    ],
    section3Title: 'الرموز غير القابلة للاستبدال (NFTs)',
    section3P1: 'أصول رقمية فريدة (صور، مقاطع صوتية، فن رقمي) يتم إثبات ملكيتها عبر البلوكشين.',
    section3P2: 'ملاحظة: سوق الـ NFTs شهد فقاعة كبيرة وانخفضت قيمته بشكل حاد، لذا يجب الحذر الشديد عند دخوله.',
    platformsTitle: 'منصات موثوقة للبدء',
    platforms: [
      { name: 'Binance', desc: 'أكبر منصة لتداول العملات الرقمية في العالم.' },
      { name: 'Interactive Brokers', desc: 'منصة قوية لتداول الأسهم العالمية.' },
      { name: 'eToro', desc: 'منصة سهلة للمبتدئين توفر ميزة "نسخ التداول" (Copy Trading).' }
    ]
  },
  en: {
    title: 'Digital Investments',
    desc: 'Grow your money online by investing in digital assets and financial markets.',
    warningTitle: 'Very Important Warning',
    warningDesc: 'Investing carries high risks, especially in cryptocurrencies. Never invest money you cannot afford to lose, and do not borrow to invest. Do your own research (DYOR) before making any decision.',
    section1Title: 'Cryptocurrencies',
    section1P1: 'They are encrypted virtual currencies that operate on Blockchain technology.',
    cryptoTypes: [
      { name: 'Bitcoin (BTC)', desc: 'The first and most famous currency, considered "digital gold" and a store of value.' },
      { name: 'Ethereum (ETH)', desc: 'A platform for decentralized applications and smart contracts, the second most important currency.' },
      { name: 'Altcoins', desc: 'Any currency other than Bitcoin. They carry much higher risks but may yield greater returns.' }
    ],
    section2Title: 'Stock Trading',
    section2P1: 'Buying shares in real companies (like Apple, Tesla, Google) via digital trading platforms.',
    stockTypes: [
      { title: 'Long-term Investing', desc: 'Buying shares of strong companies and holding them for years to benefit from their growth and dividends.' },
      { title: 'Day Trading', desc: 'Buying and selling stocks on the same day to benefit from price fluctuations. (Very high risk and requires great experience).' }
    ],
    section3Title: 'Non-Fungible Tokens (NFTs)',
    section3P1: 'Unique digital assets (images, audio clips, digital art) whose ownership is proven via the blockchain.',
    section3P2: 'Note: The NFT market experienced a massive bubble and its value dropped sharply, so extreme caution is required when entering it.',
    platformsTitle: 'Reliable platforms to start',
    platforms: [
      { name: 'Binance', desc: 'The largest cryptocurrency trading platform in the world.' },
      { name: 'Interactive Brokers', desc: 'A powerful platform for trading global stocks.' },
      { name: 'eToro', desc: 'An easy platform for beginners that offers a "Copy Trading" feature.' }
    ]
  },
  tr: {
    title: 'Dijital Yatırımlar (Digital Investments)',
    desc: 'Dijital varlıklara ve finansal piyasalara yatırım yaparak paranızı çevrimiçi olarak büyütün.',
    warningTitle: 'Çok Önemli Uyarı',
    warningDesc: 'Yatırım yapmak, özellikle kripto para birimlerinde yüksek riskler taşır. Asla kaybetmeyi göze alamayacağınız parayla yatırım yapmayın ve yatırım yapmak için borç almayın. Herhangi bir karar vermeden önce kendi araştırmanızı (DYOR) yapın.',
    section1Title: 'Kripto Para Birimleri (Cryptocurrencies)',
    section1P1: 'Blockchain teknolojisi üzerinde çalışan şifreli sanal para birimleridir.',
    cryptoTypes: [
      { name: 'Bitcoin (BTC)', desc: 'İlk ve en ünlü para birimi, "dijital altın" ve bir değer deposu olarak kabul edilir.' },
      { name: 'Ethereum (ETH)', desc: 'Merkezi olmayan uygulamalar ve akıllı sözleşmeler için bir platform, en önemli ikinci para birimi.' },
      { name: 'Altcoinler', desc: 'Bitcoin dışındaki herhangi bir para birimi. Çok daha yüksek risk taşırlar ancak daha büyük getiriler sağlayabilirler.' }
    ],
    section2Title: 'Hisse Senedi Alım Satımı (Stock Trading)',
    section2P1: 'Dijital ticaret platformları aracılığıyla gerçek şirketlerin (Apple, Tesla, Google gibi) hisselerini satın almak.',
    stockTypes: [
      { title: 'Uzun Vadeli Yatırım', desc: 'Güçlü şirketlerin hisselerini satın almak ve büyüme ve temettülerinden yararlanmak için yıllarca elde tutmak.' },
      { title: 'Günlük Alım Satım (Day Trading)', desc: 'Fiyat dalgalanmalarından yararlanmak için aynı gün içinde hisse senedi alıp satmak. (Çok yüksek risklidir ve büyük deneyim gerektirir).' }
    ],
    section3Title: 'Değiştirilemez Tokenlar (NFT\'ler)',
    section3P1: 'Sahipliği blok zinciri aracılığıyla kanıtlanan benzersiz dijital varlıklar (resimler, ses klipleri, dijital sanat).',
    section3P2: 'Not: NFT pazarı devasa bir balon yaşadı ve değeri keskin bir şekilde düştü, bu nedenle girerken aşırı dikkatli olunmalıdır.',
    platformsTitle: 'Başlamak için güvenilir platformlar',
    platforms: [
      { name: 'Binance', desc: 'Dünyanın en büyük kripto para ticaret platformu.' },
      { name: 'Interactive Brokers', desc: 'Küresel hisse senetleri ticareti için güçlü bir platform.' },
      { name: 'eToro', desc: '"Kopya Ticareti" (Copy Trading) özelliği sunan yeni başlayanlar için kolay bir platform.' }
    ]
  }
};

export default function DigitalInvestments() {
  const { lang, dir } = useLanguage();
  const t = translations[lang];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO title={t.title} description={t.desc} />
      <div className="mb-12 text-center">
        <h1 className="h1 text-slate-900 dark:text-emerald-400 mb-6">{t.title}</h1>
        <FormattedText text={t.desc} className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto" />
      </div>

      {/* Warning Banner */}
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl mb-12 flex items-start gap-4" style={{ borderLeftWidth: dir === 'ltr' ? '4px' : '0', borderRightWidth: dir === 'rtl' ? '4px' : '0', borderLeftColor: '#ef4444', borderRightColor: '#ef4444' }}>
        <AlertTriangle className="text-red-500 h-8 w-8 shrink-0" />
        <div>
          <h3 className="h3 text-red-800 dark:text-red-400 mb-2">{t.warningTitle}</h3>
          <FormattedText text={t.warningDesc} className="text-red-700 dark:text-red-300" />
        </div>
      </div>

      <div className="space-y-16">
        {/* Section 1 */}
        <section>
          <h2 className="h2 text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <Bitcoin className="text-amber-500" />
            {t.section1Title}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
            <FormattedText text={t.section1P1} className="text-lg text-gray-700 dark:text-slate-300 mb-6" />
            <div className="space-y-4">
              {t.cryptoTypes.map((crypto, index) => (
                <div key={index} className="bg-gray-50 dark:bg-slate-900/50 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                  <h3 className="h3 text-slate-900 dark:text-emerald-400 mb-1">{crypto.name}</h3>
                  <FormattedText text={crypto.desc} className="text-gray-600 dark:text-slate-300 text-sm" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="h2 text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <LineChart className="text-emerald-500" />
            {t.section2Title}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
            <FormattedText text={t.section2P1} className="text-lg text-gray-700 dark:text-slate-300 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.stockTypes.map((stock, index) => (
                <div key={index} className="border border-gray-200 dark:border-slate-700 rounded-xl p-6 hover:border-emerald-300 dark:hover:border-emerald-500/50 transition-colors">
                  <h3 className="h3 text-slate-900 dark:text-emerald-400 mb-3">{stock.title}</h3>
                  <FormattedText text={stock.desc} className="text-gray-600 dark:text-slate-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="h2 text-slate-900 dark:text-emerald-400 mb-6 flex items-center gap-3">
            <ShieldAlert className="text-emerald-500" />
            {t.section3Title}
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700 prose prose-lg prose-slate dark:prose-invert max-w-none">
            <FormattedText text={t.section3P1} className="text-gray-700 dark:text-slate-300" />
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4">
              <FormattedText text={t.section3P2} className="text-amber-600 dark:text-amber-400 text-sm font-medium" />
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="bg-slate-900 dark:bg-slate-800 text-white rounded-2xl p-8 border border-transparent dark:border-slate-700">
          <h2 className="h2 mb-6 flex items-center gap-3">
            <TrendingUp className="text-emerald-400" />
            {t.platformsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.platforms.map((platform, index) => (
              <div key={index} className="bg-slate-800/50 dark:bg-slate-700/50 p-6 rounded-xl border border-emerald-700 dark:border-slate-600">
                <h3 className="h3 mb-2">{platform.name}</h3>
                <FormattedText text={platform.desc} className="text-slate-200 dark:text-slate-300 text-sm" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
