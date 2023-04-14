class InputController {
    // TODO: Key object should be private. TBD
    static Key = {
        enterKey: 13,
        arrowKeyLeft: 37,
        arrowKeyUp: 38,
        arrowKeyRight: 39,
        arrowKeyDown: 40,
        keyA: 97,
        keyW: 119,
        keyS: 115,
        keyD: 100,
        keyZ: 122,
        keyX: 120,
        capitalKeyA: 65,
        capitalKeyW: 87,
        capitalKeyS: 83,
        capitalKeyD: 68,
        capitalKeyZ: 90,
        capitalKeyX: 88,
    };

    static Action = {
        moveLeft: 'MOVE_LEFT',
        moveRight: 'MOVE_RIGHT',
        moveUp: 'MOVE_UP',
        moveDown: 'MOVE_DOWN',
        select: 'SELECT',
        cancel: 'CANCEL'
    };

    static State = {
        press: 'PRESS',
        release: 'RELEASE',
    };

    /**
     * @type {string}
     */
    currentAction = InputController.Action.cancel;

    /**
     * @type {string}
     */
    currentState = InputController.State.release;

    constructor() {
        this.setupKeyDownListeners();
        this.setupKeyUpListeners();
    }

    setupKeyDownListeners() {
        document.addEventListener('keydown', ({ keyCode }) => {
            if (this.moveLeftAction(keyCode)) return this.setPressAction(InputController.Action.moveLeft);
            if (this.moveUpAction(keyCode)) return this.setPressAction(InputController.Action.moveUp);
            if (this.moveRightAction(keyCode)) return this.setPressAction(InputController.Action.moveRight);
            if (this.moveDownAction(keyCode)) return this.setPressAction(InputController.Action.moveDown);
            if (this.selectAction(keyCode)) return this.setPressAction(InputController.Action.select);
            if (this.cancelAction(keyCode)) return this.setPressAction(InputController.Action.cancel);
        });
    }

    setupKeyUpListeners() {
        document.addEventListener('keyup', ({ keyCode }) => {
            if (this.moveLeftAction(keyCode)) return this.setReleaseAction(InputController.Action.moveLeft);
            if (this.moveUpAction(keyCode)) return this.setReleaseAction(InputController.Action.moveUp);
            if (this.moveRightAction(keyCode)) return this.setReleaseAction(InputController.Action.moveRight);
            if (this.moveDownAction(keyCode)) return this.setReleaseAction(InputController.Action.moveDown);
            if (this.selectAction(keyCode)) return this.setReleaseAction(InputController.Action.select);
            if (this.cancelAction(keyCode)) return this.setReleaseAction(InputController.Action.cancel);
        });
    }

    /**
     * Check for left action
     * @param {number} key 
     * @returns {boolean} result
     */
    moveLeftAction(key) {
        return key === InputController.Key.keyA || key === InputController.Key.capitalKeyA || key === InputController.Key.arrowKeyLeft;
    }

    /**
     * Check for move up action
     * @param {number} key 
     * @returns {boolean} result
     */
    moveUpAction(key) {
        return key === InputController.Key.keyW || key === InputController.Key.capitalKeyW || key === InputController.Key.arrowKeyUp;
    }

    /**
     * Check for move right action
     * @param {number} key 
     * @returns {boolean} result
     */
    moveRightAction(key) {
        return key === InputController.Key.keyD || key === InputController.Key.capitalKeyD || key === InputController.Key.arrowKeyRight;
    }

    /**
     * Check for move down action
     * @param {number} key 
     * @returns {boolean} result
     */
    moveDownAction(key) {
        return key === InputController.Key.keyS || key === InputController.Key.capitalKeyS || key === InputController.Key.arrowKeyDown;
    }

    /**
     * Check for select action
     * @param {number} key 
     * @returns {boolean} result
     */
    selectAction(key) {
        return key === InputController.Key.keyZ || key === InputController.Key.capitalKeyZ || key === InputController.Key.enterKey;
    }

    /**
     * Check for cancel action
     * @param {number} key 
     * @returns {boolean} result
     */
    cancelAction(key) {
        return key === InputController.Key.keyX || key === InputController.Key.capitalKeyX;
    }

    /**
     * Set press action
     * @param {string} action 
     */
    setPressAction(action) {
        this.currentAction = action;
        this.currentState = InputController.State.press;
    }

    /**
     * Set release action
     * @param {string} action 
     */
    setReleaseAction(action) {
        this.currentAction = action;
        this.currentState = InputController.State.release;
    }

    /**
     * Get current state of buttons
     * @returns {Array.<string, string>} [action, state]
     */
    get() {
        return [this.currentAction, this.currentState];
    }
}
