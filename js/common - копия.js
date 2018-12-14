$(document).ready(function(){

$('.roadmap__slider').slick({
  dots: true,
  initialSlide: 2,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
  let offSetLeft,
      lineWidth,
      activeWidth,
      spanTitle = $('.slider__head h4.data'),
      slickDots = $('.slick-dots li'),
      menuMob = $('.animate_bg'),
      menuActive = false;
  
  function calculeValues() {
      offSetLeft  = $('.container').offset().left + 12;
      lineWidth   = $(window).width();
      activeWidth = $('li.slick-active').offset().left;
  }  
  
    calculeValues();
  
    slickDots.each((i,val) => {
      $(val).prepend(`<span class="slick__span">${$(spanTitle[i]).text()}</span>`);
      if (i < 3) $(val).addClass('active');
  });     
  
    function closeMobMenu() {
      menuMob.css('transform', 'translateY(-100%)'); 
      menuActive = false;
      $('.animate_bg').css('background', 'rgba(0,0,0, .3)')
      $('.nav_mob .nav__link').css('opacity', '0');
     }  
    
    $('#burger_mobile').click( function(){

    if(!menuActive) {

      menuActive = true;
      menuMob.css('transform', 'translateY(0)');
      $('.animate_bg').css('background', '#1a2229');
      setTimeout(() =>{
        $('.nav_mob .nav__link').each(function(i, item){ 
          setTimeout(() => $(item).css('opacity', '1'), 100*i)
      });  
      }, 800); 
    } else {
      closeMobMenu();
    }        
  });
    
   function setSlickLine(){
    $('.roadmapline').css('left', -offSetLeft);
    $('.roadmapline.line-gray').css('width', lineWidth);
    $('.roadmapline.line-green').css('width', activeWidth); 
   } 
    // setSlickLine();
  
  $(window).resize(function(){
      calculeValues();
      setSlickLine();
  })  
// var opac = anime({
//   targets: '.lines-text',
//   translateY: {
//     value: ['30%', 0],
//     duration: 500
//   },
//     opacity: {
//     value: 1,
//     duration: 2500
//   },
//   easing:'linear',
//   delay: function(el, index) {
//     return index * 100;
//   }
// });
// }, 2000);

// setTimeout(function() {
// var opac = anime.timeline()
// opac
// .add({
//   targets: '.menu-line',
//   translateY: {
//     value: ['30%', 0],
//     duration: 500
//   },
//     opacity: {
//     value: 1,
//     duration: 1000
//   },
//   easing:'easeOutBack',
//   delay: function(el, index) {
//     return index * 100;
//   }
//   })
// .add({
//   targets: '.lines-text',
//   translateY: {
//     value: ['30%', 0],
//     duration: 500
//   },
//     opacity: {
//     value: 1,
//     duration: 1500
//   },
//   easing:'linear',
//   delay: function(el, index) {
//     return index * 300;
//   }
// })
// .add({
//   targets: '.lines-link',
//   opacity: 1,
//   duration: 1000
// })
// .add({
//   targets: '.stock__img',
//   opacity: 1,
//   duration: 2000,
//   easing: 'linear',
//   offset: 2000,
//   complete: function() {
//     $('.stock__info__picture .light_wrapper').addClass('active');
//   }
// })
// }, 2000);
 
// setTimeout(function() {
//   $('.lines-text').each((i,e) =>{
//     setTimeout(function() {
//     $(e).css({
//     'opacity': 1,
//     'transform': 'translateY(0%)'
//     });
//   }, 400*i);
//   })
// }, 3000);
setTimeout(function() {
$(".menu-line").each(function(i) {
    $(this).delay(100 * i).animate({
      'opacity': 1,
      'translateY': '0px'
    }, 2000 )
  });

// $(".lines-text").each(function(i) {
//   let self = this;
//   setTimeout(function() {
//     $(self).css({'opacity': 1, 'transform': 'translateY(0)'});
//   }, 600* i);
// });

$(".lines-text").each(function(i) {
  let self = this;
    $(self).css({'opacity': 1, 'transform': 'translateY(0)'});
});

setTimeout(function() {
$(".lines-link").css({'opacity': 1, 'transform': 'translateY(0)'});
}, 1200);

}, 800);


setTimeout(function() {
$(".stock__img").css({'opacity': 1});
}, 1000);
setTimeout(function() {
$(".stock__info__picture .light_wrapper").addClass('active');
}, 5000);

setTimeout(function() {
$(".greenline").addClass('active');
}, 1000);

setTimeout(function() {
$(".subscribe").addClass('active');
}, 1000);

setTimeout(function() {
$(".scheme_full").addClass('active');
}, 1000);

setTimeout(function() {
$(".animate_scheme .light_wrapper").addClass('active');
}, 2000);


setTimeout(function() {
  $($(".exchange__table .tr").get().reverse()).each(function(i) {
  let self = this;
  // let selfIn = $(self).find('.td');
  setTimeout(function() {    
    $(self).addClass('active');
    }, 100 * i);
     
    // $(selfIn).each(function(i,e){
    //   setTimeout(function() { 
    //   $(e).addClass('active');
    //   }, 150 * i);
    // })
});
}, 2000);

setTimeout(function() {
$(".brokers_full").addClass('active');
}, 3000);
setTimeout(function() {
$(".animate_brokers .light_wrapper").addClass('active');
}, 4000);


setTimeout(function() {
$(".chart-img").addClass('active');
}, 3000);


let pointlineWidth = [];

$(".pointline").each(function(i){
  let self = this;
  pointlineWidth.push($(self).css('width'));
})

console.log(pointlineWidth);

$(".pointline").css('width', 0);

setTimeout(function() {
$(".pointline").each(function(i){
  let self = this;
  $(self).css('width', pointlineWidth[i]);
})
}, 3000);

setTimeout(function() {
$(".circle-image").addClass('active');
}, 2000);

setTimeout(function() {
$(".greencircle__image .light_wrapper").addClass('active');
}, 4000);

setTimeout(function() {
$(".greencircle__image__inner").addClass('active');
}, 5000);

let loyallineWidth = [],
    loyallineHeight = [];

$(".loyalline").each(function(i){
  let self = this;
  loyallineWidth.push($(self).css('width'));
  loyallineHeight.push($(self).css('height'));
})

$(".loyalline").css({'width': 0, 'height': 0});

setTimeout(function() {
$(".loyalline").each(function(i){
  let self = this;
  $(self).css('width', loyallineWidth[i]);
  $(self).css('height', loyallineHeight[i]);
})
}, 6000);


setTimeout(function() {
$(".profile-img").addClass('active');
}, 1000);

setTimeout(function() {
$(".loyalty .light_wrapper").addClass('active');
}, 10000);

setTimeout(function() {
$(".loyalty__item__icon").each(function(i){
  let self = this;
  setTimeout(function() {
  $(self).addClass('active');
}, 500*i);
})
}, 2000);

setTimeout(function() {
$(".slick-dots li").each(function(i){
  let self = this;
  setTimeout(function() {
  $(self).addClass('isactive');
}, 300*i);
})
}, 2000);

setTimeout(setSlickLine(), 4000)

setTimeout(function() {
$(".roadmap__slider").addClass('isactive');
}, 2000);

setTimeout(function() {
$(".support__img__item").each(function(i){
  let self = this;
  setTimeout(function() {
  $(self).addClass('active');
}, 150*i);
})
}, 2000);

setTimeout(function() {
$(".contact__info__item").each(function(i){
  let self = this;
  setTimeout(function() {
  $(self).addClass('active');
}, 400*i);
})
}, 2000);

setTimeout(function() {
$(".contact__ico__item").each(function(i){
  let self = this;
  setTimeout(function() {
  $(self).addClass('active');
}, 200*i);
})
}, 2000);

setTimeout(function() {
$(".footer__bottom").addClass('active');
}, 2000);
  //   setTimeout(function() {
  //   $(self).find('.td').each(function(in){
  //     let selfIn = this;
  //     $(selfIn).addClass('active');
  // }, 100* in);

// let menuLinks = $('.menu-line');

// for(let i = 0; i < menuLinks.length; i++) {
//   setTimeout(function() {
//   $(menuLinks[i]).css('opacity', 1);
// }, 300*i);
// }
  

    

  $('.slick-dots li, .slick-prev, .slick-next').click((e) => {
   let active = $('li.slick-active');
       active = (active[0] === slickDots[slickDots.length-1])? lineWidth : active.offset().left;
 
   return $('.roadmapline.line-green').css('width', active);   
  });
  
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
        
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        

            
          
          
        if(lineWidth <= 991 && $(event.target).is('img')) {  
        closeMobMenu();   
        }
          
        closeMobMenu();
          
          setTimeout(function(){
            $('html, body').animate({
              scrollTop: target.offset().top -150
            }, 1000);  
          }, 300);
      }
    }
  });     


    
