var value = prompt('Enter a number that you would like to find the prime factors of');
var primeFac = 0;
var i = 2;

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML  = message;
}


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
