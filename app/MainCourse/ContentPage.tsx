// pages/index.tsx

import React from "react";
import ContentCard from "../components/ContentComponent";

const HomePage = () => {
  // Array of news data objects
  const newsDataArray = [
    {
      href: "/content/29/hide-and-seek-searching-algorithm",
      imgSrc:
        "https://api.istad.co/media/image/e4a4d369-72c3-441c-9df1-23cc6e2ce3f7.jpg",
      imgAlt: "recently news",
      category: "Blog",
      postDate: "16-May-2023",
      title: "លេងបិទពួនជាមួយ Searching Algorithm",
    },
    {
      href: "/content/28/what-is-web-4.0",
      imgSrc:
        "https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg",
      imgAlt: "recently news",
      category: "Blog",
      postDate: "24-Apr-2023",
      title: "ជជែកគ្នាលេងអំពី Web 4.0",
    },
    {
      href: "/content/26/what-is-IT-and-its-career",
      imgSrc:
        "https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png",
      imgAlt: "recently news",
      category: "Blog",
      postDate: "23-Dec-2022",
      title: "អ្វីដែលគួរត្រៀមសម្រាប់អ្នកចង់ចាប់អាជីព IT",
    },
  ];

  return (
    <div className=" container mx-auto flex justify-center py-10">
      <div>
        <p className="text-center font-semibold text-3xl uppercase">
          Useful Content
        </p>
        <div className="grid grid-cols-3 p-5 gap-5 justify-center">
          {newsDataArray.map((newsData, index) => (
            <ContentCard key={index} {...newsData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
