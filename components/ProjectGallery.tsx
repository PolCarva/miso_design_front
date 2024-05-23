"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/types";
import { STABLES } from "@/stables";

const ProjectGallery = ({ projectsList }: { projectsList?: Projects }) => {
  const [projects, setProjects] = useState<Projects | null>(
    projectsList || null
  );

  useEffect(() => {
    if (!projectsList) {
      console.log("fetching projects");
      
      const fetchProjects = async () => {
        const res = await fetch(`${STABLES.API_URL}/projects?limit=1000`);
        const projects = await res.json();
        setProjects(projects);
        localStorage.setItem("projects", JSON.stringify(projects));
      };
      fetchProjects();
    } else {
      setProjects(projectsList);
    }
  }, []);

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {projects?.docs.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectGallery;
