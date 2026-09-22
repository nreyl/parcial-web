import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getDictionary, Locale } from "./dictionaries";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.title,
    description: dict.description,
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Header></Header>
        <main className="flex-1">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
