+++
title = "Pipenv"
date = 2021-03-20
[taxonomies]
tags = ["pipenv", "python"]
categories = ["programming"]

+++

- Create a virtual enronment with `pipenv`:

  ```bash
  pipenv shell
  ```

- Run python files:

  ```bash
  # 1. If you are in the environment, then
  python <file-name>

  # 2. If not, then
  pipenv run python <file-name>
  ```

- Install packages:

  ```bash
  pipenv install <pkg-name>

  # Or if it's a dev-dependency, e.g. autopep8
  pipenv install <pkg-name> --dev
  ```

- Other frequently used commands:

  ```bash
  # List installed packages:
  pipenv lock -r

  # Check package vulnerabilities:
  pipenv check

  # After editing `pyton_version` in `Pipfile` to whatever version you want to use,
  # run tis command to apply the update.
  # This will remove the currenct environment and create a new one with the updated version.
  pipenv --python <python-ver>

  # Uninstall package(s):
  pipenv uninstall <pkg-name>

  # Remove the current virtual environment:
  pipenv --rm
  ```
