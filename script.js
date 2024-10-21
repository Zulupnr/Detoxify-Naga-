
// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Search Functionality
function searchPosts() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    });
}

// Submit New Blog Post
function submitPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const category = document.getElementById('category').value;
    const tags = document.getElementById('tags').value;
    const imageFile = document.getElementById('image-upload').files[0];

    const post = document.createElement('div');
    post.className = 'post';

    post.innerHTML = `
        <h2>${title}</h2>
        <img src="${URL.createObjectURL(imageFile)}" alt="Blog Image" />
        <p>${content}</p>
        <span class="view-count">Views: 0</span>
        <button class="edit-post" onclick="editPost(this)">Edit</button>
        <button class="delete-post" onclick="deletePost(this)">Delete</button>
        <div class="comments">
            <h4>Comments</h4>
            <form onsubmit="addComment(event, post)">
                <input type="text" placeholder="Add a comment..." required>
                <button type="submit">Comment</button>
            </form>
            <div class="comment-list"></div>
        </div>
    `;

    document.getElementById('blog-posts').appendChild(post);
    document.getElementById('new-blog-form').reset();
}

// Edit Post
function editPost(postElement) {
    const post = postElement.parentElement;
    const title = post.querySelector('h2').textContent;
    const content = post.querySelector('p').textContent;
    
    document.getElementById('title').value = title;
    document.getElementById('content').value = content;

    post.remove(); // Remove original post after editing
}

// Delete Post
function deletePost(postElement) {
    const post = postElement.parentElement;
    post.remove();
}

// Add Comment
function addComment(event, post) {
    event.preventDefault();
    const commentInput = post.querySelector('input[type="text"]');
    const comment = commentInput.value;

    const commentList = post.querySelector('.comment-list');
    const commentElement = document.createElement('div');
    commentElement.textContent = comment;
    commentList.appendChild(commentElement);

    commentInput.value = ''; // Clear input after comment
}
