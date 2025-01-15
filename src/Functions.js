import { createContext, useState, useContext } from 'react';

const VlairiablesContext = createContext();

export const VlariablesProvider = ({children}) => {
    const [vlairiables, setVlairiables] = useState({
        // Pregame
    matchNum: 0,  //#
    teamNum: 0,   //#
    colour: 0,    //#-restricted

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

    Cards: 0,      //#-restricted
    Fouls: 0,      //#
    });
    return(
        <VlairiablesContext.Provider value={{ vlairiables, setVlairiables}}>
            {children}
        </VlairiablesContext.Provider>
    )
}

export function Tally({ vlair }) {
    const { vlairiables, setVlairiables } = useContext(VlairiablesContext);

    const [count, setCount] = useState(vlairiables[vlair]);

    const increment = () => {
        setVlairiables((prevState) => ({
            ...prevState,
            [vlair]: prevState[vlair] + 1,
        }));
    };

    const deincrement = () => {
        if (vlairiables[vlair] > 0) {
            setVlairiables((prevState) => ({
                ...prevState,
                [vlair]: prevState[vlair] - 1,
            }));
        }
    };

    return (
        <div className="row">
            <button className="autoButton" onClick={deincrement}> &lt; </button>
            <div className="autoCounter">{vlairiables[vlair]}</div>
            <button className="autoButton" onClick={increment}> &gt; </button>
        </div>
    );
}