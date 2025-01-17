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
            <div class="head">Shallow</div>
                <div class="row">
                    <div class="column">
                        <div class="head">Climb</div>
                        <Tally vlair="SCC"/>
                    </div>
                    
                    <div class="column">
                        <div class="head">Fall</div>
                
                        <Tally vlair="SCF"/>
                    </div>


                </div>
        </div>
    );
}

function Deep() {
    return(
        <div>
            <div class="head">Deep</div>
                <div class="row">
                    <div class="column">
                        <Tally vlair="DCC"/>
                    </div>

                    <div class="column">
                        <Tally vlair="DCF"/>
                    </div>
                </div>
        </div>
    );
}