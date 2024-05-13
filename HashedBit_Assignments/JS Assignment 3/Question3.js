/*3. let string = 'INDIA'
output = 'INDONESIA'
Use array.splice*/

let string = 'INDIA';
string = string.split('');
string.splice(2, 0, 'O', 'N', 'E', 'S', 'I', 'A');
string = string.join('');

console.log(string);
