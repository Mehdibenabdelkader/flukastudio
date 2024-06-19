import flukastudio from "../assets/flukastudio.svg";

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-100 p-4 rounded-md">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="flex-shrink-0">
            <a href="#" className="">
              <img src={flukastudio} alt="Fluka studio " />
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-black hover:bg-purple hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-black hover:bg-purple hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#"
              className="bg-orange text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orangeDark"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
