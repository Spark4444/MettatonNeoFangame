let busy = false;
let hp_text = false;
let food_text = false;
let pressed_continue = false;
// Wings: "Behold my Neo Wings, which seal your fate in my arena of destruction!"
//Did you really think that you were going to beat me, darling? (Deal gone wrong playing)
function chat_box() {
    if (attack_num === false) {
        attack_num = 0;
    }
    text_chatbox_main.style.opacity = 1;
    if (parseInt(hp_str) < 37 && hp_text == false && busy == false) {
        hp_text = true;
        busy = true;
        pressed_continue = false;
        typeWriterBox("Feeling the pressure, darling? Brace yourself for my ultimate power!");
    }
    if (food_list.length < 5 && food_text == false && busy == false) {
        food_text = true;
        busy = true;
        pressed_continue = false;
        typeWriterBox("You're running low on resources, but don't give up yet! The show must go on!");
    }
    if (attack_num == 0 && busy == false) {
        busy = true;
        pressed_continue = false;
        typeWriterBox("Get ready for my Neo Legs, the ultimate combination of elegance and power!");
    }
    if (attack_num == 1 && busy == false) {
        busy = true;
        pressed_continue = false;
        typeWriterBox("I'll strike you down with the lightning of my power!");
    }
    if (attack_num == 2 && busy == false) {
        busy = true;
        pressed_continue = false;
        typeWriterBox("Watch as I unleash my impeccable aim and the full fury of my lasers!");
    }
    if (attack_num == 3 && busy == false) {
        busy = true;
        pressed_continue = false;
        typeWriterBox("My NEO Hand will smack you with an unstoppable barrage of blows!");
    }
    if (attack_num == 4 && busy == false) {
        busy = true;
        pressed_continue = false;
        typeWriterBox("My Neo Head will dazzle you with a barrage of laser beams!");
    }
    if (attack_num == 5 && busy == false) {
        busy = true;
        pressed_continue = false;
        typeWriterBox("Prepare to be crushed under the force of my fabulous leg dash!");
    }
}
