import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
/*
clock.granularity = "minutes";
*/
clock.granularity = "seconds";

// Get a handle on the <text> element
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

// List
const month_list = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const day_list = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let mon = month_list[today.getMonth()];
  let day = util.zeroPad(today.getDate());
  myLabel1.text = `${mon} ${day}`;
  
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel2.text = `${hours}:${mins}`;

  let secs = util.zeroPad(today.getSeconds());
  myLabel3.text = `${secs}`;

}