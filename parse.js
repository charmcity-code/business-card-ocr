function getContactInfo(string) {
  array = string.split("\n");
  getName();
  getPhoneNumber();
  getEmailAddress();
}

function getEmailAddress() {
  // gets email since email is last element in array
  let email = array[array.length - 1];
  return email;
  // for testing purposes
  console.log("Email:", email);
}

function getName() {
  let fullName = [];
  // get email name before the "@"
  let emailName = getEmailAddress().split("@")[0];
  for (let i = 0; i < array.length; i++) {
    // split each element at space
    let parse = array[i].toLowerCase().split(" ");
    for (let j = 0; j < parse.length; j++) {
      // check to see if parsed element is contained in email name
      // if true, this is element is the full name
      if (emailName.includes(parse[j])) {
        fullName.push(array[i]);
      }
    }
  }
  console.log("Name:", fullName[0]);
  // console log email address for testing purposes
  console.log("Email:", getEmailAddress());
}

function getPhoneNumber(string) {
  array = string.split("\n");
  // get phone number element from array
  let phone = array.filter(element => {
    return element.includes("-") && !element.includes("Fax");
  });
  phone = phone
    .toString()
    // regex to match only digits
    .match(/\d+/g)
    .join("");
  console.log("Phone:", phone);
}

getPhoneNumber(
  "ASYMMETRIK LTD\nMike Smith\nSenior Software Engineer\n(410)555-1234\nmsmith@asymmetrik.com"
);

getPhoneNumber(
  "Foobar Technologies\nAnalytic Developer\nLisa Haung\n1234 Sentry Road\nColumbia, MD 12345\nPhone: 410-555-1234\nFax: 410-555-4321\nlisa.haung@foobartech.com"
);

getPhoneNumber(
  "Arthur Wilson\nSoftware Engineer\nDecision & Security Technologies\nABC Technologies\n123 North 11th Street\nSuite 229\nArlington, VA 22209\nTel: +1 (703) 555-1259\nFax: +1 (703) 555-1200\nawilson@abctech.com"
);
