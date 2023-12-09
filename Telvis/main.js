// how much each shop item produces.
// note the use of const since this value DOESN'T change and is CONSTantly the same
const grandmaOutput = 10;
const ovenOutput = 100;
const factoryOutput = 1000;
const mineOutput = 10000;
const bankOutput = 100000;

// how much each shop item cost.
// note the use of const since this value DOESN'T change and is CONSTantly the same
const grandmaCost = 10;
const ovenCost = 100;
const factoryCost = 1000;
const mineCost = 10000;
const bankCost = 100000;

// how many of each item we have.
// note the use of let since this value DOES change because it LETs us
let grandmas = 0;
let ovens = 0;
let factories = 0;
let mines = 0;
let banks = 0;

// how many cookies we have to spend - number at topin large font
// note the use of let since this value DOES change because it LETs us
let cookieWallet = 0;

// how many cookies we generate per second - second number above button
let cookiesPerSecond = 1;

const updateWallet = () => {
  cookieWallet += cookiesPerSecond;
  document.getElementById('total-cookies').innerHTML = cookieWallet;
};

const updateCookiesPerSecond = () => {
  cookiesPerSecond =
    grandmaOutput * grandmas +
    ovenOutput * ovens +
    factoryOutput * factories +
    mineOutput * mines +
    bankOutput * banks;
  document.getElementById(
    'cookies-per-sec'
  ).innerHTML = `${cookiesPerSecond}cps`;
};

const shopItemHandler = (item) => {
  switch (item) {
    case 'grandma':
      // if the input is grandma, we check to see if we have enough in our wallet to buy before executing the code to update our count
      if (cookieWallet >= grandmaCost) {
        // the ++ at the end of grandmas just means to increase the value by 1
        // it is the same as saying "grandmas = grandmas + 1" which will set the grandmas variable to grandmas current value + 1
        grandmas++;

        // deducts the cost of a grandma from our wallet
        cookieWallet -= grandmaCost;

        // this targets the element with the ID of grandma__count and updates the text within
        document.getElementById('grandma__count').innerHTML = grandmas;

        // calls the function we created to calculate the new values
        updateCookiesPerSecond();
      } else {
        console.log('not enough money');
      }
      break;
    case 'oven':
      if (cookieWallet >= ovenCost) {
        ovens++;
        cookieWallet -= ovenCost;
        document.getElementById('oven__count').innerHTML = ovens;
        updateCookiesPerSecond();
        console.log(cookieWallet);
      } else {
        console.log('not enough money');
      }
      break;
    case 'factory':
      if (cookieWallet >= factoryCost) {
        factories++;
        cookieWallet -= factoryCost;
        document.getElementById('factory__count').innerHTML = factories;
        updateCookiesPerSecond();
      } else {
        console.log('not enough money');
      }
      break;
    case 'mine':
      if (cookieWallet >= mineCost) {
        mines++;
        cookieWallet -= mineCost;
        document.getElementById('mine__count').innerHTML = mines;
        updateCookiesPerSecond();
      } else {
        console.log('not enough money');
      }
      break;
    case 'bank':
      if (cookieWallet >= bankCost) {
        banks++;
        cookieWallet -= bankCost;
        document.getElementById('bank__count').innerHTML = banks;
        updateCookiesPerSecond();
      } else {
        console.log('not enough money');
      }
      break;

    default:
  }
};
setInterval(updateWallet, 1000);

// const cookieDataHandler = () => {
//   localStorage.setItem(data);
// };
