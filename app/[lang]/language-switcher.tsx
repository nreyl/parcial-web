"use client";

import Link from "next/link";

export function LanguageSwitcher() {
    const setLocale = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    }

    return (
        <div className="flex gap-4">
            <Link href="/en" onClick={() => setLocale('en')}>
                EN
            </Link>
            <Link href="/es" onClick={() => setLocale('es')}>
                ES
            </Link>
        </div>
    )
}