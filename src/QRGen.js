import { HomePageBut, NavButB } from "./App";

export function QrGen() {
    return(
        <div class="screen">
            <div id="qrCode">
                Code Here
            </div>
            <NavButB/>
            <div class="homeButton">
                Generate QR
            </div>
            <HomePageBut/>
        </div>
    );
}