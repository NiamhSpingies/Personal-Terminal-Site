window.onload = displayBanner;

var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var chl = 0;


window.addEventListener("keyup", keyManager);
textarea.value = "";
command.innerHTML = textarea.value;

/**
 * 
 * @param {*} e 
 * Running terminal update : key interaction
 * 
 */
function keyManager(e) {
  if (e.keyCode == 8) {
    document.location.delete(true);
  }
  if (e.keyCode == 13) {
    commandHistory.push(command.innerHTML);
    chl = commandHistory.length;
    addLine("visitor@ns_terminal:~$" + command.innerHTML,'no-animation', 0);
    commands(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }
  if (e.keyCode == 38 && chl != 0) {
    chl -= 1;
    textarea.value = commandHistory[chl];
    command.innerHTML = textarea.value;
  }
  if (e.keyCode == 40 && chl != commandHistory.length) {
    chl += 1;
    if (commandHistory[chl] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commandHistory[chl];
    }
    command.innerHTML = textarea.value;
  }
}

/**
 * Command usage
 * @param {*} e 
 * Running terminal update : commands added to history
 * make more flags and sub command
 */

function commands(cmd) {
  switch (cmd.toLowerCase()){
    case'--help':
    loopLines(help, 80);
      break;
    case 'stat -ns':
      loopLines(about,80);
      break;
    case '--gitk':
      loopLines(gitbio, 80);
      addLine("Opening Git..",'error',200);
      newTab('https://github.com/NiamhSpingies');
      break;
    case 'mail -ns':
      addLine("Opening email..", 'error', 80);
      newTab('mailto:niamhspingies@gmail.com');
      break;
    case 'history':
      loopLines(commandHistory,'content',80);
      break;
    case 'cat -cv':
      addLine("Opening Niamh Spingies resume..",'error', 80);
      newTab('https://www.linkedin.com/in/niamh-spingies/');
      download('media/niamhspingies.pdf');
      break;
    case 'clear':
      setTimeout(function() {
        displayBanner();
        getElement("terminal").innerHTML = '<a id="before"></a>';
        getElement("before");
      }, 1);
      break;
    case'--dark':
      loopLines(theme, 0);
      addLine("DarkTheme {status : active} ",'error', 0);
      themeHandler("");
      break;
    case'--foam':
      addLine("SeaFoamTheme {status : active} ",'error', 0);
      themeHandler("foam");
      break;
    default:
      loopLines(error, 100);
      break;
  }
}

/*
* Opening a new tab on new page
*/
function newTab(link) {
    setTimeout(function() {
      window.open(link, "_blank");
    }, 1300);
}

/*
* Adding a new line to window
*/
function addLine(text,style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else { 
      // var style = "primary";
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;
    before.parentNode.insertBefore(next, before);
    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

/*
* Looping through lines in document or element
* using addline
*/
function loopLines(name,style,time) {
  name.forEach(function(item, index) {
    addLine(item, style,index * time);
  });
}

/*
* Opening a new tab on to facilitate downloads
*/
function download(file){
  window.open(file);
}

/*
* Displaying header
*/
function displayBanner(){
  setTimeout(function() {
    loopLines(banner, 0);
    textarea.focus();
  }, 100);
}
/*
* getting ID values 
*/
function getElement(element){
  var value = document.getElementById(element)
  return value;
}
