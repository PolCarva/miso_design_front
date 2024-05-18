"use client";
import ProjectGallery from "@/components/ProjectGallery";
import Image from "next/image";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
import ModelViewer from "@/components/ModelViewer";
import { useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [isModelViewerOpen, setIsModelViewerOpen] = useState(false);
  const id = params.id;
  const images = Array.from({ length: 6 }, (_, i) => i + 1);

  const openCloseModal = () => {
    setIsModelViewerOpen(!isModelViewerOpen);
  };

  return (
    <>
      {isModelViewerOpen && (
        <div
          className="fixed flex cursor-pointer flex-col bg-black/60 p-5 md:p-10 inset-0 w-full h-full z-50"
          onClick={openCloseModal}
        >
          <ModelViewer
            className="mx-auto cursor-grab flex-1 max-w-[90svw] md:w-auto h-full aspect-square overflow-hidden rounded-xl"
            src="/models/sofa_chair.glb"
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
          <p className="whitespace-pre-line">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            recusandae non rem iusto vero pariatur veritatis dolorum officiis
            consequuntur distinctio voluptatibus, impedit eveniet, consectetur,
            aliquid illo.
          </p>
          <p>
            Ea blanditiis doloribus quis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Dolorum nemo libero reprehenderit
            rerum amet, esse dolor fugiat, aut quos, assumenda repellendus. Quos
            maxime aliquam quo id soluta harum, dicta quam.
          </p>
          <button
            onClick={openCloseModal}
            className="bg-transparent text-black ease-in-out duration-300 px-4 py-2 w-full mt-5 rounded border border-black  hover:bg-black hover:text-white"
          >
            Model Detail
          </button>
        </div>
        {/* Text Mobile */}
        <div className="block md:hidden pb-10 h-fit w-full pr-5 gap-5 flex-col">
          <p className="whitespace-pre-line">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            recusandae non rem iusto vero pariatur veritatis dolorum officiis
            consequuntur distinctio voluptatibus, impedit eveniet, consectetur,
            aliquid illo.
          </p>
          <p>
            Ea blanditiis doloribus quis. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Dolorum nemo libero reprehenderit
            rerum amet, esse dolor fugiat, aut quos, assumenda repellendus. Quos
            maxime aliquam quo id soluta harum, dicta quam.
          </p>
          <button
            onClick={openCloseModal}
            className="bg-transparent text-black ease-in-out duration-300 px-4 py-2 w-full mt-5 rounded border border-black  hover:bg-black hover:text-white"
          >
            Model Detail
          </button>{" "}
        </div>

        {/* Div Invis */}
        <div className="w-3/12 hidden md:block"></div>
        {/* Imgs */}
        <div className="flex mx-auto flex-col gap-5 w-full md:w-6/12 lg:w-6/12">
          {images.map((imageId, index) => {
            // Para las imágenes individuales y la primera del grid
            if (index < 2 || index === 4) {
              return (
                <Image
                  key={imageId}
                  className="w-full h-full object-cover"
                  alt="Product"
                  width={808}
                  height={808}
                  src={`/img/${id}.jpeg`}
                />
              );
            }
            // Para las imágenes dentro del grid (index 2 y 3)
            if (index === 2) {
              return (
                <div key={imageId} className="grid grid-cols-2 gap-5">
                  <Image
                    alt="Product"
                    width={808}
                    height={808}
                    src={`/img/${id}.jpeg`}
                  />
                  <Image
                    alt="Product"
                    width={808}
                    height={808}
                    src={`/img/${id}.jpeg`}
                  />
                </div>
              );
            }
          })}
        </div>
        {/* Flechas */}
        <div className="hidden md:flex fixed top-36 md:right-5 lg:right-16 text-gray h-fit w-1/12 text-2xl justify-around">
          <TfiAngleLeft className="hover:text-black transition cursor-pointer" />{" "}
          <TfiAngleRight className="hover:text-black transition cursor-pointer" />
        </div>
      </section>

      <div className="hidden md:block">
        <ProjectGallery />
      </div>
      {/* Mobile Flechitas */}
      <div className="md:hidden flex items-center mx-auto w-fit gap-5 pb-5">
        <Link href={"/"}>
          <TfiAngleLeft className="hover:text-black text-xl transition cursor-pointer" />{" "}
        </Link>
        <Link href={"/"}>
          <RxDashboard className="text-black text-xl" />
        </Link>
        <Link href={"/"}>
          <TfiAngleRight className="hover:text-black text-xl transition cursor-pointer" />
        </Link>
      </div>
    </>
  );
}
