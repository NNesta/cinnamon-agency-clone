import React from "react";
import BlogCard from "./BlogCard";

function BlogSection() {
  const blogs = [
    {
      image: "/assets/blog-1.webp",
      category: "SALES",
      author: "Matija Bermanec & Lorena Ujević",
      date: "2022-10-13",
      time: "3",
      title: "Differences in Hiring an Agency vs. Freelancers 2.0",
    },
    {
      image: "/assets/blog-2.webp",
      category: "DEVELOPMENT",
      author: "Samantha Holstead",
      date: "2022-10-13",
      time: "3",
      title: "Cinnamon Flutter Template Overview",
    },
    {
      image: "/assets/blog-3.webp",
      category: "DESIGN",
      author: "Jan Marin",
      date: "2022-10-13",
      time: "3",
      title: "How Tinder Swindled User Experience",
    },
  ];
  return (
    <div className="w-screen">
      <div className="w-full container mx-auto py-32 px-8 lg:px-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl lg:text-6xl font-mont-bold lg:max-w-[50%] leading-[4rem] lg:leading-[4.5rem]">Stay in the loop on tech topics</h1>
          <div className="inline-flex gap-4 h-full overflow-x-scroll w-full scrollbar-hide">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                category={blog.category}
                author={blog.author}
                date={blog.date}
                time={blog.time}
                title={blog.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
