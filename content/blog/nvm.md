+++
title = "Node Version Manager"
date = 2021-08-13
[taxonomies]
tags = ["nvm"]
categories = ["programming"]

+++

You can get nvm here: <https://github.com/nvm-sh/nvm>

\

- Check which version of node you currently use

```bash
nvm current
```

- List all versions of node you have installed on your machine

```bash
nvm ls
```

- Install a specific version of node

```bash
nvm install 14.17.5
# will install v14.17.5

# Or you can also do
nvm install --lts
# to install the latest LTS release
# --lts means only select from LTS (long-term support) versions

# And then,
nvm use 14.17.5
# to switch to a specific version

# And then, run
nvm install-latest-npm
# to upgrade to the latest working `npm` on the current node version
```
