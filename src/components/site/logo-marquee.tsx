import Image from "next/image";
import { clientLogos } from "@/lib/site-data";

function LogoRow({ logos, reverse = false }: { logos: typeof clientLogos; reverse?: boolean }) {
  const movingLogos = [...logos, ...logos];

  return (
    <div className="logo-marquee" aria-label="Client logos">
      <div className={`logo-marquee-track ${reverse ? "reverse" : ""}`}>
        {movingLogos.map((logo, index) => (
          <span key={`${logo.src}-${index}`} className="logo-tile">
            <Image
              src={logo.src}
              alt={logo.alt}
              title={logo.name}
              width={260}
              height={110}
              className="max-h-16 w-auto max-w-[150px] object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const midpoint = Math.ceil(clientLogos.length / 2);
  const firstRow = clientLogos.slice(0, midpoint);
  const secondRow = clientLogos.slice(midpoint);

  return (
    <section className="overflow-hidden bg-white pb-14 pt-4">
      <div className="space-y-4">
        <LogoRow logos={firstRow} />
        <LogoRow logos={secondRow} reverse />
      </div>
    </section>
  );
}
