var number = 0;
var message;
var a = 0; var b = 1; var f = 0;

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

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
