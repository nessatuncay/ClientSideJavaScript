/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterNameInput = document.querySelector('#characterName');
let ageInput = document.querySelector('#age');
let isSuperheroInput = document.querySelector('#isSuperhero');
let specialPowersInput = document.querySelector('#specialPowers');
let favoriteFoodInput = document.querySelector('#favoriteFood');

let generateButton = document.querySelector('#generateButton');
let increaseAgeButton = document.querySelector('#increaseAgeButton');
let decreaseAgeButton = document.querySelector('#decreaseAgeButton');

characterName = '';
age = Math.floor(Math.random() * 1000) + 1;
isSuperhero = false;
specialPowers = ['Super Speed', 'Super Strength', 'Elacticity', 'Pyrokinesis', 'Telepathy'];
favoriteFood = '';

ageInput.value = age;

// Function to generate a random character description

function generateCharDesc()
{
    characterName = characterNameInput.value;
    age = ageInput.value;
    isSuperhero = isSuperheroInput.checked;
    specialPowers = specialPowersInput.value;
    favoriteFood = favoriteFoodInput.value;

    let description = `Your character is ${characterName} and they are ${age} years old. Their superpower is ${specialPowers} and their favorite food is ${favoriteFood}.` 
    characterDescription.textContent = description;
}

// Functions to update character's age
function increaseAge()
{
    age++;
    return age;
}

function decreaseAge()
{
    age--;
    return age;
}


// Function to update the character's description after changing age
function changeAge()
{
    if (age++ || age--)
    {
        let updatedDescription = generateCharDesc();
        return updatedDescription;
    }
}

// Add event listeners for buttons using querySelector

increaseAgeButton.addEventListener('click', increaseAge);
decreaseAgeButton.addEventListener('click', decreaseAge);
generateButton.addEventListener('click', generateCharDesc);