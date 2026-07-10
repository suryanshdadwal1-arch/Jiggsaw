import type { Metadata } from "next";
import { Montserrat, Sora } from "next/font/google";
import { CustomCursor } from "@/components/site/custom-cursor";
import { JiggsawPreloader } from "@/components/site/jiggsaw-preloader";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jiggsaw | Digital & Physical Marketing Agency",
  description:
    "Jiggsaw puts every piece of a brand's digital and physical presence together through strategy, content, media, activations, and growth systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <JiggsawPreloader />
          <CustomCursor />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
