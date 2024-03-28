// pages/index.tsx

import React from "react";
import NewsCardComponent from "../components/NewsCardCoponent";

const HomePage = () => {
  // Array of news data objects
  const newsDataArray = [
    {
      href: "/content/29/hide-and-seek-searching-algorithm",
      imgSrc:
        "https://api.istad.co/media/image/e4a4d369-72c3-441c-9df1-23cc6e2ce3f7.jpg",
      imgAlt: "លេងបិទពួនជាមួយ Searching Algorithm",
      category: "Blog",
      postDate: "16-May-2023",
      title: "លេងបិទពួនជាមួយ Searching Algorithm",
    },
    {
      href: "/content/28/what-is-web-4.0",
      imgSrc:
        "https://api.istad.co/media/image/53e118d6-58e3-4ec1-b40c-ef44f09c441e.jpg",
      imgAlt: "ជជែកគ្នាលេងអំពី Web 4.0",
      category: "Blog",
      postDate: "24-Apr-2023",
      title: "ជជែកគ្នាលេងអំពី Web 4.0",
    },
    {
      href: "/content/27/what-is-cybersecurity",
      imgSrc:
        "https://api.istad.co/media/image/779a9824-0e29-44ff-9f4c-922d78f04b1f.png",
      imgAlt: "តើអ្វីទៅជា Cybersecurity",
      category: "Blog",
      postDate: "04-Jan-2023",
      title: "តើអ្វីទៅជា Cybersecurity",
    },
    {
      href: "/content/26/what-is-IT-and-its-career",
      imgSrc:
        "https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png",
      imgAlt: "អ្វីដែលគួរត្រៀមសម្រាប់អ្នកចង់ចាប់អាជីព IT",
      category: "Blog",
      postDate: "23-Dec-2022",
      title: "អ្វីដែលគួរត្រៀមសម្រាប់អ្នកចង់ចាប់អាជីព IT",
    },
    {
      href: "/content/25/istad-it-expert-scholarships",
      imgSrc:
        "https://api.istad.co/media/image/21a31c2d-181b-4ee0-aed9-61dfb8a09757.jpg",
      imgAlt:
        "សេចក្តីជូនដំណឹង  ស្តីពីការប្រលងជ្រើសរើសនិស្សិតអាហារូបករណ៍  ផ្នែកព័ត៌មានវិទ្យាចំនួន  ៥០  កន្លែងក្នុងឆ្នាំសិក្សា ២០២៣",
      category: "Blog",
      postDate: "08-Dec-2022",
      title:
        "សេចក្តីជូនដំណឹង  ស្តីពីការប្រលងជ្រើសរើសនិស្សិតអាហារូបករណ៍  ផ្នែកព័ត៌មានវិទ្យាចំនួន  ៥០  កន្លែងក្នុងឆ្នាំសិក្សា ២០២៣",
    },
    {
      href: "/content/24/-rest-api--restful-api",
      imgSrc:
        "https://api.istad.co/media/image/a4730d8d-349d-4488-a49b-755d8a01bffe.png",
      imgAlt: "ភាពខុសគ្នារវាង Rest API និង Restful API",
      category: "Blog",
      postDate: "16-Nov-2022",
      title: "ភាពខុសគ្នារវាង Rest API និង Restful API",
    },
    {
      href: "/content/23/flutter-vs-react-native",
      imgSrc:
        "https://api.istad.co/media/image/aed02d47-329b-4493-89b9-56a93ed06946.png",
      imgAlt: "ការប្រៀបធៀបរវាង Flutter និង React Native",
      category: "Blog",
      postDate: "12-Oct-2022",
      title: "ការប្រៀបធៀបរវាង Flutter និង React Native",
    },
    {
      href: "/content/20/smart-contract",
      imgSrc:
        "https://api.istad.co/media/image/77da9050-7ff8-40af-a317-11d097cfacb7.png",
      imgAlt: "ស្វែងយល់អំពី Smart Contract",
      category: "Blog",
      postDate: "08-Sep-2022",
      title: "ស្វែងយល់អំពី Smart Contract",
    },
    {
      href: "/content/18/roadmap-for-front-end-web-developer",
      imgSrc:
        "https://api.istad.co/media/image/a05c8a05-2de6-4dc4-b33e-c7c4689e4f9a.png",
      imgAlt: "Roadmap ដើម្បីក្លាយជា Front-End Web Developer",
      category: "Blog",
      postDate: "23-Aug-2022",
      title: "Roadmap ដើម្បីក្លាយជា Front-End Web Developer",
    },
    {
      href: "/content/17/what-is-web3",
      imgSrc:
        "https://api.istad.co/media/image/eec0362f-380e-40f5-8799-56ca9b8cafb9.png",
      imgAlt: "តើអ្វីទៅជា WEB 3.0?",
      category: "Blog",
      postDate: "11-Aug-2022",
      title: "តើអ្វីទៅជា WEB 3.0?",
    },
    {
      href: "/content/16/why-developers-adopt-docker",
      imgSrc:
        "https://api.istad.co/media/image/0b7ddba0-021c-4dc3-ad73-6fe8bea44167.png",
      imgAlt: "ហេតុអ្វីបានជា Developer គួរមានចំណេះដឹងទៅលើ Docker?",
      category: "Blog",
      postDate: "04-Aug-2022",
      title: "ហេតុអ្វីបានជា Developer គួរមានចំណេះដឹងទៅលើ Docker?",
    },
    {
      href: "/content/15/-sort-algorithm-",
      imgSrc:
        "https://api.istad.co/media/image/4c81c78c-553c-409f-84c1-34018124debb.PNG",
      imgAlt: "តើអ្នកអាចតម្រៀបបៀរដោយប្រើប្រាស់ Sort Algorithm បានដែរឬទេ?",
      category: "Blog",
      postDate: "27-Jul-2022",
      title: "តើអ្នកអាចតម្រៀបបៀរដោយប្រើប្រាស់ Sort Algorithm បានដែរឬទេ?",
    },
    {
      href: "/content/14/top-interesting-facts-about-c",
      imgSrc:
        "https://api.istad.co/media/image/e391212d-aac5-460c-bd17-f95f468e4408.PNG",
      imgAlt: "Top Interesting Facts About C++",
      category: "Blog",
      postDate: "26-Jul-2022",
      title: "Top Interesting Facts About C++",
    },
    {
      href: "/content/11/sql-cheat-sheet-top-10-commands",
      imgSrc:
        "https://api.istad.co/media/image/8665a243-b962-4a59-b51a-f31a3704b701.png",
      imgAlt: "SQL Cheat Sheet: SQL Commands សំខាន់ៗដែលជាមូលដ្ឋានគ្រឹះស្នូល",
      category: "Blog",
      postDate: "13-Jul-2022",
      title: "SQL Cheat Sheet: SQL Commands សំខាន់ៗដែលជាមូលដ្ឋានគ្រឹះស្នូល",
    },
    {
      href: "/content/13/join-official-telegram-channel-",
      imgSrc:
        "https://api.istad.co/media/image/1e768a7f-873f-4bf2-8217-029f9bf6b12c.png",
      imgAlt: "Join Official Telegram Channel",
      category: "Blog",
      postDate: "26-Jul-2022",
      title: "Join Official Telegram Channel",
    },
    {
      href: "/content/10/front-end-web-development-recommended-by-istad",
      imgSrc:
        "https://api.istad.co/media/image/ac581f46-526a-4a8a-b3f0-c5595f286102.png",
      imgAlt: "ចង់ក្លាយខ្លួនជា Front-End Web Development អាចអាន Blog នេះបាន",
      category: "Blog",
      postDate: "13-Jul-2022",
      title: "ចង់ក្លាយខ្លួនជា Front-End Web Development អាចអាន Blog នេះបាន",
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
            <NewsCardComponent key={index} {...newsData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
