window.onload = function () {
  const blogContent = document.getElementById("blogContent");
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  blogPosts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("blog-post");
    postDiv.innerHTML = `
            <h2>Title :${post.title}</h2>
            <h3>User name: ${post.username} on ${post.date}</h3>
            <p>${post.content}</p>
            <hr>
        `;
    blogContent.appendChild(postDiv);
  });
};
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
