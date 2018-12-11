$(document).ready(function(){

  
// $('.roadmap__slider').slick({
//   dots: true,
//   initialSlide: 2,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });

  let offSetLeft,
      lineWidth,
      activeWidth,
      spanTitle = $('.slider__head h4.data'),
      slickDots = $('.slick-dots li'),
      menuMob = $('.animate_bg'),
      menuActive = false;
  
//   function calculeValues() {
//       offSetLeft  = $('.container').offset().left + 12;
//       lineWidth   = $(window).width();
//       activeWidth = $('li.slick-active').offset().left;
//   }  
  
//     calculeValues();
        
  
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
    
//    function setSlickLine(){
//     $('.roadmapline').css('left', -offSetLeft);
//     $('.roadmapline.line-gray').css('width', lineWidth);
//     $('.roadmapline.line-green').css('width', activeWidth); 
//    } 
//     setSlickLine();

//   slickDots.each((i,val) => {
//       $(val).prepend(`<span class="slick__span">${$(spanTitle[i]).text()}</span>`);
//       if (i < 3) $(val).addClass('active');
//   });
  
//   $(window).resize(function(){
//       calculeValues();
//       setSlickLine();
//   })  
    

//   $('.slick-dots li, .slick-prev, .slick-next').click((e) => {
//    let active = $('li.slick-active');
//        active = (active[0] === slickDots[slickDots.length-1])? lineWidth : active.offset().left;
 
//    return $('.roadmapline.line-green').css('width', active);   
//   });
  
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