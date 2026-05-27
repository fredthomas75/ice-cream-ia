import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  title: "Bonbon IA — Confiserie artisanale livrée chez vous",
  description:
    "Bonbon IA — la confiserie artisanale née d'un atelier d'IA. Tire Sainte-Catherine, sucre à la crème, fraises suédoises, gommeux surs. Livraison Montréal.",
  openGraph: {
    title: "Bonbon IA — Confiserie artisanale",
    description: "Bonbons artisanaux québécois livrés chez vous.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
