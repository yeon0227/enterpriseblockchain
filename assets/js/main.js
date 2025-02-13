
gsap.defaults ({
  ease:"none",
})

// header lang-box
$('#header .nav .header-lang').click(function (e) { 
  e.preventDefault();
  $('#header .nav .lang-list').toggleClass('show');
});
$(window).scroll(function () {
  $('#header .nav .lang-list').removeClass('show');
});

// .sc-identity .group-identity Text
const identityText = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-identity .group-identity',
    start: 'top top',
    end: '100% 100%',
    scrub: 0,
    onLeave: function(){
      $('.sc-identity .group-identity .scroll-down').addClass('none');
    },
    onEnterBack: function(){
      $('.sc-identity .group-identity .scroll-down').removeClass('none');
    }
  }
})
identityText
  .to('.sc-identity .group-identity .text-area', { background: 'rgba(0,0,0,0.6)' },'<')
  .to('.sc-identity .group-identity .text1', { autoAlpha: 1 },'<')
  .to('.sc-identity .group-identity .text1', { autoAlpha: 0,
    onStart:function(){
      $('#header').addClass('show');
    },
    onReverseComplete:function(){
      $('#header').removeClass('show');
    }
   }) 
  .to('.sc-identity .group-identity .text2', { autoAlpha: 1 })
  .to('.sc-identity .group-identity .text2', { autoAlpha: 0 })
  .to('.sc-identity .group-identity .text3', { autoAlpha: 1 })
  .to('.sc-identity .group-identity .text3', { autoAlpha: 0 })
  .to('.sc-identity .group-identity .text4', { autoAlpha: 1 });

// .sc-identity .group-intro Text
const introText = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-identity .group-intro',
    start: 'top top',
    end: '100% 100%',
    scrub: 0,
  }
})
introText
  .from('.sc-identity .group-intro .text-top-area',{ autoAlpha: 0 })
  .from('.sc-identity .group-intro',{ '--opacity': 0 },'<')
  .to('.sc-identity .text-top-area .desc:nth-child(1)',{ xPercent: 100 })
  .to('.sc-identity .text-top-area .desc:nth-child(3)',{ xPercent: -100 },'<')
  .to('.sc-identity .group-intro',{ '--opacity': 0 },'<')
  .to('.sc-identity .group-intro .text-top-area',{ autoAlpha: 0 })
  .to('.sc-identity .group-intro .img:nth-child(3)',{ height: 0 })
  .to('.sc-identity .group-intro .img:nth-child(2)',{ height: 0 })
  .from('.sc-identity .group-intro .text-bott-area',2,{ autoAlpha: 0 })
  .to('.sc-identity .group-intro',2,{ '--opacity': 0.7 },'<');

//  header dark-mode1
const darkMode = gsap.timeline({
  scrollTrigger:{
    trigger: '.sc-job .group-job',
    start: '0% 5%',
    endTrigger: '.sc-job .group-talent',
    end: '100% 50%',
    toggleClass: {
      targets: '#header',
      className: 'dark',
    }
  }
});

// .sc-job .group-value text,box
function sideMotion (frame){
  const valueText = gsap.timeline({
    scrollTrigger:{
      trigger: frame,
      start:'0% 70%',
      end:'100% 100%',
      scrub: 0,
    }
  })
  valueText
    .from(frame, { '--value': 0, ease: "power1.inOut" });
}

sideMotion('.sc-job .group-value');

// .sc-job .group-talent 
gsap.to('.sc-job .group-talent .content-area', {
  scrollTrigger: {
    trigger: '.sc-job .group-talent .head-area',
    start: 'top top',
    end: '+=250%',
  }
});

//  background dark-mode
const darkBgMode = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-possible',
    start: '0% 50%',
    endTrigger: '.sc-asset',
    end: '0% 40%',
    toggleClass: {
      targets: 'body',
      className: 'dark',
    },
  }
});
const darkBgMode2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-asset',
    start: '0% 50%',
    endTrigger: '#footer',
    end: '100% 100%',
    toggleClass: {
      targets: 'header',
      className: 'dark',
    },
  }
});

