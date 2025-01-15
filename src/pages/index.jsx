import Demo from "@/components/container";
import Navbar from "@/components/navbar";
import Section2 from "./section2";

export default function Home() {
  return (
      <div className="overflow-x-hidden">
          <Demo />
          <Section2 />
          <div className="flex flex-col lg:grid lg:grid-cols-7 gap-32 lg:gap-8 px-11 lg:px-16  mt-20 md:mb-10 ">
            <div className="bg-white rounded-xl lg:-mt-10 px-16 py-12 lg:px-8 lg:py-12 border border-gray-300"></div>
            <div className="bg-white rounded-xl -mt-10 px-16 py-12 lg:px-8 lg:py-12 border border-gray-300"></div>
            <div className="bg-white rounded-xl -mt-10 px-16 py-12 lg:px-8 lg:py-12 border border-gray-300"></div>
            <div className="bg-white rounded-xl -mt-10 px-16 py-12 lg:px-8 lg:py-12 border border-gray-300"></div>
            <div className="bg-white rounded-xl -mt-10 px-16 py-12 lg:px-8 lg:py-12 border border-gray-300"></div>
            <div className="bg-white rounded-xl -mt-10 px-16 py-12 lg:px-8 lg:py-12 border border-gray-300"></div>
            <div className="bg-white rounded-xl -mt-10 px-16 py-12 lg:px-8 lg:py-12 border border-gray-300"></div>
          </div>
          <Navbar />
        </div>
  );
}
