/************************************************
In this problem I had to log the prime factors of a large number and return
the largest factor. To do this I decided to use a loop to iterate through
numbers one by one and check if they were divisible by the large number, then
storing the divided value. I added a prompt because I wanted to practice taking
and manipulating user input. The print method is to practice manipulating the
HTML DOM.
************************************************/

//Asks user to enter a number they would like to factor.
var value = prompt('Enter a number that you would like to find the prime factors of');
var primeFac = 0;
var i = 2;

//inserts a meesage in to the HTML file.
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML  = message;
}

/*Looks at all the prime numbers of the users number and stores the last, being
the largest.*/
while (i < value) {
  if (value%i === 0) {
    value /= i;
  } else {
    i += 1;
  }
  primeFac = i;
}


var message = '<h2>' + primeFac + '</h2>'

print(primeFac)
