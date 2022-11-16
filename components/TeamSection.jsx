import React from "react";
import Button from "./Button";
import Image from "next/image";

function TeamSection() {
  return (
    <div className="w-full h-fit bg-gray-100 relative">
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <Image src="/assets/agile.png" width={350} height={350} alt="" />
      </div>
      <div className="container mx-auto w-full  py-40">
        <div className="flex flex-col lg:flex-row justify-between px-8  w-full">
          <div className=" lg:w-[70%]">
          <h1 className="text-5xl lg:text-6xl leading-[5rem] font-mont-bold lg:max-w-[60%]">
            Agile team on demand
          </h1>
          </div>
          <div className=" lg:hidden block">
            <Image src="/assets/agile.png" width={600} height={600} alt="" />
          </div>
          <div className="flex flex-col gap-8 lg:max-w-[48%] items-start">
            <p className="text-lg font-mont lg:max-w-[58%]">
              By hiring and managing talented people with skills specific to
              your project, we build you a team that’s accomplished, agile and
              scalable in both directions.
            </p>
            <Button>See how it works</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
