+++
title = "SSH Basics"
date = 2020-12-11
[taxonomies]
tags = ["ssh", "tutorial"]
+++

# Setting up SSH keys

**References:**

1. [How to Get and Configure Your Git and GitHub SSH Keys](https://www.freecodecamp.org/news/git-ssh-how-to/)
2. [The Ultimate Guide to SSH - Setting Up SSH Keys](https://www.freecodecamp.org/news/the-ultimate-guide-to-ssh-setting-up-ssh-keys/)

If you follow those references above, you will be proabably all set. But I am just going to leave the summary on how to go about setting up multiple SSH keys so that if you have multiple GitHub accounts or some other accounts with GitLab or BitBucket, this post might give you an idea.

\

# 1. Check for existing keys

-   Run `$ ls -al ~/.ssh` to see if you have any **existing** SSH keys.

If you see something like the following output, you should already have an SSH key.

```bash
-rw-------  1 user_name user_name  1766 Jul  7  2018 id_rsa
-rw-r--r--  1 user_name user_name   414 Jul  7  2018 id_rsa.pub
-rw-------  1 user_name user_name 12892 Feb  5 18:39 known_hosts
```

If you don't see any output, you probably don't have any SSH keys.

So run `$ mkdir $HOME/.ssh` to create a `.ssh` directory.

Then generate a new set of keys:

```bash
$ ssh-keygen -t rsa -b 4096 -C your_email@example.com
```

Now run `$ ls -la ~/.ssh` again to see if the set of keys has been generated successfully. 😎

\

# 2. ssh-agent

Run the following command to see if the agent is running:

```bash
$ eval "$(ssh-agent -s)" # for Mac and Linux
```

or

```bash
eval `ssh-agent -s`
ssh-agent -s # for Windows
```

Then add your private key to `ssh-agent`:

```bash
$ ssh-add ~/.ssh/id_rsa
```

After that,

1. Copy your **public key**(`id_rsa.pub`).
2. Sign in to your GitHub account.
3. From your account dropdown, go to _Settings_ -> _SSH and GPG keys_.
4. Click on "**New SSH key**" button.
5. Paste the **copied public key** into the textarea of "**Key**".

Lstly, check your authentication:

```bash
$ ssh -T git@github.com
```

If you see the following message, your SSH key has been successfully set up! 🖖

```
Hi your_user_name! You've successfully authenticated, but GitHub does not provide shell access.
```

\
\
\
\

## So now... How about another account...?

\
\
\

**CAREFULLY** run:

```bash
$ ssh-keygen -t rsa -b 4096 -C your_email@example.com
```

**BUT**, this time, you will have to change the file name **MANUALLY**.

When you run the command above, you should see the following messages:

```
Generating public/private rsa key pair.
Enter file in which to save the key (/home/username/.ssh/id_rsa):
```

When you generated a set of keys for the first time, you didn't really need to specify the file name even though you could have if you wanted to.

_But as you generate more keys, you **MUST** specify the file name._

For example, if you are generating a key for your work, then you might want to enter something like:

```
/home/<your_username>/.ssh/id_rsa_work
```

Now, when you run `$ ls -la ~/.ssh`, you should see the following output or something similar:

```
-rw-------  1 user_name user_name  1766 Jul  7  2018 id_rsa
-rw-r--r--  1 user_name user_name   414 Jul  7  2018 id_rsa.pub
-rw-------  1 user_name user_name  1766 Jul  7  2018 id_rsa_work
-rw-r--r--  1 user_name user_name   414 Jul  7  2018 id_rsa_work.pub
-rw-------  1 user_name user_name 12892 Feb  5 18:39 known_hosts
```

Lastly,`$ ssh-add ~/.ssh/id_rsa_work` and when you `$ ssh-add -l`, you should see all your identities in the output.

\

# 3. Create `~/.ssh/config`

When you have multiple SSH keys, creating `config` file under your `.ssh` directory is a must.

So let's do that.

Run `$ touch ~/.ssh/config` to create `config` file, and then open it with your favorite text editor.

Copy and paste the following as a template:

```bash
# personal
Host github.com # Change `github.com` to the name of your like.
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_personal # Change it to the correct path.

# work
Host github.com-work # Change `github.com-work` to the name of your like.
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_work # Change it to the correct path.
```

In this example, we have configured multiple accounts for GitHub.

\

# 4. How do you switch between identities??

Every terminal session, you will have to `$ ssh-add ~/.ssh/<identity_file>` to add the identity you want to use.

If an identity is somehow already set and you want to switch to a different one, then you will have to `$ ssh-add -D` to drop that identity and `$ ssh-add ~/.ssh/<identity_file>` to add the identity you want to use.

_**You cannot use multiple identities during the same session.**_

And I think that's about it.

One thing to keep in mind is that, if you have globally set github username and email, you might want to configure your `.git` whenever you initialize a git repo:

```bash
$ git config user.name "Your name"
$ git config user.email your_email@example.com
```
