export function makeTable(value, language) {
  const table = document.querySelector("#table");
  const subtitle = document.createElement("thead");
  table.append(subtitle);
  subtitle.innerHTML = "Ваші дані";
  subtitle.classList.add('subtitle')

  const tr = document.createElement("tr");
  table.append(tr);
  tr.classList.add("tr");

  const namesArr = [
    "Ім'я та Прізвище:",
    "Дата народження:",
    "Стать:",
    "Місто:",
    "Адреса:",
    "Володіння мовами:",
  ];

  for (let i = 0; i < namesArr.length; i++) {
    const td = document.createElement("td");
    tr.append(td);
    td.innerHTML = `${namesArr[i]} ${value[i]}`;
    td.classList.add("td");

    if (i === namesArr.length - 1) {
      td.innerHTML = `${namesArr[i]} ${[...language]}`;
    }
  }
}
