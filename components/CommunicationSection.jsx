import React from "react";
import Image from "next/image";
import Link from "next/link";

function CommunicationSection() {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto w-full  py-32 px-8 lg:px-16 relative">
        <p className="text-[200px] font-mont-heavy text-[#EDEAFF] -z-10  absolute top-8 -left-4">
          “
        </p>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="flex flex-col gap-16 lg:max-w-[60%]">
            <h1 className="text-[3rem] leading-[60px] lg:text-4xl font-mont-bold">
              They’re consistent, and the communication is good.
            </h1>
            <p className="lg:max-w-[80%] font-mont">
              When I have a deadline, they would work extra hours on the weekend
              and after hours. Cinnamon gives the impression of being a smaller
              team that’s focused on customers.
            </p>
            <div className="flex lg:flex-row flex-col lg:items-center gap-8">
              <div>
                <Image src="/assets/gorin.png" width={75} height={75} alt="" />
              </div>
              <div>
                <h1 className="font-mont-bold text-2xl">Garin Toren,</h1>
                <p className="font-mont text-lg">CEO, ping</p>
              </div>
            </div>
            <div className="flex w-32 justify-between">
              <Image
                width={40}
                height={40}
                src="/assets/leftArrow.png"
                alt="arrow"
              />
              <Image
                width={40}
                height={40}
                src="/assets/rightArrow.png"
                alt="arrow-2"
              />
            </div>
          </div>
          <div className="flex justify-between flex-col">
            <Image
              className="hidden lg:flex flex-col justify-between"
              width={200}
              height={200}
              src="/assets/ping.png"
              alt="piung"
            />

            <Link className="flex gap-4 text-primaryPink py-8" href="/">
              <img src="/assets/chevronLeft.svg" alt="" />
              <span className="font-mont">VIEW CASE STUDY</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunicationSection;
