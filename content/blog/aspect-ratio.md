+++
title = "Aspect Ratio"
date = 2021-10-21
[taxonomies]
tags = ["aspect-ratio", "css"]
categories = ["CSS"]
+++

Suppose you want to insert an image and fix the image size to aspect ratio of `16:9`.

For example, if you want the width of image to be `1600px`, then the height will be `900px`.

First, you will need a wrapper that wraps the image, so think it as a picture frame.

```html
<!-- aspect-ratio.html -->

<div class="wrapper>
    <img
      src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      alt="Mario"
    />
</div>
```

```css
/* styles.css */

.wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}
```

Since the wrapper will be the frame for the image, we make the position relative.

Next, we will finally insert an image to the frame with CSS.

```css
/* styles.css */

/* ... */

/* Added */
img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

And, that's it.

The source code can be found [here](https://codepen.io/sugoier/pen/gOxLwPd) on CodePen.