// sc-possible row-scroll
const possibleRow = gsap.timeline({
  scrollTrigger:{
    trigger: '.sc-possible',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
  }
})
possibleRow.to('.sc-possible .possible-inner',{ 
  xPercent : -100,
  x: function (){
    return window.innerWidth - 100;
  }
 });

// .sc-proof .group-banner
const banner = gsap.timeline({
  scrollTrigger:{
    trigger:'.sc-proof .group-banner',
    start:'0% 95%',
    end:'100% 30%',
    scrub: 0,
  }
})
banner
  .to('.sc-proof .group-banner .banner-con', 1, { xPercent:0, x:0})
  .to('.sc-proof .group-banner .title-area', 1, { 
    delay: 0.5,
    autoAlpha:1,
    onStart: function(){
      $('.sc-proof .group-banner .content-area').addClass('show');
    },
    onReverseComplete: function(){
      $('.sc-proof .group-banner .content-area').removeClass('show');
    }
  })

// .sc-safe .group-service
const serviceRow = gsap.timeline({
  scrollTrigger:{
    trigger: '#safe1',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
  }
})
serviceRow
.to('#safe1 .card-item', 1, { 
  onStart: function(){
    $('#safe1 .card-item').addClass('active');
  },
  onReverseComplete: function(){
    $('#safe1 .card-item').removeClass('active');
  }
},'a')
.to('#safe1 .con-inner', 1,{
  x: function (){
    return $('#safe1 .headline').outerWidth()*-1
  }
},'a')
.to($('#safe1 .card-item')[1], 1, {
  xPercent: -100,
  x: -40,
},'b-=0.5')
.to($('#safe1 .card-item')[2], 1, {
  xPercent: -100*2,
  x: -40*2,
},'b-=0.5')
.to($('#safe1 .card-item')[3], 1, {
  xPercent: -100*3,
  x: -40*3,
},'b-=0.5')
.to('#safe1 .unlock', 0.5, {
  autoAlpha: 0,
},'c-=1') 
.to('#safe1 .lock', 0.5, {
  autoAlpha: 1, 
},'c-=0.5') 
.to('#safe1 .lock', 0.5, {
  autoAlpha: 0,
},'c-=0.5') 

// .sc-safe .group-openservice 
gsap.set('#safe2 .openservice-card',{ autoAlpha:0 });

const openService = gsap.timeline({
  scrollTrigger:{
    trigger: '#safe2',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
    onEnter: function (){
      gsap.set('#safe2 .openservice-card',{ autoAlpha:1 });
      gsap.set('#safe1 .card-inner',{ autoAlpha:0 });
    },
    onLeaveBack: function (){
      gsap.set('#safe2 .openservice-card',{ autoAlpha:0 });
      gsap.set('#safe1 .card-inner',{ autoAlpha:1 });
    },
  }
})
openService.to('#safe2 .openservice-title', { 
  autoAlpha:1 
},'-=3');

// .sc-safe .group-card
gsap.set('#safe3 .lock-item', { autoAlpha: 0 });

const card = gsap.timeline({
  scrollTrigger:{
    trigger: '#safe3',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
    onEnter: function(){
      gsap.set('#safe2 .openservice-card', { autoAlpha: 0 });
      gsap.set('#safe3 .lock-item', { autoAlpha: 1 });
    },
    onLeaveBack: function(){
      gsap.set('#safe2 .openservice-card', { autoAlpha: 1 });
      gsap.set('#safe3 .lock-item', { autoAlpha: 0 });
    }
  }
})
card
.to('#safe3 .card-item', 1, { 
  onStart: function(){
    $('#safe3 .card-item').addClass('active');
  },
  onReverseComplete: function(){
    $('#safe3 .card-item').removeClass('active');
  }
},'a')
.to($('#safe3 .card-item')[1], 1, { xPercent: -100, x: -40, },'a')
.to($('#safe3 .card-item')[2], 1, { xPercent: -100*2, x: -40*2, },'a')
.to($('#safe3 .card-item')[3], 1, { xPercent: -100*3, x: -40*3, },'a')

// .sc-safe .group-card
gsap.set('#safe4 .card-text', { autoAlpha: 0 });

