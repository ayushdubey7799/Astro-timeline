import D from "./dummy";
import "./style.css"

const Header = () => {
    // const scrollToBottom= () => {
    //     document.body.scrollTop = document.body.scrollHeight; 
    //   document.documentElement.scrollTop = document.body.scrollHeight;
    //   };


    return (
        <div className="container-head">
         <div className="navbar">
            <div className="left">
                <a className="link">Home</a>
                <a className="link">News</a>
                <div className="link">
                    
                    <select>
                        <option >--Services--</option>
                        <option >Need Help</option>
                        <option >About IASO</option>
                        <option >Consultancy Services</option>
                    </select>
                </div>
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