"use strict";

function myFunction() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.getElementById("myBtn").addEventListener("click", function () {
  var textEl = document.getElementById("my-txt");
  var d = document.getElementById("block-msg");
  var dataEl = document.getElementById("block-msg");
  var today = new Date();
  var msgDate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  d.innerHTML += "<div class =\"text-fans\">".concat(textEl.value, "</div><br>");
  dataEl.innerHTML += "<div class = \"date-msg\">".concat(msgDate, "</div><br><hr>");

  if (textEl.value == "") {
    alert("Please,write some message");
    dataEl.innerHTML = "";
  }

  textEl.value = "";
});