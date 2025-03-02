import { StartScoutBut, QRBut, SettingsBut } from "./App.js";

//All the buttons are imports from app.js
export function HomePage() {
    return(
  <body>
      <div class="screen">
      <div class="head">HOME PAGE</div>
      <div class="row right">
      </div>
        <StartScoutBut/>
        <QRBut/>
        <SettingsBut/>
      </div>
  </body>
    );
  }