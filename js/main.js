
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");


var chl = 0;
var pw = false;
let pwd = false;
var commandHistory = [];


setTimeout(function() {
  loopLines(banner, "banner", 80);
  textarea.focus();
}, 100);


window.addEventListener("keyup", enterKey);
textarea.value = "";
command.innerHTML = textarea.value;


/**
 * 
 * @param {*} e 
 * Running terminal update : commands added to history
 * 
 */
function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (e.keyCode == 13) {
    commandHistory.push("  > "+command.innerHTML);
    chl = commandHistory.length;
    addLine("visitor@ns_terminal:~$" + command.innerHTML, "no-animation", 0);
    commander(command.innerHTML.toLowerCase());
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

function commander(cmd) {
    switch (cmd.toLowerCase()){
        case'help':
        loopLines(help, "color2", 80);
          help;
          break;
        case 'about':
          loopLines(about, "color2 ", 80);
          about;
          break;
        case 'git':
          loopLines(gitbio, "color2 ", 80);
          addLine("> Opening Git...","color2 ", 200);
          newTab(github);
          break;
        case 'email':
          addLine("> Opening email...", "color2 ", 0);
          newTab(email);
          break;
        case "history":
          loopLines(commandHistory, "color2 ", 80);
          break;
        case '-cv':
          addLine("> Downloading Niamh Spingies CV...", "color2 ", 0);
          downloadfile();
          break;
        case "clear":
        setTimeout(function() {
          loopLines(banner, "", 80);
          terminal.innerHTML = '<a id="before"></a>';
          before = document.getElementById("before");
        }, 1);
        break;
        default:
          loopLines(error,"color2 margin", 100);
          break;
    }
}


function newTab(link) {
    setTimeout(function() {
      window.open(link, "_blank");
    }, 1500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
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


function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}


function downloadfile(){
  var save = document.createElement('cv');
  save.href ='/home/wtc/Personal-Terminal-Site/niamhspingies.pdf';
  save.target = '_blank';
  var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
  save.download = fileName || filename;
}
