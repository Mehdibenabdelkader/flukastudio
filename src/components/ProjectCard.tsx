interface ProjectCardProps {
    id: string;
    title: string;
    img: string;
    link: string;
}


export const ProjectCard = ({ img, link }: ProjectCardProps) => (
    <div className="bg-purple flex-1">
        <a href={link}><img src={img} alt="Project 1" /></a>
    </div>
);