function goBack() {
  window.history.back();
}

function toggleMode() {
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
