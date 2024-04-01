// header
$(function(){
    $('.mviewimg').click(()=>{
        $('.rview').fadeToggle(500)
    })
    const icon = $('.lview li')
    console.log(icon)
    h = $('.rview li')
    contents = $('.mcontainer .section')

    icon.click(function(){
        let icdx = $(this).index()
        console.log(icdx)
        let isection = contents.eq(icdx)
        console.log(isection)
        let isectionD = isection.offset().top
        $('html, body').animate({
            scrollTop : isectionD
        })
    })

    h.click(function(){
        let ihdx = $(this).index()
        console.log(ihdx)
        let hsection = contents.eq(ihdx)
        console.log(hsection)
        let hsectionD = hsection.offset().top
        $('html, body').animate({
            scrollTop : hsectionD
        })
    })

    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({
          scrollTop: 0
        },500)
      })
})

// main

// slide

new Swiper(".profile", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mouseheel: false,
    keyboard: true,
    loof: true,
    speed: 200,
    autoplay: {
    delay: 7800,
  },
    
  });



  // clone cording

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth * 0.8; 
  canvas.height = window.innerHeight * 0.8; 

  const tube = {
      x: canvas.width / 2,
      y: canvas.height,
      width: canvas.width * 0.8, 
      height: -canvas.height * 0.8, 
  };

  class Bubble {
      constructor() {
          this.radius = Math.random() * 5 + 2; 
          this.x = Math.random() * canvas.width;
          this.y = canvas.height;
          this.dy = Math.random() * 2 + 1;
          this.color = `rgba(255, 255, 255, ${Math.random()})`;
      }

      draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
      }

      update() {
          this.y -= this.dy;
          this.draw();

          
          if (this.y < tube.y + tube.height + this.radius) {
              this.x = Math.random() * canvas.width;
              this.y = canvas.height;
              this.dy = Math.random() * 2 + 1;
              this.color = `rgba(255, 255, 255, ${Math.random()})`;
              this.radius = Math.random() * 5 + 2; 
          }
      }
  }

  const bubbles = [];
  for (let i = 0; i < 30; i++) {
      bubbles.push(new Bubble());
  }

  function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#718760';
      ctx.fillRect(tube.x - tube.width / 2, tube.y, tube.width, tube.height);

      bubbles.forEach(bubble => {
          bubble.update();
      });
  }

  animate();

   AOS.init();
