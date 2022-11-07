import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Footer() {
  return (
    <div className="w-full">
      <div className='relative  w-full h-full bg-primaryBlack bg-[url("/assets/noise.png")] font-mont'>
        <div className="container mx-auto px-12 lg:px-16 text-primaryWhite pt-32">
          <div className="flex flex-col lg:flex-row gap-16 lg:justify-between max-w-[60%] lg:max-w-[90%] px-4 py-8 ">
            <h1 className="text-4xl font-mont-bold">CINNAMON</h1>
            <h1 className="text-4xl font-mont-bold leading-normal max-w-[80%]">
              All software, zero bullshit.
            </h1>
          </div>
          <div className="grid lg:grid-cols-5 text-xl px-4 items-center">
            <div className="col-span-2 py-24">
              <ul className="lg:flex flex-col gap-6 flex-1 grid grid-cols-2 text-sm">
                <h1 className="text-xl font-mont-semibold text-white">Home</h1>
                <li>Projects</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-mont-semibold text-white">Zagreb</h1>
              <ul className="flex flex-col gap-3 text-sm">
                <li>Slavonska avenija 6,</li>
                <li>10000, Zagreb, Croatia</li>
                <li>+385 99 347 3103</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-mont-semibold text-white">
                New York
              </h1>
              <ul className="flex flex-col gap-3 text-sm">
                <li>500 7th Ave, New York,</li>
                <li>NY 10018, United States</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-mont-semibold text-white">
                Belgrade
              </h1>
              <ul className="flex flex-col gap-3 text-sm">
                <li>Bulevar vojvode Mišića 37</li>
                <li>11000, Belgrade, Serbia</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:items-end py-8 gap-8">
            <p className="underline order-3 lg:order-1">
              hello@cinnamon.agency
            </p>
            <div className="flex flex-col gap-8 order-1 lg:order-2  w-72">
              <h1 className="font-mont-semibold">Our newsletter</h1>
              <input
                placeholder="Your email"
                className="bg-transparent outline-none border-white border-b "
                type="text"
              />
              <Button>Subscribe</Button>
            </div>
            <div className="flex flex-col gap-4 order-2 lg:order-3 w-[180px]">
              <Image
                src="/assets/pangea.svg"
                width={180}
                height={180}
                alt="footer-image"
              />
              <Image
                src="/assets/clutch.webp"
                width={180}
                height={180}
                alt="footer-image"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center lg:justify-between border-t border-primaryWhite border-opacity-50 py-8 text-primaryGrayLight">
            <div className="flex gap-16 order-2 lg:order-1 whitespace-nowrap">
              <p>© 2022 Cinnamon</p>
              <Link className="flex-1 underline whitespace-nowrap" href="/">
                Privacy Policy
              </Link>
            </div>
            <ul className="flex gap-4 items-center order-1 lg:order-2">
              <li>
                <Link href='/'><Image
                src="/assets/linkedin-2.png"
                width={25}
                height={25}
                alt="footer-image"
              /></Link>
                </li>
            <li> <Link href='/'><Image
                src="/assets/ball-2.png"
                width={25}
                height={25}
                alt="footer-image"
              /></Link> </li>  
             <li>
              <Link href='/'><Image
                src="/assets/beicon.png"
                width={25}
                height={25}
                alt="footer-image"
              /></Link>
              </li>
              <li>
                <Link href='/'><Image
                src="/assets/insta-2.png"
                width={25}
                height={25}
                alt="footer-image"
              /></Link>
                </li>
              <li>
                <Link href='/'><Image
                src="/assets/face-2.png"
                width={25}
                height={25}
                alt="footer-image"
              /></Link></li>
              <li>
                <Link href='/'><Image
                src="/assets/wifi.png"
                width={25}
                height={25}
                alt="footer-image"
              /></Link></li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
