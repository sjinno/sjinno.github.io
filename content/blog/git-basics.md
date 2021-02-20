+++
title = "Git Basics"
date = 2020-12-02
+++

I still don't know a lot about what Git really offers, but I'd like to write about my git workflow in case someone finds it helpful.

\
\

### Super basics:

1. `$ git init` to initialize a git repository.

2. `$ git add <file>` to start keeping track of the files you've staged. _It might be a good idea to create_ `.gitignore` _file to not keep track of unnecessary files._

3. `$ git commit -m "Your commit message."`

If somehow you don't want to save the work remotely such as on GitHub, then this is pretty much it unless you make any mistakes.

\
\

### Pushing to a remote repository:

1. Go to GitHub and create a new repository.

2. If you have a work in progress project with git initialized on your local machine, open terminal -> navigate to your project, and `$ git remote add origin <url>`.

   For example,

   ```bash
   $ cd ~/Projects/legendary-potato
   $ git remote add origin git@github.com:<your-gh-username>/legendary-potato.git # FYI, I'm using ssh, so your url might start with https.
   ```

   Otherwise, simply run `$ git clone <url>`, navigate to that folder, and start working on the project.

3. Stage files and commit using the commands 2 and 3 shown in "Super basics" section.

4. `$ git push -u origin master` to push your work to the remote repo.

\
\

## Todo:

- git branch

- git checkout

- git merge

- git rebase

- git reset

- git commit --amend

- git rebase -i HEAD~n where n is the number of commits you want to interact with from HEAD.

- git submodule

- git fetch

- git pull

- git cherry-pick # I don't know anything about this...

- git reflog

- git stash

- git clean

- git switch

- git log

- git tag # ??

- git worktree #???

- git diff

- git bisect # ???

- git rm

- git mv

- git revert # ???

- git grep # ???

- git config
