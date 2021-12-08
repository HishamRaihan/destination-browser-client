// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events');
const destinationEvents = require('./destinations/events');
$(() => {
	// your JS code goes here
	authEvents.addHandlers();

	$('#destinations-index').on('click', destinationEvents.onIndexDestinations);
	$('#destinations-show').on('submit', destinationEvents.onShowDestination);
	$('#destinations-create').on('submit', destinationEvents.onCreateDestination);
	$('#delete-destination').on('submit', destinationEvents.onDestroyDestination);
	$('#destinations-display').on('click','.destinations-destroy-dynamic',destinationEvents.onDynamicDestroyDestination	);
	$('#destinations-display').on('submit','.destinations-update-dynamic',destinationEvents.onDynamicUpdateDestination);
	
});