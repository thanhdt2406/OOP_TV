class Remote {
    constructor(code, tvName) {
        this.code = code;
        this.tivi = tvName;
    }

    setChannel(channel) {
        if (this.tivi.isOn)
            this.tivi.channel = channel;

    }

    setVolumeUp() {
        if (this.tivi.isOn)
            this.tivi.volume++;
    }

    setVolumeDown() {
        if (this.tivi.isOn)
            this.tivi.volume--;
    }

    powerButton() {
        this.tivi.isOn = !this.tivi.isOn;
    }
}