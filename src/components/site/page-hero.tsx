export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) {
  return (
    <section className="border-b border-black/10 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-[1520px]">
        {eyebrow ? (
          <p data-reveal className="mb-4 font-display text-sm font-black uppercase tracking-[0.26em] text-brand-orange">{eyebrow}</p>
        ) : null}
        <h1 data-reveal data-reveal-delay="0.08" className="max-w-[900px] [overflow-wrap:anywhere] font-display text-[clamp(2.1rem,3.6vw,4rem)] font-black leading-[1.04] tracking-[-0.03em] text-black">{title}</h1>
        {copy ? <p data-reveal data-reveal-delay="0.18" className="mt-5 max-w-3xl text-lg font-medium leading-8 text-black/65">{copy}</p> : null}
      </div>
    </section>
  );
}
