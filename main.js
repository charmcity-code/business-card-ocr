// returns full name, phone number and email address
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

// returns email address
function getEmailAddress() {
  // gets email since email is last element in array
  let email = array[array.length - 1];
  return email;
}

// returns full name
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

// returns phone number
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

// gets text value of example 1 from html, parses and displays parsed result
function parse1() {
  let value = document.getElementById("example1").innerText;
  document.getElementById("result1").innerHTML = getContactInfo(value);
}

// gets text value of example 2 from html, parses and displays parsed result
function parse2() {
  let value = document.getElementById("example2").innerText;
  document.getElementById("result2").innerHTML = getContactInfo(value);
}

// gets text value of example 3 from html, parses and displays parsed result
function parse3() {
  let value = document.getElementById("example3").innerText;
  document.getElementById("result3").innerHTML = getContactInfo(value);
}

// gets text value of user input from html, parses and displays parsed result
function parse4() {
  let value = document.getElementById("example4").value;
  document.getElementById("result4").innerHTML =
    "Result" + `<br>` + getContactInfo(value);
}
