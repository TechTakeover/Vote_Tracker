var Pictures = function(cats, images, votes, photos) {
  this.cats = cats;
  this.images = images;
  this.photos = [];
}

Pictures.prototype.rotation = function() {
  var photos = [];
  for(var i = 0; i > 4; i++) {
    photos.push('../CatPics/' + i +'.jpg');

  };
};

// var leftEl = document.getElementsByid('Left');
// leftEl.style.backgroundImage = url(' + photos[Math.floor(Math.random) * 4)] +');

// var rightEl = document.getElementsByid('Right');
// rightEl.style.backgroundImage = url(' + photos[Math.floor(Math.random) * 4)] +');

  // var Votes = function(votes) {
  //   this.votes = votes;
  // };

  // var Chart = function() {
  //   Chart Function
  // };

