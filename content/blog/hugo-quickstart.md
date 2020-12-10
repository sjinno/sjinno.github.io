+++
title = "Hugo quickstart"
date = 2020-12-01
+++

I thought I wanted to leave myself a note on how to go about making a website with Hugo.
Although the documentation explains it clearly enough, I still tend to take too much time getting it to work the way I expect...\
\
So, yeah, I don't want to have to repeat myself again and again learning how to set it up in the future, so here it is for future me and you. &#128521;

There will be two parts:

_**Part 1 Quick Start**_

_**Part 2 Deploying to GitHub Pages**_

---

### Part 1 --- Quick Start

I assume that you already have hugo installed on your system, so I'll skip that procedure.

1. `$ hugo new site quickstart` to generate a hugo website. You can replace `quickstart` with whatever name you like.

2. `$ cd quickstart` to go to the folder you just created.

3. `$ git init` to initialize a git repo.

4. `$ git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke` to install a theme you like.

5. `$ echo 'theme = "ananke"' >> config.toml` to use the theme. Or open the folder on your favorite text editor, open the config.toml file, and write `theme = "ananke"`

6. Next, `$ hugo new posts/my-first-post.md` to create a new post.

7. Next, `my-first-post.md` should look like the following.

```bash
---
title: "My First Post"
date: 2019-03-26T08:47:11+01:00
draft: true
---
```

Sometimes, it's different so you might have to modify the code a bit.

8. Write anything you want in `my-first-post.md` and that's pretty much it for the first part!

9. `$ hugo server -D` or `$ hugo server -t <your-theme>` (if you use a theme) to see what your website looks like. &#128521;

<br>

### Part 2 --- Deploying to GitHub Pages

I assume that you already have your GitHub account.

1. Create a new repository `<your-blog>`

2. Create another repository, but this time the name should be `<your-user-name>.github.io`

3. `$ git clone <your-blog>` or `$ git remote add origin <your-blog-repo-url>` to skip step 4.

4. Move all the files and folders in your `quickstart` to `<your-blog>` repo.

5. Make sure your website works locally by running `$ hugo server` or `$ hugo server -t <your-theme>`.

6. `$ git submodule add -b master https://github.com/<your-user-name>/<your-user-name>.github.io.git public` to create a git submodule.

7. Now, run `$ hugo` or `$ hugo -t <your-theme>` (if you use a theme). This should create a public folder in your working directory.

8. `$ cd public` and all that's left to do is to add, commit, and push it.

```bash
$ git add .
$ git commit -m "your comment"
$ git push -u origin master
```

9. Now when you direct yourself to `https://<your-user-name>.github.io`, you should see your website running.

**That's it!**
