function tildaMonitor(event) {
  var keycode= event.keyCode;
  if ( keycode == 13 ) {
    runCommand();
  }
}

function runCommand() {
    var output = document.getElementById('output');
    var command = document.getElementById('command');
    output.innerHTML = escapeHTML(command.value) + "<br/>" + output.innerHTML;
    command.value= '';
}

function tildaPressed() {
  var keycode= event.keyCode;
  var tilda = document.getElementById('tilda');
  if ( keycode == 187 ) {
    switchTilda();
  }
}
function switchTilda() {
  var tilda = document.getElementById('tilda');
  if (tilda.className=="hidden") {
    tilda.className="visible";
    document.getElementById('command').focus();
  } else {
    tilda.className="hidden";
  }
}

function escapeHTML(text) {                                        
  return(                                                                 
  text.replace(/&/g,'&amp;').                                         
    replace(/>/g,'&gt;').                                           
    replace(/</g,'&lt;').                                           
    replace(/"/g,'&quot;')                                         
  ); 
}
 
             