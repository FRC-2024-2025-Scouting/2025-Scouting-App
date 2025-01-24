import { useState, useEffect } from 'react';
import { HomePageBut } from "./App";
import {QRCodeSVG} from 'qrcode.react';

//Big daddy page

//All the variables that get changed
//Vlairiables (Pronounced (Vfl-air)-i-a-bles) an apitomation of variables because that wasnt a valid name
const initialVlairiables = {
    teamNum: "", 
    matchNum: "",    
    colour: false,    
    moved: false,  
    AL1S: 0, 
    AL1M: 0,         
    AL2S: 0,  
    AL2M: 0,      
    AL3S: 0,   
    AL3M: 0,     
    AL4S: 0,                   
    AL4M: 0,       
    APS: 0,        
    APM: 0,        
    ANS: 0,        
    ANM: 0,  
    BRKDN: 0,      
    RCVR: 0,         
    TL1S: 0,   
    TL1M: 0,      
    TL2S: 0,   
    TL2M: 0,      
    TL3S: 0, 
    TL3M: 0,       
    TL4S: 0,                  
    TL4M: 0,       
    TPS: 0,        
    TPM: 0,        
    TNS: 0,        
    TNM: 0,            
    PRK: false,    
    SCC: 0,        
    SCF: 0,        
    DCC: 0,        
    DCF: 0,        
    Cards: 0,      
    Fouls: 0,      
    scoutName: "",    
    HMNS: 0,       
    HMNM: 0,    
};

//creates a copy to hold base variables for reseting purposes
export const vlairiables = { ...initialVlairiables };

//Element containing a + and - button that change the value of vlair
export function Tally({ vlair }) {
    //Create the count variable to update the dictated vlair
    const [count, setCount] = useState(Number(vlairiables[vlair])); 
    //Vlair (pronounced Vfl-air) a apitimation of var because i couldnt use var for the prop name

    //Function to increment the count
    const increment = () => {
        const newCount = count + 1;  //define and add to newCount
        setCount(newCount);
        vlairiables[vlair] = newCount; //set the dictated vlair to what the new count is
        console.log(vlairiables); //Testing
    };

    //Function to deincrement the count
    const deincrement = () => {
        if (count > 0) { //Only call if count is greater than 0 to prevent negative numbers
            const newCount = count - 1; //define and subtract to newCount
            setCount(newCount);
            vlairiables[vlair] = newCount; //set the dictated vlair to what the new count is
            console.log(vlairiables);//Testing
        }
    };
    return (
        //Display
        <div className="row">
            <button className="autoButton" onClick={deincrement}> &lt; </button>
            <div className="autoCounter">{count}</div>
            <button className="autoButton" onClick={increment}> &gt; </button>
        </div>
    );
};

//Element to contain checkboxes for a single variable
export function Checkbox({ vlair, style }) {
    //create the variable that handles the visual state of the checkbox
    const [checked, setChecked] = useState(vlairiables[vlair] || false);

    //function to toggle checkbox on and off
    const togIt = () => {
        setChecked(prevChecked => !prevChecked); //sets the checked variable to the opposite of what it is currently
        vlairiables[vlair] = !checked; // sets the dictated variable to the checked property
    };
    //visual
    return (
        <input
            type="checkbox"
            id={style}
            onChange={togIt}
            checked={checked}
        />
    );
}

//checkbox specificaly designed for the teams color
export function TeamBox({ vlair }) {
    //same as the other checkbox
    const [checked, setChecked] = useState(vlairiables[vlair] || false);

    //function to toggle the visuals of the checkbox
    const toggleCheckbox = () => {
        setChecked(prevChecked => !prevChecked); //sets the visual to the oposite of wha tits checked right now
        vlairiables[vlair] = !checked; //sets the dictated variable
    };

    //display
    return (
        <div>
            <input
                type="checkbox"
                id="red"
                onChange={toggleCheckbox}
                checked={checked}//starts unchecked
            />
            <input
                type="checkbox"
                id="blue"
                onChange={toggleCheckbox}
                checked={!checked}//starts checked
            />
        </div>
    );
}


//checkbox specificaly designed for the red and yellow cards
export function CardBox({ vlair }) {
    //similar to the last two except theres 2 checked for each box
    const [count, setCount] = useState(Number(vlairiables[vlair])); 
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    //function to update the dictated var
    const updateVlare = () => {
        //function basicaly assings a numerical value to represent nither checked, 1 checked, or 2 checked
        let newCount = 0;
        if (checked1 && checked2) {
            newCount = 2;
        } else if (checked1 || checked2) {
            newCount = 1;
        }
        setCount(newCount);
        vlairiables[vlair] = newCount; //sets the value to the dictated var
    };

    //function to handle the checkedness of the first box
    const handleCheckbox1Change = () => {
        setChecked1(prevChecked => {
            const newChecked1 = !prevChecked;
            return newChecked1;
        });
    };

    //funnction to handle the checkedness of the second box
    const handleCheckbox2Change = () => {
        setChecked2(prevChecked => {
            const newChecked2 = !prevChecked;
            return newChecked2;
        });
    };

    //function to update the var with some checked nonsense going on
    useEffect(() => {
        updateVlare();
    }, [checked1, checked2]);

    //display
    return (
        <div className="row">
            <input
                type="checkbox"
                id="yellow"
                onChange={handleCheckbox1Change}
                checked={checked1}
            />
            <input
                type="checkbox"
                id="red"
                onChange={handleCheckbox2Change}
                checked={checked2}
            />
        </div>
    );
}

//Element for the text box
export function TextBox({ vlair, tooltip }) {
    //similar to the checkbox and tally except for a string
    const [text, setText] = useState(vlairiables[vlair] || ''); 

    //called whenever text is imputed to update the var to the dictated change
    const handleChange = (event) => {
        const newText = event.target.value;//applys the changes to the new text var
        setText(newText);
        vlairiables[vlair] = newText;//set the var to the new text
    };

    //display
    return (
        <div className="row">
            <input
                type="text"
                placeholder={tooltip}
                className="autoInput"
                value={text}
                onChange={handleChange}//calls whenever text input
            />
        </div>
    );
};

//function to reset the variables element when restarting scouting - mostly for other scripts
export function resetVlairiables ()  {
    Object.assign(vlairiables, { ...initialVlairiables }); //sets the current used variables to the copy made at the start
    console.log('Vlairiables have been reset:', vlairiables);
};

// Function to convert data to CSV string
export function convertToCsv(data) {
    // Extract the values and handle booleans (convert true to 1, false to 0) and strings normally
    const values = Object.values(data).map(value => {
        if (typeof value === 'boolean') {
            return value ? 'true' : 'false'; // Keep booleans as 'true' or 'false'
        } else if (typeof value === 'string') {
            return `"${value}"`; // Keep strings as is (with quotes for CSV safety)
        }
        return value; // For numbers, return as they are
    });

    // Create the CSV content with values only, no headers
    return values.join(",") + "\n";
}

//Element to print qr codes containing the data
export function OutputVar() {
    const [qrCodeData, setQrCodeData] = useState(""); // State to store the QR code data

    //function to generate the qr code with data
    const printVar = () => {
        const newText = JSON.stringify(vlairiables, null, 2);
        const csvContent = convertToCsv(vlairiables);
        setQrCodeData(csvContent); // Set QR code data
        resetVlairiables()
    };

    //resets the variables in its own instance
    const resetVlairiables = () => {
        Object.assign(vlairiables, { ...initialVlairiables });
        console.log('Vlairiables have been reset:', vlairiables);
    };

    //display
    return (
        <div className="screen">
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
        </div>
    );
}