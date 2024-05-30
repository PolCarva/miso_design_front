import React from 'react';
import ProjectGallery from "@/components/ProjectGallery";
import { STABLES } from '@/stables';

export default async function Home() {
  const data = await fetch(`${STABLES.API_URL}/projects?limit=1000`);
  const projects = await data.json();
  return (
    <main>
      <h1 className="sr-only">Project Gallery</h1>
      <ProjectGallery projectsList={projects} />
    </main>
  );
}
