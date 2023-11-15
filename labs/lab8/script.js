function toggleTheme() {
    bodyElem = document.getElementById("body");
    bodyElem.classList.toggle("dark-mode");
}

buttonVariable = document.getElementById("toggleButton");
buttonVariable.onclick = toggleTheme;