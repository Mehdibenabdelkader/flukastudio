import slogan from "../assets/slogan.svg";
import icon from "../assets/icon.svg";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.svg";

export const Home = () => {
  return (
    <div className=" flex gap-4 p-4">
      <div className="flex flex-col">
        <div className="flex-1 my-16">
          <img src={slogan} alt="" />
        </div>
        <div className="flex-1 text-justify my-20">
          <p className="text-lg"> Brand Identity ? </p>
          <p className="text-lg"> Social media Design ? </p>
          <p className="text-lg"> Website Building ? </p>
        </div>

        <button className="px-4 py-2 bg-purple text-white rounded w-60 my-20">
          WE HAVE IT ALL!
        </button>
      </div>

      <div className="flex flex-col justify-end my-10">
        <div className="w-full">
          <img src={icon} alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-around my-72 items-center shrink-0">
        <button className="px-4 py-2">
          <img src={x} alt="" />
        </button>
        <button className="px-4 py-2">
          <img src={linkedin} alt="" />
        </button>
        <button className="px-4 py-2">
          <img src={insta} alt="" />
        </button>
      </div>
    </div>
  );
};
