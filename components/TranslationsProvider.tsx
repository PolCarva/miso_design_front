"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "@/app/i18n";
import { createInstance } from "i18next";

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: any;
}) {
  const i18n = createInstance();
  initTranslations(locale, resources, i18n, namespaces);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
