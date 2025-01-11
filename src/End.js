import { NavButB, NavButN } from "./App";

export function EndPage() {
    return(
        <div class="screen">
            <div class="head">Park</div>
            <input type="checkbox" id="gray"/>
            <Shallow/>
            <Deep/>
            <div class="row">
                <NavButB/>
                <NavButN/>
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
                    
                    <div class="row">
                        <button class="autoButton"> &lt; </button>
                        <div class="autoCounter">0</div>
                        <button class="autoButton"> &gt; </button>
                    </div>
            
                    </div>
                    
                    <div class="column">
                    <div class="head">Fall</div>
            
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

function Deep() {
    return(
        <div>
            <div class="head">Deep</div>
                <div class="row">
                    <div class="column">
                        <div class="row">
                        <button class="autoButton"> &lt; </button>
                        <div class="autoCounter">0</div>
                        <button class="autoButton"> &gt; </button>
                        </div>
                    </div>

                    <div class="column">
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