// humburger-menu
const breakpoint = 750;

$(function () {
  
  // ハンバーガークリックしたら×にする。navを出す
  $('.navbar-humburger').on('click', function () {
    $('.navbar-humburger').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
  });
  
  // ハンバーガーNavリンクをクリックしたらクリアする
  $('.nav-item a').on('click', function () {
    if ($('.navbar-humburger').hasClass('close')) {
      $('.navbar-humburger').toggleClass('close');
      $('.nav-wrapper').fadeToggle(500);
    }
  });
  
  // リサイズして幅が大きい状態になったら元に戻す
    $(window).on('resize', function () {
    if ($(window).width() >= breakpoint) {
      $('.navbar-humburger').css('display', 'none');
      $('.nav-wrapper').css('display', 'block');
    } else if ($(window).width() <= breakpoint) {
      $('.navbar-humburger').css('display', 'block');
      $('.nav-wrapper').css('display', 'none');
    }
  });
  
  // リサイズした時に小さくなったら切り替える
  // $(window).on('resize', function () {
  //   if ($(window).width() <= breakpoint) {
  //     $('.navbar-humburger').css('display', 'block');
  //     $('.nav-wrapper').css('display', 'none');
  //   }
  // });
  
  // close中にリロード、リサイズしたらクリアする
  $(window).on('load resize', function () {
    if ($('.navbar-humburger').hasClass('close')) {
      $('.navbar-humburger').removeClass('close');
      $('.nav-wrapper').css('display', 'none');
    }
  });
  
  
});

  // スムーズスクロール
  $(function () {
  const headerHeight = $('header').height(); // headerの高さを代入
  const speed = 1000; // スクロールスピードを代入
  $('a[href^="#"]').on('click', function () { //#から始まるaタグをクリックした時に
    const href = $(this).attr('href'); // hrefの属性を代入
    const offset = $(href).offset().top; // 代入した属性までの距離を代入
    // #~だったらheader分差し引いたところに移動
    $('html, body').animate({scrollTop: offset - headerHeight}, speed, 'swing');
  });
});

// フェードイン
$(function () {
  // ロードしたら全体をふわっとさせる
  $(window).on('load', function () {
    $('body').hide().fadeIn(1000);
  });

    // スクロールしたら次の処理を行う
  $(window).scroll(function () {
    
    $('.effect-fade').each(function () { // それぞれの.effect-fadeに
      const elementPosition = $(this).offset().top; // その要素の位置を取得
      const windowHeight = $(window).height(); // windowの高さを取得
      const scroll = $(window).scrollTop(); // スクロールした時のtopの高さを取得
      if ( scroll > elementPosition - windowHeight) { //要素位置がwindowの底辺にきたら
        $(this).addClass('effect-scroll');
      }
    });
  });
  jQuery(window).scroll();
});

