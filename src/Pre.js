import { NavButB, NavButN } from "./App";
import { TeamBox } from "./Functions";

export function PrePage() {
    return(
  <body>
    <div class="screen">
      <input type="text" id="name" placeholder="Name"></input>
      <input type="text" id="teamNum" placeholder="Team Number"></input>
      <input type="text" id="matchNum" placeholder="Match Number"></input>
      <div class="head">Color</div>
      <div id="spacer">
      <TeamBox
      vlair="colour"/>
      </div>
      <div class="row">
        <NavButB last={0}/>
        <NavButN next={2}/>
      </div>
    </div>
  </body>
    );
  }