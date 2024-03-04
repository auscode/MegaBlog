import heroimg from "../assets/heroimg.svg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="lg:flex md:flex justify-between">
        <div className="lg:w-1/2 md:w-1/2 text-left">
          <div className="font-bold lg:text-7xl text-3xl md:text-4xl leading-tight">
            Lets write something fun together
          </div>
          <div className="font-semibold mt-8 mb-8 text-xl text-gray-700 ">
            Hi, This is Harshit lets create a savvy yet technical blog for
            techhy like us. We welocome to you this blog and hope you express
            your thoughts on many different approaches to any particular project
            or ideas or viewpoint you have 😉😉.
          </div>
          <div className="lg:flex items-center justify-start lg:gap-4 lg:mt-10 py-4">
            <div className="lg:mt-0 md:mt-2">
              <Link
                to="/login"
                className="text-lg font-bold text-white hover:text-black bg-black hover:bg-white shadow-2xl shadow-white hover:shadow-black p-4 rounded-lg"
              >
                Get Started
              </Link>
            </div>
            <div className="mt-4">
              <Link
                to="/Signup"
                className="lg:text-2xl md:text-xl font-medium underline text-gray-600 hover:text-black"
              >
                Create a new one ?
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <img src={heroimg} alt="Hero Image" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
