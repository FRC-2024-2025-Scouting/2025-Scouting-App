import { useState, useEffect } from 'react';
import { HomePageBut } from "./App";

const initialVlairiables = {
    scoutName: "", 
    matchNum: "",  
    teamNum: "",   
    colour: false,    
    moved: false,  
    AL1S: 0,       
    AL2S: 0,       
    AL3S: 0,       
    AL4S: 0,       
    AL1M: 0,       
    AL2M: 0,       
    AL3M: 0,       
    AL4M: 0,       
    APS: 0,        
    APM: 0,        
    ANS: 0,        
    ANM: 0,        
    TL1S: 0,       
    TL2S: 0,       
    TL3S: 0,       
    TL4S: 0,       
    TL1M: 0,       
    TL2M: 0,       
    TL3M: 0,       
    TL4M: 0,       
    TPS: 0,        
    TPM: 0,        
    TNS: 0,        
    TNM: 0,        
    BRKDN: 0,      
    RCVR: 0,       
    PRK: false,    
    SCC: 0,        
    SCF: 0,        
    DCC: 0,        
    DCF: 0,        
    Cards: 0,      
    Fouls: 0,      
    HMNS: 0,       
    HMNM: 0,       
};

export const vlairiables = { ...initialVlairiables };

export function Tally({ vlair }) {
    const [count, setCount] = useState(Number(vlairiables[vlair])); 

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        vlairiables[vlair] = newCount;
        console.log(vlairiables);
    };

    // Decrement function
    const deincrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            vlairiables[vlair] = newCount;
            console.log(vlairiables);
        }
    };
    return (
        <div className="row">
            <button className="autoButton" onClick={deincrement}> &lt; </button>
            <div className="autoCounter">{count}</div>
            <button className="autoButton" onClick={increment}> &gt; </button>
        </div>
    );
};

export function Checkbox({ vlair, style }) {
    const [checked, setChecked] = useState(vlairiables[vlair] || false);

    const togIt = () => {
        setChecked(prevChecked => !prevChecked);
        vlairiables[vlair] = !checked;
        console.log(vlairiables);
    };

    return (
        <input
            type="checkbox"
            id={style}
            onChange={togIt}
            checked={checked}
        />
    );
}

export function TeamBox({ vlair }) {
    const [checked, setChecked] = useState(vlairiables[vlair] || false);

    const toggleCheckbox = () => {
        setChecked(prevChecked => !prevChecked);
        vlairiables[vlair] = !checked;
        console.log(vlairiables);
    };

    return (
        <div>
            <input
                type="checkbox"
                id="red"
                onChange={toggleCheckbox}
                checked={checked}
            />
            <input
                type="checkbox"
                id="blue"
                onChange={toggleCheckbox}
                checked={!checked}
            />
        </div>
    );
}

export function CardBox({ vlair }) {
    const [count, setCount] = useState(Number(vlairiables[vlair])); 
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const updateVlare = () => {
        let newCount = 0;
        if (checked1 && checked2) {
            newCount = 2;
        } else if (checked1 || checked2) {
            newCount = 1;
        }
        setCount(newCount);
        vlairiables[vlair] = newCount;
        console.log(vlairiables);
    };

    const handleCheckbox1Change = () => {
        setChecked1(prevChecked => {
            const newChecked1 = !prevChecked;
            return newChecked1;
        });
    };

    const handleCheckbox2Change = () => {
        setChecked2(prevChecked => {
            const newChecked2 = !prevChecked;
            return newChecked2;
        });
    };

    useEffect(() => {
        updateVlare();
    }, [checked1, checked2]);

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

export function TextBox({ vlair, tooltip }) {
    const [text, setText] = useState(vlairiables[vlair] || ''); 

    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        vlairiables[vlair] = newText;
        console.log(vlairiables);
    };

    return (
        <div className="row">
            <input
                type="text"
                placeholder={tooltip}
                className="autoInput"
                value={text}
                onChange={handleChange}
            />
        </div>
    );
};

export function resetVlairiables ()  {
    Object.assign(vlairiables, { ...initialVlairiables });
    console.log('Vlairiables have been reset:', vlairiables);
};

export function OutputVar() {
    const [text, setText] = useState("");

    const printVar = () => {
        const newText = JSON.stringify(vlairiables, null, 2);
        setText(newText);
    };

    return (
        <div class="screen">
            <div id="qrCode">
                <pre>{text}</pre>
            </div>
            <div className="homeButton" onClick={printVar}>
                Generate QR
            </div>
            <HomePageBut/>
        </div>
    );
}