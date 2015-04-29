(function(){
  var images = [];
  var catData = [];
  var refresh = refresh;
  $.ajax({
  url:('https://api.imgur.com/3/album/DDoWy'),
  method: 'GET',
  headers: {'Authorization': 'Client-ID f5b73f08e320402'}
  })
  .done(function(res) {
    images = res.data.images
    main();
  })
  .fail(function(err) {
  });

  var main = function() {
  var pic1 = Math.floor(Math.random() * images.length -1);
  var pic2 = Math.floor(Math.random() * images.length -1);
  $('#left').attr('src', images[pic1].link);
  $('#right').attr('src', images[pic2].link);
  for (var i = 0; i < images.length; i++) {
    catData.push(new catModel(images[i].link));
  }
  };
  var catModel = function(link){
    this.link = link;
    this.votes = 0;
  };
 $('#left').on('click', function(event) {
    var sel = event.target.src;
    var votes = 0;
    for (var i = 0; i < catData.length; i++) {
      if (sel == catData[i].link) {
        catData[i].votes++;
      }
    }
  doughChart.segments[0].value++;
  doughChart.update();
    $(this).css("color", "red");
  });

 $('#right').on('click', function(event) {
    var sel = event.target.src;
    var votes = 0;
    for (var i = 0; i < catData.length; i++) {
      if (sel == catData[i].link) {
        catData[i].votes++;
      }
    }
  doughChart.segments[1].value++;
  doughChart.update();
    $(this).css("color", "blue");
 });

 $('#refresh').on('click', function() {
    location.reload();
 });

 $('#right').css('cursor', 'pointer');
 $('#left').css('cursor', 'pointer');
 $('#refresh').css('cursor', 'pointer');

 var ctx = $("#voteschart").get(0).getContext("2d");
 var data = [
        {
            label: "Left Kitty",
            value: 1,
            color: '#ff0000'
        },
        {
            label: "Right Kitty",
            value: 1,
            color: '#ffffff'
        }
    ]
  var doughChart = new Chart(ctx).Doughnut(data);
  doughChart.update();
})();
//C++, Java, JS, C#, Rails, Angular.JS, Scheme, JS
