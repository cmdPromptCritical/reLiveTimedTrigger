const ks = require('node-key-sender');

// CONFIG

time = 0.5 * 60;

// END CONFIG


// sends keys to start recording
ks.sendCombination(['control', 'shift', 'r']);
console.log('Recording!');

// waits x amount of time
setTimeout(stopRecording, time * 1000);

function stopRecording() {
  ks.sendCombination(['control', 'shift', 'r']);
  console.log('Recording stopped!');

}
