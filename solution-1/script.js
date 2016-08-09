/************************************************
In this Problem I had to find a way to create a sum out of all the multiples
of 3 & 5 bellow 1000. I chose to do this by using iteration with a 'for' loop
then using a conditional statement to determine whether the value was a
multiple. Finally, I added them together in the variable "sum".
************************************************/

var sum = 0;
var html;

//inserts a meesage in to the HTML file.
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML  = message;
}

//Returns a sum of all the multiples of 3 & 5 up to 1000.
for (var i= 1;i<1000; i++ ){
  if (i%3 === 0 || i%5 === 0){
  sum = sum + i;
  }
}

html = '<h2>' + sum + '</h2>'

print(html);
