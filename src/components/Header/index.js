import "./style.css"

const Header = () => {
    // const scrollToBottom= () => {
    //     document.body.scrollTop = document.body.scrollHeight; 
    //   document.documentElement.scrollTop = document.body.scrollHeight;
    //   };


    return (
        
        <div className="container-head">
            <div className="navbar">
            <ul className="left">
               <li><a className="link">Home</a></li>
               <li><a className="link">News</a></li>
      <li>
        <a className="link">Services</a>
        <ul className="dropdown-menu">
          <li><a className="link">Need Help</a></li>
          <li><a className="link">Book Appointment</a></li>
          <li><a className="link">About IASO</a></li>
        </ul>
      </li>
      <li><a className="link">Contact</a></li>
    </ul>
    <div className="right">
      <a className="link">Search</a>
      <a className="link">About</a>
    </div>
  </div>

        <div className="foot">
      <h2 className="logo">
      <span className="name">[INDIAN ASTRO SCIENCE]<sup>Predictions By Anirudh Kumar Mishra</sup></span>
      </h2>
    </div>
        </div>
    )
}

export default Header;