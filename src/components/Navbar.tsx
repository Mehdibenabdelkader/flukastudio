import flukastudio from "../assets/flukastudio.svg";

export const Navbar = () => {
  return (
    <div>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={flukastudio} width={190} height={40} alt="Brainwave" />
        </a>
      </div>
    </div>
  );
};
