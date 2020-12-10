+++
title = "Hugo quickstart"
date = 2020-12-01
+++

Here is a quick tutorial on how to get started with Hugo, the super fast framework for building websites. (Although this website is built with Zola...)

I'm glad if this post could help someone get started with it too! &#128521;

\
There will be two parts:

_**Part 1 Quickstart**_

_**Part 2 Deploying to GitHub Pages**_

---

### Part 1: Quickstart

I assume that you already have hugo installed on your machine, so I'll skip that part.

1. `$ hugo new site quickstart` to generate a hugo website. You can **replace** `quickstart` with whatever name you like.

2. `$ cd quickstart` to go to the folder you just created.

3. `$ git init` to initialize a git repo.

4. `$ git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke` to install a theme you like. In this example, we are installing `ananke` theme.

5. `$ echo 'theme = "ananke"' >> config.toml` to use the theme. Or open the folder in your favorite text editor, open the config.toml file, and write `theme = "ananke"`.

6. `$ hugo new posts/my-first-post.md` to create a new post.

7. `my-first-post.md` should look like the following.

```bash
---
title: "My First Post"
date: 2019-03-26T08:47:11+01:00
draft: true
---
```

Sometimes, it's `+++` instead of `---`, so you might have to modify that manually.

8. Write anything you want in `my-first-post.md` and that's pretty much it for the first part!

9. `$ hugo server -D` or `$ hugo server -t <your-theme>` (if you use a theme) to see what your website looks like. &#128521;

<hr>

### Part 2: Deploying to GitHub Pages

I assume that you already have a GitHub account.

1. Create a new repository `<your-blog>`.

2. Create another repository, but this time the name should be `<your-user-name>.github.io`.

3. `$ git clone <your-blog>` or `$ git remote add origin <url-to-your-blog-repo>` to skip step 4.

4. Move all the files and folders in your `quickstart` into `<your-blog>` repo.

5. Make sure your website works locally by running `$ hugo server` or `$ hugo server -t <your-theme>`.

6. `$ git submodule add -b master https://github.com/<your-user-name>/<your-user-name>.github.io.git public` to create a git submodule.

7. Run `$ hugo` or `$ hugo -t <your-theme>` (if you use a theme). This should create a public folder in your working directory.

8. `$ cd public` and all that's left to do is to `git add`, `git commit`, and `git push` it.

```bash
$ git add .
$ git commit -m "Your comment."
$ git push -u origin master
```

9. Now go to `https://<your-user-name>.github.io`, and you should see your website running!

**_Fin._**
