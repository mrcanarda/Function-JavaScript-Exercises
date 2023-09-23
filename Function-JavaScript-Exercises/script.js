'use strict';

//[]
/*


const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 4, 800);
createBooking('LH123', undefined, 1000);



const flight = 'LH234';
const arda = {
  name: 'Can Arda',
  passport: 23455642,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23455642) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, arda);
console.log(flight);
console.log(arda);



///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript ist the best!', oneWord);



const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} `);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');



const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  //book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Can Arda');
lufthansa.book(635, 'Jonas Schmedtmann');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

// Call method
book.call(eurowings, 23, 'Cem Arda');
console.log(eurowings);

const swiss = {
  airline: 'Swiss',
  iataCode: 'SW',
  booking: [],
};

book.call(swiss, 55, 'Serpil Dogan');
console.log(swiss);

// Apply Method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmitmann');
bookEW23('Mustafa Guler');

//With Event Listerners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.plane);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value * 0,23;

console.log(addVAT(100));
console.log(addVAT(23));



//Closure 

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

*/

//Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);

    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
