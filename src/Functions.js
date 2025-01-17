import { useState } from 'react';

export const vlairiables = {
    // Pregame
    matchNum: 0,  //#
    teamNum: 0,   //#
    colour: false,    //Bool false for red true for blue

    // Auto
    moved: false,  // Assuming it's a boolean
    AL1S: 0,       //# Layer 1 score
    AL2S: 0,       //# Layer 2 score
    AL3S: 0,       //# Layer 3 score
    AL4S: 0,       //# Layer 4 score

    AL1M: 0,       //# Layer 1 Miss
    AL2M: 0,       //# Layer 2 Miss
    AL3M: 0,       //# Layer 3 Miss
    AL4M: 0,       //# Layer 4 Miss

    APS: 0,        //# Processor Score
    APM: 0,        //# Processor Miss

    ANS: 0,        //# Net Score
    ANM: 0,        //# Net Miss

    // Tele
    TL1S: 0,       //# Layer 1 score
    TL2S: 0,       //# Layer 2 score
    TL3S: 0,       //# Layer 3 score
    TL4S: 0,       //# Layer 4 score

    TL1M: 0,       //# Layer 1 Miss
    TL2M: 0,       //# Layer 2 Miss
    TL3M: 0,       //# Layer 3 Miss
    TL4M: 0,       //# Layer 4 Miss

    TPS: 0,        //# Processor Score
    TPM: 0,        //# Processor Miss

    TNS: 0,        //# Net Score
    TNM: 0,        //# Net Miss

    BRKDN: 0,      //# Breakdowns
    RCVR: 0,       //# Recoveries

    // End
    PRK: false,    // Bool Pooked

    SCC: 0,        //# Shallow Cage Climb
    SCF: 0,        //# Shallow Cage Fall

    DCC: 0,        //# Deep Cage Climb
    DCF: 0,        //# Deep Cage Climb

    Cards: null,      //bool
    Fouls: 0,      //#
};

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

export function CardBox({vlair}) {
    const [checked1, setChecked1] = useState(vlairiables[vlair] === null ? false : vlairiables[vlair]);
    const [checked2, setChecked2] = useState(vlairiables[vlair] === null ? false : vlairiables[vlair]);

    const updateState = () => {
        if (checked1 === false && checked2 === false) {
            vlairiables[vlair] = null;
        } else if (checked1 === false && checked2 === true) {
            vlairiables[vlair] = false;
        } else {
            vlairiables[vlair] = true;
        }

        console.log(vlairiables)
    };

    const handleCheckbox1Change = () => {
        setChecked1(prevChecked => {
            const newChecked1 = !prevChecked;
            setChecked2(newChecked1 ? false : checked2);
            updateState();
            return newChecked1;
        });
    };

    const handleCheckbox2Change = () => {
        setChecked2(prevChecked => {
            const newChecked2 = !prevChecked;
            setChecked1(newChecked2 ? true : checked1);
            updateState();
            return newChecked2;
        });
    };

    return (
        <div class="row">
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