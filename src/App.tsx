import HarmonicWave from "@/components/ui/harmonic-wave";
import { LeadForm } from "@/components/LeadForm";

const NAV_LINKS = [
  { href: "#catalog", label: "Каталог" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#how", label: "Как это работает" },
  { href: "#contact", label: "Контакты" },
];

const ADVANTAGES = [
  {
    num: "01",
    title: "Качество",
    text: "Каждая машина проходит проверку на аукционе и диагностику перед отправкой. Отчёт с фото и историей — до оплаты.",
  },
  {
    num: "02",
    title: "Скорость",
    text: "От выбора до вашего города — 3–5 недель. Подбор начинаем в день обращения, статус доставки видно в любой момент.",
  },
  {
    num: "03",
    title: "Надёжность",
    text: "Договор с фиксированной ценой, официальное оформление и полное сопровождение до постановки на учёт.",
  },
];

const CATALOG = [
  {
    label: "седан",
    title: "Седаны",
    price: "от 1,4 млн ₽ под ключ",
    image: `${import.meta.env.BASE_URL}images/catalog-sedan.webp`,
  },
  {
    label: "кроссовер",
    title: "Кроссоверы",
    price: "от 1,9 млн ₽ под ключ",
    image: `${import.meta.env.BASE_URL}images/catalog-crossover.webp`,
  },
  {
    label: "электро",
    title: "Электромобили",
    price: "от 2,3 млн ₽ под ключ",
    image: null,
  },
];

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-[#9b1c2c] px-8 text-[17px] font-semibold tracking-[-0.01em] text-white transition-colors hover:bg-[#b02434] ${className}`}
    >
      Купить
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/[0.06] bg-[#f7f7f8]/86 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-12 max-w-[1120px] items-center justify-between gap-6 px-6">
        <span className="text-sm font-semibold tracking-[0.02em]">Авто из Кореи</span>
        <div className="flex items-center gap-4 text-[12.5px] font-medium text-[#3a3a3e] sm:gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#9b1c2c]">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function PromoBar() {
  return (
    <div className="border-b border-black/5 bg-white px-6 py-3.5 text-center text-[13.5px] text-[#3a3a3e]">
      Расчёт стоимости под ключ за один день.{" "}
      <a href="#contact" className="font-medium text-[#9b1c2c] hover:text-[#b02434]">
        Оставить заявку ›
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-black px-6 pb-[clamp(48px,7vw,88px)] pt-[clamp(72px,11vw,132px)] text-center text-[#f5f5f7]">
      <h1 className="mx-auto text-balance text-[clamp(40px,8vw,86px)] font-bold leading-[1.02] tracking-[-0.035em]">
        Выгода покупки на 30%
      </h1>
      <p className="mt-[clamp(16px,2.4vw,26px)] text-[clamp(20px,3vw,30px)] font-medium tracking-[-0.015em] text-[#f5f5f7]">
        Автомобили из Кореи — напрямую, без посредников.
      </p>
      <p className="mt-3 text-[clamp(15px,1.8vw,18px)] text-[#a1a1a6]">
        Доставка, таможня и документы включены в цену.
      </p>
      <div className="mt-[clamp(28px,4vw,42px)] flex justify-center">
        <CtaButton />
      </div>
      <div className="relative mx-auto mt-[clamp(48px,7vw,86px)] aspect-[16/8] max-w-[1120px] overflow-hidden rounded border border-white/[0.08] bg-[#0d0d0f]">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-car.webp`}
          alt="Автомобиль из Кореи"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section id="advantages" className="px-6 py-[clamp(64px,9vw,120px)]">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mx-auto mb-[clamp(34px,5vw,56px)] text-center text-[clamp(30px,4.6vw,52px)] font-bold leading-[1.05] tracking-[-0.03em]">
          Три причины покупать у нас
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
          {ADVANTAGES.map((a) => (
            <article
              key={a.num}
              className="flex flex-col gap-3 rounded-[18px] border border-black/[0.07] bg-white p-[clamp(28px,3vw,40px)]"
            >
              <span className="font-mono text-xs tracking-[0.1em] text-[#9b1c2c]">{a.num}</span>
              <h3 className="text-[clamp(24px,2.6vw,30px)] font-semibold tracking-[-0.02em]">{a.title}</h3>
              <p className="text-pretty text-base leading-[1.55] text-[#3a3a3e]">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section id="catalog" className="bg-[#f2f2f4] px-6 py-[clamp(64px,9vw,116px)] text-center">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[clamp(30px,4.6vw,52px)] font-bold leading-[1.05] tracking-[-0.03em]">
          Цена ниже рынка на 30%
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-pretty text-[clamp(16px,1.9vw,19px)] leading-[1.55] text-[#3a3a3e]">
          Считаем стоимость с корейского аукциона: автомобиль, логистика, таможня и оформление одной
          суммой. Сравнение с ценой в России показываем в расчёте.
        </p>
        <div className="mt-[clamp(36px,5vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-5 text-left">
          {CATALOG.map((c) => (
            <div key={c.title} className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
              {c.image ? (
                <div className="aspect-[4/3] overflow-hidden bg-[#e6e6e9]">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-[#e6e6e9] bg-[repeating-linear-gradient(115deg,rgba(0,0,0,0.045)_0,rgba(0,0,0,0.045)_1px,transparent_1px,transparent_11px)]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#75757c]">
                    {c.label}
                  </span>
                </div>
              )}
              <div className="px-[22px] pb-6 pt-5">
                <h3 className="mb-1.5 text-[19px] font-semibold tracking-[-0.015em]">{c.title}</h3>
                <p className="text-[14.5px] text-[#55555c]">{c.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-[clamp(64px,9vw,120px)] text-center text-[#f5f5f7]">
      <h2 className="text-balance text-[clamp(30px,5vw,56px)] font-bold leading-[1.05] tracking-[-0.03em]">
        Подберём автомобиль под ваш бюджет
      </h2>
      <p className="mx-auto mt-4 max-w-[560px] text-[clamp(16px,1.9vw,19px)] leading-[1.55] text-[#a1a1a6]">
        Оставьте заявку — вернёмся с расчётом и вариантами в течение дня.
      </p>
      <div className="mt-[clamp(28px,4vw,40px)]">
        <LeadForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#f2f2f4] px-6 pb-10 pt-7 text-[12.5px] text-[#55555c]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-7 gap-y-3">
        <span>Авто из Кореи · 2026</span>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a href="#catalog" className="hover:text-[#9b1c2c]">Каталог</a>
          <a href="#how" className="hover:text-[#9b1c2c]">Доставка</a>
          <a href="#contact" className="hover:text-[#9b1c2c]">Связаться</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] font-sans text-[#111113]">
      <Header />
      <PromoBar />
      <Hero />
      <div id="how">
        <HarmonicWave />
      </div>
      <Advantages />
      <Catalog />
      <Contact />
      <Footer />
    </div>
  );
}
