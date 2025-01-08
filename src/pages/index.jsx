import Demo from "@/components/ui/container";
import Navbar from "@/components/navbar";
import Section2 from "./section2";

export default function Home() {
  return (
        <div className="overflow-hidden"> 
          <Demo />
          <Section2 />
          <div class="grid grid-cols-7 grid-flow-col gap-32 px-11 mt-6">
            <div className="bg-white rounded-xl p-12 border border-gray-400"></div>
            <div className="bg-white rounded-xl p-12 border border-gray-400"></div>
            <div className="bg-white rounded-xl p-12 border border-gray-400"></div>
            <div className="bg-white rounded-xl p-12 border border-gray-400"></div>
            <div className="bg-white rounded-xl p-12 border border-gray-400"></div>
            <div className="bg-white rounded-xl p-12 border border-gray-400"></div>
            <div className="bg-white rounded-xl p-12 border border-gray-400"></div>
          </div>
          <Navbar />
        </div>
  );
}
