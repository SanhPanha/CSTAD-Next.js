import React from "react";

// Define the interface for props
interface ContentProps {
  href: string; // Define href as a string
  imgSrc: string;
  imgAlt: string;
  category: string;
  postDate: string;
  title: string;
}

const ContentCard: React.FC<ContentProps> = ({
  imgSrc,
  imgAlt,
  category,
  postDate,
  title,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden w-[300px] h-full">
        <div className="w-full">
          <img
            className="h-[150px] w-full object-fill"
            src={imgSrc}
            alt={imgAlt}
          />
        </div>

        <div className="flex flex-col gap-5 p-8">
          <div className="flex flex-row uppercase tracking-wide text-sm text-indigo-500 font-semibold justify-between">
            <p className="text-xs">{category}</p>
            <p className="text-xs text-gray-500">{postDate}</p>
          </div>
          <p className="block text-sm leading-normal font-serif text-black">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard ;
