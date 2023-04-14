let HP_show;
let intervalId2;
let intervalId;
let ten_secs;
let moveHeartI;
let number_lightning;
let lightningElem;
let lightning;
let leg1_l;
let leg2_l;
let hyp_l;
let laser;
let laser_num;
let laser_time;
let hand;
let count_laser;
let randomNum;
let laser_white;
let hand_time;
let hand2;
let count_hand2;
let laser_head;
let head_time;
let hyp_t;
let leg_t;
let leg2_t;
let left;
let dash_leg;
let leg_dash;
let random_leg;
let leg_dash_count;
let leg_dash_count_top;
let leg_dash_transition;
let worked_legs_dash;

//Attack 1(legs)
function attack1_legs() {
    moveHeartI = setInterval(moveHeart, 10);
    x = 47;
    y = 31;
    drawHeart(x, y);
    projectile.innerHTML = `<img src="img/leg1.png" style="left:${getRandomInteger(23, 71)}%" class="leg1 legs" alt=""><img src="img/leg2.png" style="left:${getRandomInteger(23, 71)}%" class="leg2 legs" alt="">`;
    mettaton_gif.style.opacity = "0";
    leg1 = document.querySelector(".leg1");
    leg2 = document.querySelector(".leg2");
    legs = document.querySelectorAll(".legs");
    number = 1;

    intervalId = setInterval(() => {
        if (number % 3 === 1) {
            leg1.classList.add("legs_down");
            leg2.classList.add("legs_down");
        }
        else if (number % 3 === 2) {
            leg1.classList.remove("legs_down");
            leg2.classList.remove("legs_down");
        }
        else if (number % 3 === 0 && number != 0) {
            leg1.style.left = `${getRandomInteger(23, 71)}%`;
            leg2.style.left = `${getRandomInteger(23, 71)}%`;
        }
        number++;
    }, 333);

    intervalId2 = setInterval(() => {
        if (t_f_wait === false) {
            checkCollision(legs, img_M, 20);
        }
    }, 10);


    HP_show = setInterval(() => {
        showHP();
    }, 10);

    ten_secs = setTimeout(() => {
        clearInterval(intervalId);
        clearInterval(intervalId2);
        clearInterval(moveHeartI);
        clearInterval(HP_show);
        appear("* Stage lights are blaring");
    }, 9999);
}

//Attack 2(smoke and lighting)
function attack2_smoke() {
    projectile.innerHTML = `<img src="img/smoke.png" class="smoke" style="opacity:0" alt="">`;
    x = 47;
    y = 31;
    moveX = 0;
    moveY = 0;
    number_lightning = 0;
    mettaton_gif.style.filter = "brightness(50%)";
    drawHeart(x, y);

    setTimeout(() => {
        document.querySelector(".smoke").style.opacity = "1";
    }, 10);

    lightning = setInterval(function () {
        let point1 = { x: `${getRandomInteger(0, 97)}%`, y: `${getRandomInteger(0, 48)}%` };//initial position of element
        let point2 = { x: `${getRandomInteger(24, 73)}%`, y: `${getRandomInteger(57, 74)}%` };//it moves to this position
        number_lightning++;
        if (number_lightning == 10) {
            number_lightning = 1;
        }
        let startX = parseInt(point1.x) * window.innerWidth / 100;
        let startY = parseInt(point1.y) * document.documentElement.scrollHeight / 100;
        let endX = parseInt(point2.x) * window.innerWidth / 100;
        let endY = parseInt(point2.y) * document.documentElement.scrollHeight / 100;
        leg1_l = endY - startY;
        leg2_l = endX - startX;
        if (leg2_l < 0) {
            leg2_l = leg2_l - leg2_l - leg2_l;
            left = true;
        }
        else {
            left = false;
        }
        hyp_l = Math.hypot(leg2_l, leg1_l);
        if (left === false) {
            let calcR = -calculateAngle(hyp_l, leg1_l);
            projectile.innerHTML += `<img src="img/lightning.png" id="${number_lightning}" class="lightning" alt="" style="left:${point1.x}; top:${point1.y};rotate:${calcR}deg">`;
        }
        if (left === true) {
            let calcR = calculateAngle(hyp_l, leg1_l);
            projectile.innerHTML += `<img src="img/lightning.png" id="${number_lightning}" class="lightning" alt="" style="left:${point1.x}; top:${point1.y};rotate:${calcR}deg">`;
        }
        setTimeout(() => {
            if (number_lightning < 11) {
                lightningElem = document.querySelector(`#\\3${number_lightning}`);
            }

            lightningElem.style.left = `${point2.x}`;
            lightningElem.style.top = `${point2.y}`;
        }, 10);

        setTimeout(() => {
            lightningElem.remove();
        }, 500);

    }, 600);

    HP_show = setInterval(() => {
        showHP();
    }, 10);

    moveHeartI = setInterval(moveHeart, 10);

    setTimeout(() => {
        intervalId2 = setInterval(() => {
            if (t_f_wait === false) {
                checkCollisionOne(lightningElem, img_M, 15);
            }
        }, 10);
    }, 601);

    ten_secs = setTimeout(() => {
        clearInterval(lightning);
        clearInterval(intervalId2);
        clearInterval(moveHeartI);
        clearInterval(HP_show);
        img_M.style.animation = "";
        mettaton_gif.style.filter = "";
        appear("* Stage lights are blaring");
    }, 11900);
}

