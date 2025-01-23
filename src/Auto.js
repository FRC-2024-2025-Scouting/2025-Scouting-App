import { NavButB, NavButN } from "./App";
import { Tally, Checkbox } from "./Functions";

//Main page path
//All elements with props are dictated on thier main page
export function AutoPage() {
    return(
  <body>
    <div class="screen">
        <Coral/>
        <Processor/>
        <Net/>
        <div class="head">Moved?</div>
        <Checkbox
        vlair="moved"
        style="gray"
        />
        <div class="row">
            <NavButB last={1}/>
            <NavButN next={3}/>
        </div>
    </div>
  </body>
    );
  }

// The element to keep track of the score
function Score() {
    return(
        <div class="column">

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
    );
}

// Lable for visual purposes
function Lable() {
    return(
        <div class="column">
            <div class="spacer2">l1</div>
            <div class="spacer2">l2</div>
            <div class="spacer2">l3</div>
            <div class="spacer2">l4</div>
        </div>
    );
}

//The element to keep track of misses
function Miss() {
    return(
        <div class="column">

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
    );
}

//Organising element
function Coral() {
    return(
        <div>
            <div class="head">Miss &nbsp;&nbsp;&nbsp;&nbsp; Coral &nbsp;&nbsp;&nbsp;&nbsp; Score</div>

            <div class="row">
                <Score/>
                <Lable/>
                <Miss/>
            </div>
        </div>
    );
}

//Element to keep track of the processors score and miss
function Processor(){
    return(
        <div>
            <div class="head">Miss &nbsp;Processor&nbsp; Score</div>
            <div class="row">
                <Tally
                vlair="APS"
                />
                <div class="spacer2"/>
                <Tally
                vlair="APM"
                />
            </div>
        </div>
    );
}

//Element to keep track of the net score and miss
function Net(){
    return(
        <div>
            <div class="head">Miss &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Net &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Score</div>
            <div class="row">
                <Tally
                vlair="ANS"
                />
                <div class="spacer2"/>
                <Tally
                vlair="ANM"
                />
            </div>
        </div>
    );
}