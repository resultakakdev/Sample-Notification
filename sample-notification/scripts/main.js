document.addEventListener("deviceready", onDeviceReady, false);  
             
function id(element) {
	return document.getElementById(element);
}
             
function onDeviceReady() {
	notificationApp = new notificationApp();
    notificationApp.run();
}

function notificationApp(){
}

notificationApp.prototype={
    alertCount:0,
    run:function(){
        var that=this;
        id("alertButton").addEventListener("click", that._showAlert);
	    id("confirmButton").addEventListener("click", that._showConfirm);
	    id("beepButton").addEventListener("click", that._playBeep);
	    id("vibrateButton").addEventListener("click", that._vibrate);
    },
    
    _showAlert:function () {
	    navigator.notification.alert('Alert #' + notificationApp.alertCount,
	    							 notificationApp._alertDismissed,
	    							 'Count Alerts', 
	    							 'Done'     
	    ); 
    },
    
    _alertDismissed:function(){
        notificationApp.alertCount++;
    },
    
    _showConfirm:function(){
    	navigator.notification.confirm('Reset the alert count?', 
    								   notificationApp._onConfirm, 
    								   'Reset alert', 
    								   'Reset,Cancel'
    	);  
    },
    
    _onConfirm:function(button) {
    	if (button === 1) {
    		notificationApp.alertCount = 0;
    	}
    },
    
    _playBeep:function() {
    	// On the iPhone, this code will only have an effect if
    	// you place a file named beep.wav in the root of the project.
    	// The beep sound can be at most 30 seconds long.
    	// The iPhone disregards the beep count, so will only beep once.
    	// Android phones play the default Notification ringtone.
    	navigator.notification.beep(2);  
    },
    
    _vibrate:function() {
    	// Note that iPhone ignores the duration parameter and vibrates for
    	// a pre-determined amount of time.
    	navigator.notification.vibrate(3000);
    } 
}