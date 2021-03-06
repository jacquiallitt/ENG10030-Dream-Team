// The CameraVideoPageController is a class that controls the camera 
// video page.  This class provides a some useful methods you will
// need to call:
//     cameraVideoPage.displayMessage(message, timeout):
//         Causes a short message string to be displayed on the
//         page for a brief period.  Useful for showing quick
//         notifications to the user.  message is a plain string.
//         timeout is option and denotes the length of time in msec
//         to show the message for.
//     cameraVideoPage.setHeadsUpDisplayHTML(html):
//         This will set or update the heads-up-display with the
//         text given in the html argument.  Usually this should 
//         just be a string with text and line breaks (<br />).

// Initialise the camera video page and callback to our 
// cameraVideoPageInitialised() function when ready.
var cameraVideoPage = new CameraVideoPageController(
        cameraVideoPageInitialised);

// You may need to create variables to store state.
    
// This function will be called when the camera video page
// is intialised and ready to be used.
function cameraVideoPageInitialised()
{
    function handleOrientation(event)
    {
            var absolute = event.absolute;
            var alpha = event.alpha;
            var beta = event.beta;
            var gamma = event. gamma;
    }// Step 1: Check for and intialise deviceMotion
    cameraVideoPage.setHeadsUpDisplayHTML(absolute);
    cameraVideoPage.setHeadsUpDisplayHTML(alpha);
    cameraVideoPage.setHeadsUpDisplayHTML(beta);
    cameraVideoPage.setHeadsUpDisplayHTML(gamma);
        
}
   
// This function is called by a button to set the height of phone from the
// ground, in metres.
function setCameraHeightValue()
{
    // Step 3: Set camera height
    // check if input is a number and is positive
    // display on screen using the displayMessage method
    var cameraHeight = prompt('Input estimated camera height from ground in metres');
if (false === isNaN(cameraHeight)){
while (cameraHeight < 0)
{
        cameraHeight= Number(prompt('Invalid Input. Please enter positive numbers'));
        cameraVideoPage.displayMessage("'Camera height: ' + cameraHeight",4000);
}   
}
else 
{
       while (true===isNaN(cameraHeight))
       {
        cameraHeight = prompt('Invalid input. Please input estimated camera height from ground in metres');
        cameraVideoPage.displayMessage("'Camera height: ' + cameraHeight",4000);
}
}
}
// This function is called by a button to set the angle to the base of
// the object being measured.  It uses the current smoothed tilt angle.
function setBaseTiltAngle()
{
    // Step 4: Record tilt angle 
    // display on screen using the displayMessage method
}

// This function is called by a button to set the angle to the apex of
// the object being measured.  It uses the current smoothed tilt angle.
function setApexTiltAngle()
{
    displayMessage(firstName) 
{
    alert("Hello " + firstName + ", hope you like JavaScript functions!")
}// Step 4: Record tilt angle 
    // display on screen using the displayMessage method
}

// You may need to write several other functions.
