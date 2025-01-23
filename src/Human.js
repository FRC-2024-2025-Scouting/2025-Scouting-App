import { FinishBut, HomePageBut } from "./App";
import { Tally, TextBox } from "./Functions";

//Main exported page with all organised elements
//All imported elements and thier props are dictated on their home page
export function HumanPage() {
    return(
        <div class="screen">
            <ID/>
            <Net/>
            <FinishBut/>
            <HomePageBut/>
    </div>
    );
}

//Element to contain human scouters Identification and who their scouting
function ID() {
    return(
        <div class="column">
            <TextBox
            vlair="scoutName"
            tooltip="Name"
            />
            <TextBox
            vlair="teamNum"
            tooltip="Team Number"
            />
            <TextBox
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
                    <Tally
                    vlair="HMNS"
                    />
                </div>
            </div>
        
            <div class="column">

                <div class="row">
                    <Tally
                    vlair="HMNM"
                    />
                </div>
            </div>
        </div>
    </div>
    );
}