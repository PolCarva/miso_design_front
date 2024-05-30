import { STABLES } from "@/stables";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDash } from "react-icons/go";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="w-full group relative aspect-square overflow-hidden"
    >
      <div
        className="text-white absolute inset-0 opacity-0 group-hover:opacity-100
         duration-300 transition-all z-10 w-full h-full bg-black/80 flex 
         flex-col gap-1 items-center justify-center"
      >
        <h2 className="text-2xl font-medium">{project.title}</h2>
        <span className="flex gap-2 items-center text-xs">
          <GoDash /> view <GoDash />
        </span>
      </div>
      <Image
        priority
        className="w-full h-full object-cover"
        alt={project?.images[0]?.image?.alt}
        width={project?.images[0]?.image?.width}
        height={project?.images[0]?.image?.height}
        src={`${STABLES.UPLOADS_URL}/${project?.images[0]?.image?.filename}`}
      />
    </Link>
  );
};

export default ProjectCard;