//Attack 3(hand and lasers)
function attack3_lasers() {
    if (getRandomArgument(0, 1) == 1) {
        randomNum = getRandomInteger(21, 74);
        projectile.innerHTML = `<img src="img/hand.png" class="hand1" style="opacity:0; top:5%; left:${randomNum}%;">`;
        setTimeout(() => {
            hand = document.querySelector(".hand1");
            hand.style.opacity = "1";
            projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: 31%; left:${randomNum + 2.3}%"></div>`;
            setTimeout(() => {
                laser = document.querySelectorAll(".laser");
                laser[laser.length - 1].style.height = "69%";
            }, 250);
        }, 10);
    }
    else {
        randomNum = getRandomInteger(44, 65);
        projectile.innerHTML = `<img src="img/hand.png" class="hand1" style="opacity:0; top:${randomNum}%; left:90%; rotate:90deg;">`;
        setTimeout(() => {
            hand = document.querySelector(".hand1");
            hand.style.opacity = "1";
            projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${randomNum + 15}%; left:86%"></div>`;
            setTimeout(() => {
                laser = document.querySelectorAll(".laser");
                laser[laser.length - 1].style.width = "86.5%";
                laser[laser.length - 1].style.left = "0%";
            }, 250);
        }, 10);
    }

    mettaton_gif.style.opacity = "0";
    x = 47;
    y = 31;
    moveX = 0;
    moveY = 0;
    count_laser = 0;
    laser_num = 1;
    laser = 0;
    drawHeart(x, y);

    intervalId2 = setInterval(() => {
        if (t_f_wait === false) {
            laser = document.querySelectorAll(".laser");
            checkCollisionLaser(laser, img_M, 30);
        }
    }, 10);

    HP_show = setInterval(() => {
        showHP();
    }, 10);

    moveHeartI = setInterval(moveHeart, 10);

    setTimeout(function () {
        count_laser += 1;
        laser_num = 1;
        if (hand.style.left == "90%") {
            if (count_laser != 1) {
                setTimeout(() => {
                    randomNum = getRandomInteger(21, 74);
                    hand = document.querySelector(".hand1");
                    hand.style.top = `5%`;
                    hand.style.left = `${randomNum}%`;
                    hand.style.rotate = ``;
                    setTimeout(() => {
                        projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: 31%; left:${randomNum + 2.3}%"></div>`;
                        setTimeout(() => {
                            laser = document.querySelectorAll(".laser");
                            laser[laser.length - 1].style.height = "69%";
                        }, 10);
                    }, 500);
                }, 10);
            }
        }
        else if (hand.style.top == "5%") {
            if (count_laser != 1) {
                setTimeout(() => {
                    randomNum = getRandomInteger(44, 65);
                    hand = document.querySelector(".hand1");
                    hand.style.top = `${randomNum}%`;
                    hand.style.left = `90%`;
                    hand.style.rotate = `90deg`;
                    setTimeout(() => {
                        projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${randomNum + 15}%; left:86%"></div>`;
                        setTimeout(() => {
                            laser = document.querySelectorAll(".laser");
                            laser[laser.length - 1].style.width = "86.5%";
                            laser[laser.length - 1].style.left = "0%";
                        }, 10);
                    }, 0);
                }, 10);
            }
        }
    }, 10);

    setTimeout(() => {
        clearInterval(laser_time);
        laser_time = setInterval(function () {
            count_laser += 1;
            if (count_laser > 4) {
                laser_num = 0;
            }
            if (count_laser == 3) {
                laser_num = 2;
            }
            if (hand.style.left == "90%") {
                if (count_laser != 1) {
                    setTimeout(() => {
                        randomNum = getRandomInteger(21, 74);
                        hand = document.querySelector(".hand1");
                        hand.style.top = `5%`;
                        hand.style.left = `${randomNum}%`;
                        hand.style.rotate = ``;
                        setTimeout(() => {
                            projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: 31%; left:${randomNum + 2.3}%"></div>`;
                            setTimeout(() => {
                                laser = document.querySelectorAll(".laser");
                                laser[laser.length - 1].style.height = "69%";
                            }, 10);
                        }, 500);
                    }, 10);
                }
            }
            else if (hand.style.top == "5%") {
                if (count_laser != 1) {
                    setTimeout(() => {
                        randomNum = getRandomInteger(44, 65);
                        hand = document.querySelector(".hand1");
                        hand.style.top = `${randomNum}%`;
                        hand.style.left = `90%`;
                        hand.style.rotate = `90deg`;
                        setTimeout(() => {
                            projectile.innerHTML += `<div class="laser" id="l${laser_num}" style="top: ${randomNum + 15}%; left:86%"></div>`;
                            setTimeout(() => {
                                laser = document.querySelectorAll(".laser");
                                laser[laser.length - 1].style.width = "86.5%";
                                laser[laser.length - 1].style.left = "0%";
                            }, 10);
                        }, 500);
                    }, 10);
                }
            }
        }, 1000);
    }, 11);
    ten_secs = setTimeout(() => {
        clearInterval(laser_time);
        clearInterval(intervalId2);
        clearInterval(moveHeartI);
        clearInterval(HP_show);
        img_M.style.animation = "";
        appear("* Stage lights are blaring");
    }, 11999);
}

