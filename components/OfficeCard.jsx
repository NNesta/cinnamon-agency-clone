import React from "react";
import Image from "next/image";

function OfficeCard(props) {
  const { image, title, address } = props;
  return (
    <div className="flex flex-col gap-6 w-screen  md:w-[540px] group">
      <div>
        <Image src={image} width={580} height={60} alt="" layout="responsive" />
      </div>
      <div className="flex gap-8 items-center">
        <div className="group-hover:text-primaryPink duration-300 ease-in-out">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            strokeLinejoin="round"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
              stroke="currentColor"
              fill="none"
              stroke-width="2px"
            ></path>
            <circle
              cx="12"
              cy="10"
              r="3"
              stroke="currentColor"
              fill="none"
              stroke-width="2px"
            ></circle>
          </svg>
        </div>

        <h1 className="text-2xl font-mont-bold group-hover:text-primaryPink duration-300 ease-in-out">
          {title}
        </h1>
      </div>
      <p className="font-mont group-hover:text-primaryPink duration-300 ease-in-out">
        {address}
      </p>
    </div>
  );
}

export default OfficeCard;
