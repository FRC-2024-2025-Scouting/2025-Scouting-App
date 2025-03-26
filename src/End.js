import { NavButB, NavButN } from "./App";
import { Tally, Checkbox } from "./Functions";

//Main exported page element
//All elements and props imported are dictated on thier home pages
export function EndPage() {
    return(
        <div class="screen">
            <div class="head"> END GAME PAGE</div>
            <div class="head">Park</div>
            <Checkbox
            vlair="PRK"
            style="gray"/>
            <Shallow/>
            <Deep/>
            <div class="head">Ally Cage Hit</div>
            <Checkbox
                vlair="ALCGHIT"
                style="blue"
            />
            <div class="row">

            <div class="navButText">
                <NavButB last={3}/>
                Tele
                </div>

                <div class="navButText">
                <NavButN next={5}/>
                Post Game
                </div>

            </div>
        </div>
    ); 
}

//Element to track the shallow hangs and falls
function Shallow() {
    return(
        <div>
            <div class="head">Fall &nbsp;&nbsp;&nbsp;Shallow &nbsp;&nbsp;&nbsp;Climb</div>
                <div class="row">
                        <Tally 
                        vlair="SCF"
                        clors="red"
                        />
                        <div class="spacer2"/>
                        <Tally 
                        vlair="SCC"
                        clors="green"
                        />
                </div>
        </div>
    );
}

//Element to track the deep hangs and falls
function Deep() {
    return(
        <div>
            <div class="head">Fall &nbsp;&nbsp;&nbsp;&nbsp;Deep &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Climb</div>
                <div class="row">
                        <Tally 
                        vlair="DCF"
                        clors="red"
                        />
                        <div class="spacer2"/>
                        <Tally 
                        vlair="DCC"
                        clors="green"
                        />
                </div>
        </div>
    );
}