//Attack 4 hand
function attack4_hand() {
    projectile.innerHTML = `<img src="img/hand2.png" class="hand2" style="left: 40%;">`;

    setTimeout(() => {
        hand2 = document.querySelector(".hand2");
    }, 10);

    mettaton_gif.style.opacity = "0";
    x = 47;
    y = 31;
    moveX = 0;
    moveY = 0;
    count_hand2 = 0;
    drawHeart(x, y);

    intervalId2 = setInterval(() => {
        if (t_f_wait === false) {
            laser = document.querySelectorAll(".laser");
            checkCollisionOne(hand2, img_M, 30);
        }
    }, 10);

    HP_show = setInterval(() => {
        showHP();
    }, 10);

    moveHeartI = setInterval(moveHeart, 10);

    setTimeout(() => {
        hand_time = setInterval(function () {
            count_hand2++;
            if (count_hand2 % 3 === 1) {
                hand2.classList.add("hand2_down");
            }
            if (count_hand2 % 3 === 2) {
                hand2.classList.remove("hand2_down");
            }
            if (count_hand2 % 3 === 0) {
                hand2.style.left = `${img_M.getBoundingClientRect().left - 137}px`;
            }
        }, 250);
    }, 400);

    ten_secs = setTimeout(() => {
        clearInterval(hand_time);
        clearInterval(intervalId2);
        clearInterval(moveHeartI);
        clearInterval(HP_show);
        img_M.style.animation = "";
        appear("* Stage lights are blaring");
    }, 12000);
}

