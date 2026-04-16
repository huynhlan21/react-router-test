// This is the list of languages your application supports,
// the fallback is always the last
export const supportedLngs = ["vi-VI", "en-US"];

// This is the language you want to use in case
// if the user preferred language is not in the supportedLngs
export const fallbackLng = "en-US";

// The default namespace of i18next is "translation", but you can customize it
// here
export const defaultNS = "translation";

// Custom function to return empty string for missing keys
export const parseMissingKeyHandler = () => undefined;

// Suspense is important, it prevents the page from loading until we have the translations
export const react = { useSuspense: true };
