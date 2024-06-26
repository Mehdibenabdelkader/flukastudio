import Maktooba from "../assets/projects/maktooba.png";

export const Projects = () => {
  return (
    <div className="w-5/6 mx-auto flex flex-col py-20 ">
      <h1 className="font-black text-6xl pb-10 pt-4">We take Pride in our work</h1>
      <div className="flex gap-9 justify-evenly">
        <button className="bg-purple flex-1">
          <img src={Maktooba} alt="" />
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
