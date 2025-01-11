import { HomePageBut } from "./App";

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
            <div id="scanner">Camera Here</div>
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