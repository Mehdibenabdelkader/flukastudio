import flukastudio from "../assets/flukastudio.svg";


export const Footer = () => {
    return ( 
        <div className="w-5/6 mx-auto flex mb-10 mt-20 ">
            <div className="flex flex-col flex-1 text-left gap-4">
                <div className="mb-8">
                    <img src={flukastudio} alt="" className="w-44 shrink-0"/>
                </div>
                
                <p>Fluka Studio is a leading studio for the creation of the best brand identity, social media posts, and website for your business/brand</p>
                <div className="flex gap-8 mt-10">
                    <a href="">Projects</a>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                    <a href="">Join us</a>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-end text-xl">
                <a href="mailto:fluka.studio@gmail.com" className=" align-bottom end-0 items-end">fluka.studio@gmail.com</a>
            </div>
        </div>

    );
};