const safeText = gsap.timeline({
  scrollTrigger:{
    trigger: '#safe4',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 0,
    onEnter: function(){
      gsap.set('#safe3 .card-item', { autoAlpha: 0 });
      gsap.set('#safe4 .card-text', { autoAlpha: 1 });
    },
    onLeaveBack: function(){
      gsap.set('#safe3 .card-item', { autoAlpha: 1 });
      gsap.set('#safe4 .card-text', { autoAlpha: 0 });
    }
  }
})
safeText
.to('#safe4 .card-item', 1, { 
  onStart: function(){
    $('#safe4 .card-item').addClass('active');
  },
  onReverseComplete: function(){
    $('#safe4 .card-item').removeClass('active');
  }
},'a')
.to('#safe4 .who-text',{
  autoAlpha: 1,
},'a')

// .sc-asset .group-global text,box
sideMotion('.sc-asset .group-global');

// .sc-asset .group-asset
const asset = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-asset .group-asset",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    toggleClass: "show",
    onUpdate: function(self){
      if (self.progress >= 0.5) {
        $('.sc-asset .bottom-wrapper .text1').hide();
        $('.sc-asset .bottom-wrapper .text2').show();
      } else {
        $('.sc-asset .bottom-wrapper .text1').show();
        $('.sc-asset .bottom-wrapper .text2').hide();
      }
    }
  },
})
asset
.to('.sc-asset .group-asset .card-item', 1,{
  onStart: function(){
    $('.sc-asset .group-asset .card-item').addClass('active');
  },
  onReverseComplete: function(){
    $('.sc-asset .group-asset .card-item').removeClass('active');
  }
},'a')
.to('.sc-asset .group-asset .top-wrapper', 1,{
  xPercent : -100,
  x: function (){
    return window.innerWidth - 100;
  }
},'a');

// sc-creator .group-creat
gsap.set('.sc-creator .group-creat .text-area',{ autoAlpha:0 })
gsap.set('.sc-creator .group-creat .scroll-down',{ autoAlpha:0 })

const creat = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-creator .group-creat",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
  }
})
creat
.to(".sc-creator .group-creat .text-area",{
  autoAlpha: 1,
})
.to(".sc-creator .group-creat .scroll-down",{
  autoAlpha: 1,
})
.to(".sc-creator .group-creat .text-area",{
  autoAlpha: 0,
},'opacity')
.to(".sc-creator .group-creat .scroll-down",{
  autoAlpha: 0,
},'opacity')

// sc-creator .group-use
const use = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-creator .group-use",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
  },
})
use
.to('.sc-creator .group-use .card-item', 1,{
  onStart: function(){
    $('.sc-creator .group-use .card-item').addClass('active');
  },
  onReverseComplete: function(){
    $('.sc-creator .group-use .card-item').removeClass('active');
  }
},'a')
.to('.sc-creator .group-use .con-inner', 1,{
  xPercent : -100,
  x: function (){
    return window.innerWidth - 100;
  }
},'a');

// sc-innovation
const innovationBtn = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-innovation",
    start: "0% 0%",
    end: "100% 100%",
    onEnter: function(){
      $('.btn-top').addClass('show');
    },
    onReverseComplete: function(){
      $('.btn-top').removeClass('show');
    },
  },
})

// join marquee
$(window).on("scroll", function () {
  let marquee = $(".join.marquee");
  let marqueeTop = marquee.offset().top;
  let scrollTop = $(window).scrollTop();
  let windowHeight = $(window).height();

  if (scrollTop + windowHeight > marqueeTop) {
    marquee.addClass("show");
  } else {
    marquee.removeClass("show"); 
  }
});

// aside btn-top
ScrollTrigger.create({
  trigger:".sc-identity .group-intro",
  start: "0% 0%",
  endTrigger:".sc-innovation",
  end: "100% 100%",
  onUpdate:function(self){
    if(self.direction == -1) {
      $('.btn-top').addClass('show');
    }else {
      $('.btn-top').removeClass('show');
    }
  },
  onLeaveBack:function(){
    $('.btn-top').removeClass('show');
  }
});

$('.btn-top').click(function (e) { 
  e.preventDefault();
  
  $('html, body').animate({ scrollTop: 0 }, 'smooth'); 
});