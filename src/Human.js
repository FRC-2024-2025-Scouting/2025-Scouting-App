import { FinishBut,HomePageBut } from "./App";

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
            <input type="text" id="name" placeholder="Name"></input>
            <input type="text" id="teamNum" placeholder="Team Number"></input>
            <input type="text" id="matchNum" placeholder="Match Number"></input>
        </div>
    );
}

function Net() {
    return(
    <div>
        <div class="head">Net</div>
      
        <div class="row">
            <div class="column">
                <div class="head">Score</div>
                <div class="row">
                    <button class="autoButton"> &lt; </button>
                    <div class="autoCounter">0</div>
                    <button class="autoButton"> &gt; </button>
                </div>
            </div>
        
            <div class="column">
                <div class="head">Miss</div>

                <div class="row">
                    <button class="autoButton"> &lt; </button>
                    <div class="autoCounter">0</div>
                    <button class="autoButton"> &gt; </button>
                </div>
            </div>
        </div>
    </div>
    );
}