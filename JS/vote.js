'use strict';
(function(){
  var images = [];
    $.ajax({
  url:('https://api.imgur.com/3/album/DDoWy'),
  method: 'GET',
  headers: {'Authorization': 'Client-ID f5b73f08e320402'}
  })
.done(function(res) {
  images = res.data.images
  // renderImages(images);
  console.dir(images[0]);
  main();
})
.fail(function(err) {
});

// window.voteapcw = {};
// voteapcw.getData();
var main = function () {
var pic1 = Math.floor(Math.random() * images.length -1);
var pic2 = Math.floor(Math.random() * images.length -1);
$('#left').css('background-image','url('+ images[pic1].link + ')');
$('#right').css('background-image', 'url('+ images[pic2].link + ')');
for (var i = 0; i < images.length; i++) {

}
};
})();
