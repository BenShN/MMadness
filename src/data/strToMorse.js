import morse from "./morse";

let x = Math.floor(Math.random()*(8));
let y = Math.floor(Math.random()*(8));


let alpha = ['A','B','C','D','E','F','G','H'];
// let str = alpha[x]+y+1;
let morseStr = morse[alpha[x]]+" "+morse[y+1];





