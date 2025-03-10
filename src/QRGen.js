import { vlairiables, convertToCsv } from "./Functions"
import { HomePageBut, NavButB } from "./App";
import { QRCodeSVG } from 'qrcode.react';
import Barcode from 'react-barcode';
import { encodeVariables } from './bitPacking';
import { useState} from "react";

let barcodeOutput = ""
let displayValue = false;
let genned = false;

export function resetGen() {
    genned = false;
}

export function resetBarcode(what) {
    barcodeOutput = what;
    displayValue = false;
}

export function QrGen() {
    const [qrCodeData, setQrCodeData] = useState(""); // State to store the QR code data

    //function to generate the qr code with data
    const printVar = () => {
        if (!genned) {
            genned = true;
            const csvContent = convertToCsv(vlairiables);
            setQrCodeData(csvContent); // Set QR code data
            barcodeOutput = encodeVariables(vlairiables);
            displayValue = true;
        }
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
                <NavButB last={5}/>
                PostGame
            </div>
            <HomePageBut />
        </div>
    );
}