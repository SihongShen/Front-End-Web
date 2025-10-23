//exercises for chapter 6

function ch6_addingCharacterExperience(){
    // TODO: create the character object here

    let aurora = {
        name: "Aurora",
        health: 150,
        strength: 25,
        xp: 0,

        // Return the character description
        describe() {
            return `${this.name} has ${this.health} health points, ${this
            .strength} as strength and ${this.xp} XP points.`;
        }
    }

    // Aurora is harmed by an arrow
    aurora.health -= 20;

    // Aurora equips a strength necklace
    aurora.strength += 10;

    // Aurora learn a new skill
    aurora.xp += 15;

    return(aurora.describe());
}

function ch6_modelingADog(){
    // TODO: create the dog object here
    const dog = {
        name: "Fang",
        species: "boarhound",
        size: 75,
        bark() {
            return "Grrr! Grrr!";
        }
    }

    return(`${dog.name} is a ${dog.species} dog measuring ${dog.size}.\nLook, a cat! ${dog.name} barks: ${dog.bark()}`);
}

function ch6_modelingACircle(){
    const r = Number(prompt("Enter the circle radius:"));
    const circle = {
        radius: r,
        circumference() {
            return 2 * Math.PI * this.radius;
        },
        area() {
            return Math.PI * this.radius ** 2;
        }
    };

    return `Its circumference is ${circle.circumference().toFixed(2)}<br>
            Its area is ${circle.area().toFixed(2)}`;
}

function ch6_modelingABankAccount(){
    const account = {
        name: "Alex",
        balance: 0,
        credit(amount) {
            this.balance += amount;
        },
        describe() {
            return `owner: ${this.name}, balance: ${this.balance}`;
        }
    }

    account.credit(250);
    account.credit(-80);

    return account.describe();

}

document.getElementById("addingCharacterExperience").innerHTML = ch6_addingCharacterExperience();
document.getElementById("modelingADog").innerHTML = ch6_modelingADog();
document.getElementById("modelingACircle").innerHTML = ch6_modelingACircle();
document.getElementById("modelingABankAccount").innerHTML = ch6_modelingABankAccount();

// exercises for chapter 7
function ch7_Musketeers(){
    // Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
    let musketeers = ["Athos", "Porthos", "Aramis"];
    let output = "";

    // Shows each array element using a for loop.
    for(let i = 0; i < musketeers.length; i++){
        output += musketeers[i] + "<br>";
    };

    // Adds the "D'Artagnan" value to the array.
    musketeers.push("D'Artagnan");
    output += "<br>After adding D'Artagnan:<br>";

    // Shows each array element using the forEach() method.
    musketeers.forEach(function(musketeer){
        output += musketeer + "<br>";
    });

    // Remove poor Aramis.
    musketeers.splice(2, 1);
    output += "<br>After removing Aramis:<br>";

    // Shows each array element using a for-of loop.
    for(let musketeer of musketeers){
        output += musketeer + "<br>";
    };

    return output;
};

function ch7_SumOfValues(){
    // Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
    const values = [3, 11, 7, 2, 9, 10];
    let sum = 0;
    
    for(let i = 0; i < values.length; i++){
        sum += values[i];
    }

    return `The sum of the array values is: ${sum}`;
}

function ch7_arrayMaximum(){
    // Write a program that creates the following array, then calculates and shows the array's maximum value.
    const values = [3, 11, 7, 2, 9, 10];
    let max = values[0];
    
    for(let i = 1; i < values.length; i++){
        if(values[i] > max){
            max = values[i];
        }
    }

    return `The maximum value in the array is: ${max}`;
}

function ch7_listOfWords(){
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
    let words = [];
    let input = "";
    
    while(input.toLowerCase() !== "stop"){
        input = prompt("Enter a word (type 'stop' to finish):");
        if(input.toLowerCase() !== "stop"){
            words.push(input);
        }
    }
    return `You entered the following words: <br>${words.join("<br>")}`;
}

document.getElementById("Musketeers").innerHTML = ch7_Musketeers();
document.getElementById("SumOfValues").innerHTML = ch7_SumOfValues();
document.getElementById("ArrayMaximum").innerHTML = ch7_arrayMaximum();
document.getElementById("listOfWords").innerHTML = ch7_listOfWords();

// exercises for chapter 8
function ch8_wordInfo(){
    // Write a program that asks you for a word then shows its length, lowercase, and uppercase values.
    const word = prompt("Enter a word:");
    return `The word you entered is: ${word}<br>
            Length: ${word.length}<br>
            Lowercase: ${word.toLowerCase()}<br>
            Uppercase: ${word.toUpperCase()}`;
}

function ch8_vowelCount(){
    // Improve the previous program so that it also shows the number of vowels inside the word.
    let word = prompt("Enter a word:");
    word = word.toLowerCase();
    let vowelNumber = 0;
    const vowels = "aeiou";
    
    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            vowelNumber++;
        }
    }
    return `The word you entered is: ${word}<br>
            Length: ${word.length}<br>
            Lowercase: ${word.toLowerCase()}<br>
            Uppercase: ${word.toUpperCase()}<br>
            Number of vowels: ${vowelNumber}`;
}

function ch8_backwardsWord(){
    // Improve the previous program so that it shows the word written backwards.
    const word = prompt("Enter a word:");
    let reversedWord = "";
    
    for(let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    return `The word you entered is: ${word}<br>
            Backwards: ${reversedWord}`;
}

function ch8_palindrom(){
    // Improve the previous program to check if the word is a palindrome. 
    // A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
    const word = prompt("Enter a word:");
    const normalizedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = normalizedWord.split('').reverse().join('');
    
    if(normalizedWord === reversedWord){
        return `The word "${word}" is a palindrome.`;
    } else {
        return `The word "${word}" is not a palindrome.`;
    }
}

document.getElementById("wordInfo").innerHTML = ch8_wordInfo();
document.getElementById("vowelCount").innerHTML = ch8_vowelCount();
document.getElementById("backwardsWord").innerHTML = ch8_backwardsWord();
document.getElementById("palindrome").innerHTML = ch8_palindrom();