---
layout: post.njk
title: "Write better skip link labels"
shareTitle: "Write better accessibility skip link labels"
teaser: "Have a website? You likely need a skip link. How should you label a skip link? Come learn."
date: 2024-03-05
tags: ['accessibility', 'copywriting']
---

Around the web, I sometimes see "Skip to main" as the visual label for skip links that take people to the main content of the page. This is problematic.

## What's a main, anyway? 

Saying "Skip to main" isn't valuable to everyone. This is due to the technical nature of what a "main" is.

What "main" refers to in the context of the web is the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main'>HTML <code>&lt;main&gt;</code> element</a>. This element should contain the most relevant information of any given web page.

Browsing a web page about available mortgage rates? The mortgage rate information should go inside the <code>&lt;main&gt;</code> element. 

So, by skipping to the main element, if web authors have done their job, people can rest easy knowing they're about to skip sitewide navigation or paranthetical information and cut right to what they came to learn about.

## What's a skip link?

Skip links are a valuable accessibility feature that web authors add to their web pages. They are links that serve a special purpose: they allow people to quickly _skip over_ parts of a web page.

These navigational links are useful for people browsing with a keyboard (by using Tab and Shift-Tab) or assistive technology that are limited to sequential navigation.

Skip links are often implemented as the first tabbable item on a website. Again, this is a great consideration for anyone that's browsing a web page in sequential order from top-to-bottom. As soon as you navigate to a web site, try pressing the Tab key to see if there's a skip link set up.

## Which phrase is best?

### Skip navigation

### Skip to main content

### Skip to content

### Skip to main

Telling someone they can "skip to content" is better than "skip to main". That much is true. That said, everything on your website is content to a visitor. 


## Examples around the web

Let's take a look around the web at other examples of skipping content—not only for accessibility.

- Recipe sites often employ "Jump to recipe". This lets you skip over the recipe instructions and preamble about substitutes, etc.
- Many article-reading sites like news outlets and the like employ "Back to top" since their web articles are often long and require a lot of scrolling. Instead of forcing someone to scroll back to the top of the page, they can opt to click a button and zoom right back up.

## Recommendation

1. Use the context of what the page's content is about. to deliver the highest level of understanding for your skip link. Would the skip link direct your user to an article? Mention "Skip to article"; would it take them to a recipe? "Skip to recipe". (I can't tell you how badly I want that on recipe sites.)

2. Use "Skip to main content".

Don't take my word for it: [WebAIM suggests "Skip to main content"](https://webaim.org/techniques/skipnav/#wording) as well.


## Spiritual sisters

Some other skipping mechanisms that follow the skip link spirit are:
- Netflix's "Skip intro" and "Skip recap" buttons
- Recipe sites with "Jump to Recipe" buttons

While skip links are often included 