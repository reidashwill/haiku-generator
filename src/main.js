import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Haiku } from "./../src/haiku.js";

// Tha Bizz









// UI Logic

$(document).ready(function(){
  $("#input").submit(function(event) {
    event.preventDefault();
    let line1 = $("input#inputLine1").val();
    let line2 = $("input#inputLine2").val();
    let line3 = $("input#inputLine3").val();
    let mainHaiku = new Haiku(line1, line2, line3);
    mainHaiku.stringBreaker();
    mainHaiku.solver();
    $("#result").text();
  });
});