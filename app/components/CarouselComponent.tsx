import { Carousel } from "flowbite-react";

export default function CarouselComponent(){
  return (
    <>
      <section className="h-[100vh]">
        <Carousel>
          <img
            className="w-full h-auto rounded-md shadow-lg"
            src="https://api.istad.co/media/image/77da9050-7ff8-40af-a317-11d097cfacb7.png"
            alt="..."
          />
          <img
            className="w-full h-auto rounded-md shadow-lg"
            src="https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png"
            alt="..."
          />
          <img
            className="w-full h-auto rounded-md shadow-lg"
            src="https://api.istad.co/media/image/0b7ddba0-021c-4dc3-ad73-6fe8bea44167.png"
            alt="..."
          />
          <img
            className="w-full h-auto rounded-md shadow-lg"
            src="https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png"
            alt="..."
          />
          <img
            className="w-full h-auto rounded-md shadow-lg"
            src="https://api.istad.co/media/image/a3c4f87e-7a85-44c3-a568-6c5abef76cfe.png"
            alt="..."
          />
        </Carousel>
      </section>
    </>
  );
};