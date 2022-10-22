/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function validateForm() {
  let first_name = document.forms["myForm"]["first-name"].value;
  let last_name = document.forms["myForm"]["last-name"].value;
  let email = document.forms["myForm"]["email"].value;
  
  
  if (first_name == "" || first_name.length<3) {
    alert("Niestety, ale nie wiemy kim jesteś!\nMusisz podać swoje imie");
    return false;
  }
  if (last_name == "" || last_name.length<3) {
    alert("Niestety, ale nie wiemy kim jesteś!\nMusisz podać swoje nazwisko");
    return false;
  }
  if (email == "") {
    alert("Jakoś musimy się z tobą skontaktować!\nPodaj adres e-mail");
    return false;
  }
}
