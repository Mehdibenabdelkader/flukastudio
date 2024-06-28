import Design from "../assets/design.png";
import SocialMedia from "../assets/SocialMedia.png";
import Web from "../assets/WebDev.png";
import { links } from "../assets/constants/constants";

export const Services = () => {
    return (
      <div id="Services" className="w-5/6 mx-auto flex flex-col md:flex-row text-left pt-20 gap-2 md:gap-28">
        <div className="flex flex-col flex-1">
          <h1 className="font-black text-6xl md:text-6xl pb-10 pt-4">Our services</h1>
          <p className="text-base md:text-lg">
          At Fluka Studio, we provide top-notch creative services including graphic design, web development, and multimedia production. Our skilled team collaborates with clients to deliver high-quality, tailored solutions that bring your vision to life and enhance your brand.
          </p>
          <div className="self-start bg-purple text-white rounded my-20">
            <a className="self-start px-16 py-2 bg-purple text-white rounded w-60 my-8" href={links[1].url}>Free meeting!</a>
          </div>
        </div>
        <div className="flex-1 flex flex-col mt-5 md:mt-0">
          <div className="py-4 flex">
            <img src={Design} alt="Graphic Design" className="rounded-md p-2 border-2 w-28" />
            <h1 className="mx-4 mt-2 text-base md:text-lg">Graphic Design</h1>
          </div>
          <div className="py-4 flex">
            <img src={SocialMedia} alt="Social Media Management" className="rounded-md p-2 border-2 w-28" />
            <h1 className="mx-4 mt-2 text-base md:text-lg">Social Media Management</h1>
          </div>
          <div className="py-4 flex">
            <img src={Web} alt="Website Development" className="rounded-md p-2 border-2 w-28" />
            <h1 className="mx-4 mt-2 text-base md:text-lg">Website Development</h1>
          </div>
        </div>
      </div>
    );
  };