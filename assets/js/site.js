
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

    if( siteConfig.pdfDir ) {
        $('a[href^="_PDF_/"]').each(function() {
            var url = $(this).attr('href');
            $(this).attr('href', siteConfig.pdfDir + url.substr(6));
        });
    }
});
