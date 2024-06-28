import flukastudio from "../assets/flukastudio.svg";
import { links } from "../assets/constants/constants";

export const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-8 p-4 rounded-md w-5/6 z-50 left-1/2 -translate-x-1/2 border-2 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#">
              <img src={flukastudio} alt="Fluka studio" />
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a
              onClick={() => {
                const element = document.getElementById('Projects');
                if (element) {
                  element.scrollIntoView();
                }
              }}
              className="text-black hover:bg-purple hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              onClick={() => {
                const element = document.getElementById('Services');
                if (element) {
                  element.scrollIntoView();
                }
              }}
              className="text-black hover:bg-purple hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
          </div>

          <div className="flex-shrink-0">
            <a
              href={links[2].url}
              className="bg-purple text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange"
            >
              Get in touch
            </a>
          </div>
        </div>

        
      </nav>
    </div>
  );
};
