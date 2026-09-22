import { notFound } from "next/dist/client/components/not-found";
import { getDictionary, hasLocale } from "./dictionaries";
import { LanguageSwitcher } from "./language-switcher";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-hscreen flex-col items-center justify-center gap-4">
      <LanguageSwitcher />
      <h1 className="text-3xl font-bold">{dict.welcome}</h1>
      <p className="text-lg">{dict.description}</p>
    </main>
  );
}