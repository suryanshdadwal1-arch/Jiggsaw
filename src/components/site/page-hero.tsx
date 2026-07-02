export function PageHero({
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) {
  return (
    <section className="border-b border-black/10 bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-10">
      <div className="mx-auto max-w-[1520px]">
        <h1 className="max-w-[1480px] text-[clamp(3rem,4.8vw,5.6rem)] font-black uppercase leading-[0.98] text-black">{title}</h1>
        {copy ? <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-black/62">{copy}</p> : null}
      </div>
    </section>
  );
}
