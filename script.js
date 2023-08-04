let clientString = document.getElementById("clientString");
let capitalizedVysledok = document.getElementById("capitalizedVysledok");

function capitalizeMe() {
  let text = clientString.value;
  let words = text.split(" ");
  let capitalizedWords = [];

  for (let word of words) {
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);
  }

  let capitalizedString = capitalizedWords.join(" ");
  capitalizedVysledok.innerText = capitalizedString;
}



// Palindrome

let clientWord = document.getElementById("clientWord");
let palindromedVysledok = document.getElementById("palindromedVysledok");

function checkPalindrome() {
  let word = clientWord.value;
  let reversedWord = word.split("").reverse().join("");
  
  if (word === reversedWord) {
    palindromedVysledok.innerText = "Áno, slovo je palindróm.";
  } else {
    palindromedVysledok.innerText = "Nie, slovo nieje palindróm.";
  }
}



// Filtrovanie (ne)párnych čísel

function filterParnychCisel(arr) {
  return arr.filter(num => num % 2 === 0);
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 92, 77];
const output = filterParnychCisel(input);
console.log(output);;



// Validovanie dátumov

function validateDate(date) {
  var regex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  return regex.test(date);
}



// Cenzúra čísla karty

function maskCreditCardNumber(input) {
  const digitsOnly = input.replace(/\D/g, '');
  const lastFourDigits = digitsOnly.slice(-4);
  const maskedDigits = digitsOnly.slice(0, -4).replace(/./g, '#');
  const maskedGroups = maskedDigits.replace(/(.{4})(?!$)/g, '$1-');
  const maskedCardNumber = maskedGroups + '-' + lastFourDigits;

  return maskedCardNumber;
}

function updateCard() {
  const inputElement = document.getElementById('creditCardInput');
  const cardContainer = document.getElementById('cardContainer');
  
  const inputValue = inputElement.value;
  const maskedValue = maskCreditCardNumber(inputValue);
  
  cardContainer.textContent = maskedValue;
}