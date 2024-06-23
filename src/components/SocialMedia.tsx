import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import insta from "../assets/insta.svg";

export const SocialMedia = () => {
  return (
    <div className="fixed bottom-12 flex flex-col justify-center right-12 items-center">
      <button className="py-2 w-6">
        <img src={x} alt="" />
      </button>
      <button className="py-2 w-8">
        <img src={linkedin} alt="" />
      </button>
      <button className="py-2 w-6">
        <img src={insta} alt="" />
      </button>
    </div>
  );
};
