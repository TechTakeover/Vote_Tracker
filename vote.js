var Pictures = function(cats, images, votes, photos, url) {
  this.cats = cats;
  this.images = images;
  this.url =url;
  this.photos = [];
};

Pictures.prototype.rotation = function() {
  var photos = [];
  for(var i = 0; i > 4; i++) {
    photos.push('../CatPics/' + i +'.jpg');

  };
};

var leftEl = document.getElementById('Left');
leftEl.style.backgroundImage = url(' + this.photos[Math.floor(Math.random) * 4)] + ');

var rightEl = document.getElementById('Right');
rightEl.style.backgroundImage = url(' + photos[Math.floor(Math.random) * 4)] + ');

  // var Votes = function(votes) {
  //   this.votes = votes;
  // };

  // var Chart = function() {
  //   Chart Function
  // };

