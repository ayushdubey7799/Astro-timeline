import D from "./dummy";
import "./style.css"

const Header = () => {
    return (
        <div className="container-head">
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
        <D/>
        <span className="sparkle"></span>
        </div>
    )
}

export default Header;