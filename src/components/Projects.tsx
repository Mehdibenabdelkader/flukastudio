import Maktooba from "../assets/projects/maktooba.png";

export const Projects = () => {
  return (
    <div className="w-5/6 mx-auto flex flex-col py-20 items-center">
      <h1 className="font-black text-3xl lg:text-6xl pb-10 pt-4 text-center">We take Pride in our work</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-9 justify-center w-full">
        <button className="bg-purple flex-1">
          <img src={Maktooba} alt="Project 1" />
        </button>
        <button className="bg-purple flex-1">
          test
        </button>
        <button className="bg-purple flex-1">
          test
        </button>
        <button className="bg-purple flex-1">
          test
        </button>
      </div>
    </div>
  );
};

