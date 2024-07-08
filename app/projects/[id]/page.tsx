"use client";
import ReactPlayer from "react-player";
import ProjectGallery from "@/components/ProjectGallery";
import Image from "next/image";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
import ModelViewer from "@/components/ModelViewer";
import { useEffect, useState } from "react";
import { Project, Projects } from "@/types";
import { STABLES } from "@/stables";
import SliderModal from "@/components/SliderModal";

export default function Page({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project>();
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
  const [isModelViewerOpen, setIsModelViewerOpen] = useState(false);
  const [projectList, setProjectList] = useState<Projects>();
  const [nextProjectSlug, setNextProjectSlug] = useState<string>();
  const [prevProjectSlug, setPrevProjectSlug] = useState<string>();
  const id = params.id;

  const openCloseModal = () => {
    setIsModelViewerOpen(!isModelViewerOpen);
  };

  const openSliderModal = (index: number) => {
    setActiveImageIndex(index);
    setIsSliderOpen(true);
  };

  const closeSliderModal = () => {
    setIsSliderOpen(false);
  };

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`${STABLES.API_URL}/projects/by-slug/${id}`);
      const project = await res.json();

      window.scrollTo({ top: 0, behavior: "smooth" });

      setProject(project.docs[0]);
    };
    fetchProject();
  }, [id]);

  useEffect(() => {
    const fetchProjectList = async () => {
      const res = await fetch(`${STABLES.API_URL}/projects?limit=1000`);
      const projects = await res.json();
      setProjectList(projects);
      const projectIndex = projects.docs.findIndex(
        (project: Project) => project.slug === id
      );

      const hasNext = projectIndex < projects.docs.length - 1;
      const hasPrev = projectIndex > 0;

      const nextProjectSlug = hasNext
        ? projects.docs[projectIndex + 1].slug
        : projects.docs[0].slug;
      const prevProjectSlug = hasPrev
        ? projects.docs[projectIndex - 1].slug
        : projects.docs[projects.docs.length - 1].slug;

      setNextProjectSlug(nextProjectSlug);
      setPrevProjectSlug(prevProjectSlug);
    };
    fetchProjectList();
  }, [id]);

  return (
    <>
      {isSliderOpen && project && (
        <SliderModal
          images={project.images.map((doc) => ({
            src: `${STABLES.UPLOADS_URL}/${doc.image.filename}`,
            alt: doc.image.alt,
            width: doc.image.width,
            height: doc.image.height,
          }))}
          index={activeImageIndex}
          onClose={closeSliderModal}
        />
      )}
      {isModelViewerOpen && project && project.model && (
        <div
          className="fixed flex flex-col bg-black/60 p-5 md:p-10 inset-0 w-full h-full z-50"
          onClick={openCloseModal}
        >
          <ModelViewer
            className="mx-auto cursor-grab flex-1 max-w-[90svw] md:w-auto h-full aspect-square overflow-hidden rounded-xl"
            src={`${STABLES.UPLOADS_URL}/${project.model.filename}`}
          />
          <button
            onClick={openCloseModal}
            className="ease-in-out md:hidden duration-300 px-4 py-5 w-full mt-5 rounded border border-black  bg-black text-white"
          >
            Close Model
          </button>
        </div>
      )}
      <section className="px-5 w-full lg:px-16 flex flex-col md:flex-row pb-10">
        {/* Text MD */}
        <div className="fixed hidden md:flex pb-10 top-36 h-fit w-4/12 pr-5 gap-5 flex-col">
          <h1 className="text-2xl">{project?.title}</h1>
          <p className="whitespace-pre-line text-balance">
            {project?.description}
          </p>
          {!project && (
            <div className="w-full aspect-[2/1] bg-gray/20 animate-pulse"></div>
          )}
          {project?.model && (
            <button
              onClick={openCloseModal}
              className="bg-black ease-in-out duration-300 px-4 py-2 w-full mt-5 rounded border border-black  hover:bg-dark-gray text-white"
            >
              3D Model
            </button>
          )}
          {project?.driveLink && (
            <Link
              href={project.driveLink}
              target="_blank"
              className="bg-transparent text-center text-black ease-in-out duration-300 px-4 py-2 w-full rounded border border-black  hover:bg-black hover:text-white"
            >
              Download
            </Link>
          )}
        </div>
        {/* Text Mobile */}
        <div className="flex flex-col md:hidden pb-10 h-fit w-full gap-2">
          {!project && (
            <div className="w-full aspect-[1/2] bg-gray/20 animate-pulse"></div>
          )}
          <h1 className="text-2xl">{project?.title}</h1>

          <p className="whitespace-pre-line mb-5 text-balance">
            {project?.description}
          </p>
          {project?.model && (
            <button
              onClick={openCloseModal}
              className="bg-black text-white ease-in-out duration-300 px-4 py-2 w-full mt-5 rounded border border-black "
            >
              Model Detail
            </button>
          )}
          {project?.driveLink && (
            <Link
              href={project.driveLink}
              target="_blank"
              className="bg-transparent text-center text-black ease-in-out duration-300 px-4 py-2 w-full mt-5 rounded border border-black"
            >
              Download
            </Link>
          )}
        </div>

        {/* Div Invis */}
        <div className="w-3/12 hidden md:block"></div>
        {/* Imgs */}
        <div className="mx-auto grid grid-cols-2 gap-5 w-full md:w-6/12 lg:w-6/12">
          {!project && (
            <div className="w-full aspect-[4/3] bg-gray/20 animate-pulse"></div>
          )}
          {project &&
            project.images.map((doc, index) => (
              <div  key={index} className={`${index === 3 || index === 2 ? "" : "col-span-2" }`}>
                {index === project.video_index && (
                  <div key={`video-${index}`} className="w-full h-full aspect-video">
                    <ReactPlayer
                      url={project.video}
                      width="100%"
                      height="100%"
                      controls={true}
                    />
                  </div>
                )}
                <Image
                  key={doc.image.id}
                  className={`w-full h-full object-cover clickable`}
                  alt={doc.image.alt}
                  width={doc.image.width}
                  height={doc.image.height}
                  src={`${STABLES.UPLOADS_URL}/${doc.image.filename}`}
                  onClick={() => openSliderModal(index)}
                  data-clickable="true"
                />
              </div>
            ))}
          {project &&
            project.video &&
            project.video_index >= project.images.length && (
              <div
                key={`video-${project.video_index}`}
                className="w-full col-span-2 h-full aspect-video"
              >
                <ReactPlayer
                  url={project.video}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>
            )}
        </div>
        {/* Flechas */}
        <div className="hidden md:flex fixed top-36 md:right-5 lg:right-16 text-gray h-fit w-1/12 text-2xl justify-around">
          <Link href={`/projects/${nextProjectSlug}`}>
            <TfiAngleLeft className="hover:text-black text-xl transition" />{" "}
          </Link>
          <Link href={`/projects/${prevProjectSlug}`}>
            <TfiAngleRight className="hover:text-black text-xl transition" />
          </Link>{" "}
        </div>
      </section>

      <div className="hidden md:block">
        {projectList && <ProjectGallery projectsList={projectList} />}
      </div>
      {/* Mobile Flechitas */}
      <div className="md:hidden flex items-center mx-auto w-fit gap-5 pb-5">
        <Link href={`/projects/${nextProjectSlug}`}>
          <TfiAngleLeft className="hover:text-black text-xl transition" />{" "}
        </Link>
        <Link href={"/"}>
          <RxDashboard className="text-black text-xl" />
        </Link>
        <Link href={`/projects/${prevProjectSlug}`}>
          <TfiAngleRight className="hover:text-black text-xl transition" />
        </Link>
      </div>
    </>
  );
}
