/*
* Really simple script to loop through images infinitely.
* How to use it:
*   - Declare a div and list all images that you want to show in a img Element.
*   - Make this div with an id of "looperImages" and apply style display: none to hide these images.
*   - Make a img element with an id of "loopImage" and set it's src to the first image that you want to show.
*   - Call the startLooper() function.
*
* Nicolas Lengyel
*/

// Configuration variables
var gImageElementToLoop = "loopImage";
var gImageDiv = "looperImages";
var gLoopTime = 5000;


var gImageElementID;
var gImages = [];
var gLoopIntervalID;
var gLoopStarted = false;

function showNextImage() {
    var imageElement = document.getElementById(gImageElementToLoop);
    var currentIndex = gImages.indexOf(imageElement.src);
    if (currentIndex + 1 >= gImages.length) {
        imageElement.src = gImages[0];
    } else {
        imageElement.src = gImages[++currentIndex];
    }
}

function startLooper() {
    if (!gLoopStarted) {
        loadImages();
        gLoopIntervalID = setInterval(function () { showNextImage(); }, gLoopTime);
        gLoopStarted = true;
    }
}

function stopLooper() {
    clearInterval(gLoopIntervalID);
    gLoopStarted = false;
}

function loadImages() {
    gImages = [];
    var childNodes = document.getElementById(gImageDiv).childNodes;
    for (index in childNodes) {
        if (childNodes[index] instanceof HTMLImageElement) {
            gImages.push(childNodes[index].src);
        }
    }
}