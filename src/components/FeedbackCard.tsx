interface FeedbackCardProps {
    id: string;
    content: string;
    name: string;
    title: string;
    img: string;
}

export const FeedbackCard = ({ content, name, title, img }: FeedbackCardProps) => (
    <div className="flex flex-col md:flex-row gap-4">
        <div className="w-24 md:w-44 shrink-0 mx-auto md:mx-0">
            <img src={img} alt="Client 1" className="rounded-full aspect-square" />
        </div>
        <div className="bg-purple w-full md:w-2"></div>
        <div className="text-left flex flex-col">
            <p className="text-base">
                {content}
            </p>
            <p className="text-gray-400 mt-auto pt-4">{name + ', ' +  title}</p>
        </div>
    </div>
);