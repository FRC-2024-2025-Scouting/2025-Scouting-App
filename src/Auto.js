import { NavButB, NavButN } from "./App";
import { Tally, Checkbox } from "./Functions";

//Main page path
//All elements with props are dictated on thier main page
export function AutoPage() {
    return (
        <div class="screen">
            <div class="head">AUTO PAGE</div>
            <div class="head">Moved?</div>
            <Checkbox
                vlair="moved"
                style="gray"
            />
            <Coral />
            <Processor />
            <Net />
            <div class="row">
                <div class="navButText">
                <NavButB last={1} />
                Pre Game
            </div>

            <div class="navButText">
                <NavButN next={3} />
                Tele
            </div>

        </div>
    </div >
    );
}

// The element to keep track of the score
function Score() {
    return (
        <div class="column">

            <Tally
                vlair="AL1S"
                clors="green"
            />
            <Tally
                vlair="AL2S"
                clors="green"
            />
            <Tally
                vlair="AL3S"
                clors="green"
            />
            <Tally
                vlair="AL4S"
                clors="green"
            />
        </div>
    );
}

// Lable for visual purposes
function Lable() {
    return (
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
    return (
        <div class="column">

            <Tally
                vlair="AL1M"
                clors="red"
            />
            <Tally
                vlair="AL2M"
                clors="red"
            />
            <Tally
                vlair="AL3M"
                clors="red"
            />
            <Tally
                vlair="AL4M"
                clors="red"
            />
        </div>
    );
}

//Organising element
function Coral() {
    return (
        <div>
            <div class="head">Miss &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coral &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Score</div>

            <div class="row">
                <Miss />
                <Lable />
                <Score />
            </div>
        </div>
    );
}

//Element to keep track of the processors score and miss
function Processor() {
    return (
        <div>
            <div class="head">Miss&nbsp;&nbsp;&nbsp;&nbsp;Processor&nbsp;&nbsp;&nbsp;&nbsp; Score</div>
            <div class="row">
                <Tally
                    vlair="APM"
                    clors="red"
                />
                <div class="spacer2" />
                <Tally
                    vlair="APS"
                    clors="green"
                />
            </div>
        </div>
    );
}

//Element to keep track of the net score and miss
function Net() {
    return (
        <div>
            <div class="head">Miss &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Net &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Score</div>
            <div class="row">
                <Tally
                    vlair="ANM"
                    clors="red"
                />
                <div class="spacer2" />
                <Tally
                    vlair="ANS"
                    clors="green"
                />
            </div>
        </div>
    );
}