//if(lineWidth <= 557) {
//  $(window).scroll(function (){
//      let windowOfset = $(window).scrollTop();
//
//      if (windowOfset >= 91) {
//          
//          if( !$('header').hasClass('stick') && $('main').css('margin-top')) {
//             $('header').addClass('stick');
//             $('main').css('margin-top', 87); 
//          } else {
//              return
//          }         
//          return;
//      } else {
//          $('header').removeClass('stick');
//          $('main').css('margin-top', 0);
//      }   
//  }); 
// };      

$('.email').on("change", function(){
    let self = $(this);
       
    if (self.val()) {
        self.next().addClass('hasData');
    } else {
        self.next().removeClass('hasData');
    }
});    
    
    
(function animateMenuB() {
  $(function() {
    var duration, open, timing;
    open = false;
    duration = 0.9;
    timing = 'cubic-bezier(0.7, 0, 0.3, 1)';
    Moveit.put(first, {
      start: '0%',
      end: '14%',
      visibility: 1
    });
    Moveit.put(second, {
      start: '0%',
      end: '11.5%',
      visibility: 1
    });
    Moveit.put(middle, {
      start: '0%',
      end: '100%',
      visibility: 1
    });
    $('.trigger, .nav_mobile .nav__link, .header__logo').click(function(e) {
      

      if($(e.target).is('img') && !open) return;
      
      $('body').toggleClass('noScroll');
        
      if (!open) {
        Moveit.animate(first, {
          visibility: 1,
          start: '78%',
          end: '93%',
          duration: duration,
          delay: 0,
          timing: timing
        });
        Moveit.animate(middle, {
          visibility: 1,
          start: '50%',
          end: '50%',
          duration: duration,
          delay: 0,
          timing: timing
        });
        Moveit.animate(second, {
          visibility: 1,
          start: '81.5%',
          end: '94%',
          duration: duration,
          delay: 0,
          timing: timing
        });
      } else {
        Moveit.animate(middle, {
          visibility: 1,
          start: '0%',
          end: '100%',
          duration: duration,
          delay: 0,
          timing: timing
        });
        Moveit.animate(middle, {
          visibility: 1,
          duration: duration,
          delay: 0,
          timing: timing
        });
        Moveit.animate(first, {
          visibility: 1,
          start: '0%',
          end: '14%',
          duration: duration,
          delay: 0,
          timing: timing
        });
        Moveit.animate(second, {
          visibility: 1,
          start: '0%',
          end: '11.5%',
          duration: duration,
          delay: 0,
          timing: timing
        });
      }
      open = !open;
    });
  });

}).call(this);    
 
 $('#burger_mobile').css('opacity', 1);

$('img').each((i,val) => {
   let sourceImg = $(val).data('src');
    $(val).attr('src', sourceImg);
});    
    
});