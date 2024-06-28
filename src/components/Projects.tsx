import {ProjectCard} from "./ProjectCard";
import { projects } from "../assets/constants/constants";

type ProjectType = {
  id: string;
  title: string;
  img: string;
  link: string;
};

export const Projects = () => {
  return (
    <div id="Projects" className="w-5/6 mx-auto flex flex-col py-20 items-center">
      <h1 className="font-black text-3xl lg:text-6xl pb-10 pt-4 text-center">We take Pride in our work</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-9 justify-center w-full">
        {projects.map((proj: ProjectType) => <ProjectCard key={proj.id} {...proj} />)}
      </div>
    </div>
  );
};

