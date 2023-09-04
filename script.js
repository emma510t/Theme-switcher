const body = document.querySelector("body");

document.querySelector("#light").addEventListener("click", changeThemeLight);
document.querySelector("#dark").addEventListener("click", changeThemeDark);
document.querySelector("#barbie").addEventListener("click", changeThemeBarbie);

function changeThemeLight() {
  console.log("set theme to light");
  body.setAttribute("data-theme", "light");
}
function changeThemeDark() {
  console.log("set theme to dark");
  body.setAttribute("data-theme", "dark");
}
function changeThemeBarbie() {
  console.log("set theme to barbie");
  body.setAttribute("data-theme", "barbie");
}
