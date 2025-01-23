import { NavButB, NavButN } from "./App";
import { Tally } from "./Functions";
import {vlairiables} from "./Functions"

//Element to organise all the tele page elements
//All elements with props are dictated on thier pages
export function TelePage() {
    return(
    <div class="screen">
        <Coral/>
        <Processor/>
        <Net/>
        <div class="row">
          <Breakdown/>
          <div class="spacer2"/>
          <Recovery/>
        </div>
        <div class="row">
          <NavButB last={2}/>
          <NavButN next={4}/>
        </div>
      </div>
    );  
}

//element to keep track of the shots taken with coral
function Coral() {
    return(
        <div>
            <div class="head">Miss &nbsp;&nbsp;&nbsp;&nbsp; Coral &nbsp;&nbsp;&nbsp;&nbsp; Score</div>
            <div class="row">
                <Score/>
                <Label/>
                <Miss/>
            </div>

        </div>
    );
}

//element to keep track of the score with coral
function Score() {
    return(
        <div class="column">
  
            <Tally 
            vlair="TL1S"
            />
            <Tally
            vlair="TL2S"
            />
            <Tally
            vlair="TL3S"
            />
            <Tally
            vlair="TL4S"
            />
        </div>
    )
}

//label for organisation
function Label() {
    return(
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
    return(
      <div class="column">
        <Tally 
            vlair="TL1M"
            />
            <Tally
            vlair="TL2M"
            />
            <Tally
            vlair="TL3M"
            />
            <Tally
            vlair="TL4M"
            />
      </div>
    );
}

//Element to keep track of processor shots and misses
function Processor() {
    return(
        <div>
            <div class="head">Miss &nbsp;Processor&nbsp; Score</div>
            <div class="row">
                <Tally vlair="TPS"/>
                <div class="spacer2"/>
                <Tally vlair="TPM"/>
            </div>
        </div>
    );
}

//Element to keep track of net shots and misses
function Net() {
    return(
        <div>
            <div class="head">Miss &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Net &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Score</div>
            <div class="row">
                <Tally vlair="TNS"/>
                <div class="spacer2"/>
                <Tally vlair="TNM"/>
            </div>
        </div>
    );
}

//Elements to track robot breakdowns and recoveries
function Breakdown() {
    return(
        <div class="column">
            <div class="head">Breakdown</div>
            <div class="row">
              <Tally vlair="BRKDN"/>
            </div>
          </div>
    );
}

function Recovery() {
    return(
        <div class="column">
            <div class="head">Recovery</div>
            <div class="row">
              <Tally vlair="RCVR"/>
            </div>
        </div>
    )
}