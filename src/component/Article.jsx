import React from "react";
import Tilt from "react-parallax-tilt";
import articleImage from "../assets/abc11.png";
import articleImage2 from "../assets/abc12.jpg";
import articleImage3 from "../assets/abc13.jpg";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const blogCard = [
  {
    id: 1,
    badge: "Inspiration",
    title: "8 Creative Ways to Repurpose Your Webinar Content",
    image: articleImage,
  },
  {
    id: 2,
    badge: "Inspiration",
    title:
      "Why Webinars Are the #1 Lead Generation Marketing Strategy, You May Not Be Thinking About",
    image: articleImage2,
  },
  {
    id: 3,
    badge: "Inspiration",
    title: "How to Drive Pipeline and Enable Sales After Your Webinar Wraps",
    image: articleImage3,
  },
];

const Article = () => {
  return (
    <div className="px-5 sm:px-10 md:px-20 py-10 md:py-20">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold">
          Recent Articles
        </h1>
      </div>
      <div className="flex items-center justify-center mt-5 flex-wrap gap-6">
        {blogCard.map((item) => (
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.1}
            scale={1.02}
            key={item.id}
          >
            <div className="w-full sm:w-[300px] md:w-[405px] bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt="Article"
                className="w-full h-[200px] md:h-[265px] object-cover rounded-tr-[40px] md:rounded-tr-[80px]"
              />
              <div className="p-4 flex flex-col gap-3">
                <Badge variant="outline" className="self-start">
                  {item.badge}
                </Badge>
                <h2 className="text-sm md:text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <Button className="self-start border-none text-blue-500 bg-transparent hover:underline">
                  Read More
                </Button>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Article;