//Attack 5 head
function attack5_head() {
    mettaton_gif.style.opacity = "1";
    x = 47;
    y = 31;
    moveX = 0;
    moveY = 0;
    drawHeart(x, y);

    intervalId2 = setInterval(() => {
        if (t_f_wait === false) {
            laser_head = document.querySelectorAll(".laser_head");
            checkCollisionLaser(laser_head, img_M, 20);
        }
    }, 10);

    HP_show = setInterval(() => {
        showHP();
    }, 10);

    moveHeartI = setInterval(moveHeart, 10);

    head_time = setInterval(function () {
        leg_t = img_M.getBoundingClientRect().top - window.innerHeight / 100 * 16;
        leg2_t = img_M.getBoundingClientRect().left - window.innerWidth / 100 * 48;
        if (leg2_t < 0) {
            leg2_t = leg2_t - leg2_t - leg2_t;
            left = true;
        }
        else {
            left = false;
        }
        hyp_t = Math.hypot(leg2_t, leg_t);
        if (left === false) {
            let calcR = -calculateAngle(hyp_t, leg_t);
            projectile.innerHTML += `<div class="laser_head" id="l${getRandomInteger(0, 2)}" style="rotate:${calcR}deg"></div>`;
        }
        if (left === true) {
            let calcR = calculateAngle(hyp_t, leg_t);
            projectile.innerHTML += `<div class="laser_head" id="l${getRandomInteger(0, 2)}" style="rotate:${calcR}deg"></div>`;
        }

        setTimeout(() => {
            laser_head = document.querySelectorAll(".laser_head");
            laser_head[laser_head.length - 1].style.left = `${img_M.getBoundingClientRect().left}px`;
            laser_head[laser_head.length - 1].style.top = `${img_M.getBoundingClientRect().top}px`;
            setTimeout(() => {
                laser_head[laser_head.length - 1].style.left = `${img_M.getBoundingClientRect().left + img_M.getBoundingClientRect().left - window.innerWidth / 100 * 48}px`;
                laser_head[laser_head.length - 1].style.top = `${img_M.getBoundingClientRect().top + img_M.getBoundingClientRect().top - window.innerHeight / 100 * 16}px`;
            }, 10);
        }, 10);

    }, 710);

    ten_secs = setTimeout(() => {
        clearInterval(head_time);
        clearInterval(intervalId2);
        clearInterval(moveHeartI);
        clearInterval(HP_show);
        img_M.style.animation = "";
        appear("* Stage lights are blaring");
    }, 10649);
}

//attack 6 legs dashingg on you
function attack6_dash() {
    random_leg = getRandomInteger(1, 2);
    projectile.innerHTML = `<img src="img/${random_leg + 3}.png" id="l${random_leg}" class="leg_dash">`;
    mettaton_gif.style.opacity = "0";
    x = 47;
    y = 31;
    moveX = 0;
    moveY = 0;
    drawHeart(x, y);
    leg_dash_count = 0;
    leg_dash_transition = 500;
    leg_dash_count_top = "";
    intervalId2 = setInterval(() => {
        if (t_f_wait === false) {
            leg_dash = document.querySelector(".leg_dash");
            leg_dash.style.transition = "0.5s";
            checkCollisionLaserOne(leg_dash, img_M, 20);
        }
    }, 10);

    HP_show = setInterval(() => {
        showHP();
    }, 10);

    moveHeartI = setInterval(moveHeart, 10);

    dash_leg = setInterval(() => {
        leg_dash_count++;
        if (leg_dash_count % 3 == 1) {
            leg_dash.classList.add("leg_dash_right");
        }
        if (leg_dash_count % 3 == 2) {
            leg_dash.classList.remove("leg_dash_right");
        }
        if (leg_dash_count % 3 == 0) {
            if (leg_dash_count_top !== "") {
                leg_dash.classList.remove(`${leg_dash_count_top}`);
            }
            worked_legs_dash = false;
            if (leg_dash_count_top == "" && worked_legs_dash === false) {
                worked_legs_dash = true;
                leg_dash_count_top = getRandomArgument("leg_dash_bottom", "leg_dash_top", "");
                if (leg_dash_count_top == "leg_dash_bottom" || leg_dash_count_top == "leg_dash_top") {
                    random_leg = 0;
                }
                else {
                    random_leg = getRandomInteger(1, 2);
                }
                leg_dash.style.transition = "0.5s";
                leg_dash_transition = 500;
            }
            if (leg_dash_count_top == "leg_dash_bottom" && worked_legs_dash === false) {
                worked_legs_dash = true;
                leg_dash_count_top = "";
                random_leg = getRandomInteger(1, 2);
                leg_dash.style.transition = "1s";
                leg_dash_transition = 1000;
            }
            if (leg_dash_count_top == "leg_dash_top" && worked_legs_dash === false) {
                worked_legs_dash = true;
                leg_dash_count_top = "";
                random_leg = getRandomInteger(1, 2);
                leg_dash.style.transition = "1s";
                leg_dash_transition = 1000;
            }
            leg_dash.src = `img/${random_leg + 3}.png`;
            leg_dash.setAttribute('id', `l${random_leg}`);
            if (leg_dash_count_top !== "") {
                if (!leg_dash.classList.contains(leg_dash_count_top)) {
                    leg_dash.classList.add(leg_dash_count_top);
                }
            }
        }
    }, leg_dash_transition);

    ten_secs = setTimeout(() => {
        clearInterval(dash_leg);
        clearInterval(intervalId2);
        clearInterval(moveHeartI);
        clearInterval(HP_show);
        img_M.style.animation = "";
        appear("* Stage lights are blaring");
    }, 20000);
}

