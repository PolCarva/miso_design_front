import ProjectGallery from "@/components/ProjectGallery";
import Image from "next/image";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <>
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
        </div>
        {/* Div Invis */}
        <div className="w-3/12 hidden md:block"></div>
        {/* Imgs */}
        <div className="flex mx-auto flex-col gap-5 w-full md:w-6/12 lg:w-6/12">
          <Image
            className="w-full h-full object-cover"
            alt="Product"
            width={808}
            height={808}
            src={`/img/${id}.jpeg`}
          />
          <Image
            className="w-full h-full object-cover"
            alt="Product"
            width={808}
            height={808}
            src={`/img/${id}.jpeg`}
          />
          <div className="grid grid-cols-2 gap-5">
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
          <Image
            className="w-full h-full object-cover"
            alt="Product"
            width={808}
            height={808}
            src={`/img/${id}.jpeg`}
          />
        </div>
        {/* Flechas */}
        <div className="hidden md:flex fixed top-36 md:right-5 lg:right-16 text-gray h-fit w-1/12 text-2xl justify-around">
          <TfiAngleLeft className="hover:text-black transition cursor-pointer" />{" "}
          <TfiAngleRight className="hover:text-black transition cursor-pointer" />
        </div>
      </section>
      <ProjectGallery />
    </>
  );
}
