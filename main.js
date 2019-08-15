const example1 =
  "ASYMMETRIK LTD\nMike Smith\nSenior Software Engineer\n(410)555-1234\nmsmith@asymmetrik.com";

const example2 =
  "Foobar Technologies\nAnalytic Developer\nLisa Haung\n1234 Sentry Road\nColumbia, MD 12345\nPhone: 410-555-1234\nFax: 410-555-4321\nlisa.haung@foobartech.com";

const example3 =
  "Arthur Wilson\nSoftware Engineer\nDecision & Security Technologies\nABC Technologies\n123 North 11th Street\nSuite 229\nArlington, VA 22209\nTel: +1 (703) 555-1259\nFax: +1 (703) 555-1200\nawilson@abctech.com";

function parse1() {
  document.getElementById("result1").innerHTML = getContactInfo(example1);
}
function parse2() {
  document.getElementById("result2").innerHTML = getContactInfo(example2);
}

function parse3() {
  document.getElementById("result3").innerHTML = getContactInfo(example3);
}

function parse4() {
  let value = document.getElementById("test").value;
  console.log(getContactInfo(value));
}

function getContactInfo(string) {
  array = string.split("\n");
  return (
    "Name: " +
    getName(string) +
    `<br>` +
    "Phone: " +
    getPhoneNumber(string) +
    `<br>` +
    "Email: " +
    getEmailAddress()
  );
}

function getEmailAddress() {
  // gets email since email is last element in array
  let email = array[array.length - 1];
  return email;
}

function getName(string) {
  let array = string.split("\n");
  // get email name before the "@"
  let emailName = getEmailAddress().split("@")[0];
  for (let i = 0; i < array.length; i++) {
    // split each element at space
    let parse = array[i].toLowerCase().split(" ");
    for (let j = 0; j < parse.length; j++) {
      // check to see if parsed element is contained in email name
      // if true, this element is the full name
      if (emailName.includes(parse[j])) {
        return array[i];
      }
    }
  }
}

function getPhoneNumber(string) {
  let array = string.split("\n");
  // get phone number element from array
  let phone = array.filter(element => {
    return element.includes("-") && !element.includes("Fax");
  });
  phone = phone
    .toString()
    // regex to match only digits
    .match(/\d+/g)
    .join("");
  return phone;
}
