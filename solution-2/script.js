/************************************************
In this problem I had to find away to get all the even values of the fibonacci
sequence less than 4000000 and print a sum of their values. To do this I
created a loop that would sum the value produced on each iteration and store
it in a variable.
************************************************/

var number = 0;
var message;
var a = 0; var b = 1; var f = 0;

//inserts a meesage in to the HTML file.
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

//creates a sum of all the even values of the fibonacci sequence under 4000000.
while ( f < 4000000 ) {
    f = a + b;
    a = b;
    b = f;
    if (f%2 === 0){
      number += f;
    }
  }

message = '<h1>' + number + '</h1>';
print(message);
