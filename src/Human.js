import { HumanQrBut, HomePageBut } from "./App";
import { HumanTally, HumanTextBox } from "./Functions";

//Main exported page with all organised elements
//All imported elements and thier props are dictated on their home page
export function HumanPage() {
    return(
        <div class="screen">
            <div class="head">HUMAN PAGE</div>
            <ID/>
            <Net/>
            <HumanQrBut/>
            <HomePageBut/>
    </div>
    );
}

//Element to contain human scouters Identification and who their scouting
function ID() {
    return(
        <div class="column">
            <HumanTextBox
            vlair="scoutName"
            tooltip="Name"
            />
            <HumanTextBox
            vlair="teamNum"
            tooltip="Team Number"
            />
            <HumanTextBox
            vlair="matchNum"
            tooltip="Match Number"
            />
        </div>
    );
}

//Element to track human shots on the net
function Net() {
    return(
    <div>
        <div class="head">Miss &nbsp;&nbsp; Net &nbsp;&nbsp; Score</div>
      
        <div class="row">
            <div class="column">
                <div class="row">
                    <HumanTally
                    vlair="HMNS"
                    />
                </div>
            </div>
        
            <div class="column">

                <div class="row">
                    <HumanTally
                    vlair="HMNM"
                    />
                </div>
            </div>
        </div>
    </div>
    );
}