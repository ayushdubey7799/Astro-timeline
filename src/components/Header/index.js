import "./style.css"

const Header = () => {
    return (
        <>
        <div className="navbar">
            <div className="left">
                <a className="link">Home</a>
                <a className="link">News</a>
                <a className="link">Contact</a>
            </div>
            <div className="right">
              <a className="link">Search</a>
              <a className="link">About</a>
            </div>
        </div>
        <div className="title">
             <div className="name">[INDIAN ASTRO SCIENCE] <span>Predictions By Anirudh Kumar Mishra</span></div>
        </div>
        </>
    )
}

export default Header;