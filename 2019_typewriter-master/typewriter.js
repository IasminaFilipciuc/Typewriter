"use strict";

var i = 0,
  text;
var text = "I am built from every mistake I ever made.";

function typing() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 200);
  }
}
typing();
