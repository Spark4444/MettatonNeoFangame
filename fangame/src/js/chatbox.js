let busy = false;
let hp_text = false;
let food_text = false;
let pressed_continue = false;
// Wings: "Behold my Neo Wings, which seal your fate in my arena of destruction!"
function chat_box(){
    if(attackNumber === false){
        attackNumber = 0;
    }
    chatBox.style.opacity = 1;
    if(parseInt(playersHPString) < 37 && hp_text == false && busy == false){
        hp_text = true;
        busy = true;
        pressed_continue = false;
        typeWriterBox("Feeling the pressure, darling? Brace yourself for my ultimate power!");
    }
    if(foodList.length < 5 && food_text == false && busy == false){
        food_text = true;
        busy = true;
        pressed_continue = false;
        typeWriterBox("You're running low on resources, but don't give up yet! The show must go on!");
    }
    if(attackNumber == 0 && busy == false){
        busy = true;
        pressed_continue = false;
        typeWriterBox("Get ready for my Neo Legs, the ultimate combination of elegance and power!");
    }
    if(attackNumber == 1 && busy == false){
        busy = true;
        pressed_continue = false;
        typeWriterBox("I'll strike you down with the lightning of my power!");
    }
    if(attackNumber == 2 && busy == false){
        busy = true;
        pressed_continue = false;
        typeWriterBox("Watch as I unleash my impeccable aim and the full fury of my lasers!");
    }
    if(attackNumber == 3 && busy == false){
        busy = true;
        pressed_continue = false;
        typeWriterBox("My NEO Hand will smack you with an unstoppable barrage of blows!");
    }
    if(attackNumber == 4 && busy == false){
        busy = true;
        pressed_continue = false;
        typeWriterBox("My Neo Head will dazzle you with a barrage of laser beams!");
    }
    if(attackNumber == 5 && busy == false){
        busy = true;
        pressed_continue = false;
        typeWriterBox("Prepare to be crushed under the force of my fabulous leg dash!");
    }
    if(attackNumber == 6 && busy == false){
        busy = true;
        pressed_continue = false;
        typeWriterBox("Ready to be blown away, darling? Enjoy the fireworks kid!");
    }
    if(attackNumber == 7 && busy == false){
        busy = true;
        pressed_continue = false;
        typeWriterBox("Get ready for my stunning missile show, darling! Lights, camera, action!");
    }
    if(attackNumber == 8 && busy == false){
        busy = true;
        pressed_continue = false;
        typeWriterBox("Did you really think that you were going to beat me, darling?");
        audio.mute(0);
        audio.pause(0);
        audio.unmute(9);
        audio.play(9);
    }
}
document.addEventListener('keyup', e => {
const key = e.keyCode || e.which;
if(busy == true){
  switch (key) {
    case 13: // Enter key
    case 90: // Z key
    case 122: // z key
    mettatonBottom = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.545;
    canvasBottom = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.795;
    if(attackNumber == 7){
    clearTimeout(timeoutID);
    audio.pause(6);
    chatBox.style.opacity = 0;
    flash = false;
    attack8_wings();
    setTimeout(() => {
        attackNumber = 8;
        turnsToComplete++;
    }, 10);
    busy = false;
    pressed_continue = true;
    }
    if(attackNumber == 6){
    clearTimeout(timeoutID);
    audio.pause(6);
    chatBox.style.opacity = 0;
    flash = false;
    attack7_bombs();
    attackNumber = 7;
    turnsToComplete++;
    busy = false;
    pressed_continue = true;
    }
    if(attackNumber == 5){
    clearTimeout(timeoutID);
    audio.pause(6);
    chatBox.style.opacity = 0;
    flash = false;
    attack6_dash();
    attackNumber = 6;
    turnsToComplete++;
    busy = false;
    pressed_continue = true;
    }
    if(attackNumber == 4){
    clearTimeout(timeoutID);
    audio.pause(6);
    chatBox.style.opacity = 0;
    flash = false;
    attack5_head();
    attackNumber = 5;
    turnsToComplete++;
    busy = false;
    pressed_continue = true;
    }
    if(attackNumber == 3){
    clearTimeout(timeoutID);
    audio.pause(6);
    chatBox.style.opacity = 0;
    flash = false;
    attack4_hand();
    attackNumber = 4;
    turnsToComplete++;
    busy = false;
    pressed_continue = true;
    }
    if(attackNumber == 2){
    clearTimeout(timeoutID);
    audio.pause(6);
    chatBox.style.opacity = 0;
    flash = false;
    attack3_lasers();
    attackNumber = 3;
    turnsToComplete++;
    busy = false;
    flash = false;
    pressed_continue = true;
    }
    if(attackNumber == 1){
    clearTimeout(timeoutID);
    audio.pause(6);
    chatBox.style.opacity = 0;
    flash = false;
    attack2_smoke();
    attackNumber = 2;
    turnsToComplete++;
    busy = false;
    pressed_continue = true;
    }
    if(attackNumber == 0){
    clearTimeout(timeoutID);
    audio.pause(6);
    chatBox.style.opacity = 0;
    flash = false;
    attack1_legs();
    attackNumber = 1;
    turnsToComplete++;
    busy = false;
    pressed_continue = true;
    }
    if(attackNumber == 8){
    clearTimeout(timeoutID);
    audio.pause(6);
    audio.unmute(12);
    audio.reset(12);
    audio.play(12);
    chatBox.style.opacity = 0;
    flash = false;
    attack9_finale();
    audio.pause(9);
    audio.mute(9);
    audio.play(10);
    audio.pause(2);
    battleSection.style.opacity = "0";
    lv.style.opacity = "0";
    name.style.opacity = "0";
    attackNumber = 0;
    turnsToComplete++;
    busy = false;
    pressed_continue = true;
    }
    break;
    default:
    break;
}
}
});