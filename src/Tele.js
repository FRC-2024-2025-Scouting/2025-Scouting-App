import { NavButB, NavButN } from "./App";
import { Tally } from "./Functions";
import { VlariablesProvider } from "./Functions"
import { useContext } from 'react';

export function TelePage() {
    return (
        <div className="screen">
            <Coral />
            <Processor />
            <Net />
            <div className="row">
                <Breakdown />
                <Recovery />
            </div>
            <div className="row">
                <NavButB />
                <NavButN />
            </div>
        </div>
    );
}

function Coral() {
    return (
        <div>
            <div className="head">Coral</div>
            <div className="row">
                <Score />
                <Label />
                <Miss />
            </div>
        </div>
    );
}

function Score() {
    return (
      <VlariablesProvider>
        <div className="column">
          <div className="head">Score</div>
          <Tally vlair="TL1S" />
          <Tally vlair="TL2S" />
          <Tally vlair="TL3S" />
          <Tally vlair="TL4S" />
        </div>
      </VlariablesProvider>
    );
}

function Label() {
    return (
        <div className="column">
            <div id="spacer1"></div>
            <div className="spacer2">l1</div>
            <div className="spacer2">l2</div>
            <div className="spacer2">l3</div>
            <div className="spacer2">l4</div>
        </div>
    );
}

function Miss() {
    return (
      <VlariablesProvider>
        <div className="column">
          <div className="head">Miss</div>
          <Tally vlair="TL1M" />
          <Tally vlair="TL2M" />
          <Tally vlair="TL3M" />
          <Tally vlair="TL4M" />
        </div>
      </VlariablesProvider>
    );
}

function Processor() {
    return (
        <VlariablesProvider>
            <div className="head">Processor</div>
            <div className="row">
                <Tally vlair="TPS" />
                <Tally vlair="TPM" />
            </div>
        </VlariablesProvider>
    );
}

function Net() {
    return (
        <VlariablesProvider>
            <div className="head">Net</div>
            <div className="row">
                <Tally vlair="TNS" />
                <Tally vlair="TNM" />
            </div>
        </VlariablesProvider>
    );
}

function Breakdown() {
    return (
      <VlariablesProvider>
        <div className="column">
            <div className="head">Breakdown</div>
            <div className="row">
                <Tally vlair="BRKDN" />
            </div>
        </div>
      </VlariablesProvider>
    );
}

function Recovery() {
    return (
      <VlariablesProvider>
        <div className="column">
            <div className="head">Recovery</div>
            <div className="row">
                <Tally vlair="RCVR" />
            </div>
        </div>
      </VlariablesProvider>
    );
}
