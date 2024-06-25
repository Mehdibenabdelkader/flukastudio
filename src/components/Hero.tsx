import slogan from "../assets/slogan.svg";


export const Hero = () => {
  return (
    <div className="flex gap-4 mx-auto pt-[12rem] -mt-[5.25rem] w-5/6 h-5/6">
      <div className="flex fit flex-col w-full justify-evenly  ">
        <div className="flex-1 my-16">
          <img src={slogan} alt="" />
        </div>
        <div className="flex-1 text-justify w-5/6 ">
          <p className="text-lg"> Brand Identity ? </p>
          <p className="text-lg"> Social media Design ? </p>
          <p className="text-lg"> Website Building ? </p>
        </div>

        <button className="px-4 py-2 bg-purple text-white rounded w-60 my-8 ">
          WE HAVE IT ALL!
        </button>
      </div>
    </div>
  );
};
