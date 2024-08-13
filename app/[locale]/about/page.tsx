"use client";

import { STABLES } from "@/stables";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { locale } = useParams();
  const [infoData, setInfoData] = useState<{
    bio: string;
    bio_jp: string;
    profilePicture: {
      width: number;
      height: number;
      filename: string;
    };
  } | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `${STABLES.API_URL}/config/66492c2c993d98b2271c1f45?locale=undefined&draft=false&depth=1`
      );
      const info = await data.json();
      setInfoData(info);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="px-5 lg:px-16 flex gap-5">
        <div className="w-10/12 flex flex-col md:flex-row mx-auto mt-16">
          <div className="w-full md:w-2/3 h-fit text-sm md:pr-16 pb-10 text-balance flex flex-col gap-5">
            <p className="whitespace-pre-line">
              {locale === "ja" ? infoData?.bio_jp : infoData?.bio}
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-10 lg:w-1/4 mx-auto h-full -order-1 md:order-1">
            {infoData?.profilePicture &&
              infoData?.profilePicture?.width &&
              infoData?.profilePicture?.height &&
              infoData?.profilePicture?.filename && (
                <Image
                  className="w-full md:aspect-[9/16] lg:aspect-auto object-cover"
                  alt="Augusto Quincke"
                  height={infoData?.profilePicture?.height}
                  width={infoData?.profilePicture?.width}
                  src={`${STABLES.UPLOADS_URL}/${infoData?.profilePicture?.filename}`}
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
