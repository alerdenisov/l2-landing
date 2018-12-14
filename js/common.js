$(document).ready(function(){

(function() {
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


$('img').each((i,val) => {
   let sourceImg = $(val).data('src');
   if(sourceImg) {
      $(val).attr('src', sourceImg);
    };
}); 

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
 
let pointlineWidth;

function calculatePointline() {
  pointlineWidth = [];
  $(".pointline").each(function(i){
  let self = this;
  pointlineWidth.push($(self).css('width'));
})
  $(".pointline").css('width', 0);
}

calculatePointline();


function drawPL() {
$(".pointline").each(function(i){ 
  let self = this;
  $(self).addClass('active');
  setTimeout(function() {
  $(self).css('width', pointlineWidth[i]);
  }, 400);
})
}

function resetPointline() {
    $(".pointline").removeAttr("style");    
    if(!$('.circle-image').hasClass('active')) {
      setTimeout( function(){    
      calculatePointline();
    },1000)
    }
}


  let loyallineWidth = [],
      loyallineHeight = [];

  $(".loyalline").each(function(i){
    let self = this;
    loyallineWidth.push($(self).css('width'));
    loyallineHeight.push($(self).css('height'));
  });

$(".loyalline").css({'width': 0, 'height': 0});

function drawLL() {
$(".loyalline").each(function(i){
  let self = this;
  $(self).addClass('active');
  setTimeout(function() {
  $(self).css('width', loyallineWidth[i]);
  $(self).css('height', loyallineHeight[i]);
  }, 1000);
})
}


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
    
   function setSlickLine(duration){
    $('.roadmapline').css('left', -offSetLeft);
    $('.roadmapline.line-gray').css('width', lineWidth);
    setTimeout(() => {
    $('.roadmapline.line-green').css('width', activeWidth);   
    }, duration || 0 ) 
   } 
  
  $(window).resize(function(){
      calculeValues();
      if ($('.roadmap__slider').hasClass('isactive')) {
        setSlickLine();
      }    
      resetPointline();
  })  

 
setTimeout(function() {
$(".menu-line").each(function(i) {
    $(this).delay(100 * i).animate({
      'opacity': 1,
      'translateY': '0px'
    }, 2000 )
  });
}, 2000);


setTimeout(function() {
$(".lines-link").addClass('active');
}, 2500);

setTimeout(function() {
$(".stock__img").css({'opacity': 1});
}, 1000);

setTimeout(function() {
$(".stock__info__picture .light_wrapper").addClass('active');
}, 5000);


function animateText(eleClass, duration){
    setTimeout(function() {
    $(eleClass).css({'opacity': 1, 'transform': 'translateY(0)'});
  }, duration);
};

function animateActiveClass(eleClass, duration){
  setTimeout(function() {
  $(eleClass).addClass('active');
  }, duration);
};

function animateImage(eleClass, duration){

  setTimeout(function() {
  $(eleClass).addClass('active');
  }, duration);

  setTimeout(function() {
  $(eleClass).parent().addClass('active');
  }, duration * 5);

};

var waypoints = $('.lines-text').waypoint({
  handler: function(direction) {
    animateText(this.element, 200);
    this.destroy();
  }, 
  offset: '90%'
})

var waypoints = $('.greenline').waypoint({
  handler: function(direction) {  
    animateActiveClass(this.element, 300);
    this.destroy();
  }, 
  offset: '90%'
})

var waypoints = $('.light_wrapper img').waypoint({
  handler: function(direction) {  
    animateImage(this.element, 300);
    this.destroy();
  }, 
  offset: '70%'
})


var waypoints = $('.loyalty__item__icon').waypoint({
  handler: function(direction) {
    let self = this.element; 
    animateImage(this.element, 300);
    drawLL();
    this.destroy(); 
  }, 
  offset: '95%'
})


var waypoints = $('.greencircle__item').waypoint({
  handler: function(direction) {
    drawPL();
    setTimeout(function() {
    $('.greencircle__image__inner').addClass('active');
    }, 1400);
    this.destroy();
  }, 
  offset: '90%'
})

var waypoints = $('.exchange__table__inner').waypoint({
  handler: function(direction) {
    $($(".exchange__table .tr").get().reverse()).each(function(i) {
    let self = this;
    setTimeout(function() {    
    $(self).addClass('active');
    }, 100 * i);
    setTimeout(function() { 
    $(".exchange__table").addClass('active');
    }, 2000);    
  });
    this.destroy();
  }, 
  offset: '30%'
})


var waypoints = $('.support__img').waypoint({
  handler: function(direction) {
  $(".support__img__item").each(function(i){
    let self = this;
    setTimeout(function() {
    $(self).addClass('active');
  }, 150*i);
  })
  this.destroy();
  }, 
  offset: '80%'
})

var waypoints = $('.footer__header__info').waypoint({
  handler: function(direction) {
  $(".contact__info__item").each(function(i){
    let self = this;
    setTimeout(function() {
    $(self).addClass('active');
  }, 550*i);
  })
  animateActiveClass($('.footer__header__info .subscribe'), 1600);
  this.destroy();
  }, 
  offset: '80%'
})

var waypoints = $('.stock__info .subscribe').waypoint({
  handler: function(direction) {
  // console.log(this.element);    
    animateActiveClass(this.element, 900);
    this.destroy();
  }, 
  offset: '80%'
})


var waypoints = $('.footer__body').waypoint({
  handler: function(direction) {
  $(".contact__ico__item").each(function(i){
  let self = this;
  setTimeout(function() { 
  $(self).addClass('active');
}, 200*i);
})
  this.destroy();
  }, 
  offset: '80%'
})

var waypoints = $('.footer__bottom').waypoint({
  handler: function(direction) {
  animateActiveClass(this.element, 1000);
  this.destroy();
  }, 
  offset: '90%'
})

var waypoints = $('.roadmap__slider').waypoint({
  handler: function(direction) {
  setTimeout(setSlickLine(2200), 1000);
  setTimeout(function() {
  $(".slick-dots li").each(function(i){
  let self = this;
  setTimeout(function() {
  $(self).addClass('isactive');
  }, 300*i);
  })
  }, 2000);
  setTimeout(function() {
  $(".roadmap__slider").addClass('isactive');
  }, 2500);
  this.destroy();
  }, 
  offset: '60%'
})

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

$('.email').on("change", function(){
    let self = $(this);
       
    if (self.val()) {
        self.next().addClass('hasData');
    } else {
        self.next().removeClass('hasData');
    }
});    

if ($(window).width() > 575) {
  $(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) {
    sticky.addClass('fixed');
    $('main').css('padding-top', '91px');
  } else {
    sticky.removeClass('fixed');
    $('main').css('padding-top', 0);
  };
});
}

     
setTimeout(function() {
   $('#burger_mobile').css('opacity', 1);
 }, 1500) 

    
});