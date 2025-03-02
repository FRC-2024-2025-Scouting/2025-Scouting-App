import { vlairiables, convertToCsv, initialVlairiables } from "./Functions"
import { HomePageBut } from "./App";
import {QRCodeSVG} from 'qrcode.react';
import Barcode from 'react-barcode';
import { encodeVariables, decodeVariables } from './bitPacking';
import { useState, useEffect } from "react";
import { json } from "react-router-dom";

let barcodeOutput = ""
let displayValue = false;

export function resetBarcode (what) {
    barcodeOutput = what;
    displayValue = false;
}

export function QrGen() {
    const [qrCodeData, setQrCodeData] = useState(""); // State to store the QR code data

    //function to generate the qr code with data
    const printVar = () => {
        const csvContent = convertToCsv(vlairiables);
        setQrCodeData(csvContent); // Set QR code data
        barcodeOutput = encodeVariables(vlairiables);
        resetVlairiables()
        const node = document.createElement("p");
        const textnode = document.createTextNode(JSON.stringify(decodeVariables(barcodeOutput)));
        node.appendChild(textnode);
        document.getElementById("specialArea").appendChild(node);
        displayValue = true;
    };

    //resets the variables in its own instance
    const resetVlairiables = () => {
        Object.assign(vlairiables, { ...initialVlairiables });
        console.log('Vlairiables have been reset:', vlairiables);
    };
    
    //display
    return (
        <div className="screen">
            <div class="head">QR GENERATION PAGE</div>
            {displayValue && <Barcode value={barcodeOutput}
            displayValue={true} 
            width={1.2}
            height={50}
            //format={"EAN13"}
            />}
            <div id="qrCode">
                {qrCodeData && (
                    <div>
                        <QRCodeSVG value={qrCodeData} size={256} />
                    </div>
                )}
            </div>
            <button className="homeButton" onClick={printVar}>
                Generate QR
            </button>
            <HomePageBut />
            <div id="specialArea"></div>
        </div>
    );
}