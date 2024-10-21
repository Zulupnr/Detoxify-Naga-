
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9;
    color: #333;
}

/* Header Styles */
header {
    background: #333; /* Dark Background */
    color: white;
    padding: 10px 20px;
    text-align: center;
}

header h1 {
    margin: 0;
}

nav {
    margin-top: 10px;
}

nav ul {
    list-style: none;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

input[type="text"], input[type="email"], input[type="password"] {
    padding: 5px;
    margin-left: 10px;
}

/* Main Styles */
main {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.auth, .blog-form, .sidebar {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    flex: 1;
    margin: 0 10px;
}

.auth h3, .blog-form h3 {
    margin-bottom: 15px;
}

input, textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background: #333; /* Dark Button Background */
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background: #444; /* Darker on Hover */
}

/* Blog Post Styles */
#blog-posts {
    flex: 2;
}

.post {
    background: white;
    margin: 20px 0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.post h2 {
    color: #333; /* Dark Text for Titles */
}

.view-count {
    font-weight: bold;
}

/* Sidebar Styles */
#sidebar {
    background: #f1f1f1;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    flex: 1;
    margin-left: 10px;
}

/* Footer Styles */
footer {
    background: #333; /* Dark Footer Background */
    color: white;
    text-align: center;
    padding: 10px 20px;
    position: relative;
    bottom: 0;
    width: 100%;
}

/* Dark Mode Styles */
.dark-mode {
    background-color: #333;
    color: white;
}

.dark-mode input,
.dark-mode textarea,
.dark-mode button {
    background-color: #444;
    color: white;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    main {
        flex-direction: column;
    }

    #sidebar {
        margin-left: 0;
        margin-top: 20px;
    }
}
