class AudioController {
    static track = Object.freeze({
        battleTheme: 0,
        select: 1,
        mainMenuTheme: 2,
        death: 3,
        encounter: 4,
        attack: 5,
        mettatonSpeak: 6,
        mettatonSpeakInBattle: 7,
        damage: 8
    });


    /**
     * @type {Array.<{HTMLElement}>} tracks
     */
    tracks = [
        document.getElementById("track_0"),
        document.getElementById("track_1"),
        document.getElementById("track_2"),
        document.getElementById("track_3"),
        document.getElementById("track_4"),
        document.getElementById("track_5"),
        document.getElementById("track_6"),
        document.getElementById("track_7"),
        document.getElementById("track_8"),
    ];

    constructor() { this.pauseAll(); }

    /**
     * Pause all songs
     * @returns {AudioController} Audio
     */
    pauseAll() {
        for (const track of this.tracks) {
            track.pause();
        }
        return this;
    }

    /**
     * Play a track
     * @param {number} trackNumber 
     * @returns {AudioController} AudioController
     */
    play(trackNumber) {
        this.tracks[trackNumber].play();
        return this;
    }

    /**
     * Stop a track
     * @param {number} trackNumber 
     * @returns {AudioController} AudioController
     */
    pause(trackNumber) {
        this.tracks[trackNumber].pause();
        return this;
    }

    /**
     * Mute a track
     * @param {number} trackNumber 
     * @returns {AudioController} AudioController
     */
    mute(trackNumber) {
        this.tracks[trackNumber].muted = true;
        return this;
    }

    /**
     * Unmute a track
     * @param {number} trackNumber 
     * @returns {AudioController} AudioController
     */
    unmute(trackNumber) {
        this.tracks[trackNumber].muted = true;
        return this;
    }

    /**
     * Set track position to 0
     * @param {number} trackNumber 
     * @returns {AudioController} AudioController
     */
    reset(trackNumber) {
        this.tracks[trackNumber].currentTime = 0;
        return this;
    }

    /**
     * Change volume
     * @param {number} value 
     * @param {number} trackNumber 
     * @returns {AudioController} AudioController
     */
    changeVolume(value, trackNumber) {
        this.tracks[trackNumber].volume = value / 100;
        return this;
    }
}
