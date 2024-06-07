document
  .getElementById("blogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // this is declaring my varriables user name, title, and content
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    // then saying lets store those strings inside of a object
    const blogPost = {
      username: username,
      title: title,
      content: content,
      date: new Date().toLocaleString(),
    };
    // this is to read the data read the item as string then convert to JSON object then i had to stringify the entire array and store in localStorage.
    let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    blogPosts.push(blogPost);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    window.location.href = "blog.html";
  });
// this is the toggle switch for the home page so every page has its own switch
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
