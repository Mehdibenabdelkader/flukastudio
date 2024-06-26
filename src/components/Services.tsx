import Design from "../assets/Design.svg";

export const Services = () => {
    return (
      <div className="w-5/6 mx-auto flex flex-col md:flex-row text-left pt-20 gap-2 md:gap-28">
        <div className="flex flex-col flex-1">
          <h1 className="font-black text-6xl md:text-6xl pb-10 pt-4">Our services</h1>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore ratione aliquid assumenda magni adipisci corporis repellendus maiores atque. Culpa, voluptatum! Id hic soluta, quas magni vel impedit ut necessitatibus debitis.
          </p>
          <button className="self-start px-4 py-2 bg-purple text-white rounded w-60 mt-12">
            Book a free Meeting
          </button>
        </div>
        <div className="flex-1 flex flex-col mt-5 md:mt-0">
          <div className="py-4 flex">
            <img src={Design} alt="Graphic Design" className="rounded-md p-2 border-2 w-20" />
            <h1 className="mx-4 mt-2 text-base md:text-lg">Graphic Design</h1>
          </div>
          <div className="py-4 flex">
            <img src={Design} alt="Social Media Management" className="rounded-md p-2 border-2 w-20" />
            <h1 className="mx-4 mt-2 text-base md:text-lg">Social Media Management</h1>
          </div>
          <div className="py-4 flex">
            <img src={Design} alt="Website Development" className="rounded-md p-2 border-2 w-20" />
            <h1 className="mx-4 mt-2 text-base md:text-lg">Website Development</h1>
          </div>
        </div>
      </div>
    );
  };