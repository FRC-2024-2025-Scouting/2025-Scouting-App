export function encodeVariables (variables) {
  const byteArray = new Uint8Array(17);
  variables.teamNum = Math.min(variables.teamNum, 0b11111111111111);
  byteArray[0] = variables.teamNum & 0b11111111;  
  byteArray[1] = ((variables.teamNum >> 8) & 0b111111);  
  variables.SCC = Math.min(variables.SCC, 0b11);
  byteArray[1] += (variables.SCC & 0b11) << 6;

  variables.matchNum = Math.min(variables.matchNum, 0b1111111);
  byteArray[2] = variables.matchNum & 0b1111111;
  variables.colour = Math.min(variables.colour, 0b1);
  byteArray[2] += (variables.colour & 0b1) << 7;

  variables.AL1S = Math.min(variables.AL1S, 0b111);
  byteArray[3] = variables.AL1S & 0b111;
  variables.AL1M = Math.min(variables.AL1M, 0b111);
  byteArray[3] += (variables.AL1M & 0b111) << 3;
  variables.BRKDN = Math.min(variables.BRKDN, 0b11);
  byteArray[3] += (variables.BRKDN & 0b11) << 6;

  variables.AL2S = Math.min(variables.AL2S, 0b111);
  byteArray[4] = variables.AL2S & 0b111;
  variables.AL2M = Math.min(variables.AL2M, 0b111);
  byteArray[4] += (variables.AL2M & 0b111) << 3;
  variables.RCVR = Math.min(variables.RCVR, 0b11);
  byteArray[4] += (variables.RCVR & 0b11) << 6;

  variables.AL3S = Math.min(variables.AL3S, 0b111);
  byteArray[5] = variables.AL3S & 0b111;
  variables.AL3M = Math.min(variables.AL3M, 0b111);
  byteArray[5] += (variables.AL3M & 0b111) << 3;
  variables.SCF = Math.min(variables.SCF, 0b11);
  byteArray[5] += (variables.SCF & 0b11) << 6;

  variables.AL4S = Math.min(variables.AL4S, 0b111);
  byteArray[6] = variables.AL4S & 0b111;
  variables.AL4M = Math.min(variables.AL4M, 0b111);
  byteArray[6] += (variables.AL4M & 0b111) << 3;
  variables.DCC = Math.min(variables.DCC, 0b11);
  byteArray[6] += (variables.DCC & 0b11) << 6;

  variables.APS = Math.min(variables.APS, 0b111);
  byteArray[7] = variables.APS & 0b111;
  variables.APM = Math.min(variables.APM, 0b111);
  byteArray[7] += (variables.APM & 0b111) << 3;
  variables.DCF = Math.min(variables.DCF, 0b11);
  byteArray[7] += (variables.DCF & 0b11) << 6;

  variables.ANS = Math.min(variables.ANS, 0b111);
  byteArray[8] = variables.ANS & 0b111;
  variables.ANM = Math.min(variables.ANM, 0b111);
  byteArray[8] += (variables.ANM & 0b111) << 3;
  variables.Cards = Math.min(variables.Cards, 0b11);
  byteArray[8] += (variables.Cards & 0b11) << 6;

  variables.TL1S = Math.min(variables.TL1S, 0b1111);
  byteArray[9] = variables.TL1S & 0b1111;
  variables.TL1M = Math.min(variables.TL1M, 0b1111);
  byteArray[9] += (variables.TL1M & 0b1111) << 4;

  variables.TL2S = Math.min(variables.TL2S, 0b1111);
  byteArray[10] = variables.TL2S & 0b1111;
  variables.TL2M = Math.min(variables.TL2M, 0b1111);
  byteArray[10] += (variables.TL2M & 0b1111) << 4;

  variables.TL3S = Math.min(variables.TL3S, 0b1111);
  byteArray[11] = variables.TL3S & 0b1111;
  variables.TL3M = Math.min(variables.TL3M, 0b1111);
  byteArray[11] += (variables.TL3M & 0b1111) << 4;

  variables.TL4S = Math.min(variables.TL4S, 0b1111);
  byteArray[12] = variables.TL4S & 0b1111;
  variables.TL4M = Math.min(variables.TL4M, 0b1111);
  byteArray[12] += (variables.TL4M & 0b1111) << 4;

  variables.TPS = Math.min(variables.TPS, 0b1111);
  byteArray[13] = variables.TPS & 0b1111;
  variables.TPM = Math.min(variables.TPM, 0b1111);
  byteArray[13] += (variables.TPM & 0b1111) << 4;

  variables.TNS = Math.min(variables.TNS, 0b1111);
  byteArray[14] = variables.TNS & 0b1111;
  variables.TNM = Math.min(variables.TNM, 0b1111);
  byteArray[14] += (variables.TNM & 0b1111) << 4;

  variables.scoutName = Math.min(variables.scoutName, 0b111111);
  byteArray[15] = variables.scoutName & 0b111111;
  variables.moved = Math.min(variables.moved, 0b1);
  byteArray[15] += (variables.moved & 0b1) << 6;
  variables.PRK = Math.min(variables.PRK, 0b1);
  byteArray[15] += (variables.PRK & 0b1) << 7;

  variables.Fouls = Math.min(variables.Fouls, 0b11111111);
  byteArray[16] = variables.Fouls & 0b11111111;

  return byteArray;
};

