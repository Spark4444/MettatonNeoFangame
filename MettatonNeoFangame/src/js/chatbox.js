//Varaibles initilization
let busy = false;
let HPDialogue = false;
let foodDialogue = false;
let pressedContinue = false;

//Function that starts a dialogue with mettaton
function dialogue(){
    if(!attackNumber){
        attackNumber = 0;
    }

    if(!busy){
        chatBox.style.opacity = 1;

        if(typeof attackNumber == "number"){
            busy = true;
            pressedContinue = false;
        }

        if(parseInt(playersHPString) < 37 && !HPDialogue){
            HPDialogue = true;
            typeWriterBox("Feeling the pressure, darling? Brace yourself for my ultimate power!");
        }
        else if(foodList.length < 5 && !foodDialogue){
            foodDialogue = true;
            typeWriterBox("You're running low on items, but don't give up yet! The show must go on!");
        }
        else if(MettatonHP < 37){
            audio.mute(0);
            audio.pause(0);
            audio.unmute(9);
            audio.play(9);
            attackNumber = 8;
            typeWriterBox("Did you really think that you were going to beat me, darling?");
        }
        else {
            nextAttack();
        } 
    }
}

// Procceed to next attack
function nextAttack() {
    if (busy) {
        mettatonBottom = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.545;
        canvasBottom = (window.innerHeight - 0.5 * window.innerWidth)/2 + (0.5 * window.innerWidth) * 0.795;

        switch(attackNumber){
            case 7:
                attack8();
                break;
            case 6:
                attack7();
                break;
            case 5:
                attack6();
                break;
            case 4:
                attack5();
                break;
            case 3:
                attack4();
                break;
            case 2:
                attack3();
                break;
            case 1:
                attack2();
                break;
            case 0:
                attack1();
                break;
            case 8:            
                audio.unmute(12);
                audio.reset(12);
                audio.play(12);
                audio.mute(9);
                audio.pause(9);
                audio.play(10);
                audio.pause(2);
                attack9();
                battleSection.style.opacity = "0";
                lv.style.opacity = "0";
                name.style.opacity = "0";
                break;
        }

        if(typeof attackNumber == "number"){
            clearTimeout(textWrite);
            audio.pause(6);
            chatBox.style.opacity = 0;
            busy = false;
            pressedContinue = true;
            turnsToComplete++;
            if(attackNumber > 6){
                attackNumber = 0;
            }
            else if(attackNumber < 7){
                attackNumber++;
            }
        }
    }
}

//Event listener for the user to continue into battle from a dialogue with mettaton
document.addEventListener("keyup", e => {
let key = e.keyCode || e.which;
    switch (key) {
        case 13: // Enter key
        case 90: // Z key
        case 122: // z key
           nextAttack(); 
        break;
        default:
        break;
    }
});