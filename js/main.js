
var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");
const isCommand = True;


var git = 0;
var pw = false;
let pwd = false;
var commands = [];


setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);


window.addEventListener("keyup", enterKey);
textarea.value = "";
command.innerHTML = textarea.value;


function enterKey(e) {
  // if (e.keyCode == 181) {
  //   document.location.reload(true);
  // }
  // if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine("ns_terminal:~$ " + command.innerHTML, "no-animation", 0);
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  // }
  // if (e.keyCode == 38 && git != 0) {
  //   git -= 1;
  //   textarea.value = commands[git];
  //   command.innerHTML = textarea.value;
  // }
  // if (e.keyCode == 40 && git != commands.length) {
  //   git += 1;
  //   if (commands[git] === undefined) {
  //     textarea.value = "";
  //   } else {
  //     textarea.value = commands[git];
  //   }
  //   command.innerHTML = textarea.value;
  // }
}

function commander(cmd) {
    switch (cmd.toLowerCase()){
        case'help':
        loopLines(help, "color2 margin", 80);
            help;
            break;
        case 'about':
            loopLines(about, "color2 margin", 80);
            about;
            break;
        case 'git':
            addLine("Opening Git...", "color2", 0);
            newTab(github);
            break;
        case 'email':
            addLine("Opening email...", "color2", 0);
            newTab(email);
            break;
        case '-cv':
            addLine("Downloading Niamh Spingies CV...", "color2", 0);
            downloading();
            break;
        case "clear":
        setTimeout(function() {
          terminal.innerHTML = '<a id="before"></a>';
          before = document.getElementById("before");
        }, 1);
        default:
          addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
          break;
    }
}


function newTab(link) {
    setTimeout(function() {
      window.open(link, "_blank");
    }, 500);
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


function downloading(){
  const anchor = document.createElement("cv");
  anchor.href = "NiamhSpingies.pdf";
  anchor.download = "NiamhSpingies.pdf";
  document.body.appendChild(anchor);
  anchor.enterKeyHint  = 'enter';
  document.body.removeChild(anchor);
} 