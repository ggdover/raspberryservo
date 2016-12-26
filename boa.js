var exec = require('child_process').exec;
//exec('pwd', function(error, stdout, stderr){
//  console.log(error);
//  console.log(stdout);
//  console.log(stderr);
//});
console.log('Trying to control servo channel 0 and 1');
exec('python ./lib/Adafruit_PWM_Servo_Driver/Servo_ToolTest.py 0', function(error, stdout, stderr){
  console.log(error);
  console.log(stdout);
  console.log(stderr);
});
// exec('python ./lib/Adafruit_PWM_Servo_Driver/Servo_ToolTest.py 1', function(error, stdout, stderr){
//   console.log(error);
//   console.log(stdout);
//   console.log(stderr);
// });
