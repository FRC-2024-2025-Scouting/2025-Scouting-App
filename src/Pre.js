import { NavButB, NavButN } from "./App";
import { TeamBox, TextBox } from "./Functions";

//Buttons imported from the function page
//All props are explained on the functions page
export function PrePage() {
    return(
  <body>
    <div class="screen">
      <TextBox
      vlair="scoutName"
      tooltip="Name"
      />
      <TextBox
      vlair="teamNum"
      tooltip="Team Number"
      />
      <TextBox
      vlair="matchNum"
      tooltip="Match Number"
      />
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