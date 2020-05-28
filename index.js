
function init() {
    fs.writeFile("README.md", readmeStr, err => {
        if (err) throw err;

        console.log("success!");
    });
};

init();

// import ./generate_md into index.js 

const string = require('./generate_md');

var operation = process.argv[2];

var numOne = parseInt(process.argv[3]);
var numTwo = parseInt(process.argv[4]);

switch(operation) {
  case 'sum':
    console.log(string.sum(numOne, numTwo));
    break;
  case 'difference':
    console.log(maths.difference(numOne, numTwo));
    break;
  case 'product':
    console.log(maths.product(numOne, numTwo));
    break;
  case 'quotient':
    console.log(maths.quotient(numOne, numTwo));
    break;
  default:
    console.log("Check your maths!");