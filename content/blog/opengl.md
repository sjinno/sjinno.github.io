+++
title = "OpenGL on Fedora 33"
date = 2021-04-14
[taxonomies]
tags = ["opengl", "tutorial", "fedora", "glfw", "glad"]
+++

# Installation requirements:

-   **GLFW:** <https://www.glfw.org/download.html>

-   **GLAD:** <https://github.com/Dav1dde/glad> or <https://glad.dav1d.de>

\

# Useful links:

-   [**How to build & install GLFW 3 and use it in a Linux project** (Stack Overflow)](https://stackoverflow.com/questions/17768008/how-to-build-install-glfw-3-and-use-it-in-a-linux-project)

-   [**Issue compiling with GLAD - C++** (Reddit)](https://www.reddit.com/r/opengl/comments/blqgoy/issue_compiling_with_glad_c/)

\
\

# Step 1: Install GLFW and GLAD

After installing GLFW,

1. `cd <source-directory>`

2. `cmake -G "Unix Makefiles"`

3. `sudo dnf install dnf-utils glfw`

4. `make`

5. `sudo make install`

After installing GLAD,

1. ```bash
   sudo ln -s <path/to/glad> /usr/local/include/glad

   # In my case,
   sudo ln -s ~/glad/include/glad /usr/local/include/glad
   ```

2. You will need `glad.c` when compiling, so put it in the project directory or wherever you can remember.

\

# Step 2: Compile

1. Grab an example code from [here](https://learnopengl.com/code_viewer_gh.php?code=src/1.getting_started/3.2.shaders_interpolation/shaders_interpolation.cpp) and name it `shaders.cpp`.

2. Compile `shaders.cpp` with:

    ```bash
    g++ -std=c++11 -c shaders.cpp <path/to/glad.c>

    # In my case,
    g++ -std=c++11 -c shaders.cpp ~/glad/src/glad.c
    ```

3. Output an executable file with:

    ```bash
    g++ shaders.o glad.o -o shaders.exec -lGL -lglfw3 -lX11 -lpthread -ldl
    ```

4. Finally execute with:

    ```bash
    ./shaders.exec
    ```

    And you should see something like this:

    ![triangle](/images/blog/shaders.webp)

\

# Finally...

If this didn't help, you should be missing more required packages and you want to google until you find an answer. I don't know anything about C/ C++, so it was kind of confusing to learn how to link stuff and whatnot, but eventually I found the answers I needed. :)

Good luck!
