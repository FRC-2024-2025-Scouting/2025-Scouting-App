import { HomePageBut } from "./App";
import { TextBox } from "./Functions";
import { vlairiables } from "./Functions";
import { useState, useEffect } from "react";
import { initialVlairiables, Checkbox } from "./Functions";

const people = {
    "0": "Mentour or Teacher",
    "1": "Aaron Cox",
    "2": "Aidan Kennedy",
    "3": "Alex Topuria",
    "4": "Ally Wang", 
    "5": "Ananya Dixit",
    "6": "Anika Vats",
    "7": "Aurora Bochenek",
    "8": "Ben Harris",
    "9": "Ben Nphuc Tran",
    "10": "Benjamin Batrovic",
    "11": "Benjamin McRae",
    "12": "Benjamin Ruppel",
    "13": "Brooke Bentivoglio",
    "14": "Chase Allen",
    "15": "Chloe Russell",
    "16": "Colin Stewart",
    "17": "David Marks",
    "18": "Devan Zilio",
    "19": "Dhruv Chitaliya",
    "20": "Drew Lindahl",
    "21": "Duncan McGowan",
    "22": "Eric Kennedy",
    "23": "Ethan Cooper-Marotta",
    "24": "Evan Raymond",
    "25": "Graeme D'Arcey",
    "26": "Graeme Lambert",
    "27": "Guneet Sethi",
    "28": "Harrison Ferguson",
    "29": "Hudson Lang",
    "30": "Jaime Showalter",
    "31": "Julia Taylor",
    "32": "Kai Rojo",
    "33": "Kolton Grimsey",
    "34": "Linden Crawford",
    "35": "Mathew Showalter",
    "36": "Max Talio",
    "37": "Max Talor",
    "38": "Micael Tam",
    "39": "Neev Shah",
    "40": "Noah Talio",
    "41": "Nolan Passmore",
    "42": "Norah O'Keefe",
    "43": "Owen McKnigh",
    "44": "Parker Sanders",
    "45": "Rachelle Yue",
    "46": "Rikki Jeong",
    "47": "Riley McElhinney",
    "48": "Ritu Gorain",
    "49": "Ryan Yue",
    "50": "Saanvi Devgan",
    "51": "Sakib Islam",
    "52": "Sam Behara",
    "53": "Samantha Mitchell",
    "54": "Sanav Devgan",
    "55": "Tazel Dykstra",
    "56": "Tushan Khetarpal",
    "57": "Zackery Barrager",
    "58": "Charlie Martin",
    "59": "Andrew Reitmeier"
};

export function SettingsPage() {
    return(
        <div className="screen">
            <div className="head"> SETTINGS PAGE</div>    
            <TextBox vlair="scoutName" tooltip="Scouting ID"/>
            <SaveBut/>
            <HomePageBut/>
        </div> 
    )
}

function SaveBut() {
    const [name, setName] = useState(localStorage.getItem("scoutName") || "");
    const [scoutIdSave, setScoutIdSave] = useState(localStorage.getItem("scoutId"))

    const saveID = () => {
        console.log("Saved ID as " + vlairiables["scoutName"]);
        localStorage.setItem("scoutId", vlairiables["scoutName"]);
        generateName();
    }

    const generateName = () => {
        console.log("Generating Name");
        let scoutId = vlairiables["scoutName"];
        let scoutName = people[scoutId];
        initialVlairiables["scoutName"] = vlairiables["scoutName"];
        console.log(initialVlairiables)

        if (scoutName !== undefined) {
            const fullName = `Welcome ${scoutName}`;
            setName(fullName);
            setScoutIdSave(scoutId);
            localStorage.setItem("scoutName", fullName);
        } else {
            setName("ERROR! Wrong or invalid Scouting ID inputted");
        }
    }

    useEffect(() => {
        console.log("Name updated to: " + name);
    }, [name],);

    return (
        <div>
            <button className="homeButton" onClick={saveID}>Save Scouting ID</button>
            <p>{name}</p>
            <p>{scoutIdSave}</p>
        </div>
    );
}
