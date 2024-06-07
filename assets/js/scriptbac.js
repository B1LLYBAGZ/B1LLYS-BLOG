window.onload = function () {
  const blogContent = document.getElementById("blogContent");
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  // unstringify as i like to call it is to read the data read the item as string then convert to JSON object
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
  // this is our posted entrys going inside a div inside that div theres your h2 h3 and p as well as hr elemnets but there really not elements there objects.
};
// again this is the toggle button so each individual page has the option to chose between light and dark and store that to local storage
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
