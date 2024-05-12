import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="px-5 lg:px-16 flex gap-5">
      <div className="w-10/12 flex flex-col md:flex-row mx-auto mt-16">
        <div className="w-full md:w-2/3 h-fit text-sm md:pr-16 pb-10 text-balance flex flex-col gap-5">
          <div>
            <p>Born in 1977 in Tokyo.</p>
            <p>Japanese and French.</p>
            <p>Lives and works in Paris.</p>
          </div>
          <div>
            <p>
              After graduating from ENSCI-Les Ateliers (Paris) in 2001, Jun
              Yasumoto established himself as an independent designer and began
              collaborating with Jasper Morrison Office for Design in 2002,
              working on the development of numerous furniture, product,
              lighting and tableware design projects. In tandem, he developed
              his independent career, working with clients such as Colos,
              Arrmet, Fucina, Memo, Bosc, Yamakawa, Industry Plus, Ligne Roset,
              Kohler Group, and JIA Inc.
            </p>
          </div>
          <div>
            <p>
              “ - What is the major challenge while designing and creating a new
              product ? - I would say that despite the fact that there is a lot
              of work and efforts put into the design process of a product, I
              always try to make sure that this tension is not perceptible at
              the end. Being able to have enough distance with the object you
              design while you are working on details that are sometimes below
              the millimeter scale is a crucial point. To contain a lot of
              attention and work within a relaxed looking object is what I try
              to aim for. ” (Excerpt from an interview with ligature.ch)
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-10 lg:w-1/4 mx-auto h-full -order-1 md:order-1">
          <Image
          className="w-full md:aspect-[9/16] lg:aspect-auto object-cover"
            alt="Augusto Quincke"
            height={432}
            width={327}
            src={"/img/augusto.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
