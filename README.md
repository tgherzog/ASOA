
This is the repository for the ASOA website at http://alliedseabreeze35.org.

Design and content management is deliberately simple and as non-technical
as possible so that people without extensive HTML experience can contribute
changes and maintain the site. Pages are composed in Kramdown (a Markdown
variant) with smatterings of raw HTML only when necessary. You may occasionally
see markup like this:

    <div class="clearfix" markdown="1">

    ...

    </div>

This is an HTML block necessary for formatting. The `markdown` attribute is necessary
so that the Kramdown parser formats what's inside the block.

## References ##

* [Kramdown](https://kramdown.gettalong.org/documentation.html) - for page composition and styling.
  This is 90% of what is needed to update the site; the rest is mostly optional
* [SASS](https://sass-lang.com/documentation/) - for style sheets in "assets/css"
* [Liquid](https://shopify.github.io/liquid/) - for page templates in "\_layouts"
* [Jekyll](https://jekyllrb.com/) - for building the site
* [Github Pages](https://pages.github.com/) - for pulling together all the pieces above
