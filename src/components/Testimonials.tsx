import client1 from "../assets/clients/client1.jpg";

export const Testimonials = () => {
  return (
    <div className="w-5/6 mx-auto flex flex-col py-20 ">
      <h1 className="font-black text-6xl pb-10 pt-4">What our clients think</h1>
      <div className="flex gap-9 justify-evenly flex-col">
        <div className="flex gap-4">
            <div className="w-44 shrink-0">
                <img src={client1} alt="" className="bg-black rounded-full aspect-square" />
            </div>
            
            <div className="bg-purple w-2 "></div>
            <div className="text-left  flex flex-col">
                <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio?</p>
                <p className="text-gray-400  mt-auto"> Mehdi Benabdelakder, CEO @ Fluka Studio</p>
            </div>
            
        </div>
        <div className="flex gap-4 ">
            <div className="w-44 shrink-0">
                <img src={client1} alt="" className="bg-black rounded-full aspect-square" />
            </div>
            
            <div className="bg-purple w-2 "></div>
            <div className="text-left  flex flex-col">
                <p className="text-xl ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio?</p>
                <p className="text-gray-400  mt-auto"> Mehdi Benabdelakder, CEO @ Fluka Studio</p>
            </div>
            
        </div>
        <div className="flex gap-4 ">
            <div className="w-44 shrink-0">
                <img src={client1} alt="" className="bg-black rounded-full aspect-square" />
            </div>
            
            <div className="bg-purple w-2 "></div>
            <div className="text-left  flex flex-col">
                <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio?</p>
                <p className="text-gray-400  mt-auto"> Mehdi Benabdelakder, CEO @ Fluka Studio</p>
            </div>
            
        </div>
      </div>
    </div>
  );
};