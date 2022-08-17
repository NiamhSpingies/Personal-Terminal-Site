
function themeHandler(theme){
    /*  
    * This function is a theme selector
    * @param {*} theme
    */
    switch (theme) {
        case 'foam':
            document.getElementById('themes').href = './css/themes/foam.css';
            break;
        default:
            document.getElementById('themes').href = './css/themes/dark.css';
            break;
    }
}

function sparkling(){
    /*  
    * This function is called when the page is under the theme midnight.
    */
    var numStars = 50;
    var shapes = ['sparkle', 'star'];
    var sizes = ['','medium', 'small'];
    var animations = ['pulse', 'pulse-1', 'pulse-2', 'pulse-3'];
    // Random generating elements
    for(var i = 0; i < numStars; i++){
    // Random styles
        var classes = shapes[rand(0,shapes.length)] + " ";
        classes += sizes[rand(0,sizes.length)] + " ";
        classes += styles[rand(0,styles.length)] + " ";
        classes += animations[rand(0,animations.length)];
        
    // Random position
        var style = "top:"+rand(0,100)+"%;left:"+rand(0,100)+"%;";
    
        $('terminalContainer').append('<div class="'+classes+'" style="'+style+'"></div>');
    }
}

function rand(min, max){
  return Math.floor((Math.random() * max) + min);
}