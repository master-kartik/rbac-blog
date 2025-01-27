
<p align="center"><h1 align="center">RBAC-BLOG</h1></p>


##  Deployed URL
Check the deployment here :  https://rbac-blog.onrender.com/



##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)

---

##  Overview

This is a full stack blog application with role based user structure it has two roles admin and user. Admin can see full dashboard perform actions like creating a post and deleting post and users etc.


##  Project Structure

```sh
└── rbac-blog/
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
```


##  Getting Started
###  Prerequisites

Before getting started with rbac-blog, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm



###  Installation

Install rbac-blog using one of the following methods:

**Build from source:**

1. Clone the rbac-blog repository:
```sh
❯ git clone https://github.com/master-kartik/rbac-blog
```

2. Navigate to the project directory:
```sh
❯ cd rbac-blog
```


###  Usage
Run this locally rbac-blog using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ cd server
```
```sh
❯ npm run builld
```
```sh
❯ npm start
```

Credentials
Use the following credentials to log in:

Admin User:

Email: admin@gmail.com
Password: 11111
Test User:

Email: user1@user.com
Password: 11111



Note: Ensure the .env file is correctly configured for the server.