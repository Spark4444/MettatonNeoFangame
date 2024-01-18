if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.innerHTML = "<div class='not-working'><h1>You can't play this game on a phone or a tablet because phones and tablets don't have keyboards.</h1></div>";
}

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
let top_laser;
let top_laser2;
let minus_yellow
let xbounds;
let ybounds;
let y_minus_bounds;
let x_minus_bounds;
console.log(screenWidth + " " + screenHeight);
  