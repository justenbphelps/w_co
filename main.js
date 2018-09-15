
$(window).ready(function(){

    var OSName = "Unknown OS";
    // Desktop OS
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
    // Mobile OS
    if (navigator.appVersion.indexOf("iOS") != -1) OSName = "iOS";
    if (navigator.appVersion.indexOf("Android") != -1) OSName = "Android";

    console.log('Your OS: ' + OSName);
    setTimeout(function() {
        if (OSName == "iOS" || OSName == "MacOS") {
            location.assign("https://itunes.apple.com/us/app/wheels-ride-in-style/id1436122530?ls=1&mt=8");
        } else if (OSName == "Android" || OSName == "Windows") {
            location.assign("https://play.google.com/store/apps/details?id=com.getwheelsapp.wheels")
        }
    }, 2500);
 
})


