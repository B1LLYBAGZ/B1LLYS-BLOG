document
  .getElementById("blogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const blogPost = {
      username: username,
      title: title,
      content: content,
      date: new Date().toLocaleString(),
    };

    let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    blogPosts.push(blogPost);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

    window.location.href = "blog.html";
  });

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
// // Check for saved theme in local storage
// window.onload = () => {
//   const theme = localStorage.getItem("theme");
//   const toggle = document.getElementById("modeToggle");
//   if (theme === "dark") {
//     document.body.classList.add("dark-mode");
//     toggle.checked = true;
//   }
// };
