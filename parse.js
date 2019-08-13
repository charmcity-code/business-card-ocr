function getContactInfo(string) {
  array = string.split("\n");
  getName();
  getEmailAddress();
}

function getEmailAddress() {
  // gets email since email is last element in array
  let email = array[array.length - 1];
  console.log("Email:", email);
}

function getName() {
  let fullName = [];
  // get email name before the "@"
  let emailName = array[array.length - 1].split("@")[0];
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
}

getContactInfo(
  "ASYMMETRIK LTD\nMike Smith\nSenior Software Engineer\n(410)555-1234\nmsmith@asymmetrik.com"
);
getContactInfo(
  "Foobar Technologies\nAnalytic Developer\nLisa Haung\n1234 Sentry Road\nColumbia, MD 12345\nPhone: 410-555-1234\nFax: 410-555-4321\nlisa.haung@foobartech.com"
);

getContactInfo(
  "Arthur Wilson\nSoftware Engineer\nDecision & Security Technologies\nABC Technologies\n123 North 11th Street\nSuite 229\nArlington, VA 22209\nTel: +1 (703) 555-1259\nFax: +1 (703) 555-1200\nawilson@abctech.com"
);
