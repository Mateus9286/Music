const button = document.querySelector("img");
const body = document.body;
const theme = "dark-mode";
const themeButtonText = ["./assets/img/sun.png","./assets/img/moon.png"];
let darkMode;

button.addEventListener("click", themeChange);

function themeChange() {
  
  darkMode = !darkMode;
  body.classList.toggle(theme);
  localStorage.setItem(theme, darkMode);
  themeChangeButtonText(button);
}

function themeChangeButtonText(ButtonElement) {

    darkMode
      ? (ButtonElement.src = themeButtonText[0])
      : (ButtonElement.src = themeButtonText[1]);
  }

function themePreferenceAnalysis() {

    darkMode = JSON.parse(localStorage.getItem(theme));
    if (darkMode) {
  
      themeChangeButtonText(button);
      body.classList.add(theme);
    } else {
      themeChangeButtonText(button);
    }
  }
  
  themePreferenceAnalysis();