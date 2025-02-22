import { humanVlairiables, convertToCsv, initHumanVlariables } from "./Functions"
import { HomePageBut } from "./App";
import {QRCodeSVG} from 'qrcode.react';
import { encodeHumanVariables } from './bitPacking';
import { useState } from "react";

export function HumanQrGen () {
    const [qrCodeData, setQrCodeData] = useState(""); // State to store the QR code data
    
        //function to generate the qr code with data
        const printVar = () => {
            const csvContent = convertToCsv(humanVlairiables);
            setQrCodeData(csvContent); // Set QR code data
            resetVlairiables()

        };
    
        //resets the variables in its own instance
        const resetVlairiables = () => {
            Object.assign(humanVlairiables, { ...initHumanVlariables });
            console.log('Vlairiables have been reset:', humanVlairiables);
        };
    
        //display
        return (
            <div className="screen">
                <div class="head">HUMAN QR GENERATION PAGE</div>
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