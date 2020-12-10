+++
title = "Git basics"
date = 2020-12-02
+++

1. `$ git init` to initialize a git repo.

2. `$ git config --list` to show your git config.

3. `$ git add <file-name>` to stage your file(s).

4. `$ git commit -m "<your-comment>"` to make a commit.

5. `$ git push` to save your work on your GitHub or GitLab or...?

---

6. `$ git status` to show the current working repo's status.

7. `$ git branch` to show what branches you have.

8. `$ git branch <branch-name>` to create a new branch.

9. `$ git checkout <branch-name>` to work on your branch.

---

10. `$ git reset <commit> { --soft / --mixed / --hard }` (Choose amongst these three. If `--mixed`, you don't need to.) to reset your commit. Default is `--mixed`, so choose `--soft` or `--hard`. `--soft` resets the commit, but everything is still staged. `--mixed` resets the commit and also unstages everything. `--hard` resets the commit and discard all the change you made in your code.

11. `$ git checkout <commit>` --- You can also checkout the previous commits.

12. `$ git checkout -- <file-name>` --- This is especially useful when you accidentally deleted file becasue this command will restore it.

13. `$ git ls-files --deleted` to show accidentally/intentionally deleted files.

\
_**In case you have already also accidentally commited with deleted files, these commands will save you??**_

14. `$ git rev-list -n 1 HEAD -- <file>`

15. `$ git checkout <commit>^ -- <file>`

16. `$ git log --diff-filter=D --summary`

---

### Update 1 --- May 26, 2020 Tuesday

17. `$ git branch -m <new-branch-name>` to modify the branch name.

    Note: This assumes you are currently on the branch you want to rename.

    Otherwise, `$ git branch -m <old-branch-name> <new-branch-name>`

18. `$ git push -d <branch-name>` to delete remote branches.

19. I am not sure if I did this right, but if you want to delete pushed commits(ask yourself if you really need to discard the whole thing permanently so badly), I run `$ git reset --hard <commit-hash>`, then `$ git push -f` to force push, because it might ask you to `$ git pull` first, which I didn't really quite get.

It's good if you don't ever have to, but I screw up all the time so I need to know it for myself... Haha.

_**Also**_,

19. `$ find <directory path> -name ".git"` --- This is a good trick to know. It shows all the git repos in your path.

---

### Update 2 --- June 17, 2020 Wednesday

20. `$ git --amend -m "<comment>"` to edit your comment to the commit.

21. `$ git stash save "<comment>"` to stash your commit.
