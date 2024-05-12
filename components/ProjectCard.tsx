import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDash } from "react-icons/go";


const ProjectCard = ({ post }: { post: Number }) => {
  return (
    <Link
      href={`/projects/${post.toString()}`}
      className="w-full group relative aspect-square overflow-hidden"
    >
      <div
        className="text-white absolute inset-0 opacity-0 group-hover:opacity-100
         duration-300 transition-all z-10 w-full h-full bg-black/80 flex 
         flex-col gap-1 items-center justify-center"
      >
        <h2 className="text-2xl font-medium">Product {post.toString()}</h2>
        <span className="flex gap-2 items-center text-xs"><GoDash/> view <GoDash/></span>
      </div>
      <Image
        className="w-full h-full object-cover"
        alt={`Post ${post}`}
        width={808}
        height={808}
        src={`/img/${post}.jpeg`}
      />
    </Link>
  );
};

export default ProjectCard;
