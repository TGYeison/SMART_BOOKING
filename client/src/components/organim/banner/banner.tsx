import Image from "next/image";

interface BannerProps {
    title: string;
    description?: string;
    children?: JSX.Element[] | JSX.Element; 
    background?: string;
}

const Banner = (props:BannerProps) => {
    return(
        <div className="banner">
            <div className="banner__backgrount">
                <Image
                    width={1920}
                    height={1080}
                    alt="banner"
                    src="/assets/img/bg_banner.jpg"
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
            </div>
            <div className="banner__backgrount-color"></div>
            <div className="banner__content">
                <h2 className="banner__title">
                    {props.title}
                </h2>
                <p className="banner__description">
                    {props.description}
                </p>
                <div className="banner__actions">
                    {props.children}
                </div>
            </div>
        </div>
    );
}


export default Banner;