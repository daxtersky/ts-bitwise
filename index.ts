// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Bitwise operator AND: &</h1>`;

const filterLactBin = 0; // 1 or 2 or 4
console.log(filterLactBin);

// NO OPTIONS
if ((filterLactBin & 0)) {
  console.log('nothing');
}
// ONE OPTION
if ((filterLactBin & 1)) {
  console.log('option one');
}
if ((filterLactBin & 2)) {
  console.log('option two');
}
if ((filterLactBin & 4)) {
  console.log('option three');
}

// TWO OPTIONS
if ((filterLactBin & 3) === 3) {
  console.log('option ONE & TWO');
}
if ((filterLactBin & 5) === 5) {
  console.log('option ONE & THREE');
}
if ((filterLactBin & 6) === 6) {
  console.log('option TWO & THREE');
}

// ALL OPTIONS
if ((filterLactBin & 7) === 7) {
  console.log('ALL OPTIONS');
}
