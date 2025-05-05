# TODOs and Bugs

## TODOs
1. Remove repeating dialogues after second phase of the fight.
2. Add more options to the main menu (idk what specifically yet maybe hitboxes hightling checkbox for example) and make a specific settings menu.
3. Fix the ending sprites, the heads background is not transparent and is like light grey instead of black.
4. Find a way to add a button for restarting the game (window.reload()) instead of the esc key, make some kind of button somewhere in the ui that restarts the game when pressed.
5. Add saving system e.g. continue from the last attack you stopped at, you probably wouldnt need save files since you could store it in local storage instead of json files in save dir, change the button to "continue" if the player has a save in local storage and the changing levels system is already present so just change the current level to the last one the player was at when they saved. then the restart button would set local storage to 0 (if i remember the level indexes correctly 0 - first level) and reload the page.
Also if the local storage is set to 0 the button would just be as normal e.g. "start" also i would need to store the hp and the items bla bla bla as an object via JSON parsing and stringify.
6. Add an icon for the executable file, use the same one as in html file.
7. Improve the code quality.

## Bugs
1. The game doesn't play the main menu music after the player dies, it will play after the play if the player uses the input to change volume.
2. IMPORTANT: The attack menu may sometimes just deal 0 damage to the enemy, and gets stuck at the start of the line. I don't know the specific conditions of the bug, it doesn't have a specific order when it happens like every 3rd attack or something like that. try testing the varaibles related to the attack menu to see what's wrong with it.