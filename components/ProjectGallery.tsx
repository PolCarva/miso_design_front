import React from 'react'
import ProjectCard from "@/components/ProjectCard";

const ProjectGallery = () => {
    const allPosts = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {allPosts.reverse().map((post) => (
        <ProjectCard key={`1 ${post}`} post={post} />
      ))}
      {allPosts.reverse().map((post) => (
        <ProjectCard key={`2 ${post}`} post={post} />
      ))}
      {allPosts.reverse().map((post) => (
        <ProjectCard key={`3 ${post}`} post={post} />
      ))}
    </section>
  )
}

export default ProjectGallery