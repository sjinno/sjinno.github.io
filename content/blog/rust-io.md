+++
title = "Rust: I/O"
date = 2020-12-04
[taxonomies]
tags = ["rust", "std", "tutorial"]
+++

Input/output in Rust is one of the things that confuses me, so I wanted to drop a quick tutorial on how to io in Rust.

```rs
use std::io;

fn main() {
    // To begin with, let us take an input value.
    print!("Type something... ");
    let mut input_1 = String::new(); // This will prompt a user to input something.
    io::stdin().read_line(&mut input_1).ok().expect("Failed to read line.");
    println!("You typed {}.", input_1);
}
```
