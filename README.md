
This is the repository for the ASOA website at http://alliedseabreeze35.org.

Design and content management is deliberately simple and as non-technical
as possible so that people without extensive HTML experience can contribute
changes and maintain the site. Pages are composed in [Kramdown][kramdown] (a Markdown
variant) with smatterings of raw HTML only when necessary. You may occasionally
see markup like this:

    <div class="clearfix" markdown="1">

    Page content here

    </div>

This is an HTML block necessary for formatting. The `markdown` attribute signals
that the Kramdown parser should format the contents of the block.

The other item to note is that there are lots of document links that look like this:

    [Document Title]({{site.docs}}/document.pdf)

Here, `site.docs` is a site variable set in `_config.yml` and the double handle
bars replace the variable name with its value when the site is rebuilt.  This
lets you easily change all the document links if the site or the documents
directory is moved. For example, the original setting for this variable is:

    site: "http://alliedseabreeze35.org/files/Download"

But if the site is redeployed you could change it to one of these:

    site: "/pdf_files"  # documents in a sub-directory on the same web server
    site: "http://archive.alliedseabreeze35.org/files" # documents on a different server


## References ##

* [Kramdown][kramdown] - for page composition and styling.
  This is 90% of what is needed to update the site; the rest is mostly optional
* [SASS](https://sass-lang.com/documentation/) - for style sheets in "assets/css"
* [Liquid](https://shopify.github.io/liquid/) - for page templates in "\_layouts"
* [Jekyll](https://jekyllrb.com/) - for building the site
* [Github Pages](https://pages.github.com/) - for pulling together all the pieces above

[kramdown]: https://kramdown.gettalong.org/documentation.html
