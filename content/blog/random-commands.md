+++
title = "Random Commands"
date = 2021-03-17
[taxonomies]
tags = ["linux"]
categories = ["programming"]

+++

- Print system information

  ```bash
  # The following should print out `Linux` if you are on linux.
  uname

  # The following will print out all the information about your system.
  uname -a

  # I mostly use the following command to get the basic but sufficient information about my current system.
  uname -srm
  ```

- View processes

  ```bash
  top

  # Alternatively `htop`, but it needs to be installed.
  # Example: `sudo dnf install htop`.
  htop
  ```

- man - an interface to the system reference manuals

  ```bash
  # Basic usage:
  man <something>

  man man

  man ascii
  ```
