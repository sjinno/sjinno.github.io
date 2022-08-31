+++
title = "Styling Scrollbar"
date = 2021-10-21
[taxonomies]
tags = ["css"]
categories = ["CSS"]
+++

## Sources

- **W3Schools**: <https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp>
- **DigitalOcean**: <https://www.digitalocean.com/community/tutorials/css-scrollbars>

  \
  \

**1. Hide scrollbar, but keep its functionality.**

```css
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
  display: none;

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
```
