import { HomePageBut } from "./App";
import { Scanner } from '@yudiel/react-qr-scanner';

export function QRPage() {
    return(
        <div class="screen">
        <div class="head">QR</div>
            <TempIcon/>
            <Buttons/>  
      </div>
    );
}

function TempIcon() {
    return(
        <div class="center">
            <Scanner 
            onScan={(result) => console.log(result)} 
            //Add styling
            />
        </div>
    );
}   

function Buttons() {
    return(
        <div class="column">
        <button class="homeButton">Scan again</button>
        <button class="homeButton">Send info</button>
        <HomePageBut/>
      </div>
    );
}