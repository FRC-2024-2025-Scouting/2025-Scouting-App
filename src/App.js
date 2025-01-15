import './App.css';
import { BrowserRouter, Routes} from 'react-router-dom';
import { VlariablesProvider } from './Functions.js';
import { useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { HomePage } from './Home.js';
import { PrePage } from './Pre.js';
import { AutoPage } from './Auto.js';
import { TelePage } from './Tele.js';
import { EndPage } from './End.js';
import { PostPage } from './Post.js';
import { HumanPage } from './Human.js';
import { QRPage } from './QR.js';
import { QrGen } from './QRGen.js';

let currPage = 0;
let prevPage = 0;
let routes = ["/", "/Pre", "/Auto", "/Tele", "/End", "/Post", "/Human", "/QR", "/QrGen"];
{/*

 */}

export default function MyApp() {
  return(
    <VlariablesProvider>
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
    </VlariablesProvider>
  );
}

{/*Buttons for page navigation */}
{/*Home Page Navigation Buttons*/}
export function StartScoutBut() {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/Pre');
    currPage = 1;
  };

  return (
    <button className="homeButton" onClick={handleClick}>
      Start Scouting
    </button>
  );
}

export function QRBut() {
  const navigate = useNavigate();

  const handleClick = () => {
    currPage = 7;
    navigate('/QR')
  };

  return (
    <button className="homeButton" onClick={handleClick}>
      Scan QR
    </button>
  );
}

export function  HumanBut() {
  const navigate = useNavigate();

  const handleClick = () => {
    currPage = 6;
    navigate('/Human')
  };

  return (
    <button className="homeButton" onClick={handleClick}>
      Human Scouting
    </button>
  );
}

{/*Multi page Buttons*/}
export function NavButN() {
  const navigate = useNavigate()
  const nextPage = () => {
    currPage++;
    console.log(currPage)
    const go = routes[currPage]
    navigate(go)
  }

  return(
    <button class="homeButton navBut" onClick={nextPage}>
      &gt;
    </button>
  );
}


export function NavButB() {
  const navigate = useNavigate()
  const lastPage = () => {
    if (prevPage != 0) {
      const go = routes[prevPage]
      navigate(go)
      prevPage = 0;
    } else{
      currPage--;
      console.log(currPage)
      const go = routes[currPage]
      navigate(go)  
    }

  }

  return(
    <button class="homeButton navBut" onClick={lastPage}>
      &lt;
    </button>
  );
}

export function HomePageBut() {
  const navigate = useNavigate()
  const homePage = () => {
    currPage = 0;
    navigate('/')
  }

  return(
    <button class="homeButton" onClick={homePage}>
      Home Page
    </button>
  );
}

export function FinishBut() {
  const navigate = useNavigate()
  const finishPage = () => {
    prevPage = currPage;
    navigate('/QrGen')
  }
  return(
    <button class="homeButton" onClick={finishPage}>
      Finish Scouting
    </button>
  );
}