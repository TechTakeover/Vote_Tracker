$.ajax({
  url:('https://api.imgur.com/3/album/DDoWy'),
  method: 'GET',
  headers: {'Authorization': 'Client-ID f5b73f08e320402'}
})
.done(function(res) {
 var images = res.data.images
  // renderImages(images);
  console.dir(images)
})
.fail(function(err) {
});
