import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import insta from "../assets/insta.svg";

export const SocialMedia = () => {
  return (
    <div className="hidden fixed bottom-12 md:flex flex-col justify-center right-12 items-center ">
      <button className="py-2 w-6">
        <img src={x} alt="X" />
      </button>
      <button className="py-2 w-8">
        <img src={linkedin} alt="LinkedIn" />
      </button>
      <button className="py-2 w-6">
        <img src={insta} alt="Instagram" />
      </button>
    </div>
  );
};
