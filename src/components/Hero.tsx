import slogan from "../assets/slogan.svg";
import icon from "../assets/icon.svg";
import { links } from "../assets/constants/constants";


export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mx-auto pt-[12rem] -mt-[5.25rem] w-5/6 h-5/6">
      <div className="flex flex-col flex-1 justify-evenly items-center md:items-start">
        <div className="my-16 min-w-[18rem] md:min-w-[30rem]">
          <img src={slogan} alt="Slogan" />
        </div>
        <div className="flex-1 text-justify w-full md:w-5/6">
          <p className="text-lg"> Brand Identity ? </p>
          <p className="text-lg"> Social Media Design ? </p>
          <p className="text-lg"> Website Building ? </p>
        </div>
        <div className="self-start bg-purple text-white rounded  my-20">
          <a className="self-start px-20 py-2 bg-purple text-white rounded w-60 my-8" href={links[1].url}>WE HAVE IT ALL!</a>
        </div>
      </div>
      <div className="hidden md:flex justify-center md:justify-end w-full md:w-auto"> 
        <img src={icon} alt="Icon" className="w-5/6 md:w-auto"/>
      </div>
    </div>
  );
};

