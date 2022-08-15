// returns the type of id needed
function $(elid) {
    return document.getElementById(elid);
}
  
// curser stylewhen window is loaded 
var cursor;
window.onload = init;

function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

function output(txt) {
  return txt.replace(/\n/g, '');
}

function typeIt(from, e) {
  e = e || window.event;
  var w = $("typer");
  var tw = from.value;
  w.innerHTML = output(tw);
}

function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keyCode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

// function alert(txt) {
//   console.log(txt);
// }