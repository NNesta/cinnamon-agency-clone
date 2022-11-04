import React from "react";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const services = [
    {
      title: "Product design",
      image: "/assets/design.png",
      description:
        "Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes.",
    },
    {
      title: "Product design",
      image: "/assets/development.png",
      description:
        "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution.",
    },
    {
      title: "Product design",
      image: "/assets/quality.png",
      description:
        "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution.",
    },
    {
      title: "Product design",
      image: "/assets/marketing.png",
      description:
        "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution.",
    },
  ];
  return (
    <div className='relative  w-full h-full bg-primaryBlack bg-[url("/assets/noise.png")] py-32'>
      <div className="absolute inset-0 -z-10 h-full w-full hidden lg:block" />
      <div className="w-full h-full pt-16 flex flex-col gap-4 container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-4 text-primaryWhite">
          <h1 className="text-4xl font-mont-bold">Our services</h1>
          <div className="col-span-2 grid lg:grid-cols-2 gap-16 max-w-[85%]">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
