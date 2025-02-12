import { NavButB, NavButN } from "./App";
import { Tally, Checkbox } from "./Functions";
import { vlairiables } from "./Functions"

//Element to organise all the tele page elements
//All elements with props are dictated on thier pages
export function TelePage() {
    return (
        <div class="screen">
            <div class="head">TELE PAGE</div>
            <Coral />
            <Processor />
            <Net />
            <div class="row">
                <Breakdown />
                <div class="spacer2" />
                <Recovery />
            </div>
            <div class="head">Cage Hit</div>
            <Checkbox
                vlair="CGHIT"
                style="gray"
            />
            <div class="row">
                <NavButB last={2} />
                <NavButN next={4} />
            </div>
        </div>
    );
}

//element to keep track of the shots taken with coral
function Coral() {
    return (
        <div>
            <div class="head">Miss &nbsp;&nbsp;&nbsp;&nbsp; Coral &nbsp;&nbsp;&nbsp;&nbsp; Score</div>
            <div class="row">
                <Miss />
                <Label />
                <Score />
            </div>

        </div>
    );
}

//element to keep track of the score with coral
function Score() {
    return (
        <div class="column">

            <Tally
                vlair="TL1S"
                clors="blue"
            />
            <Tally
                vlair="TL2S"
                clors="blue"
            />
            <Tally
                vlair="TL3S"
                clors="blue"
            />
            <Tally
                vlair="TL4S"
                clors="blue"
            />
        </div>
    )
}

//label for organisation
function Label() {
    return (
        <div class="column">
            <div class="spacer2">l1</div>
            <div class="spacer2">l2</div>
            <div class="spacer2">l3</div>
            <div class="spacer2">l4</div>
        </div>
    );
}

//Element to keep track of misses with coral
function Miss() {
    return (
        <div class="column">
            <Tally
                vlair="TL1M"
                clors="red"
            />
            <Tally
                vlair="TL2M"
                clors="red"
            />
            <Tally
                vlair="TL3M"
                clors="red"
            />
            <Tally
                vlair="TL4M"
                clors="red"
            />
        </div>
    );
}

//Element to keep track of processor shots and misses
function Processor() {
    return (
        <div>
            <div class="head">Miss &nbsp;Processor&nbsp; Score</div>
            <div class="row">
                <Tally
                    vlair="TPM"
                    clors="red"
                />
                <div class="spacer2" />
                <Tally
                    vlair="TPS"
                    clors="blue"
                />
            </div>
        </div>
    );
}

//Element to keep track of net shots and misses
function Net() {
    return (
        <div>
            <div class="head">Miss &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Net &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Score</div>
            <div class="row">
                <Tally vlair="TNM"
                    clors="red"
                />
                <div class="spacer2" />
                <Tally
                    vlair="TNS"
                    clors="blue"
                />
            </div>
        </div>
    );
}

//Elements to track robot breakdowns and recoveries
function Breakdown() {
    return (
        <div class="column">
            <div class="head">Breakdown</div>
            <div class="row">
                <Tally vlair="BRKDN"
                    clors="red"
                />
            </div>
        </div>
    );
}

function Recovery() {
    return (
        <div class="column">
            <div class="head">Recovery</div>
            <div class="row">
                <Tally
                    vlair="RCVR"
                    clors="blue"
                />
            </div>
        </div>
    )
}

