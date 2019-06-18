// var contolIndex = new root.controlIndex(len);
(function ($, root) {
   var contolIndex = null;
   var audio = root.audioManager;
   console.log(audio)
   function musicList(music) {
      for (var key in music) {
         // console.log(key, music[key])
         var str = '<div class="song-wrap">\
            <div class = "song-list"> \
               <div class="geming">' + music[key].song + ' </div>\
               <div class="geshou">' + music[key].singer + '</div>\
               <img class = "gonggao" src = "../images/gongao.png">\
            </div>\
            </div>';
         $(".song-box").append(str);
      }
       $(".song-wrap").each(function (index, ele) {
          console.log(index, ele)
          $(".song-wrap").eq(index).on("click", function () {
             $(".gonggao").eq(index).css({
                display: "block"
             })

             var str = ' <div class="song-name">' + music[index].song + '</div>\
                   <div class="singer-name">' + music[index].singer + '</div>\
                   <div class="album-name">' + music[index].album + '</div>';
             $('.song-info').html(str);
              audio.getAudio(music[index].audio);
              root.render(music[index]);
                audio.play();
                // 进度条开始计时
                root.pro.start();
                // root.pro.start();
                var deg = $('.img-box').attr('data-deg') || 0;
                rotated(deg);
             $('.play').toggleClass('playing');
          })
         //  喇叭播放显示
           $(".control .list").on("touchstart", function (e) {           
                 $(".song-menu").css({
                    display: "block"
                 })
           })
       })
     
      $(".song-menu .close").on("touchstart", function (e) {
         e.preventDefault();
         $(".song-menu").css({
            display: "none"
         })
      })
   }
   
   root.musicList = function (data) {
      musicList(data)
   }
})(window.Zepto, window.player || (window.player = {}));