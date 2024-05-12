import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="px-5 lg:px-16 flex gap-5">
      <div className="w-10/12 flex mx-auto mt-16">
        <div className="w-2/3 h-fit text-sm pr-16 text-balance flex flex-col gap-5">
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
        <div className="w-1/5 h-full">
          <Image
          className="w-full h-full object-cover"
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
