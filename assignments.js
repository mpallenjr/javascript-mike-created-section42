/*

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

const country = 'United States of America';
const continent = 'North America';
let population = 330000000;

console.log(country, continent, population);
console.log(country);
console.log(continent);
console.log(population);




// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

const isIsland = false;
const language = 'english';

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);



// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

// language = 'english'; //[Uncaught SyntaxError: Missing initializer in const declaration]




// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'


console.log( population / 2 );
console.log( population + 1 );
let finlandPopulation = 6000000;
console.log( population > finlandPopulation );
let averagePopulation = 33000000;
console.log( population > averagePopulation );

// const desctiption = 'United States of America is in North America, and its 330 million people speak english';

let desctiption = country + " is in " + continent + ", and its " + population + " people speak " + language;

console.log(desctiption);





// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

description = `${country} is in ${continent}. and it's ${population} people speak ${language}`;

console.log(desctiption);

// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
let populationDiff;
if (population > averagePopulation) {
  populationDiff = population - averagePopulation;
  console.log(`${country}'s population is ${populationDiff} above the population average`);
} else {
  populationDiff = averagePopulation - population;
  console.log(`${country}'s population is ${populationDiff} below the population average`);
}

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
// 2. Execute the operations to check if you were right




// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)


if(language === 'english' && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country}!`)
} else {
  console.log(`${country} does not meet your criteria :( `)
}


// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

// const language = 'dutch';

// switch(language) {
//   case 'chinese':
//   case 'mandarin':
//   console.log('MOST numbber of native speakers!')
//   break;
//   case 'spanish':
//   console.log('2nd place in number of native speakers')
//   break;

//   case 'english':
//   console.log('3rd place in number of native speakers')
//   break;
//   case 'hindi':
//   console.log('4th place in number of native speakers')
//   break;
//   case 'arabic':
//   console.log('5th place in number of native speakers')
//   break;
//   default:
//   console.log('Great language too')

// } 


// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

population > 33000000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average.`);
*/
/*
// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
  const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return countryDescription
}

const describeUSA = describeCountry('United States', 330, 'Washington D.C.');
console.log(describeUSA);
const describeJapan = describeCountry('Japan', 125, 'Tokyo');
console.log(describeJapan);
const describePoland = describeCountry('Poland', 37, 'Warsaw');
console.log(describePoland);
*/

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)
/*
function percentageOfWorld1(population) {
  return (population/7900) * 100 + ' percent of the world';
};
// console.log(percentageOfWorld1(330), 'U.S.A.')
// console.log(percentageOfWorld1(1100), 'India')
// console.log(percentageOfWorld1(9), 'Iraq')

// const percentageOfWorld2 = function percentageOfWorld1(population) {
//   return (population/7900) * 100;
// };

const usa = percentageOfWorld1(330) + ' percent of the world';
const india = percentageOfWorld1(1100) + ' percent of the world';
const iraq = percentageOfWorld1(9) + ' percent of the world'; 

// console.log(usa, india, iraq)


// LECTURE: Functions Calling Other Functions
// 1. Createafunctioncalled'describePopulation'.Usethefunctiontypeyou like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
// 2. Tocalculatethepercentage,'describePopulation'callthe 'percentageOfWorld1' you created earlier
// 3. Call'describePopulation'withdatafor3countriesofyourchoice

function describePopulation(country, population) {
  const percentageOfCountry = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentageOfCountry}`;
  return description; 
}
console.log(describePopulation("USA", 330))


// LECTURE: Introduction to Arrays
// 1. Createanarraycontaining4populationvaluesof4countriesofyourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'
// 2. Logtotheconsolewhetherthearrayhas4elementsornot(trueorfalse)
// 3. Createanarraycalled'percentages'containingthepercentagesofthe
// world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

const populations = [330,9,1561,65];
if (populations.length === 4){
  console.log('True')
}else{
  console.log('False')
}
const percentages = [percentageOfWorld1(330), percentageOfWorld1(9), percentageOfWorld1(1561), percentageOfWorld1(65)]
console.log(percentages)
*/