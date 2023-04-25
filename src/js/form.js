function makeForm() {
  const registrationForm = document.querySelector("#form");
  const saveButton = document.querySelector("#btn");
  const header = document.querySelector(".header");

  saveButton.addEventListener("click", (e) => {
    e.preventDefault();

    registrationForm.style.display = "none";
    header.style.display = "none";

    let valuesArr = [];

    const name = document.querySelector("#name");
    valuesArr.push(name.value);

    const birthday = document.querySelector("#birthday");
    valuesArr.push(birthday.value);

    const gender = document.querySelectorAll("#gender");
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        valuesArr.push(gender[i].value);
      }
    }

    const city = document.querySelector("#city");
    valuesArr.push(city.value);

    const address = document.querySelector("#address");
    valuesArr.push(address.value);

    const language = document.querySelectorAll("#language");
    let languagesArr = [];
    for (let i = 0; i < language.length; i++) {
      if (language[i].checked) {
        languagesArr.push(language[i].value);
      }
    }

    makeTable(valuesArr, languagesArr);
  });
}

makeForm();
