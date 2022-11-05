import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "./Button";

function ServicesSection() {
  const services = [
    {
      title: "Product design",
      image: "/assets/design.png",
      description:
        "Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes.",
    },
    {
      title: "Development",
      image: "/assets/development.png",
      description:
        "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution.",
    },
    {
      title: "Quality assurance",
      image: "/assets/quality.png",
      description:
        "Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing.",
    },
    {
      title: "Marketing & growth",
      image: "/assets/marketing.png",
      description:
        "By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people.",
    },
  ];
  return (
    <div className='relative  w-full h-full bg-primaryBlack bg-[url("/assets/noise.png")] py-16 lg:py-32'>
      <div className="absolute inset-0 -z-10 h-full w-full hidden lg:block" />
      <div className="w-full h-full pt-16 flex flex-col gap-4 container mx-auto px-8 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between text-primaryWhite">
          <h1 className="text-4xl font-mont-bold w-[200%] pb-16 lg:pb-0">Our services</h1>
          <div className="col-span-2 grid lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                description={service.description}
              />
              ))}
              <Button>See Out Services</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
