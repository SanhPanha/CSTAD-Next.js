// pages/index.tsx

import React from "react";
import JobCard from "../components/JobCardComponent";

const HomePage = () => {
  // Array of news data objects
  const newsDataArray = [
    {
      href: "/content/22/webessentials-needs-software-developer-and-senior-software-developer",
      imgSrc:
        "https://api.istad.co/media/image/665bb2ec-bd8b-4dc0-bbc0-c652aacc422b.png",
      imgAlt:
        "WebEssentials ប្រកាសរើសបុគ្គលិក Software Developer និង Senior Software Developer",
      category: "Job Announcement",
      postDate: "19-Sep-2022",
      title:
        "WebEssentials ប្រកាសរើសបុគ្គលិក Software Developer និង Senior Software Developer",
    },
    {
      href: "/content/21/senior-spring-web-developer",
      imgSrc:
        "https://api.istad.co/media/image/0f73eade-8174-4d30-bed9-6319a27ce149.png",
      imgAlt: "Senior Spring Web Developer",
      category: "Job Announcement",
      postDate: "07-Sep-2022",
      title: "Senior Spring Web Developer",
    },
    {
      href: "/content/19/senior-java-developer-in-sky-booking-co-ltd",
      imgSrc:
        "https://api.istad.co/media/image/ebb72f6e-6c2f-4e04-bc75-37253c41555e.png",
      imgAlt: "Senior Java Developer in Sky Booking Co., Ltd",
      category: "Job Announcement",
      postDate: "31-Aug-2022",
      title: "Senior Java Developer in Sky Booking Co., Ltd",
    },
    {
      href: "/content/12/istad-job-opportunity-for-students",
      imgSrc:
        "https://api.istad.co/media/image/5672e61a-d0bb-4040-a0d6-0c934cbba92e.png",
      imgAlt: "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
      category: "Job Announcement",
      postDate: "13-Jul-2022",
      title: "ឱកាសការងារដែលសិស្សនិស្សិតនឹងទទួលបានក្រោយបញ្ចប់ការសិក្សានៅ ISTAD",
    },
  ];

  return (
    <div className=" container mx-auto flex justify-center py-10">
      <div>
        <p className="text-center font-semibold text-3xl uppercase">
          Useful Content
        </p>
        <div className="grid grid-cols-4 p-5 gap-5">
          {newsDataArray.map((newsData, index) => (
            <JobCard key={index} {...newsData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
