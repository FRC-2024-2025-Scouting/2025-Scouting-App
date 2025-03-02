import { vlairiables, convertToCsv, initialVlairiables } from "./Functions"
import { HomePageBut, NavButB } from "./App";
import { QRCodeSVG } from 'qrcode.react';
import Barcode from 'react-barcode';
import { encodeVariables, decodeVariables } from './bitPacking';
import { useState, useEffect } from "react";
import { json } from "react-router-dom";

let barcodeOutput = ""
let displayValue = false;

export function resetBarcode(what) {
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
        const node = document.createElement("p");
        const textnode = document.createTextNode(JSON.stringify(decodeVariables(barcodeOutput)));
        node.appendChild(textnode);
        document.getElementById("specialArea").appendChild(node);
        displayValue = true;
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
            <div class="navButText">
                <NavButB last={5} />
                PostGame
            </div>
            <HomePageBut />
            <div id="specialArea"></div>
        </div>
    );
}