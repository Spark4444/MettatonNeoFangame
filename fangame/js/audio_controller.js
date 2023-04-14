class AudioController {
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
     * @returns {Audio} Audio
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
     * @returns {Audio} Audio
     */
    play(trackNumber) {
        this.tracks[trackNumber].play();
        return this;
    }

    /**
     * Stop a track
     * @param {number} trackNumber 
     * @returns {Audio} Audio
     */
    pause(trackNumber) {
        this.tracks[trackNumber].pause();
        return this;
    }

    /**
     * Mute a track
     * @param {number} trackNumber 
     * @returns {Audio} Audio
     */
    mute(trackNumber) {
        this.tracks[trackNumber].muted = true;
        return this;
    }

    /**
     * Unmute a track
     * @param {number} trackNumber 
     * @returns {Audio} Audio
     */
    unmute(trackNumber) {
        this.tracks[trackNumber].muted = true;
        return this;
    }

    /**
     * Set track position to 0
     * @param {number} trackNumber 
     * @returns {Audio} Audio
     */
    reset(trackNumber) {
        this.tracks[trackNumber].currentTime = 0;
        return this;
    }

    /**
     * Change volume
     * @param {number} value 
     * @param {number} trackNumber 
     * @returns {Audio} Audio
     */
    changeVolume(value, trackNumber) {
        this.tracks[trackNumber].volume = value / 100;
        return this;
    }
}