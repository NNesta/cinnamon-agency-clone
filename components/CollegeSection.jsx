import React from "react";
import Image from "next/image";
import Button from "./Button";

function CollegeSection() {
  return (
    <div className="w-full relative h-fit py-32">
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <Image
          src="/assets/cinnamonCollege.png"
          width={400}
          height={400}
          alt="college"
        />
      </div>
    <div className="w-full container mx-auto h-full relative">
      

      <div className="container flex flex-col lg:flex-row justify-between  px-16 lg:max-w-[90%]">
        <Image
          src="/assets/college.png"
          width={300}
          height={100}
          alt="college-2"
        />

        <div className="flex flex-col items-start gap-16  lg:max-w-[50%] text-lg leading-8 ">
          <p className="font-mont max-w-[80%]">
            Seize the unique opportunity to participate in a wide range of
            courses conducted by professionals with an impeccable reputation in
            the digital industry.
          </p>
          <Button>See How It Works</Button>
        </div>
      </div>
    </div></div>
  );
}

export default CollegeSection;
