import "./Logo.css";

const url = "https://nusgdg.org/";
const src = `${process.env.PUBLIC_URL}/logo512.png`;
const alt = "NUSGDG";

const Logo = () => {
    return (
        <div className={"Logo-root"} title={"Visit NUSGDG"}>
            <a href={url} draggable={false}>
                <img src={src} alt={alt} draggable={false}/>
            </a>
        </div>
    )
}

export default Logo;
