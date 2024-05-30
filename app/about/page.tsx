import { STABLES } from "@/stables";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import React from "react";

const page = async () => {
  const data = await fetch(`${STABLES.API_URL}/config/66492c2c993d98b2271c1f45?locale=undefined&draft=false&depth=1`);
  const info = await data.json();
  revalidatePath("/about");
  
  return (
    <div className="px-5 lg:px-16 flex gap-5">
      <div className="w-10/12 flex flex-col md:flex-row mx-auto mt-16">
        <div className="w-full md:w-2/3 h-fit text-sm md:pr-16 pb-10 text-balance flex flex-col gap-5">
          <p className="whitespace-pre-line">
            {info?.bio}
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-10 lg:w-1/4 mx-auto h-full -order-1 md:order-1">
          <Image
          className="w-full md:aspect-[9/16] lg:aspect-auto object-cover"
            alt="Augusto Quincke"
            height={info?.profilePicture?.height}
            width={info?.profilePicture?.width}
            src={`${STABLES.UPLOADS_URL}/${info?.profilePicture?.filename}`}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
