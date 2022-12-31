
$(document).ready(function() {

    $('img[src^="assets/images/"]').each(function() {
        // give images a wrapper to facilitate captions and formatting
        $(this).wrap($('<div/>').addClass('image-wrapper'));
        var wrapper = $(this).parent();

        // Add classes from img to wrapper
        wrapper.addClass($(this).attr('class'));
        // $(this).removeAttr('class');

        // create HTML from image's title attribute
        if( $(this).attr('title') ) {
            wrapper.append($('<span/>').addClass('title').append($(this).attr('title')));
        }
    });

    /* You can prefix a hyperlink with _DOCS_ to refer to the document directory.
       The code below replaces the macro with a variable from the site configuration.
       The JS approach is deprecated in favor of generating actual links when the site is built,
       but it's here for reference.
    */
    if( siteConfig.docs ) {
        $('a[href^="_DOCS_"]').each(function() {
            var url = $(this).attr('href');
            $(this).attr('href', siteConfig.docs + url.substr(6));
        });
    }
});
