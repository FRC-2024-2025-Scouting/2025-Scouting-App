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
import { QRPage } from './QR.js';
import { QrGen, resetGen } from './QRGen.js';
import { SettingsPage } from "./SettingsPage.js";
import { vlairiables, resetVlairiables } from './Functions.js';
import { resetBarcode } from './QRGen.js';
import { encodeVariables } from './bitPacking.js';
//Variables for page navigation purposes
let routes = ["/", "/Pre", "/Auto", "/Tele", "/End", "/Post", "/QR", "/QrGen"];
{/*

 */}
//these quotes above crash my pc if they arent included 
//Main app page with all the pages routed in
export default function MyApp() {
  return(
    <body>
      <div class="screen">
        <div class="VersionNumber">Version Alpha 9.75</div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/Pre" element={<PrePage/>} />
            <Route path="/Auto" element={<AutoPage/>} />
            <Route path="/Tele" element={<TelePage/>} />
            <Route path="/End" element={<EndPage/>} />
            <Route path="/Post" element={<PostPage/>} />
            <Route path="/QR" element={<QRPage/>} />
            <Route path="/QrGen" element={<QrGen/>} />
            <Route path="/Settings" element={<SettingsPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}

/*Buttons for page navigation */
/*Home Page Navigation Buttons*/
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

export function SettingsBut() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Settings")
  }

  return(
    <button className='homeButton' onClick={handleClick}>Settings Page</button>
  )
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

/*Multi page Buttons*/
export function NavButN({next}) {
  const navigate = useNavigate()
  const nextPage = () => {
    if (next == 7) {
      resetBarcode(encodeVariables(vlairiables))
    }
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
      const go = routes[last]
      navigate(go)  
      resetGen();
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
    navigate('/')
    resetVlairiables();
    resetBarcode(encodeVariables(vlairiables))
    resetGen();
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
    navigate('/QrGen')
  }
  return(
    <button class="homeButton" onClick={finishPage}>
      Finish Scouting
    </button>
  );
}
