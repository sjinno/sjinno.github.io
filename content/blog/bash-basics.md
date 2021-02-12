+++
title = "Bash basics"
date = 2020-12-03
+++

In this post, I would like to introduce the super basic bash usage.\
The reason why it's super basic is that I myself don't know nothing much about bash, since I've never really used it...

Let's just get started.

1. `$ echo <message>` will print a message that you write. e.g. `$ echo hello world` will print hello world.

2. `$ printf "<message>"` will do the same thing as `$ echo <message>` but requires double quotation marks.\
   e.g. `$ printf "hello, world!\n"` will print hello world.

\
\

### User Input

3. `$ read <var-name>` will prompt the user to input something and store it in <var-name>.\
   e.g. `$ read hello` will prompt you to type something. Suppose you type `konnichiwa`, then typing \
   `$ echo $hello` or `$ printf "$hello"` should print "konnichiwa".\
   \
   **Note** that when you want to access to the data stored in variables, you need `$` in the front.\
   For example,

   ```bash
   $ read greeting
   hello
   $ echo $greeting
   hello
   ```

\
\

### Conditionals

4.  ```bash
    $ if [ "<something1>" = "<something2>" ]; then
      echo <message>
      fi
    ```

    This prints `<message>` if `<something1>` is equal to `<something2>`, which is `True`.

    ```bash
    $ if [ "<something1>" != "<something2>" ]; then
        echo <message1>
      else
        echo <message2>
      fi
    ```

    This prints `<message1>` if `<something1>` is **NOT** equal to `<somethign2>`, which is `False`. \
    Otherwise, prints `<message2>`.\
    Also, you can simply add as many `elif []; then` as you want if you have **multiple** conditions.\
    Also, `and` operator => `&&`, and `or` operator => `||`.\
    So for example,

    ```bash
    $ if [ ... ] || [ ... ]; then
        echo <...>
      fi
    ```

\
\

That's about everything I know so far. There is still more to know---loops, functions, etc.\
 But for now, this suffices my need so... I might post more information as I learn so stay tuned. &#128516;
