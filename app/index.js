import { Accelerometer } from "accelerometer";
import document from "document";
import { HeartRateSensor } from "heart-rate";

let accelData = document.getElementById("accel-data");
let hrmData = document.getElementById("hrm-data");

let accel = new Accelerometer();
let hrm = new HeartRateSensor();

accel.start();
hrm.start();

function refreshData() {
  let data = {
    accel: {
      x: accel.x ? accel.x.toFixed(1) : 0,
      y: accel.y ? accel.y.toFixed(1) : 0,
      z: accel.z ? accel.z.toFixed(1) : 0
    },
    hrm: {
      heartRate: hrm.heartRate ? hrm.heartRate : 0
    }
  };

  accelData.text = JSON.stringify(data.accel);
  hrmData.text = JSON.stringify(data.hrm);
}

refreshData();
setInterval(refreshData, 1000);
