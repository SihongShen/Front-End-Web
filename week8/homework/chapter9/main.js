import { Dog } from './dogs.js';
import { Character } from './character.js';
import { Account } from './account.js';

const fang = new Dog("Fang", "boarhound", 75);
const snowy = new Dog("Snowy", "terrier", 22);

document.getElementById("dogs").innerHTML = `${fang.name} is a ${fang.species} dog measuring ${fang.size}<br>
                                            Look, a cat! ${fang.name} barks: ${fang.bark()}<br><br>
                                            ${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}<br>
                                            Look, a cat! ${snowy.name} barks: ${snowy.bark()}`;


function displayResults(messages){
    document.getElementById("characters").innerHTML += messages + '<br>';
}
// Pass displayResults as the log function to Characters so this.log writes to the DOM
const aurora = new Character("Aurora", 150, 25, displayResults);
const glacius = new Character("Glacius", 130, 30, displayResults);

displayResults("Welcome to the adventure! Here are our heroes:");
displayResults(aurora.describe());
displayResults(glacius.describe());

const monster = new Character("Spike", 40, 20, displayResults);
displayResults("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

displayResults(aurora.describe());
displayResults(glacius.describe());

// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. 
// These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.
const accounts = [
    new Account("Sean"),
    new Account("Brad"),
    new Account("Georges")
];

accounts.forEach(account => {
    account.credit(1000);
    document.getElementById("account").innerHTML += account.describe() + '<br>';
});