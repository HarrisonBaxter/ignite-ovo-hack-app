import { Gyroscope } from "gyroscope";
import document from "document";
import { HeartRateSensor } from "heart-rate";
import { user } from "user-profile";

let flameState = document.getElementById("flame-data");

var gyro = new Gyroscope({frequency: 1});
gyro.start();
var hrm = new HeartRateSensor();
hrm.start();

const userWarmUpHeartRate = (220 - user.age) / 2;

function getCurrentHeartRate() {
  return 90;
  //hrm.heartrate;
}

function isUserWarmedUp(heartRate, warmedUpHeartRate) {
  if (heartRate >= warmedUpHeartRate){
    return true;
  }
  else {
   return false;
  }
}

function aggregateState(getCurrentHeartRate, userWarmUpHeartRate){
var total  = Math.abs(gyro.x) + Math.abs(gyro.y) + Math.abs(gyro.z);
var warmedUp =  isUserWarmedUp(getCurrentHeartRate, userWarmUpHeartRate);
var warmUpState = -1 ;

do {
  warmUpState ++;

  console.log(warmUpState);
}
 while(warmedUp == true && total >= 0.7)
  }

function refreshData(getCurrentHeartRate, userWarmUpHeartRate) {

console.log("refreshing data");
  console.log(getCurrentHeartRate);
  var theFlame = aggregateState(getCurrentHeartRate, userWarmUpHeartRate);

  //console.log("state: " + state);
var flame = switch(theFlame){
  case 0:
    console.log("zero");
   flameState.text = "Ember";
    break;

  case 1:
   flameState.text = "Small flame";
  break;
  
    case 2:
   flameState.text = "bigger flame";
  break;

    case 3:
   flameState.text = "Biggest Flame";
  break;
 }
}

refreshData();
setInterval(refreshData, 1000);
