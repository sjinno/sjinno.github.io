+++
title = "Rust: Macro"
date = 2020-12-16
+++

I have never really used `macro` in Rust, but recently I encountered a problem that would definitely simplify the code. So I would like to leave a note on that so I can remind myself of the usage in the future.

The problem is from weiste called [exercism](https://exercism.io), which is a great website and I highly recommend it to whomever trying to learn new programming languages.

\
\

## What problem are we trying to solve here using Macro?

The problem we're solving in this post is that _"Given seconds(age) as an input, we want to calculate how old the person would be on different planets."_ To simplify the problem, we are only going to calculated it for Mercury(`0.2408467` Earth years) , Mars(`1.8808158` Earth years), Jupiter(`11.862615` Earth years), and Neptune(`164.79132` Earth years).

\
\

### First step

Let's first look at a super simple example:

```rust
macro_rules! hello {
    () => {
        println!("Hello!");
    }
}
```

This macro does not take any argument and prints "Hello!" when you invoke it as `hello!();`.
