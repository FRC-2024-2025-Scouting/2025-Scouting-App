import { HomePageBut, NavButB } from "./App";

export function QrGen() {
    return(
        <div class="screen">
            <div id="qrCode">
                Code Here
            </div>
            <div class="homeButton">
                Generate QR
            </div>
            <HomePageBut/>
        </div>
    );
}