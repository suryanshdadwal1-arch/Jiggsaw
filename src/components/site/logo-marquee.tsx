import Image from "next/image";
import { clientLogos } from "@/lib/site-data";

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <div className="logo-marquee" aria-label="Client logos">
      <div className={`logo-marquee-track ${reverse ? "reverse" : ""}`}>
        {logos.map((logo, index) => (
          <span key={`${logo.src}-${index}`} className="logo-tile">
            <Image src={logo.src} alt={logo.alt} width={260} height={110} className="max-h-16 w-auto max-w-[150px] object-contain" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="scroll-rise overflow-hidden border-y border-black/10 bg-white py-8">
      <div className="mb-5 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1520px]">
          <h2 className="max-w-[1320px] text-[clamp(2.3rem,3.15vw,3.95rem)] font-black uppercase leading-[0.96] text-black">
            <span className="block xl:whitespace-nowrap">Visible, readable proof from the</span>
            <span className="block xl:whitespace-nowrap">brands already in the room.</span>
          </h2>
        </div>
      </div>
      <div className="space-y-4">
        <LogoRow />
        <LogoRow reverse />
      </div>
    </section>
  );
}
