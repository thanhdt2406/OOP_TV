let tv = new Television('LG');
let remote = new Remote('RM01', tv);

if (!tv.isOn) {
    tv.powerButton();
}
if (tv.isOn) {
    console.log('TV is on!');
} else {
    console.log('TV is off!');
}

tv.setChannel(7);
console.log('Channel: '+tv.getChannel());
remote.setChannel(3);
console.log('Channel: '+tv.getChannel());

tv.setVolumeUp();
tv.setVolumeUp();
console.log('Volume: '+tv.getVolume());

remote.powerButton();

if (tv.isOn) {
    console.log('TV is on!');
} else {
    console.log('TV is off!');
}