export function decodeVariables(byteArray) {
  const variables = {};

  variables.teamNum = (byteArray[0] & 0b11111111) | ((byteArray[1] & 0b111111) << 8);
  variables.SCC = (byteArray[1] >> 6) & 0b11;

  variables.matchNum = byteArray[2] & 0b1111111;
  variables.colour = (byteArray[2] >> 7) & 0b1;

  variables.AL1S = byteArray[3] & 0b111;
  variables.AL1M = (byteArray[3] >> 3) & 0b111;
  variables.BRKDN = (byteArray[3] >> 6) & 0b11;

  variables.AL2S = byteArray[4] & 0b111;
  variables.AL2M = (byteArray[4] >> 3) & 0b111;
  variables.RCVR = (byteArray[4] >> 6) & 0b11;

  variables.AL3S = byteArray[5] & 0b111;
  variables.AL3M = (byteArray[5] >> 3) & 0b111;
  variables.SCF = (byteArray[5] >> 6) & 0b11;

  variables.AL4S = byteArray[6] & 0b111;
  variables.AL4M = (byteArray[6] >> 3) & 0b111;
  variables.DCC = (byteArray[6] >> 6) & 0b11;

  variables.APS = byteArray[7] & 0b111;
  variables.APM = (byteArray[7] >> 3) & 0b111;
  variables.DCF = (byteArray[7] >> 6) & 0b11;

  variables.ANS = byteArray[8] & 0b111;
  variables.ANM = (byteArray[8] >> 3) & 0b111;
  variables.Cards = (byteArray[8] >> 6) & 0b11;

  variables.TL1S = byteArray[9] & 0b1111;
  variables.TL1M = (byteArray[9] >> 4) & 0b1111;

  variables.TL2S = byteArray[10] & 0b1111;
  variables.TL2M = (byteArray[10] >> 4) & 0b1111;

  variables.TL3S = byteArray[11] & 0b1111;
  variables.TL3M = (byteArray[11] >> 4) & 0b1111;

  variables.TL4S = byteArray[12] & 0b1111;
  variables.TL4M = (byteArray[12] >> 4) & 0b1111;

  variables.TPS = byteArray[13] & 0b1111;
  variables.TPM = (byteArray[13] >> 4) & 0b1111;

  variables.TNS = byteArray[14] & 0b1111;
  variables.TNM = (byteArray[14] >> 4) & 0b1111;

  variables.scoutName = byteArray[15] & 0b111111;
  variables.moved = (byteArray[15] >> 6) & 0b1;
  variables.PRK = (byteArray[15] >> 7) & 0b1;

  variables.Fouls = byteArray[16] & 0b1111;

  return variables;
}

export function encodeHumanVariables(variables) {
  const byteArray = new Uint8Array(17);

  variables.HMNteamNum = Math.min(variables.HMNteamNum, 0b11111111111111);
  byteArray[0] = variables.HMNteamNum & 0b11111111;  
  byteArray[1] = ((variables.HMNteamNum >> 8) & 0b111111);  

  variables.HMNmatchNum = Math.min(variables.HMNmatchNum, 0b1111111);
  byteArray[2] = variables.HMNmatchNum & 0b1111111;
  variables.HMNColor = Math.min(variables.HMNColor, 0b1);
  byteArray[2] += variables.HMNColor & 0b1;

  variables.HMNS = Math.min(variables.HMNS, 0b1111);
  byteArray[3] = variables.HMNS & 0b1111;
  variables.HMNM = Math.min(variables.HMNM, 0b1111)
  byteArray[3] += variables.HMNM & 0b1111;

  return byteArray;
}

export function decodeHumanVariables(byteArray) {

}