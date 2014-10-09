/*  This program will capture your screen size,
    but as soon as you make it smaller,
    it will start to demand attention
    like an insecure partner.                   */

if (window.outerHeight && window.outerHeight==screen.availHeight) {
    var height = window.outerHeight;
    var width = window.outerWidth;
} else {
    alert("Please maximize screen and refresh page.");
    stop();
}

function smallerBrowser() {
    if (width > window.outerWidth && height > window.outerHeight) {
        
        // Change header
        var newHead = "Wait, where are you going?";
        document.getElementById("mainHead").innerHTML = newHead;
    
        // Change background color
        document.body.style.backgroundColor="#FF8F8B";
    
        // Add video
        var video = "<iframe width=\"640\" height=\"360\" src=\"http://www.youtube.com/embed/ZhaHLoK3CF4?rel=0&start=107&end=122&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>";
        document.getElementById("placeVideo").innerHTML = video;
    
    } else {
        
        // Reload page
        window.location.reload();
    
    }
}