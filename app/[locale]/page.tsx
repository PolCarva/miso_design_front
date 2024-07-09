import React from "react";
import ProjectGallery from "@/components/ProjectGallery";
import { STABLES } from "@/stables";
import initTranslations from "../i18n";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = await fetch(`${STABLES.API_URL}/projects?limit=1000`);
  const projects = await data.json();

  const { t } = await initTranslations(locale, ["home"], null, null);
  return (
    <>
    <main>
      <h1 className="sr-only">{t("project_gallery")}</h1>
      <ProjectGallery projectsList={projects} />
    </main>
    </>
  );
}
