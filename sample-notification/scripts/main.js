document.addEventListener("deviceready", onDeviceReady, false);  
             
function id(element) {
	return document.getElementById(element);
}
             
function onDeviceReady() {
	id("alertButton").addEventListener("click", showAlert);
	id("confirmButton").addEventListener("click", showConfirm);
	id("beepButton").addEventListener("click", playBeep);
	id("vibrateButton").addEventListener("click", vibrate);
}
         
var alertCount = 0;
             
//
// alert dialog dismissed 
function alertDismissed() {
	// Increment the alert count, just for demonstration purposes.
	alertCount++;
}  
//
// process the confirmation dialog result 
//
function onConfirm(button) {
	if (button === 1) {
		// If you clicked Reset, do the work:
		alertCount = 0;
	}
}
 
//
// Show a custom confirmation dialog  
//  
function showConfirm() {
	// Reset the alert count, on demand.
	navigator.notification.confirm('Reset the alert count?', 
								   onConfirm, 
								   'Reset alert', 
								   'Reset,Cancel'
	);  
}
                   
//
// Show a custom alert  
//
function showAlert() {
	// Simply display the alertCount value.
	navigator.notification.alert('Alert #' + alertCount,
								 alertDismissed,
								 'Count Alerts', 
								 'Done'     
	); 
}  
//
// Beep two times (except on iPhone) 
//  
function playBeep() {
	// On the iPhone, this code will only have an effect if
	// you place a file named beep.wav in the root of the project.
	// The beep sound can be at most 30 seconds long.
	// The iPhone disregards the beep count, so will only beep once.
	// Android phones play the default Notification ringtone.
	navigator.notification.beep(2);  
}
 
//
// Vibrate for 3 seconds  
//  
function vibrate() {
	// Note that iPhone ignores the duration parameter and vibrates for
	// a pre-determined amount of time.
	navigator.notification.vibrate(3000);
} 