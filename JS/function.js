function mode() {
    
    var btn1 = document.getElementById('btn').innerHTML;
    
    if (btn1 == "Dark Mode") {
        document.getElementById('btn').innerHTML = "Light Mode";
        document.querySelector('html').style = "background: #bbbbbb;";
    } else {
        document.getElementById('btn').innerHTML = "Dark Mode";
        document.querySelector('html').style = "background: #fafafa;";
    }
    
}