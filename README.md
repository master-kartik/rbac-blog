
Here’s a restructured and cleaner version of your README:

RBAC-BLOG
A full-stack blog application with role-based user structure, offering two roles: Admin and User. Admins can access a complete dashboard to perform actions like creating posts, deleting posts, and managing users.

Table of Contents
Overview
Features
Project Structure
Getting Started
Prerequisites
Installation
Usage
Overview
RBAC-BLOG is designed to implement role-based access control. It provides:

Admin Role: Full dashboard access to manage posts and users.
User Role: Basic access to view and interact with posts.
Project Structure
lua
Copy
Edit
rbac-blog/
├── client
│   ├── .contentlayer
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── README.md
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── src
│   ├── tailwind.config.js
│   └── vite.config.js
└── server
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── src
Getting Started
Prerequisites
Before you begin, make sure your environment meets the following requirements:

Programming Language: JavaScript
Package Manager: npm
Installation
Follow these steps to install RBAC-BLOG:

Clone the repository:

sh
Copy
Edit
git clone https://github.com/master-kartik/rbac-blog
Navigate to the project directory:

sh
Copy
Edit
cd rbac-blog
Install dependencies for both client and server:

sh
Copy
Edit
npm install
Usage
Run the project locally:

Start the client:

sh
Copy
Edit
cd client
npm run dev
Start the server:

sh
Copy
Edit
cd server
npm run dev
Open your browser and visit:
http://localhost:5173/

Credentials
Use the following credentials to log in:

Admin User:

Email: admin@gmail.com
Password: 11111
Test User:

Email: user1@user.com
Password: 11111
Note: Ensure the .env file is correctly configured for the server.
