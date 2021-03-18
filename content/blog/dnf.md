+++
title = "DNF"
date = 2021-03-17
+++

- How not to include specific packages to update:

  ```bash
  # Formula:
  sudo dnf update --exclude=<pkg-name>

  # For example, if you want to skip `texlive-...` to update,
  # then you would run:
  sudo dnf update --exclude=texlive-\*
  ```

- Search specific package:

  ```bash
  # Formula:
  sudo dnf search <pkg-name>

  # e.g.
  sudo dnf search sox
  ```

- Check if specific package is installed:

  ```bash
  # Formula:
  dnf list installed "<pkg-name>"

  # e.g.
  dnf list installed "postgresql*"

  # Alternatively, you can also do this:
  dnf list installed | grep postgresql
  ```

- Remove specif package:

  ```bash
  # Formula:
  sudo dnf remove <pkg-name>

  # e.g.
  sudo dnf remove zathura
  ```
