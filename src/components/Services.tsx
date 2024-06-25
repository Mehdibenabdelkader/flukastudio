import Design from "../assets/Design.svg";

export const Services = () => {
    return (
      <div className=" w-5/6 mx-auto flex text-left ">
        <div className=" flex flex-col flex-1 justify-evenly">
            <h1 className="font-black text-6xl">Our services</h1>
            <p className="  ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore ratione aliquid assumenda magni adipisci corporis repellendus maiores atque. Culpa, voluptatum! Id hic soluta, quas magni vel impedit ut necessitatibus debitis.x</p>
        </div>
        <div className="flex-1 flex flex-col">
            <div className="p-4 flex">
                <img src={Design} alt="" className="rounded-md p-2 border-2 w-20 " />
                <h1 className="mx-4">Design</h1>
            </div>
            <div className="p-4 flex">
                <img src={Design} alt="" className="rounded-md p-2 border-2 w-20" />
                <h1 className="mx-4">Design</h1>
            </div>
            <div className="p-4 flex">
                <img src={Design} alt="" className="rounded-md p-2 border-2 w-20" />
                <h1 className="mx-4">Design</h1>
            </div>
            
        </div>
      </div>
    );
  };