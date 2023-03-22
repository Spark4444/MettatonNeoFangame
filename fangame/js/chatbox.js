let busy = false;
let hp_text = false;
let food_text = false;
// Legs: "Get ready for my Neo Legs, the ultimate combination of elegance and power!"

// Attack 2: "I'll strike you down with the lightning of my power!"

// Left hand: "Watch as I unleash my impeccable aim and the full fury of my lasers!"

// Wings: "Behold my Neo Wings, which seal your fate in my arena of destruction!"

// Right hand: "My Neo Right Hand will unleash a barrage of blows upon you!"

// Head: "My Neo Head will dazzle you with a barrage of laser beams!"

// Finale: "Behold my Neo Heart and the biggest, brightest, and most beautiful bullet you've ever seen!"

// Less than half HP: "Get ready for the ultimate display of my power!"

// Less than half inventory: "Hang on tight, the show must go on!"
function chat_box(){
    if(attack_num === false){
        attack_num = 0;
    }
    text_chatbox_main.style.opacity = 1;
    if(parseInt(hp_string) < 37 && hp_text == false && busy == false){
        hp_text = true;
        busy = true;
        typeWriterBox("Feeling the pressure, darling? Brace yourself for my ultimate power!");
    }
    if(food_list.length < 5 && food_text == false && busy == false){
        food_text = true;
        busy = true;
        typeWriterBox("You're running low on resources, but don't give up yet! The show must go on!");
    }
    if(attack_num == 0 && busy == false){
        busy = true;
        typeWriterBox("Get ready for my Neo Legs, the ultimate combination of elegance and power!");
    }
    if(attack_num == 1 && busy == false){
        busy = true;
        typeWriterBox("I'll strike you down with the lightning of my power!");
    }
}
document.addEventListener('keyup', e => {
const key = e.keyCode || e.which;
if(busy == true){
  switch (key) {
    case 13: // Enter key
    case 90: // Z key
    case 122: // z key
    if(attack_num == 9){
    clearTimeout(timeoutID);
    audio6.pause();
    text_chatbox_main.style.opacity = 0;
    // attack10_finale();
    attack_num = 0;
    busy = false;
    }
    if(attack_num == 8){
    clearTimeout(timeoutID);
    audio6.pause();
    text_chatbox_main.style.opacity = 0;
    // attack9();
    attack_num = 9;
    busy = false;
    }
    if(attack_num == 7){
     clearTimeout(timeoutID);
     audio6.pause();
     text_chatbox_main.style.opacity = 0;
    // attack8();
    attack_num = 8;
    busy = false;
    }
    if(attack_num == 6){
    clearTimeout(timeoutID);
    audio6.pause();
    text_chatbox_main.style.opacity = 0;
    // attack7();
    attack_num = 7;
    busy = false;
    }
    if(attack_num == 5){
    clearTimeout(timeoutID);
    audio6.pause();
    text_chatbox_main.style.opacity = 0;
    // attack6();
    attack_num = 6;
    busy = false;
    }
    if(attack_num == 4){
    clearTimeout(timeoutID);
    audio6.pause();
    text_chatbox_main.style.opacity = 0;
    // attack5();
    attack_num = 5;
    busy = false;
    }
    if(attack_num == 3){
    clearTimeout(timeoutID);
    audio6.pause();
    text_chatbox_main.style.opacity = 0;
    // attack4();
    attack_num = 4;
    busy = false;
    }
    if(attack_num == 2){
    clearTimeout(timeoutID);
    audio6.pause();
    text_chatbox_main.style.opacity = 0;
    // attack3();
    attack_num = 3;
    busy = false;
    }
    if(attack_num == 1){
    clearTimeout(timeoutID);
    audio6.pause();
    text_chatbox_main.style.opacity = 0;
    attack2_smoke();
    attack_num = 2;
    busy = false;
    }
    if(attack_num == 0){
    clearTimeout(timeoutID);
    audio6.pause();
    text_chatbox_main.style.opacity = 0;
    attack1_legs();
    attack_num = 1;
    busy = false;
    }
    break;
    default:
    break;
}
}
});