var sum = 0;
var html;

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML  = message;
}

for (var i= 1;i<1000; i++ ){
  if (i%3 === 0 || i%5 === 0){
  sum = sum + i;
  }
}

html = '<h2>' + sum + '</h2>'

print(html);
