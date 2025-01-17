import { NavButB, NavButN } from "./App";
import { Tally, Checkbox } from "./Functions";

export function EndPage() {
    return(
        <div class="screen">
            <div class="head">Park</div>
            <Checkbox
            vlair="PRK"
            style="gray"/>
            <Shallow/>
            <Deep/>
            <div class="row">
                <NavButB last={3}/>
                <NavButN next={5}/>
            </div>
        </div>
    ); 
}

function Shallow() {
    return(
        <div>
            <div class="head">Climb &nbsp;&nbsp;&nbsp;Shallow &nbsp;&nbsp;&nbsp;Fall</div>
                <div class="row">
                        <Tally vlair="SCC"/>
                        <div class="spacer2"/>
                        <Tally vlair="SCF"/>
                </div>
        </div>
    );
}

function Deep() {
    return(
        <div>
            <div class="head">Climb &nbsp;&nbsp;&nbsp;&nbsp;Deep &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fall</div>
                <div class="row">
                        <Tally vlair="DCC"/>
                        <div class="spacer2"/>
                        <Tally vlair="DCF"/>
                </div>
        </div>
    );
}