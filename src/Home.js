import { StartScoutBut, QRBut, HumanBut } from "./App.js";

//All the buttons are imports from app.js
export function HomePage() {
    return(
  <body>
      <div class="screen">
        <StartScoutBut/>
        <QRBut/>
        <HumanBut/>
      </div>
  </body>
    );
  }