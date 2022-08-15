
/**
 * visitor@ns_terminal:~$theme
    >dark           black and cyan
    midnight       deep blue and cyan
    selector for a list ul
    create a new curser 
    then have th curser on the right by 5 px
    the 
 */


function themeHandler(theme){
    switch (theme) {
        case 'midnightTheme':
            document.getElementById('themes').href = './css/themes/midnight.css';
            break;
        default:
            document.getElementById('themes').href = './css/themes/dark.css';
            break;
    }
}

