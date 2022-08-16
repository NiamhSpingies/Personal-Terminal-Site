
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