function dynamicImageLoader() {
  $('.dynamic-image-trigger').on('click', function() {
    dynamicTarget = $('.dynamic-image-tag');
    source = $(this);
    targetSrc = source.attr('data-src');
    dynamicTarget.attr('src', targetSrc)
  })
}

$(document).ready(function() {
  dynamicImageLoader();
})
