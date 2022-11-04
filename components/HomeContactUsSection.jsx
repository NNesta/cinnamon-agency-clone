import React from "react";
import Button from "./Button";
import Image from "next/image";

function HomeContactUsSection() {
  return (
    <div className="w-full">
      <div className="w-full h-full relative py-32 bg-primaryWhite">
        <div className="absolute left-0 bottom-0 hidden lg:block">
          <Image src="/assets/contact-1.png" width={300} height={300} alt="" />
        </div>
        <div className="container mx-auto flex flex-col items-center gap-16 lg:px-64 font-mont-bold">
          <h1 className="text-6xl text-center hidden lg:block ">
            {"Have a project in mind? Let's work together."}
          </h1>
          <h1 className="text-6xl text-center block lg:hidden">
            {"Let's work together."}
          </h1>
          <Button>Contact us</Button>
        </div>
      </div>
    </div>
  );
}

export default HomeContactUsSection;
