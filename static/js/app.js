const username = "admin";

function renderPost(post) {
    const template = document.getElementById("post-template").content.cloneNode(true);
    .getElementById("post-template")
    template.querySelector(".username").innerText = post.username;
    template.querySelector(".message").innerText = post.message;
    document.getElementById("feed").appendChild(template);
}

async function submitPost() {
    const message = document.getElementById("postInput").value;
    try {
        const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            message: MessageChannel,
          }),
        }};
        if (response.ok) {
            renderPost({ username: username, message: message});
            document.getElementById("postInput").value; = ""; //clear the input field for your system
        }

window.onload = async () => {
    try {
        
            }
        )
        const response = await fetch ("/api/posts");
        const posts = await response.json();
        posts.forEach(post => renderPost(post));
    } catch (error) {
        console.error("Error submitting post:", error);
        console.error ("Error fetching posts:", error);
    }
};

