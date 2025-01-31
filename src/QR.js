import { HomePageBut } from "./App";
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { convertToCsv } from "./Functions";

let exportData = []
//Main exported page to be displayed
//The home page but is dictated on app.js
export function QRPage() {
    return(
        <div class="screen">
        <div class="head">QR</div>
            <TempIcon/>
            <Buttons/>  
      </div>
    );
}

//Element to hold the qr code scanner: somewhat finsihed

//Perm Icon- main page that just get called up there
const TempIcon = () => {
  const [data, setData] = useState('No result');

  //display
  return (
    <div>
        <div>{data}</div>
        <div class="center scanner">
            <QrReader
                ViewFinder={"video"}
                scanDelay={500}
                onResult={(result) => {
                    if (!!result) {
                        for (let index = 0; index < exportData.length; index++) {
                            if (result?.text === exportData[index]) {
                                return
                            }
                        }
                        setData(result?.text);
                        exportData.push(result?.text)
                        console.log(exportData)
                    }
                }}
            />
        </div>
    </div>
  );
};

//function to download the data to your system
function SendData() {
    const sendData = () => {
        //turnst the data into a csv file to be downloaded
        const csvData = new Blob([convertToCsv(exportData)], { type: 'text/csv' });
        //creates a download link
        const csvURL = URL.createObjectURL(csvData);
        const link = document.createElement('a');
        link.href = csvURL;
        link.download = `scouting.csv`;
        document.body.appendChild(link);
        link.click();//clicks the link
        document.body.removeChild(link);//destroys link
        exportData = [];
    }

    //display with button that calls the function
    return(
        <button class="homeButton" onClick={sendData}>Send Info</button>
    )
}



//Element to hold all the relevent buttons
function Buttons() {
    return(
        <div class="column">
        <SendData/>
        <HomePageBut/>
      </div>
    );
}