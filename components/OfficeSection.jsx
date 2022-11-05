import React, {useState} from "react";
import OfficeCard from "./OfficeCard";
import Image from "next/image";

function OfficeSection() {
  const offices = [
    {
      title: "Zagreb",
      image: "/assets/office-1.jpeg",
      address: "Slavonska avenija 6, 10000, Zagreb, Croatia",
    },
    {
      title: "New York",
      image: "/assets/office-2.jpeg",
      address: "500 7th Ave, New York, NY 10018, United States",
    },
    {
      title: "Belgrade",
      image: "/assets/office-3.jpeg",
      address: "Bulevar vojvode Mišića 37 11000, Belgrade, Serbia",
    },
  ];
  const [scroll, setScroll] = useState(false);
  const clickHandler=()=>setScroll(!scroll)
  return (
    <div className="w-full container mx-auto lg:pl-20 py-32">
        <div className="flex flex-col gap-16 ">
          <h1 className="text-6xl font-mont-bold text-primaryDarkBlack">Our offices</h1>
      <div className={`mx-auto w-screen lg:w-full relative duration-300 ease-in-out ${scroll?'-translate-x-[40%]':'translate-x-[0%]'} overflow-x-scroll scrollbar-hide lg:overflow-visible`}>
          <div className="inline-flex gap-8">
            {/* <div className='absolute top-0 left-0 flex w-[400%] gap-8 snap-none'> */}

            {offices.map((office, index) => (
              <OfficeCard
                key={index}
                title={office.title}
                image={office.image}
                address={office.address}
              />
            ))}
          </div>
        </div>
      </div>
          <div className="flex gap-8 py-16">
              <button>
            <div className="">
              <Image
                className={`${scroll?"block":"hidden"}`}
                src="/assets/grayLeftArrow.png"
                width={50}
                height={25}
                alt=""
              />
              <Image
               onClick={clickHandler}
              className={`${scroll?"hidden":"block"} hover:-translate-y-2 duration-300 ease-in-out`}
                src="/assets/rightArrow-2.png"
                width={50}
                height={25}
                alt=""
              />
            </div>
              </button>
              <button onClick={clickHandler}>
            <div>

              <Image
              className={`${scroll?"hidden":"block"}`}
                src="/assets/grayRightArrow.png"
                width={50}
                height={25}
                alt=""
                />

              <Image
               onClick={clickHandler}
              className={`${scroll?"block":"hidden"} hover:-translate-y-2 duration-300 ease-in-out`}
                src="/assets/leftArrow-2.png"
                width={50}
                height={25}
                alt=""
                />
            </div>
                </button>
          </div>
    </div>
  );
}

export default OfficeSection;
