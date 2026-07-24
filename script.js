// so much empty
window.addEventListener("load", function () {
    const fetchButton = document.getElementById("fetchButton");
    const postList = document.getElementById("postList");
    const errorDiv = document.getElementById("error");

    function renderPosts(posts) {
        postList.innerHTML = "";
        if (!posts || posts.length === 0) {
            postList.textContent = "No posts found.";
            return;
        }

        posts.forEach(function (post) {
            const article = document.createElement("article");
            article.className = "post";

            const title = document.createElement("h3");
            title.textContent = post.title;

            const body = document.createElement("p");
            body.textContent = post.body;

            article.appendChild(title);
            article.appendChild(body);
            postList.appendChild(article);
        });
    }

    function fetchPosts() {
        errorDiv.textContent = "";
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(function (response) {
                if (!response.ok)
                    throw new Error("Network response was not ok");
                return response.json();
            })
            .then(function (json) {
                renderPosts(json);
            })
            .catch(function (error) {
                console.error("Error fetching posts:", error);
                errorDiv.textContent = "Error fetching posts.";
            });
    }

    fetchButton.addEventListener("click", fetchPosts);
});