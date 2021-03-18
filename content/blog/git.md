+++
title = "Git"
date = 2020-12-02
+++

- Remove files that are listed in the .gitignore but still on the remote repository:

  ```bash
  # 1. Remove the file(s) that you want to untrack from .gitignore

  # 2. Remove them with:
  git rm --cached file1 file2 dir/file3

  # Or, if you have a lot of files:
  git rm --cached `git ls-files -i --exclude-from=.gitignore`
  ```

  Here is [the stackoverflow link](https://stackoverflow.com/questions/13541615/how-to-remove-files-that-are-listed-in-the-gitignore-but-still-on-the-repositor) for reference.

- Quick way to create a branch and check it out in one line:

  ```bash
  git checkout -b branch1
  ```

- Split git commit into multiple commits:

  > Suppose you have a commit that `README.md` and `file1.txt` have changes,
  > and you want to split the commit into one with just `README.md` and another with `file1.txt`.

  ```bash
  # 1. Run interactive rebase
  # Change `n` to appropriate number.
  # For example, if the commit is located in the second from HEAD,
  # then you would run `git rebase -i HEAD~2`
  # If it's the very first commit, then `git rebase -i --root`.
  git rebase -i HEAD~n

  # 2. pick -> edit

  # 3. git reset HEAD^

  # 4. Add, commit, and continue with `git rebase --continue`.

  # 5. Repeat until you are done splitting the commit.

  # 6. Force push?
  ```

- List tracked files:

  ```bash
  git ls-files
  ```
