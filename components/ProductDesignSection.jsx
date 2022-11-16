import React from "react";
import ProductDesignCard from "./ProductDesignCard";

function ProductDesignSection() {
  const products = [
    {
      image: { link: "/assets/designed-11.png", imageColor: "bg-primaryGreen" },
      tags: ["PRODUCT DESIGN", "QUALITY ASSURANCE"],
      title: "Corrily: Optimize prices\nto maximize revenue",
      description:
        "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign.",
    },
    {
      image: {
        link: "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F14zPgk0p1qf0yptSYRjHBW%2F94e47560492e6602f69d9ee91be4ab61%2FFiona_Thumbnail.png&w=1200&q=80",
        imageColor: "bg-primaryPurple",
      },
      tags: ["PRODUCT DESIGN", "WEB DEVELOPMENT"],
      title: "Fiona: Engage \n&Decide",
      description:
        "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.",
    },
    {
      image: {
        link: "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F7kFgIXzEEYLIM678mr3mzo%2F6401985a011c0ae2ce0b3f940499f4c1%2Fthumbnail.png&w=1200&q=80",
        imageColor: "bg-primaryAmber",
      },
      tags: ["PRODUCT DESIGN", "WEB DEVELOPMENT", "QUALITY ASSURANCE"],
      title: "Ukulele:\nThe largest ukulele tabs archive",
      description:
        "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website. Our services Product design",
    },
  ];
  return (
    <div className="relative w-full h-full">
      <div className="container mx-auto w-full my-20">
        <div className="flex flex-col space-y-8 px-4 lg:px-32 w-full">
          {products.map((product, index) => (
            <ProductDesignCard
              key={index}
              image={product.image}
              tags={product.tags}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDesignSection;
