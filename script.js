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
        post.style.display = title.includes(searchValue) ? '' : 'none';
    });
}

// Preview Image
function previewImage(input) {
    const preview = document.getElementById('image-preview');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
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
        <img src="" alt="Blog Image" style="width:100%;">
        <p>${content}</p>
        <span class="view-count">Views: 0</span>
        <button class="edit-post" onclick="editPost(this.parentElement)">Edit</button>
        <button class="delete-post" onclick="deletePost(this.parentElement)">Delete</button>
        <div class="social-share">
            <a href="https://facebook.com/sharer/sharer.php?u=yoururl.com" target="_blank">Share on Facebook</a>
            <a href="https://twitter.com/intent/tweet?text=Check out this blog&url=yoururl.com" target="_blank">Share on Twitter</a>
        </div>
    `;
    
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            post.querySelector('img').src = e.target.result;
        };
        reader.readAsDataURL(imageFile);
    }

    document.getElementById('blog-posts').appendChild(post);

    // Reset form after submission
    document.getElementById('new-blog-form').reset();
    document.getElementById('image-preview').style.display = 'none';
}

// Edit Post
function editPost(postElement) {
    const title = postElement.querySelector('h2').textContent;
    const content = postElement.querySelector('p').textContent;
    
    document.getElementById('title').value = title;
    document.getElementById('content').value = content;

    deletePost(postElement);
}

// Delete Post
function deletePost(postElement) {
    postElement.remove();
}

// Newsletter Subscription
function subscribeNewsletter() {
    const email = document.getElementById('email').value;
    alert("Subscribed with email: " + email);
    // Here, implement backend code to handle subscriptions
}
