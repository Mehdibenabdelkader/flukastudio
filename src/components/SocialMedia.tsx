import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import insta from "../assets/insta.svg";
import { links } from "../assets/constants/constants";

export const SocialMedia = () => {
  return (
    <div className="hidden fixed bottom-12 md:flex flex-col justify-center right-12 items-center ">
      <div className="py-2 w-6 ">
        <a href={links[0].url}><img src={x} alt="X" /></a>
      </div>
      <div className="py-2 w-8">
        <a href={links[2].url}><img src={linkedin} alt="LinkedIn" /></a>
      </div>
      <div className="py-2 w-6">
        <a href={links[1].url}><img src={insta} alt="Instagram" /></a>
      </div>
    </div>
  );
};
