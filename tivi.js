class Television {
    constructor(name) {
        this.name = name;
        this.channel = null;
        this.volume = null;
        this.isOn = false;
    }

    getChannel() {
        return this.channel;
    }

    getVolume() {
        return this.volume;
    }

    setChannel(channel) {
        if (this.isOn)
            this.channel = channel;
    }

    setVolumeUp() {
        if (this.isOn)
            this.volume++;
    }

    setVolumeDown() {
        if (this.isOn)
            this.volume--;
    }

    powerButton() {
        this.isOn = !this.isOn;
    }



}