import client1 from "../assets/clients/client1.jpg";

export const Testimonials = () => {
    return (
      <div className="w-5/6 mx-auto flex flex-col py-20 items-center">
        <h1 className="font-black text-3xl lg:text-6xl pb-10 pt-4 text-center">What our clients think</h1>
        <div className="flex flex-col gap-9 justify-center w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-24 md:w-44 shrink-0 mx-auto md:mx-0">
              <img src={client1} alt="Client 1" className="bg-black rounded-full aspect-square" />
            </div>
            <div className="bg-purple w-full md:w-2"></div>
            <div className="text-left flex flex-col">
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio?
              </p>
              <p className="text-gray-400 mt-auto pt-4">Mehdi Benabdelakder, CEO @ Fluka Studio</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-24 md:w-44 shrink-0 mx-auto md:mx-0">
              <img src={client1} alt="Client 2" className="bg-black rounded-full aspect-square" />
            </div>
            <div className="bg-purple w-full md:w-2"></div>
            <div className="text-left flex flex-col">
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio?
              </p>
              <p className="text-gray-400 mt-auto pt-4">Mehdi Benabdelakder, CEO @ Fluka Studio</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-24 md:w-44 shrink-0 mx-auto md:mx-0">
              <img src={client1} alt="Client 3" className="bg-black rounded-full aspect-square" />
            </div>
            <div className="bg-purple w-full md:w-2"></div>
            <div className="text-left flex flex-col">
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ad voluptate molestias nihil illum sunt nemo, eius fuga eaque aspernatur aperiam ex assumenda praesentium animi incidunt voluptates? Alias, laboriosam distinctio?
              </p>
              <p className="text-gray-400 mt-auto pt-4">Mehdi Benabdelakder, CEO @ Fluka Studio</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  