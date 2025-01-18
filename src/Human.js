import { FinishBut, HomePageBut } from "./App";
import { Tally, TextBox } from "./Functions";

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