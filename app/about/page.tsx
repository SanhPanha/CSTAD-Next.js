import {
  BiGlobe,
  BiLogoFacebook,
  BiLogoTelegram,
  BiLogoYoutube,
  BiPhone,
  BiPointer,
  BiShowAlt,
} from "react-icons/bi";
import { GoGoal } from "react-icons/go";
import { List } from "flowbite-react";
import { BsChat } from "react-icons/bs";
import { FaMapMarker } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function AboutUs() {
  return (
    <div className="bg-gray-100 container mx-auto flex flex-col justify-center gap-8 items-center py-10">
      <div className="bg-white p-6 grid grid-cols-1 gap-2 w-[60%]">
        <h1 className="flex items-center text-xl font-bold tracking-[0.25rem]">
          <span className="ml-2">
            WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?
          </span>
        </h1>
        <p>
          CSTAD is a noteworthy science and technology center in Cambodia. CSTAD
          has routed Cambodian students to advanced science and technology,
          research, and develop digital skills and our graduates have been
          guaranteed excellent job opportunities with the Top IT company. CSTAD
          will continue to provide high-quality training with the latest
          methodology, and roadmap as well as the best choice for those who want
          to be an IT expert in Cambodia.
        </p>
        <div className="grid place-content-center">
          <img
            src="https://istad.co/resources/img/logo_md.png"
            className="w-80"
          />
        </div>
      </div>

      <div className="bg-white p-6 grid grid-cols-1 gap-2 w-[60%]">
        <h1 className="flex items-center text-xl font-bold tracking-[0.25rem]">
          <BiShowAlt />
          <span className="ml-2 uppercase">vision</span>
        </h1>
        <p>Advanced IT Institute in Cambodia</p>
      </div>

      <div className="bg-white p-6 grid grid-cols-1 gap-2 w-[60%]">
        <h1 className="flex items-center text-xl font-bold tracking-[0.25rem]">
          <GoGoal />
          <span className="ml-2 uppercase">mission</span>
        </h1>
        <List>
          <List.Item>
            Provide the latest methodology with high quality training and
            mentoring
          </List.Item>
          <List.Item>
            Build up the capacity and career of IT experts Cambodia
          </List.Item>
          <List.Item>
            Consult and connect CSTAD trainees to top IT careers
          </List.Item>
        </List>
      </div>

      <div className="bg-white p-6 grid grid-cols-1 gap-2 w-[60%]">
        <h1 className="flex items-center text-xl font-bold tracking-[0.25rem]">
          <BsChat />
          <span className="ml-2 uppercase">Slogan</span>
        </h1>
        <p>Start your IT Career with CSTAD</p>
      </div>

      <h1 className="uppercase text-md font-bold text-center text-primary tracking-[0.25rem]">
        IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.
      </h1>

      <div className="bg-white p-6 grid grid-cols-1 gap-2 w-[60%]">
        <p className="flex items-center gap-2">
          <FaMapMarker />
          No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom Penh,
          Cambodia
        </p>
        <p className="flex items-center gap-2">
          <BiPhone />
          (+855) 95 990 910 | (+855) 93 990 910
        </p>
        <p className="flex items-center gap-2">
          <BiLogoTelegram />
          Telegram Channel
        </p>
        <p className="flex items-center gap-2">
          <BiLogoFacebook />
          Facebook
        </p>
        <p className="flex items-center gap-2">
          <MdEmail />
          info.istad@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <BiGlobe />
          www.istad.co
        </p>
        <p className="flex items-center gap-2">
          <BiLogoYoutube />
          YouTube
        </p>
      </div>
    </div>
  );
}
