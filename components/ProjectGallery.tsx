import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/types";

const ProjectGallery = ({
  projectsList,
}: {
  locale?: string;
  projectsList?: Projects;
}) => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {projectsList?.docs.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectGallery;
