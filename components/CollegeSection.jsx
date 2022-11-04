import React from "react";
import Image from "next/image";
import Button from "./Button";

function CollegeSection() {
  return (
    <div className="w-full h-full relative">
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <Image
          src="/assets/cinnamonCollege.png"
          width={300}
          height={300}
          alt="college"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-8  my-32 px-8 lg:px-32">
        <Image
          src="/assets/college.png"
          width={450}
          height={150}
          alt="college-2"
        />

        <div className="flex flex-col items-start gap-16  lg:max-w-[50%] text-[1.35rem] leading-8 ">
          <p className="font-mont">
            Seize the unique opportunity to participate in a wide range of
            courses conducted by professionals with an impeccable reputation in
            the digital industry.
          </p>
          <Button>See How It Works</Button>
        </div>
      </div>
    </div>
  );
}

export default CollegeSection;
