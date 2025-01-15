import { NavButB, NavButN } from "./App";
import { Tally } from "./Functions";
import { VlariablesProvider } from "./Functions"

export function AutoPage() {
    return(
  <body>
    <div class="screen">
        <Coral/>
        <Processor/>
        <Net/>
        <div class="head">Moved?</div>
        <input type="checkbox" id="gray"/>
        <div class="row">
            <NavButB/>
            <NavButN/>
        </div>
    </div>
  </body>
    );
  }

function Score() {
    return(
        <VlariablesProvider>
            <div class="column">
                <div class="head">Score</div>

                <Tally
                vlair="AL1S"
                />
                <Tally
                vlair="AL2S"
                />
                <Tally
                vlair="AL3S"
                />
                <Tally
                vlair="AL4S"
                />
            </div>
        </VlariablesProvider>
    );
}

function Lable() {
    return(
        <div class="column">
            <div id="spacer1"></div>
            <div class="spacer2">l1</div>
            <div class="spacer2">l2</div>
            <div class="spacer2">l3</div>
            <div class="spacer2">l4</div>
        </div>
    );
}

function Miss() {
    return(
        <VlariablesProvider>
        <div class="column">
            <div class="head">Miss</div>

            <Tally
            vlair="AL1M"
            />
            <Tally
            vlair="AL2M"
            />
            <Tally
            vlair="AL3M"
            />
            <Tally
            vlair="AL4M"
            />
        </div>
        </VlariablesProvider>
    );
}

function Coral() {
    return(
        <div>
            <div class="head">Coral</div>

            <div class="row">
                <Score/>
                <Lable/>
                <Miss/>
            </div>
        </div>
    );
}


function Processor(){
    return(
        <VlariablesProvider>
            <div class="head">Processor</div>
            <div class="row">
                <Tally
                vlair="APS"
                />
                <Tally
                vlair="APM"
                />
            </div>
        </VlariablesProvider>
    );
}

function Net(){
    return(
        <VlariablesProvider>
            <div class="head">Net</div>
            <div class="row">
                <Tally
                vlair="ANS"
                />
                <Tally
                vlair="ANM"
                />
            </div>
        </VlariablesProvider>
    );
}