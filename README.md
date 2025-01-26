
<p align="center"><h1 align="center">RBAC-BLOG</h1></p>


##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

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



<details open>
	<summary><b><code>RBAC-BLOG/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- client Submodule -->
		<summary><b>client</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/.eslintrc.cjs'>.eslintrc.cjs</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/postcss.config.js'>postcss.config.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/vite.config.js'>vite.config.js</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/index.html'>index.html</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/index.css'>index.css</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/App.jsx'>App.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/main.jsx'>main.jsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>lib</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/lib/utils.js'>utils.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/Spotlight.jsx'>Spotlight.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/DashSidebar.jsx'>DashSidebar.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/ScrollToTop.jsx'>ScrollToTop.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/Header.jsx'>Header.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/CallToAction.jsx'>CallToAction.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/PrivateRoute.jsx'>PrivateRoute.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/DashPosts.jsx'>DashPosts.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/Footer.jsx'>Footer.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/DashProfile.jsx'>DashProfile.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/DashboardComp.jsx'>DashboardComp.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/DashUsers.jsx'>DashUsers.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/OnlyAdminPrivateRoute.jsx'>OnlyAdminPrivateRoute.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/ThemeProvider.jsx'>ThemeProvider.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/components/PostCard.jsx'>PostCard.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>pages</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/pages/PostPage.jsx'>PostPage.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/pages/SignUp.jsx'>SignUp.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/pages/UpdatePost.jsx'>UpdatePost.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/pages/Search.jsx'>Search.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/pages/Projects.jsx'>Projects.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/pages/About.jsx'>About.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/pages/SignIn.jsx'>SignIn.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/pages/Dashboard.jsx'>Dashboard.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/pages/CreatePost.jsx'>CreatePost.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/pages/Home.jsx'>Home.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>redux</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/redux/store.js'>store.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>theme</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/redux/theme/themeSlice.js'>themeSlice.js</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>user</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/redux/user/userSlice.js'>userSlice.js</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>ui</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/ui/wobble-card.jsx'>wobble-card.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/src/ui/aurora-background.jsx'>aurora-background.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>.contentlayer</b></summary>
				<blockquote>
					<details>
						<summary><b>generated</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/client/.contentlayer/generated/index.d.ts'>index.d.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- server Submodule -->
		<summary><b>server</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/.env'>.env</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/index.js'>index.js</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>middlewares</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/middlewares/authMiddleware.js'>authMiddleware.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/middlewares/roleMiddleware.js'>roleMiddleware.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>config</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/config/dbCon.js'>dbCon.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>controllers</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/controllers/authController.js'>authController.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/controllers/userController.js'>userController.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/controllers/blogController.js'>blogController.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>models</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/models/blogModel.js'>blogModel.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/models/userModel.js'>userModel.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>routes</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/routes/authRoutes.js'>authRoutes.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/routes/blogRoutes.js'>blogRoutes.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/routes/userRoutes.js'>userRoutes.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/master-kartik/rbac-blog/blob/master/server/src/utils/error.js'>error.js</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
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

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```



###  Usage
Run this locally rbac-blog using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ cd client
```
```sh
❯ cd npm run dev
```
```sh
❯ cd server
```
```sh
❯ cd npm run dev
```