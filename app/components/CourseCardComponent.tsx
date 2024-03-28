import { Courses } from "@/app/MainCourse/CoursePage";
import { Card } from "flowbite-react";
import { IoTime } from "react-icons/io5";
import { FaLayerGroup } from "react-icons/fa";

type CourseProps = {
  courses: Courses[];
};
const CourseCardComponent = ({ courses }: CourseProps) => {
  return (
    <>
      <section className="container mx-auto ">
        <h1 className="uppercase text-5xl font-extrabold mb-6">Course</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center gap-4 ">
          {courses.map((course, index) => (
            <Card
              key={index}
              className=" object-cover rounded-lg shadow-lg h-[200px]"
            >
              <div className="grid grid-flow-col gap-4 justify-items-center items-start">
                <div>
                  <img
                    src={course?.image || "NO Image"}
                    alt="image 1"
                    className=" h-[150px] "
                  />
                </div>

                <div className="grid grid-flow-row gap-4">
                  <h3 className="uppercase text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                    {course?.title || "Default Title"}
                  </h3>

                  <span className="inline">
                    <span className="text-white bg-red-600 py-1 px-2 rounded-lg font-semibold">
                      20% Scholarship
                    </span>
                  </span>

                  <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                    {course?.description || "Default Description"}
                  </p>
                </div>

                <div className=" grid gap-3">
                  <div className="flex items-center text-blue-900 gap-1">
                    <IoTime />
                    <p className="pl-1">{course?.hour || "O Hour"}</p>
                  </div>
                  <div className="flex items-center text-blue-900 gap-1">
                    <FaLayerGroup />
                    <p className="pl-1">{course?.level || "Default level"}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default CourseCardComponent;
