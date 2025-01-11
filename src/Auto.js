import { NavButB, NavButN } from "./App";

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
        <div class="column">
            <div class="head">Score</div>

            <div class="row">            
                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button></div>
            <div class="row">
                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>
            </div>
            <div class="row">
                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>
            </div>
            <div class="row">
                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>
            </div>
        </div>
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
        <div class="column">
            <div class="head">Miss</div>
            <div class="row">
                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>
            </div>
            <div class="row">
                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>
            </div>
            <div class="row">
                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>
            </div>
                <div class="row">
                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>
            </div>
        </div>
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
        <div>
            <div class="head">Processor</div>
            <div class="row">
                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>

                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>
            </div>
        </div>
    );
}

function Net(){
    return(
        <div>
            <div class="head">Net</div>
            <div class="row">
                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>

                <button class="autoButton"> &lt; </button>
                <div class="autoCounter">0</div>
                <button class="autoButton"> &gt; </button>
            </div>
        </div>
    );
}