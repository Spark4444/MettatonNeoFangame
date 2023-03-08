


//attack 1(legs)
function attack1(){ 
    projectile.innerHTML = `<img src="img/leg1.png" class="leg1" alt=""><img src="img/leg2.png" class="leg2" alt="">`
    mettaton_gif.style.opacity = "0";
    leg1 = document.querySelector(".leg1");
    leg2 = document.querySelector(".leg2");
  
    function doSomething() {
      number++;
      if(number%3 === 1){
        left1 = randomRange(23,71);
        left2 = randomRange(23,71);
      }
      else if(number%3 === 2){
        top1 = 44;
        top2 = 44;
      }
      else if(number%3 == 0){
        top1 = 19.3;
        top2 = 19.3;
      }
      leg1.style.top = `${top1}%`;
      leg2.style.top = `${top2}%`;
      leg1.style.left = `${left1}%`;
      leg2.style.left = `${left2}%`;
    }
  
    const intervalId = setInterval(doSomething, 200);
  
    setTimeout(() => {
      clearInterval(intervalId);
      appear();
    }, 10000);
  }