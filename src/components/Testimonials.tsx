import {FeedbackCard} from "./FeedbackCard";
import { feedback } from "../assets/constants/constants";

type CardType = {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
};

export const Testimonials = () => {
    return (
      <div className="w-5/6 mx-auto flex flex-col py-20 items-center">
        <h1 className="font-black text-3xl lg:text-6xl pb-10 pt-4 text-center">What our clients think</h1>
        <div className="flex flex-col gap-9 justify-center w-full">
          {feedback.map((card: CardType) => <FeedbackCard key={card.id} {...card} />)}
        </div>
      </div>
    );
  };
  