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

You can also create a macro so that you don't have to repeat writing `println!("{:#?}", var);` whenever you want to debug your code.

```rust
macro_rules! printf {
    ($v:expr) => {
        println!("{:#?}", $v);
    }
}
```

Now everytime you'll have to write `println!("{:#?}", var);`, you can just simply write `printf!(var);`. Then it should give you the same result.

<br>

### Converting f64 to Duration

Now we are actually going to get started on the problem. To begin with, let's convert one second of Earth time into year unit. So we'll have to devide 1 by 31557600 (60 sec \* 60 min \* 24 hr \* 365.25 d).

```
struct Duration(f64);

impl From<u64> for Duration {
    fn from(s: u64) -> Self {
        Duration((s as f64) / (31_557_600 as f64))
    }
}
```
