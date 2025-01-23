//Important imports for the app
import './App.css';
import { BrowserRouter, Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
//Pages 
import { HomePage } from './Home.js';
import { PrePage } from './Pre.js';
import { AutoPage } from './Auto.js';
import { TelePage } from './Tele.js';
import { EndPage } from './End.js';
import { PostPage } from './Post.js';
import { HumanPage } from './Human.js';
import { QRPage } from './QR.js';
import { QrGen } from './QRGen.js';
import { vlairiables, resetVlairiables } from './Functions.js';
//Variables for page navigation purposes
let human = false;
let routes = ["/", "/Pre", "/Auto", "/Tele", "/End", "/Post", "/Human", "/QR", "/QrGen"];
{/*

 */}
 //these quotes above crash my pc if they arent included 
//Main app page with all the pages routed in
export default function MyApp() {
  return(
    <body>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/Pre" element={<PrePage/>} />
          <Route path="/Auto" element={<AutoPage/>} />
          <Route path="/Tele" element={<TelePage/>} />
          <Route path="/End" element={<EndPage/>} />
          <Route path="/Post" element={<PostPage/>} />
          <Route path="/Human" element={<HumanPage/>} />
          <Route path="/QR" element={<QRPage/>} />
          <Route path="/QrGen" element={<QrGen/>} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

{/*Buttons for page navigation */}
{/*Home Page Navigation Buttons*/}
export function StartScoutBut() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/Pre');
  };

  return (
    <button className="homeButton" onClick={handleClick}>
      Start Scouting
    </button>
  );
}

//QR Scanning button
export function QRBut() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/QR')
  };

  return (
    <button className="homeButton" onClick={handleClick}>
      Scan QR
    </button>
  );
}

//Button to navigate to the human scouting page
export function  HumanBut() {
  const navigate = useNavigate();

  const handleClick = () => {
    human = true;
    navigate('/Human')
  };

  return (
    <button className="homeButton" onClick={handleClick}>
      Human Scouting
    </button>
  );
}

{/*Multi page Buttons*/}
export function NavButN({next}) {
  const navigate = useNavigate()
  const nextPage = () => {
    console.log(vlairiables);
    const go = routes[next] //Prop dictated when button is called to decide which page to go to next
    navigate(go)
  }

  return(
    <button class="homeButton navBut" onClick={nextPage}>
      &gt;
    </button>
  );
}


export function NavButB({last}) {
  const navigate = useNavigate()
  const lastPage = () => {
    if (human){
      navigate("/")
      human = false;
    } else {
      console.log(vlairiables);
      const go = routes[last] //Prop dictated when button is called to decide which page to go back to
      navigate(go)  
    }
  }

  return(
    <button class="homeButton navBut" onClick={lastPage}>
      &lt;
    </button>
  );
}

//Button to navigate to the home page
export function HomePageBut() {
  const navigate = useNavigate()
  const homePage = () => {
    console.log(vlairiables);
    human = false;
    navigate('/')
    resetVlairiables();
  }

  return(
    <button class="homeButton" onClick={homePage}>
      Home Page
    </button>
  );
}

//Button to generate the qr codes
export function FinishBut() {
  const navigate = useNavigate()
  const finishPage = () => {
    human = false;
    navigate('/QrGen')
  }
  return(
    <button class="homeButton" onClick={finishPage}>
      Finish Scouting
    </button>
  );
}