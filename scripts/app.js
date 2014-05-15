var images = ["images/8747121-attractive-young-businesspeople-having-discussion-in-boardroom.jpg", "images/18192239-data-center-and-server-room-with-sign.jpg", "images/club-dj.jpg", "images/coffee-9.jpg", "images/MenloPark.jpg", "images/stock-analyst.jpg", "images/stock-photo-business-people-talking-during-conference-break-networking-153117176.jpg", "images/it_photo_87772.jpg"];
var questions = ["Is this the next trillion-dollar idea?", "Can we realize 10<sup>10<sup>x</sup></sup> growth, sustainably?", "Is there life before Series A?", "Can you monetize the mobile social?", "Can you take big data one bigger?", "Can we help you democratize disruption?"];
var load = function(){
  document.body.style['background-image'] = "url(" + images[Math.floor(Math.random()*images.length)] + ")";
  document.getElementById('question').innerHTML = questions[Math.floor(Math.random()*questions.length)];
  setTimeout(function(){
    document.getElementById('slogan').style.opacity = 0.6;
  }, 3000);
};
