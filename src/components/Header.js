import TrollFace from "../images/trollface.png"

export default function Header() {
    return (
        <header className="header">
            <div className="header--title">
                <img src={TrollFace} alt="trollface" className="header--title--img" />
                <h3 className="header--title--text">Meme Generator</h3>
            </div>
            <h5 className="header--courseproject">React Course - Project 3</h5>
        </header>
    )
}