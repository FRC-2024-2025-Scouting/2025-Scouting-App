import { NavButB, NavButN } from "./App";
import { Tally } from "./Functions";
import {vlairiables} from "./Functions"

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