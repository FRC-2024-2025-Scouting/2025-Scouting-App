import { NavButB, NavButN } from "./App";

export function PrePage() {
    return(
  <body>
    <div class="screen">
      <input type="text" id="name" placeholder="Name"></input>
      <input type="text" id="teamNum" placeholder="Team Number"></input>
      <input type="text" id="matchNum" placeholder="Match Number"></input>
      <div class="head">Color</div>
      <div id="spacer">
        <input type="checkbox" id="red"/>
        <input type="checkbox" id="blue"/>
      </div>
      <div class="row">
        <NavButB/>
        <NavButN/>
      </div>
    </div>
  </body>
    );
  }