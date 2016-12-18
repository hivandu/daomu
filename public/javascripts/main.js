// 监视设备方向
window.addEventListener("orientationchange", function() {
  media();
}, false);


$(function() {
  // 根据设备尺寸，限定根字体大小
  var size = $(window).width() / 25;
  $('html').css('font-size', size);
  $('.video-img a').click(function() {
    event.preventDefault();
    $('#mod_player').css({ 'display': 'inline-block' });
    playMV();
  });
});

function playMV() {
  var modDiv = document.getElementById('mod_player');
  var video = new tvp.VideoInfo();
  video.setVid("y0199423z08");
  var player = new tvp.Player();
  player.create({
    width: '100%',
    height: '100%',
    video: video,
    modId: "mod_player",
    autoplay: true,
    onallended: function() {
      modDiv.style.display = 'none';
    }
  });
}


function media(argument) {
  // 因为获取尺寸出错，需要延迟获取
  setTimeout(function(){
    var size = $(window).width() / 25;
    console.log('the device size: '+size);
    $('html').css('font-size', size);
  }, 200);  
}
