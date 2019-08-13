let string =
  "ASYMMETRIK LTD\nMike Smith\nSenior Software Engineer\n(410)555-1234\nmsmith@asymmetrik.com";

array = string.split("\n");
console.log(array);

// let email = array.find(element => element.includes("@"));
let email = array.pop();
let emailName = email.split("@")[0];

// let email = array[indexEmail];
// console.log(email);

for (let i = 0; i < array.length; i++) {
  let arrSplit = array[i].toLowerCase().split(" ");
  for (let j = 0; j < arrSplit.length; j++) {
    if (emailName.includes(arrSplit[j])) console.log("Name:", array[i]);
  }
}
console.log("Email:", email);
