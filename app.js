
var buttons = require('rpi-gpio-buttons')([37,31]);

// bind to the clicked event and check for the assigned pins when clicked
buttons.on('pressed', function (pin) {
  switch(pin) {
    // Up button on pin 11 was clicked
    case 37:
    fail();
    break;
 
    // Down button on pin 13 was clicked
    case 31:
    pass();
    break;
  }
});
 
 
function fail() {
  // do something here for up button
  console.log('DENEGADO');
}
 
 
function pass() {
  // do something here for down button
  console.log('APROBADO');
}