export function PageHero({
  eyebrow,
  title,
  copy,
  desktopNoWrap = false,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  desktopNoWrap?: boolean;
}) {
  const titleClassName = [
    "page-hero-title w-full max-w-[1520px] [overflow-wrap:anywhere] font-display text-[clamp(2.1rem,3.6vw,4rem)] font-black leading-[1.04] tracking-[-0.03em] text-black",
    desktopNoWrap ? "page-hero-title-nowrap" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const copyClassName = [
    "page-hero-copy mt-5 max-w-[1180px] text-lg font-medium leading-8 text-black/65",
    desktopNoWrap ? "page-hero-copy-nowrap" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="border-b border-black/10 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="max-w-[1520px]">
        {eyebrow ? (
          <p data-reveal className="mb-4 font-display text-sm font-black uppercase tracking-[0.26em] text-brand-orange">{eyebrow}</p>
        ) : null}
        <h1 data-reveal data-reveal-delay="0.08" className={titleClassName}>{title}</h1>
        {copy ? <p data-reveal data-reveal-delay="0.18" className={copyClassName}>{copy}</p> : null}
      </div>
    </section>
  );
}
