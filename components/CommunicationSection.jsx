import React from "react";
import Image from "next/image";
import Link from "next/link";

function CommunicationSection() {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto w-full  py-32 px-8 lg:px-32 relative">
        <p className="text-[175px] font-mont-heavy text-[#EDEAFF] -z-10  absolute top-8 left-16">
          “
        </p>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="flex flex-col gap-8 lg:max-w-[70%]">
            <h1 className="text-3xl lg:text-5xl font-mont-bold">
              They’re consistent, and the communication is good.
            </h1>
            <p className="lg:max-w-[80%] font-mont">
              When I have a deadline, they would work extra hours on the weekend
              and after hours. Cinnamon gives the impression of being a smaller
              team that’s focused on customers.
            </p>
            <div className="flex lg:flex-row flex-col">
              <div>
                <Image src="/assets/gorin.png" width={75} height={75} alt="" />
              </div>
              <div>
                <h1 className="font-mont-bold">Garin Toren,</h1>
                <p className="font-mont">CEO, ping</p>
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
          <div>
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
