import './App.css';
import AstroTimeLine from './components/AstroTimeLine';
import Footer from './components/Footer';
import Header from './components/Header';
// import Waves from './components/Waves';

function App() {
  
  const scrollToBottom = () => {
    document.body.scrollTop = document.body.scrollHeight; 
  document.documentElement.scrollTop = document.body.scrollHeight;
  };

  return (
    <div className="App">
       <div className="side appoint" onClick={scrollToBottom}>Consultancy Services</div>
      <div className="side help" onClick={scrollToBottom}>Need Help ?</div>
      <Header />
      {/* <Waves/> */}
      <AstroTimeLine />
      <Footer/>
    </div>
  );
}

export default App;
