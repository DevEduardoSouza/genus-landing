import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Genus Tech — Desenvolvimento de Software",
  description:
    "A Genus Tech cria sites, apps, SaaS e soluções de software sob medida. Da ideia ao lançamento.",
  keywords: [
    "desenvolvimento de software",
    "desenvolvimento web",
    "SaaS",
    "aplicativos",
    "sites",
    "genus tech",
  ],
  openGraph: {
    title: "Genus Tech — Desenvolvimento de Software",
    description:
      "Criamos sites, apps, SaaS e soluções de software sob medida.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
