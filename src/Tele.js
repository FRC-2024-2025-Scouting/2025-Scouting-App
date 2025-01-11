import { NavButB, NavButN } from "./App";

export function TelePage() {
    return(
    <div class="screen">
        <Coral/>
        <Processor/>
        <Net/>
        <div class="row">
          <Breakdown/>
          <Recovery/>
        </div>
        <div class="row">
          <NavButB/>
          <NavButN/>
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
                <Label/>
                <Miss/>
            </div>

        </div>
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
    )
}

function Label() {
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

function Processor() {
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

function Net() {
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

function Breakdown() {
    return(
        <div class="column">
            <div class="head">Breakdown</div>
            <div class="row">
              <button class="autoButton"> &lt; </button>
              <div class="autoCounter">0</div>
              <button class="autoButton"> &gt; </button>
            </div>
          </div>
    );
}

function Recovery() {
    return(
        <div class="column">
            <div class="head">Recovery</div>
            <div class="row">
              <button class="autoButton"> &lt; </button>
              <div class="autoCounter">0</div>
              <button class="autoButton"> &gt; </button>
            </div>
        </div>
    )
}