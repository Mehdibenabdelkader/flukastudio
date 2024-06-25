import Design from "../assets/Design.svg";

export const Services = () => {
    return (
      <div className=" w-5/6 mx-auto flex text-left pt-20 ">
        <div className=" flex flex-col flex-1 ">
            <h1 className="font-black text-6xl pb-10 pt-4">Our services</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore ratione aliquid assumenda magni adipisci corporis repellendus maiores atque. Culpa, voluptatum! Id hic soluta, quas magni vel impedit ut necessitatibus debitis.x</p>
            <button className="px-4 py-2 bg-purple text-white rounded w-60 mt-12">Book a free Meeting</button>
        </div>
        <div className="flex-1 flex flex-col">
            <div className="p-4 flex">
                <img src={Design} alt="" className="rounded-md p-2 border-2 w-20 " />
                <h1 className="mx-4 mt-2">Graphic Design</h1>
            </div>
            <div className="p-4 flex">
                <img src={Design} alt="" className="rounded-md p-2 border-2 w-20" />
                <h1 className="mx-4 mt-2" >Social Media Management</h1>
            </div>
            <div className="p-4 flex">
                <img src={Design} alt="" className="rounded-md p-2 border-2 w-20" />
                <h1 className="mx-4 mt-2">Website Developement</h1>
            </div>
            
        </div>
      </div>
    );
  };