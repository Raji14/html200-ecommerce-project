function capture() {
  event.preventDefault() //stops form submit
  console.log("Form submitted")

  var firstName = document.custInfo.userFirstname.value;
  var lastName = document.custInfo.userLastname.value;
  var eMail = document.custInfo.userLastname.value;
  console.log(firstName, lastName, eMail);
  console.log("Thank you " + firstName + " " + lastName + " for signing up! Look out for exciting offers in your inbox!");
}
