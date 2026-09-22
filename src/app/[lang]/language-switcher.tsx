"use client";


export function LanguageSwitcher() {
    const setLocale = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    }
}