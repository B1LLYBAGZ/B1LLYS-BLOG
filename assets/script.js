function goBack() {
  window.history.back();
}

function toggleMode(event) {
  event.preventDefault();
  const body = document.body;
  const toggle = document.getElementById("modeToggle");
  body.classList.toggle("dark-mode");
  if (toggle.checked) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Check for saved theme in local storage
window.onload = () => {
  const theme = localStorage.getItem("theme");
  const toggle = document.getElementById("modeToggle");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }
};
// Retrieve theme preference from local storage
function setInitialTheme() {
  const theme = localStorage.getItem("theme");
  const body = document.body;

  if (theme === "dark") {
    body.classList.add("dark-mode");
    document.getElementById("modeToggle").checked = true;
  } else {
    body.classList.remove("dark-mode");
    document.getElementById("modeToggle").checked = false;
  }
}

// Call setInitialTheme when the page loads
window.addEventListener("load", setInitialTheme);
